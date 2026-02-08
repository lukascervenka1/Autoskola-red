import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent-accepted");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent-accepted", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 animate-in slide-in-from-bottom duration-500">
            <div className="container max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-muted-foreground text-center sm:text-left">
                    <p>
                        Tento web používá k poskytování služeb a analýze návštěvnosti soubory cookie. Používáním tohoto webu s tím souhlasíte.
                    </p>
                </div>
                <Button onClick={acceptCookies} className="whitespace-nowrap min-w-[120px]">
                    Souhlasím
                </Button>
            </div>
        </div>
    );
}
