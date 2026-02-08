import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SEO } from "@/components/SEO";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";


import Registration from "./pages/Registration";
import { CookieConsent } from "@/components/CookieConsent";

import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import StudentZone from "@/pages/StudentZone";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/registrace" component={Registration} />
      <Route path="/cenik" component={Pricing} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/kontakt" component={Contact} />
      <Route path="/ochrana-osobnich-udaju" component={PrivacyPolicy} />
      <Route path="/obchodni-podminky" component={Terms} />
      <Route path="/studenti" component={StudentZone} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <SEO
        title="Autoškola RED - Autoškola Praha 6 Dejvice"
        description="Moderní autoškola v Praze 6. Řidičák na auto (B) i motorku (A). Individuální přístup, jízdy v klidu a pohodě. Přihlaste se online."
      />
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieConsent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
