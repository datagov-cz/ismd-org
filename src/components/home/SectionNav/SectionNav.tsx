import { useState } from "react";
import { sectionLinks } from "../../../data/home/sectionNav";
import clsx from "clsx";

function SectionNav() {
  const [activeHash, setActiveHash] = useState("#pruvod-procesem");

  return (
    <aside className="sticky top-17.25 z-40 w-full self-start bg-canvas lg:top-23.25">
      <nav
        className="scrollbar-hidden flex gap-4 overflow-x-auto border-b border-border-subtle lg:block lg:border-b-0"
        aria-label="Obsah stránky"
      >
        {sectionLinks.map(([label, href]) => {
          const isActive = activeHash === href;

          return (
            <a
              className={clsx(
                "border-active-bottom lg:border-active-left flex h-12 shrink-0 items-center px-2 transition-colors lg:block lg:h-auto lg:border-b lg:py-3 no-underline!",
                isActive
                  ? "border-brand bg-brand-subtle font-bold text-brand-dark"
                  : "border-b-transparent text-ink hover:bg-white/50 hover:text-brand-dark lg:border-b-border-subtle lg:border-l-transparent",
              )}
              href={href}
              aria-current={isActive ? "location" : undefined}
              onClick={() => setActiveHash(href)}
              key={label}
            >
              {label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

export default SectionNav;
