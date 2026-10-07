import { GovCard, GovIcon } from "@gov-design-system-ce/react";
import { contactContent } from "../../../data/home/contact";

function Contact() {
  return (
    <section className="scroll-mt-scroll-section lg:scroll-mt-scroll-section-desktop flex flex-col gap-2 lg:gap-3" id="kontakt">
      <h2 className="tracking-heading m-0 text-2xl! font-medium">
        {contactContent.title}
      </h2>
      <div className="grid grid-cols-1 gap-5 pl-2 sm:grid-cols-2 sm:gap-4 sm:pl-4">
        {contactContent.cards.map((card) => (
          <GovCard className="min-h-34.75" key={card.title}>
            <div className="flex flex-col gap-1.5">
              <h5 className="pb-2 text-brand-dark">{card.title}</h5>
              {card.links?.map((link) => (
                <a
                  className="flex items-center gap-3 text-brand-dark underline"
                  href={link.href}
                  key={link.href}
                >
                  <GovIcon
                    type="components"
                    name={link.icon}
                    size="s"
                    color="primary"
                  />
                  {link.label}
                </a>
              ))}
              {card.lines && (
                <p className="m-0">
                  {card.lines.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </GovCard>
        ))}
      </div>
    </section>
  );
}

export default Contact;
