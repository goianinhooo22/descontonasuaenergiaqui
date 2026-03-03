import { Sun } from "lucide-react";

const Footer = () => (
  <footer className="gradient-hero py-10 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Sun className="h-6 w-6 text-accent" />
        <span className="font-display font-bold text-xl text-primary-foreground">
          iGreen Energy
        </span>
      </div>
      <p className="text-primary-foreground/70 text-sm text-center">
        © 2025 iGreen Energy. Energia solar por assinatura em todo o Brasil.
      </p>
    </div>
  </footer>
);

export default Footer;
