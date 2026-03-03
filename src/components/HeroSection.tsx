import { motion } from "framer-motion";
import { Sun, Zap, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
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
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 mb-6 backdrop-blur-sm">
            <Sun className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              Energia Solar por Assinatura
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-primary-foreground mb-6">
            Economize até{" "}
            <span className="text-accent">30%</span> na sua conta de luz
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg font-body">
            Sem instalação de painéis, sem obras, sem custos adicionais. 
            100% digital com a <strong>iGreen Energy</strong>.
          </p>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Sem fidelidade</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Leaf className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Energia limpa</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Sun className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">100% digital</span>
            </div>
          </div>

          <motion.a
            href="#estados"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block gradient-hero text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-xl shadow-card-hover transition-shadow hover:shadow-lg"
          >
            Encontre seu estado →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
