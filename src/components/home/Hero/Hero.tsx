import { brandAsset } from "../../../lib/assets";
import { heroContent } from "../../../data/home/hero";

function Hero() {
  return (
    <section className="rounded-hero shadow-hero sm:min-h-hero-height relative flex w-full items-center overflow-hidden bg-linear-[26.583deg,var(--color-brand-bright)_0.516%,var(--color-brand-navy)_62.586%] text-white">
      <img
        className="h-hero-art-height w-hero-art-width absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 translate-y-[-32%] opacity-55"
        src={brandAsset("imgBannerBackground.svg")}
        alt=""
      />
      <div className="px-hero-padding-x pb-hero-padding-bottom relative z-10 py-6 sm:px-8">
        <h1 className="tracking-heading mb-1 text-2xl! font-medium">
          {heroContent.title}
        </h1>
        <p className="max-w-layout-wide tracking-body-large m-0 text-lg">
          {heroContent.description}
        </p>
      </div>
    </section>
  );
}

export default Hero;
