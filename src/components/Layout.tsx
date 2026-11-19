import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Deferred so any closing overlay has released the body scroll lock first.
    const timeout = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return null;
}

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-espresso focus:px-5 focus:py-3 focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:text-cream"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" key={pathname} className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
