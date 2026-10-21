import type { ReactNode } from "react";
import { GovButton, GovCard, GovIcon } from "@gov-design-system-ce/react";

type ProcessCardProps = {
  icon: string;
  title: string;
  children: ReactNode;
  action: string;
  href: string;
};

function ProcessCard({
  icon,
  title,
  children,
  action,
  href,
}: ProcessCardProps) {
  return (
    <GovCard
      className="h-full"
      direction="horizontal"
      icon={<GovIcon type="complex" name={icon} size="4xl" color="primary" />}
    >
      <div className="flex flex-col gap-3 h-full py-1">
        <h4>{title}</h4>
        <p className="m-0 text-sm! text-muted">{children}</p>
        <GovButton
          type="outlined"
          color="primary"
          size="s"
          href={href}
          className="mt-auto!"
        >
          {action}
        </GovButton>
      </div>
    </GovCard>
  );
}

export default ProcessCard;
