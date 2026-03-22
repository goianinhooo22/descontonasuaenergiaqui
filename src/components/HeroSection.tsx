import { motion } from "framer-motion";
import { Zap, ShieldCheck, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";
import igreenLogo from "@/assets/igreen-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Painéis solares em campo verde sob céu azul"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <img
            src={igreenLogo}
            alt="iGreen Energy"
            className="h-16 md:h-20 mb-8 drop-shadow-lg"
          />

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-primary-foreground mb-6">
            Desconto na conta de energia{" "}
            <span className="text-accent">sem investimentos.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg font-body">
            Economize todos os meses na sua conta de luz. Sem burocracia, sem
            fidelidade, sem compra de placas solares. 100% digital com a{" "}
            <strong>iGreen Energy</strong>.
          </p>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Sem fidelidade</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Sem custos adicionais</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Smartphone className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">100% digital</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://wa.link/mzv0mc"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block gradient-hero text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-xl shadow-card-hover transition-shadow hover:shadow-lg"
            >
              Quero o meu benefício por direito →
            </motion.a>
            <motion.a
              href="https://wa.link/kf1oyf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-accent text-accent-foreground font-display font-bold text-lg px-8 py-4 rounded-xl shadow-card-hover transition-shadow hover:shadow-lg border-2 border-accent"
            >
              Quero ser um licenciado →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
