import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="mt-10 text-4xl font-bold text-slate-900" {...props} />
    ),
    h2: (props) => (
      <h2 className="mt-10 text-3xl font-bold text-slate-900" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-8 text-2xl font-bold text-slate-900" {...props} />
    ),
    p: (props) => (
      <p className="mt-5 text-lg leading-8 text-slate-600" {...props} />
    ),
    ul: (props) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600" {...props} />
    ),
    ol: (props) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-lg leading-8 text-slate-600" {...props} />
    ),
    a: ({ href, ...props }) => {
      const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          className="text-violet-600 underline hover:text-violet-700"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...props}
        />
      );
    },
    strong: (props) => <strong className="font-semibold text-slate-900" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="mt-6 border-l-4 border-violet-300 pl-6 text-lg italic text-slate-500"
        {...props}
      />
    ),
    code: (props) => (
      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-base text-violet-700" {...props} />
    ),
    ...components,
  };
}
