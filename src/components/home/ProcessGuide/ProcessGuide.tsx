import { processGuideContent } from "../../../data/home/processGuide";
import ProcessCard from "./ProcessCard";
import ProcessStep from "./ProcessStep";

function ProcessGuide() {
  return (
    <section
      className="scroll-mt-scroll-section lg:scroll-mt-scroll-section-desktop flex flex-col gap-3"
      id="pruvod-procesem"
      aria-labelledby="guide-title"
    >
      <h2
        className="tracking-heading m-0 text-2xl! font-medium"
        id="guide-title"
      >
        {processGuideContent.title}
      </h2>
      <div className="md:max-w-layout-guide w-full lg:max-w-none">
        {processGuideContent.steps.map((step, index) => (
          <ProcessStep
            number={step.number}
            title={step.title}
            last={index === processGuideContent.steps.length - 1}
            key={step.number}
          >
            <p>{step.description}</p>
            {step.cards && (
              <div className="grid grid-cols-1 gap-5 pt-4 sm:grid-cols-2 sm:gap-6">
                {step.cards.map((card) => (
                  <ProcessCard
                    icon={card.icon}
                    title={card.title}
                    action={card.action}
                    href={card.href}
                    key={card.title}
                  >
                    {card.description}
                  </ProcessCard>
                ))}
              </div>
            )}
          </ProcessStep>
        ))}
      </div>
    </section>
  );
}

export default ProcessGuide;
