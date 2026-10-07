export type DirectoryItem = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export const directoryContent: {
  title: string;
  items: DirectoryItem[];
} = {
  title: "Rozcestník",
  items: [
    {
      icon: "info",
      title: "Popis dat",
      description:
        "Získání široké škály veřejných informací o subjektech obecného zájmu",
      href: "#uvod",
    },
    {
      icon: "info-list",
      title: "Hledání volných míst",
      description:
        "Nabídka pracovních pozic na českém i zahraničním trhu práce",
      href: "#uvod",
    },
    {
      icon: "portal",
      title: "Volební rok",
      description:
        "Aktuální informace o volbách v ČR i ve světě na jednom místě",
      href: "#uvod",
    },
  ],
};
