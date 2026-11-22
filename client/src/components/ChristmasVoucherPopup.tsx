import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { isVoucherSaleActive, VOUCHER_POPUP_STORAGE_KEY } from "@/lib/christmas";

const ORDER_URL = "/registrace?course=voucher";
const SHOW_AFTER_MS = 4000;
const HIDDEN_ON = ["/registrace", "/studenti"];

function wasDismissed(): boolean {
  try {
    return localStorage.getItem(VOUCHER_POPUP_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markDismissed() {
  try {
    localStorage.setItem(VOUCHER_POPUP_STORAGE_KEY, "1");
  } catch {
    // storage blocked — popup se pak může ukázat znovu, nevadí
  }
}

export function ChristmasVoucherPopup() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isVoucherSaleActive() || wasDismissed() || HIDDEN_ON.includes(location)) return;
    // Zobrazit až po načtení stránky, ať lightbox nebrzdí první vykreslení (LCP)
    const timer = setTimeout(() => setOpen(true), SHOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, [location]);

  const close = () => {
    markDismissed();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(next) => (next ? setOpen(true) : close())}>
      <DialogContent showCloseButton={false} className="p-0 overflow-hidden gap-0 sm:max-w-md border-0">
        <DialogTitle className="sr-only">Vánoční voucher na řidičský kurz</DialogTitle>
        <DialogDescription className="sr-only">
          Darujte řidičák k Vánocům. Objednejte dárkový voucher na kurz v Autoškole RED.
        </DialogDescription>

        <button
          type="button"
          onClick={close}
          aria-label="Zavřít"
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-foreground hover:bg-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <Link href={ORDER_URL} onClick={markDismissed} className="block">
          <img
            src="/images/vanocni-voucher-lightbox.webp"
            alt="Darujte řidičák k Vánocům – vánoční voucher do Autoškoly RED"
            width={800}
            height={800}
            className="w-full h-auto block"
          />
        </Link>

        <div className="flex gap-3 p-4 bg-white">
          <Button asChild className="flex-1 h-12 font-bold">
            <Link href={ORDER_URL} onClick={markDismissed}>Objednat voucher</Link>
          </Button>
          <Button variant="outline" className="h-12" onClick={close}>
            Teď ne
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
