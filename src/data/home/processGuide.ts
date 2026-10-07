export type ProcessCardData = {
  icon: string;
  title: string;
  description: string;
  action: string;
  href: string;
};

export type ProcessStepData = {
  number: string;
  title: string;
  description: string;
  cards?: ProcessCardData[];
};

export const processGuideContent: {
  title: string;
  steps: ProcessStepData[];
} = {
  title: "Průvod procesem",
  steps: [
    {
      number: "1",
      title: "Připravte si informace",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec ipsum massa, ullamcorper in, auctor et.",
    },
    {
      number: "2",
      title: "Zvolte způsob tvorby nebo validace",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      cards: [
        {
          icon: "doc-agreement",
          title: "Validátor",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In sem justo, commodo.",
          action: "Přejít do validátoru",
          href: "/validujeme",
        },
        {
          icon: "businessman",
          title: "Nástroj ISMD",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In sem justo, commodo ut, suscipit at…",
          action: "Otevřít nástroj ISMD",
          href: "/popisujeme",
        },
      ],
    },
    {
      number: "3",
      title: "Publikace dat",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec ipsum massa, ullamcorper in, auctor et.",
    },
  ],
};
