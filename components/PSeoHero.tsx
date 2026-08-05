import type { ReactNode } from "react";
import UrlForm from "./UrlForm";
import FadeIn from "./FadeIn";

export default function PSeoHero({
  badge,
  title,
  subtitle,
  children,
}: {
  badge: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="absolute inset-0 -z-10 grid-texture" />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[140px]" />
        <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-cyan-400/15 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-sm font-medium text-violet-700">
              {badge}
            </span>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
              {title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              {subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-12">{children ?? <UrlForm />}</div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
