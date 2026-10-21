import clsx from "clsx";
import type { ReactNode } from "react";

type ProcessStepProps = {
  number: string;
  title: string;
  children: ReactNode;
  last?: boolean;
};

function ProcessStep({
  number,
  title,
  children,
  last = false,
}: ProcessStepProps) {
  return (
    <div className="grid grid-cols-process-step gap-3">
      <div
        className={clsx(
          "relative flex justify-center",
          !last &&
            "after:absolute after:bottom-0 after:left-3.75 after:top-8 after:w-0.5 after:bg-brand-subtle after:content-['']",
        )}
        aria-hidden="true"
      >
        <span className="relative z-10 grid size-8 place-items-center rounded-full bg-brand-subtle font-bold text-brand">
          {number}
        </span>
      </div>
      <div className="pb-4.5 [&>p]:m-0 [&>p]:text-sm [&>p]:text-muted">
        <h4 className="mb-0.5 text-base! font-bold text-brand">{title}</h4>
        {children}
      </div>
    </div>
  );
}

export default ProcessStep;
