import {
  GovButton,
  GovDropdown,
  GovIcon,
  GovTooltip,
} from "@gov-design-system-ce/react";
import { headerContent } from "../../../data/layout/header";

function FeedbackMenu() {
  const { feedback } = headerContent;

  return (
    <GovTooltip placement="left">
      <GovTooltip.Trigger asChild>
        <span className="inline-flex">
          <GovDropdown
            className="feedback-menu w-full [&_.gov-dropdown__list]:w-fit!"
            position="right"
            type="base"
            color="primary"
            id="test"
            size="s"
            aria-label={feedback.label}
            iconStart={
              <GovIcon
                type="components"
                name={feedback.icon}
                size="s"
                color="white"
              />
            }
          >
            {feedback.items.map((item) => (
              <GovButton
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                expanded={true}
                type="base"
                color="neutral"
                iconStart={
                  <GovIcon type="components" name={item.icon} size="l" />
                }
                className="[&_a]:justify-start!"
              >
                {item.label}
              </GovButton>
            ))}
          </GovDropdown>
        </span>
      </GovTooltip.Trigger>
      <GovTooltip.Content size="s" color="neutral">
        {feedback.label}
      </GovTooltip.Content>
    </GovTooltip>
  );
}

export default FeedbackMenu;
