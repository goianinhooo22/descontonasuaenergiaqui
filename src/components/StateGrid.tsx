import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";

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
  { sigla: "MT", nome: "Mato Grosso", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" }] },
  { sigla: "PB", nome: "Paraíba", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "PE", nome: "Pernambuco", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "PI", nome: "Piauí", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
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
  { sigla: "RN", nome: "Rio Grande do Norte", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  {
    sigla: "RS", nome: "Rio Grande do Sul", concessionarias: [
      { nome: "CEEE", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" },
      { nome: "RGE", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
    ]
  },
  { sigla: "SC", nome: "Santa Catarina", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  {
    sigla: "SP", nome: "São Paulo", concessionarias: [
      { nome: "CPFL", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "CPFL Piratininga", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "CPFL Santa Cruz", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "Elektro", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "Energisa Sul Sudeste", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
    ]
  },
  { sigla: "TO", nome: "Tocantins", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
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
      className="group flex flex-col items-center gap-2 rounded-xl bg-card p-4 shadow-card border border-border"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-hero mb-1 group-hover:scale-110 transition-transform">
        <span className="font-display font-black text-lg text-primary-foreground">
          {state.sigla}
        </span>
      </div>
      <span className="text-sm font-medium text-foreground text-center leading-tight">
        {state.nome}
      </span>

      {hasMultiple && (
        <div className="w-full mt-1 flex flex-wrap gap-1 justify-center">
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
        className="mt-1 w-full text-center text-xs font-bold gradient-hero text-primary-foreground px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
      >
        Desconto na sua energia aqui
      </a>
    </motion.div>
  );
};

const StateGrid = () => {
  return (
    <section id="estados" className="py-20 px-6 gradient-solar">
      <div className="container mx-auto">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {estados.map((state, i) => (
            <StateCard key={state.sigla} state={state} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StateGrid;
