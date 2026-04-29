import Link from "next/link";

const defaultCta = {
  href: "/#contact",
  label: "Contact the Team",
};

type PageShellProps = {
  title: string;
  description: string;
  eyebrow?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function PageShell({
  title,
  description,
  eyebrow = "IMPACT Inc.",
  ctaHref = defaultCta.href,
  ctaLabel = defaultCta.label,
}: PageShellProps) {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-brand-black text-neutral-900 dark:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f4b9a33,transparent_55%)]"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-50 dark:from-brand-black to-transparent"></div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <div className="text-brand-tosca text-xs tracking-[0.3em] uppercase mb-4">{eyebrow}</div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">{title}</h1>
          <p className="text-neutral-600 dark:text-brand-gray text-sm md:text-lg max-w-2xl mx-auto mb-10">
            {description}
          </p>
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-tosca text-white font-semibold hover:bg-brand-darkTosca transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
