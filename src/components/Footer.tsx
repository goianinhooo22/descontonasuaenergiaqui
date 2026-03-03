import igreenLogo from "@/assets/igreen-logo.png";

const Footer = () => (
  <footer className="gradient-hero py-10 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={igreenLogo} alt="iGreen Energy" className="h-10 drop-shadow-md" />
      <p className="text-primary-foreground/70 text-sm text-center">
        © 2025 iGreen Energy. Desconto na conta de energia em todo o Brasil.
      </p>
    </div>
  </footer>
);

export default Footer;
