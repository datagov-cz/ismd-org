import { headerContent } from "../../../data/layout/header";
import { brandAsset } from "../../../lib/assets";
import FeedbackMenu from "./FeedbackMenu";

function Header() {
  return (
    <header className="sticky top-0 z-50 h-17.25 bg-brand px-4 text-white sm:py-3 lg:px-8">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between">
        <a
          className="flex min-w-0 flex-row items-center gap-3 font-bold text-white visited:text-white! no-underline! sm:gap-5"
          href="/"
          aria-label={headerContent.homeLabel}
        >
          <img className="size-12" src={brandAsset("imgLogoLev.svg")} alt="" />
          <span className="max-w-48 text-sm leading-tight no-underline! text-white! sm:max-w-none sm:text-xl">
            {headerContent.name}
          </span>
        </a>

        <nav className="flex items-center" aria-label="Rychlé akce">
          <FeedbackMenu />
        </nav>
      </div>
    </header>
  );
}

export default Header;
