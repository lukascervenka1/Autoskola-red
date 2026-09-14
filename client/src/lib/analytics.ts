declare function gtag(...args: unknown[]): void;
declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const GA_ID = "G-S88E3P9X3Q";

/** Odešle page_view event — volat při každé změně routy */
export function trackPageView(path: string) {
  if (typeof gtag === "undefined") return;
  gtag("config", GA_ID, { page_path: path });
}

/** Konverze: přihláška do kurzu */
export function trackRegistration(courseType?: string) {
  if (typeof gtag === "undefined") return;
  gtag("event", "generate_lead", {
    event_category: "form",
    event_label: courseType ?? "unknown",
    value: 1,
  });
  // GTM's dataLayer listener needs a plain {event: "..."} push (gtag() above
  // pushes its raw arguments, which GTM's Custom Event trigger can't match)
  window.dataLayer?.push({
    event: "generate_lead",
    event_category: "form",
    event_label: courseType ?? "unknown",
  });
}

/** Konverze: odeslání kontaktního formuláře */
export function trackContactForm() {
  if (typeof gtag === "undefined") return;
  gtag("event", "generate_lead", {
    event_category: "form",
    event_label: "contact",
    value: 1,
  });
  window.dataLayer?.push({
    event: "generate_lead",
    event_category: "form",
    event_label: "contact",
  });
}
