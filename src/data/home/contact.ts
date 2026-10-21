export type ContactLink = {
  icon: string;
  label: string;
  href: string;
};

export type ContactCard = {
  title: string;
  links?: ContactLink[];
  lines?: string[];
};

export const contactContent: {
  title: string;
  cards: ContactCard[];
} = {
  title: "Kontakt",
  cards: [
    {
      title: "Kontakty",
      links: [
        {
          icon: "envelope",
          label: "info@urad.cz",
          href: "mailto:info@urad.cz",
        },
        {
          icon: "telephone",
          label: "+420 987 654 321",
          href: "tel:+420987654321",
        },
        {
          icon: "globe2",
          label: "www.urad.cz",
          href: "https://www.urad.cz",
        },
      ],
    },
    {
      title: "Datová schránka",
      lines: ["XYZ98765"],
    },
    {
      title: "Úřední hodiny",
      lines: ["Po, St: 8:00 - 12:00", "Pá: 13:00 - 15:00"],
    },
    {
      title: "Adresa",
      lines: ["Název úřadu", "Ulice 12/3456", "123 45 Praha - Část"],
    },
  ],
};
