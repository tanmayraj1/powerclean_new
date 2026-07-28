import { TransitionLink } from "@/components/layout/TransitionLink";

export default function NotFound() {
  return (
    <div className="px-3 pb-3 pt-[100px]">
      <div className="mx-auto flex min-h-[60vh] max-w-[1320px] flex-col items-center justify-center rounded-section bg-white p-[clamp(28px,4.5vw,60px)] text-center">
        <div className="mb-3 font-mono text-[13px] font-semibold tracking-[0.16em] text-green">
          404
        </div>
        <h1 className="mb-4 text-[clamp(30px,4vw,48px)] font-semibold leading-[1.1] tracking-[-0.02em] text-navy">
          This page washed away
        </h1>
        <p className="mb-7 max-w-[440px] text-[15px] leading-[1.6] text-muted">
          The page you are looking for doesn&apos;t exist or has moved. Head
          back to the homepage or explore our solutions.
        </p>
        <TransitionLink
          href="/"
          className="rounded-full bg-green-cta px-7 py-[13px] text-sm font-semibold text-white no-underline shadow-cta transition-colors hover:bg-green-cta-dark"
        >
          Back to Home
        </TransitionLink>
      </div>
    </div>
  );
}
