import Image from "next/image";
import profilePic from "./images/me.jpg";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import RevealText from "./components/RevealText";
import RevealCards from "./components/RevealCards";
import projects from "./data/projects";
import stack from "./data/stack";

const contact = {
  email: "jimenezjanharvey@gmail.com",
  phone: "+639667594716",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jan-harvey-jimenez-910150104/" },
  ],
};

function SectionHeading({ index, title }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-line pb-4 md:mb-14">
      <span className="font-mono text-sm text-muted">{index}</span>
      <h2 className="font-mono text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const { title, summary, year, overview, features, tech, role, links = [] } = project;

  return (
    <article className="group flex flex-col border border-line bg-card p-6 transition-colors hover:border-fg md:p-8">
      <div className="mb-6 flex items-center justify-between font-mono text-xs text-muted">
        <span>{String(index + 1).padStart(2, "0")}</span>
        {year && <span className="uppercase tracking-widest">{year}</span>}
      </div>

      <h3 className="font-mono text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {tech.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-8">
        <Modal title={title} eyebrow={year}>
          <div className="space-y-6 leading-relaxed">
            <section>
              <p className="eyebrow mb-2">Overview</p>
              <p>{overview}</p>
            </section>
            {features?.length > 0 && (
              <section>
                <p className="eyebrow mb-2">Key features</p>
                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span aria-hidden="true" className="text-muted">
                        —
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <section>
              <p className="eyebrow mb-2">Tech</p>
              <ul className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </section>
            {role && (
              <section>
                <p className="eyebrow mb-2">My role</p>
                <p>{role}</p>
              </section>
            )}
          </div>
        </Modal>

        {links.map((l) =>
          l.href ? (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              {l.label}
            </a>
          ) : (
            <span key={l.label} className="btn btn-disabled" title="Source is private">
              {l.label}
            </span>
          )
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div id="top">
      <div aria-hidden="true" className="bg-grid" />
      <Nav />

      <main>
        {/* Hero */}
        <section>
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:px-10 md:py-28">
            <div className="animate-rise">
              <p className="font-mono text-muted">
                [Hello]<span className="ml-1 inline-block animate-blink">_</span>
              </p>
              <h1 className="mt-4 font-mono text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                I&apos;m Jan Harvey.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                A software developer from the Philippines, currently at Pandoblox, building custom
                CMS websites, headless frontends, and web and mobile apps that teams can actually
                maintain.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-solid">
                  View projects <span aria-hidden="true">→</span>
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-56 sm:w-72 md:w-full md:max-w-sm">
              <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 border border-fg" />
              <Image
                src={profilePic}
                alt="Portrait of Jan Harvey Jimenez"
                placeholder="blur"
                priority
                sizes="(min-width: 768px) 384px, 288px"
                className="relative aspect-square w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHeading index="01" title="About" />
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <dl className="space-y-4 font-mono text-sm">
              <div>
                <dt className="text-muted">Based in</dt>
                <dd>Philippines</dd>
              </div>
              <div>
                <dt className="text-muted">Currently</dt>
                <dd>Pandoblox</dd>
              </div>
              <div>
                <dt className="text-muted">Previously</dt>
                <dd>Mediaone PH</dd>
              </div>
              <div>
                <dt className="text-muted">Focus</dt>
                <dd>CMS, web &amp; mobile development</dd>
              </div>
              <div>
                <dt className="text-muted">Projects shipped</dt>
                <dd>{projects.length}+</dd>
              </div>
            </dl>
            <RevealText className="font-mono text-2xl leading-snug tracking-tight md:text-3xl">
              Hi, I&apos;m Jan Harvey Jimenez. I have a deep passion for working with a variety of
              technologies and thrive on taking on new challenges. Whether it&apos;s exploring new
              frameworks, solving complex problems, or building innovative solutions, I enjoy
              continuously learning and growing in the ever-evolving tech landscape.
            </RevealText>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
          <SectionHeading index="02" title="Tech Stack" />
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {stack.map(({ group, items }) => (
              <div key={group} className="bg-bg p-6">
                <p className="eyebrow mb-5">{group}</p>
                <ul className="space-y-4">
                  {items.map(({ name, logo }) => (
                    <li key={name} className="flex items-center gap-3">
                      {logo ? (
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white p-1.5 ring-1 ring-line">
                          <Image src={logo} alt="" className="max-h-full w-auto object-contain" />
                        </span>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="flex size-9 shrink-0 items-center justify-center rounded-md font-mono text-xs font-semibold ring-1 ring-line"
                        >
                          {name.slice(0, 2)}
                        </span>
                      )}
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
          <SectionHeading index="03" title="Projects" />
          <RevealCards className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </RevealCards>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <SectionHeading index="04" title="Contact" />
            <p className="max-w-xl text-lg text-muted">
              Feel free to reach out if you&apos;d like to collaborate or discuss a project.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-8 inline-block break-all font-mono text-2xl font-semibold tracking-tight underline decoration-line decoration-1 underline-offset-8 transition-colors hover:decoration-fg sm:text-4xl"
            >
              {contact.email}
            </a>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 font-mono text-sm">
              <a href={`tel:${contact.phone}`} className="text-muted hover:text-fg">
                {contact.phone}
              </a>
              {contact.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-fg">
                  {s.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 py-8 font-mono text-xs text-muted md:px-10">
          <span>© {new Date().getFullYear()} Jan Harvey Jimenez</span>
          <a href="#top" className="hover:text-fg">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
