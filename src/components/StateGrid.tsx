import { motion } from "framer-motion";
import { useState } from "react";
import { Zap, Sun, Bolt } from "lucide-react";

interface Concessionaria {
  nome: string;
  link: string;
}

interface StateInfo {
  sigla: string;
  nome: string;
  concessionarias: Concessionaria[];
}

const estados: StateInfo[] = [
  { sigla: "AL", nome: "Alagoas", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "BA", nome: "Bahia", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "CE", nome: "Ceará", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" }] },
  { sigla: "ES", nome: "Espírito Santo", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" }] },
  { sigla: "GO", nome: "Goiás", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" }] },
  { sigla: "MA", nome: "Maranhão", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "MT", nome: "Mato Grosso", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" }] },
  { sigla: "PB", nome: "Paraíba", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "PE", nome: "Pernambuco", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "PI", nome: "Piauí", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "RN", nome: "Rio Grande do Norte", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "SC", nome: "Santa Catarina", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "TO", nome: "Tocantins", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  {
    sigla: "MG", nome: "Minas Gerais", concessionarias: [
      { nome: "CEMIG-D", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" },
      { nome: "CPFL Santa Cruz", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "Energisa Minas Rio", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" },
      { nome: "Energisa Sul Sudeste", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
    ]
  },
  {
    sigla: "MS", nome: "Mato Grosso do Sul", concessionarias: [
      { nome: "Elektro", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "Energisa", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
    ]
  },
  {
    sigla: "PR", nome: "Paraná", concessionarias: [
      { nome: "CELESC", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "COPEL", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "CPFL Santa Cruz", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
    ]
  },
  {
    sigla: "RJ", nome: "Rio de Janeiro", concessionarias: [
      { nome: "ENEL", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "Energisa Minas Rio", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" },
    ]
  },
  {
    sigla: "RS", nome: "Rio Grande do Sul", concessionarias: [
      { nome: "CEEE", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" },
      { nome: "RGE", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
    ]
  },
  {
    sigla: "SP", nome: "São Paulo", concessionarias: [
      { nome: "CPFL", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "CPFL Piratininga", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "CPFL Santa Cruz", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "Elektro", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "Energisa Sul Sudeste", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
    ]
  },
];

// Floating energy icons for background decoration
const floatingIcons = [
  { Icon: Zap, x: "5%", y: "10%", size: 24, delay: 0, duration: 6 },
  { Icon: Sun, x: "90%", y: "15%", size: 20, delay: 1, duration: 7 },
  { Icon: Bolt, x: "15%", y: "80%", size: 18, delay: 2, duration: 5 },
  { Icon: Zap, x: "80%", y: "75%", size: 22, delay: 0.5, duration: 8 },
  { Icon: Sun, x: "50%", y: "5%", size: 16, delay: 3, duration: 6 },
  { Icon: Bolt, x: "35%", y: "90%", size: 20, delay: 1.5, duration: 7 },
  { Icon: Zap, x: "70%", y: "45%", size: 14, delay: 2.5, duration: 5.5 },
  { Icon: Sun, x: "25%", y: "50%", size: 16, delay: 0.8, duration: 6.5 },
];

const StateCard = ({ state, index }: { state: StateInfo; index: number }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const hasMultiple = state.concessionarias.length > 1;
  const currentLink = state.concessionarias[selectedTab].link;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      className="group flex flex-col items-center rounded-xl bg-card p-4 shadow-card border border-border"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-hero mb-2 group-hover:scale-110 transition-transform">
        <span className="font-display font-black text-lg text-primary-foreground">
          {state.sigla}
        </span>
      </div>
      <span className="text-sm font-medium text-foreground text-center leading-tight mb-2">
        {state.nome}
      </span>

      {hasMultiple && (
        <div className="w-full flex flex-wrap gap-1 justify-center mb-2">
          {state.concessionarias.map((c, i) => (
            <button
              key={i}
              onClick={() => setSelectedTab(i)}
              className={`text-[10px] font-semibold px-2 py-1 rounded-full border transition-all duration-200 ${
                selectedTab === i
                  ? "gradient-hero text-primary-foreground border-transparent shadow-sm"
                  : "bg-muted text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {c.nome}
            </button>
          ))}
        </div>
      )}

      <a
        href={currentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full text-center text-xs font-bold gradient-hero text-primary-foreground px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
      >
        Desconto na sua energia aqui
      </a>
    </motion.div>
  );
};

const StateGrid = () => {
  return (
    <section id="estados" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-solar" />
      
      {/* Floating energy icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/10 pointer-events-none"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0, 20, 0],
            rotate: [0, 10, -10, 5, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.Icon size={item.size} />
        </motion.div>
      ))}

      {/* Radial glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Selecione seu <span className="text-primary">Estado</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Escolha seu estado e sua concessionária para garantir seu desconto
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-start">
          {estados.map((state, i) => (
            <StateCard key={state.sigla} state={state} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StateGrid;
