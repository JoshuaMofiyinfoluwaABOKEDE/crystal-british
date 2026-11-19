import { SiteFooter, WhatsAppButton } from "@/components/layout/SiteFooter";
import { SiteHeader, TopBar } from "@/components/layout/SiteHeader";


/** Layout for the public website: top bar, header, footer and WhatsApp button. */
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <TopBar />
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
