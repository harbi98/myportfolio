"use client";
import { useRef } from "react";

// Accessible project-details dialog built on the native <dialog> element:
// focus is trapped, Esc closes it, and clicking the backdrop closes it.
export default function Modal({ title, eyebrow, children, buttonText = "Details" }) {
  const ref = useRef(null);

  const close = () => ref.current?.close();

  return (
    <>
      <button type="button" className="btn btn-ghost" onClick={() => ref.current?.showModal()}>
        {buttonText}
        <span aria-hidden="true">↗</span>
      </button>

      <dialog
        ref={ref}
        data-lenis-prevent // let the dialog scroll natively instead of through Lenis
        aria-labelledby={`${title}-title`}
        onClick={(e) => e.target === ref.current && close()}
        className="m-auto w-[min(40rem,calc(100vw-2rem))] border border-line bg-card p-0 text-fg shadow-2xl"
      >
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <div className="mb-6 flex items-start justify-between gap-6">
            <div>
              {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
              <h3 id={`${title}-title`} className="font-mono text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h3>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="shrink-0 border border-line px-2.5 py-1 font-mono text-sm text-muted hover:border-fg hover:text-fg"
            >
              Esc
            </button>
          </div>
          {children}
        </div>
      </dialog>
    </>
  );
}
