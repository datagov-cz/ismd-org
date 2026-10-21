import { GovAccordion, GovAccordionItem } from "@gov-design-system-ce/react";
import { faqContent } from "../../../data/home/faq";

function Faq() {
  return (
    <section className="scroll-mt-scroll-section lg:scroll-mt-scroll-section-desktop flex flex-col gap-0 lg:gap-3" id="faq">
      <h2 className="tracking-heading m-0 text-2xl! font-medium">
        {faqContent.title}
      </h2>
      <GovAccordion size="m">
        {faqContent.items.map((item, index) => (
          <GovAccordionItem
            identifier={`faq-${index + 1}`}
            label={item.question}
            open={item.open}
            key={item.question}
          >
            <p className="m-0 text-sm text-muted">{item.answer}</p>
          </GovAccordionItem>
        ))}
      </GovAccordion>
    </section>
  );
}

export default Faq;
