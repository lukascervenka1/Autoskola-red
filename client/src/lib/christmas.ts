// Vánoční dárkový voucher — jediné místo, kde se akce zapíná a vypíná.
//
// Po datu VOUCHER_SALE_UNTIL se vše skryje samo (lightbox, sekce v ceníku
// i volba ve formuláři přihlášky), není potřeba nic nasazovat.
// Pro okamžité vypnutí stačí nastavit VOUCHER_SALE_ENABLED na false.
// Na příští Vánoce: posunout data a případně vyměnit obrázky.

export const VOUCHER_SALE_ENABLED = true;
export const VOUCHER_SALE_UNTIL = new Date("2026-12-31T23:59:59+01:00");

// Platnost voucheru (uvedená i na grafice voucheru)
export const VOUCHER_VALID_UNTIL_LABEL = "31. 12. 2027";

// Klíč pro "lightbox už jsem viděl" — s rokem, aby se příští sezónu zobrazil znovu
export const VOUCHER_POPUP_STORAGE_KEY = "autoskola_xmas_voucher_popup_2026";

export function isVoucherSaleActive(now: Date = new Date()): boolean {
  return VOUCHER_SALE_ENABLED && now.getTime() <= VOUCHER_SALE_UNTIL.getTime();
}
