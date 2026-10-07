export const GITHUB_BASE =
  "https://github.com/datagov-cz/ismd-org/issues/new";

export const headerContent = {
  homeLabel: "ISMD – úvodní stránka",
  name: "Informační systém pro modelování dat",
  mobileActions: [{ icon: "list", label: "Otevřít menu" }],
  feedback: {
    label: "Zpětná vazba",
    icon: "chat-dots",
    items: [
      {
        icon: "bug",
        label: "Nahlásit chybu",
        href: `${GITHUB_BASE}?template=bug_report.yml`,
        external: true,
      },
      {
        icon: "flag",
        label: "Navrhnout vylepšení",
        href: `${GITHUB_BASE}?template=feature_request.yml`,
        external: true,
      },
    ],
  },
};
