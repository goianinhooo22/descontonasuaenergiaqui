import { motion } from "framer-motion";
import { Building2, Zap, ArrowRight } from "lucide-react";

const whatsappLink = "https://wa.me/5563981436077?text=Quero%20conhecer%20mais%20sobre%20a%20iGreen%20e%20como%20funciona";

const HighVoltageSection = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full gradient-hero">
              <Building2 className="h-8 w-8 text-primary-foreground" />
            </div>
            <Zap className="h-6 w-6 text-accent" />
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Conhece alguém com energia de{" "}
            <span className="text-primary">Alta Tensão</span>?
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Indústrias, grandes comércios e empresas que utilizam energia em alta
            tensão também podem se beneficiar com condições especiais da iGreen
            Energy. Indique e ajude a gerar economia!
          </p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 gradient-hero text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-xl shadow-card-hover transition-shadow hover:shadow-lg"
          >
            Indicar agora pelo WhatsApp
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HighVoltageSection;
