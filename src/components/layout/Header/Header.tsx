import { GovButton, GovIcon } from "@gov-design-system-ce/react";
import { headerContent } from "../../../data/layout/header";
import { brandAsset } from "../../../lib/assets";

function Header() {
  return (
    <header className="sticky top-0 z-50 h-17.25 items-center bg-brand px-4 text-white flex justify-between sm:py-3 lg:px-8">
      <a
        className="flex flex-row items-center gap-5 text-xl font-bold text-white visited:text-white! no-underline!"
        href="/"
        aria-label={headerContent.homeLabel}
      >
        <img className="size-12" src={brandAsset("imgLogoLev.svg")} alt="" />
        <span className="no-underline! text-white!">{headerContent.name}</span>
      </a>

      <nav
        className="flex h-10 items-center justify-self-end sm:hidden"
        aria-label="Mobilní navigace"
      >
        {headerContent.mobileActions.map(({ icon, label }) => (
          <GovButton
            className="w-13"
            type="base"
            color="primary"
            size="s"
            aria-label={label}
            iconStart={
              <GovIcon type="components" name={icon} size="s" color="white" />
            }
            key={icon}
          />
        ))}
      </nav>

      <nav
        className="hidden items-center gap-3 sm:flex"
        aria-label="Rychlé akce"
      >
        {headerContent.quickActions.map(({ icon, label }) => (
          <GovButton
            type="base"
            color="primary"
            size="s"
            aria-label={label}
            iconStart={
              <GovIcon type="components" name={icon} size="s" color="white" />
            }
            key={icon}
          />
        ))}
      </nav>
    </header>
  );
}

export default Header;
