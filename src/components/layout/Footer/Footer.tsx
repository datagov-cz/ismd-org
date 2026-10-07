import { GovIcon } from "@gov-design-system-ce/react";
import { footerContent } from "../../../data/layout/footer";
import FooterLogos from "./FooterLogos";

function Footer() {
  return (
    <footer className="bg-brand-navy px-6 py-12 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-16 md:grid-cols-footer md:justify-between">
          <section className="flex flex-col items-start gap-3 [&_a]:text-footer-link!">
            <h2 className="mb-1 text-xl! font-medium">
              {footerContent.linksTitle}
            </h2>
            {footerContent.links.map((link) => (
              <a
                className="inline-flex items-center gap-2 text-sm underline"
                href={link.href}
                key={link.label}
              >
                {link.label}
                {link.external && (
                  <GovIcon
                    type="components"
                    name="box-arrow-up-right"
                    size="xs"
                    color="white"
                  />
                )}
              </a>
            ))}
          </section>
          <section className="flex flex-col items-start gap-3">
            <h2 className="mb-1 text-xl! font-medium">
              {footerContent.contactTitle}
            </h2>
            <a
              className="inline-flex items-center gap-2 text-sm text-footer-link! underline"
              href={`mailto:${footerContent.email}`}
            >
              <GovIcon
                type="components"
                name="envelope"
                size="xs"
                color="white"
              />
              {footerContent.email}
            </a>
          </section>
        </div>

        <section className="mt-12 flex flex-col items-start gap-3">
          <h2 className="mb-1 text-xl! font-medium">
            {footerContent.acknowledgementTitle}
          </h2>
          <p className="m-0 max-w-195 text-sm">
            {footerContent.acknowledgement}
          </p>
          <FooterLogos />
        </section>

        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/25 pt-4 text-xs md:flex-row">
          <p className="m-0">{footerContent.copyright}</p>
          <div className="flex shrink-0 flex-wrap gap-4">
            {footerContent.metadata.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
