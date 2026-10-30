// Serves the static export in ./out at the site root, so `npm start`
// matches production.
import { createServer } from "node:http";
import { existsSync, statSync, createReadStream } from "node:fs";
import { join, extname, normalize } from "node:path";

const ROOT = join(process.cwd(), "out");
const PORT = Number(process.env.PORT) || 3000;

if (!existsSync(ROOT)) {
  console.error('No "out" folder found. Run `npm run build` first.');
  process.exit(1);
}

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

const resolveFile = (urlPath) => {
  const rel = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, "");
  const candidates = [join(ROOT, rel), join(ROOT, rel, "index.html"), join(ROOT, `${rel}.html`)];
  return candidates.find((f) => f.startsWith(ROOT) && existsSync(f) && statSync(f).isFile());
};

createServer((req, res) => {
  const { pathname } = new URL(req.url, "http://localhost");

  const file = resolveFile(pathname);
  if (!file) {
    res.writeHead(404, { "Content-Type": types[".html"] });
    const notFound = join(ROOT, "404.html");
    return existsSync(notFound) ? createReadStream(notFound).pipe(res) : res.end("Not found");
  }

  res.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
  createReadStream(file).pipe(res);
}).listen(PORT, () => {
  console.log(`Serving ./out at http://localhost:${PORT}/`);
});
