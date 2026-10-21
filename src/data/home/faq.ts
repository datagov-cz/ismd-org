export type FaqItem = {
  question: string;
  answer: string;
  open?: boolean;
};

const defaultAnswer =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const faqContent: {
  title: string;
  items: FaqItem[];
} = {
  title: "Často kladené dotazy",
  items: [
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      answer: defaultAnswer,
      open: true,
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: defaultAnswer,
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
      answer: defaultAnswer,
    },
    {
      question: "Incididunt ut labore et dolore magna aliqua?",
      answer: defaultAnswer,
    },
  ],
};
