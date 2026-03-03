import { motion } from "framer-motion";
import { DollarSign, Leaf, Smartphone, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Economia Real",
    desc: "Reduza até 30% na sua conta de energia elétrica todo mês.",
  },
  {
    icon: Leaf,
    title: "Sustentável",
    desc: "Energia 100% limpa e renovável, direto das fazendas solares.",
  },
  {
    icon: Smartphone,
    title: "100% Digital",
    desc: "Cadastro rápido, sem burocracia. Tudo pelo celular.",
  },
  {
    icon: ShieldCheck,
    title: "Sem Fidelidade",
    desc: "Cancele quando quiser, sem multas ou taxas escondidas.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-14"
        >
          Por que escolher a <span className="text-primary">iGreen</span>?
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-background shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center mb-4">
                <b.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
