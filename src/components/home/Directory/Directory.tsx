import { GovIcon, GovTile } from "@gov-design-system-ce/react";
import { directoryContent } from "../../../data/home/directory";

function Directory() {
  return (
    <section className="scroll-mt-scroll-section lg:scroll-mt-scroll-section-desktop flex flex-col gap-4 md:gap-6 lg:gap-3" id="rozcestnik">
      <h2 className="tracking-heading m-0 text-2xl! font-medium">
        {directoryContent.title}
      </h2>
      <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
        {directoryContent.items.map((item) => (
          <GovTile
            className="border-b border-border-subtle"
            size="s"
            orientation="horizontal"
            href={item.href}
            icon={
              <GovIcon
                type="complex"
                name={item.icon}
                size="3xl"
                color="primary"
              />
            }
            title={<span>{item.title}</span>}
            key={item.title}
          >
            <span className="text-xs text-muted">{item.description}</span>
          </GovTile>
        ))}
      </div>
    </section>
  );
}

export default Directory;
