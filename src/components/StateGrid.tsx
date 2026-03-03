import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface StateInfo {
  sigla: string;
  nome: string;
  link: string;
}

const estados: StateInfo[] = [
  { sigla: "AC", nome: "Acre", link: "#ac" },
  { sigla: "AL", nome: "Alagoas", link: "#al" },
  { sigla: "AP", nome: "Amapá", link: "#ap" },
  { sigla: "AM", nome: "Amazonas", link: "#am" },
  { sigla: "BA", nome: "Bahia", link: "#ba" },
  { sigla: "CE", nome: "Ceará", link: "#ce" },
  { sigla: "DF", nome: "Distrito Federal", link: "#df" },
  { sigla: "ES", nome: "Espírito Santo", link: "#es" },
  { sigla: "GO", nome: "Goiás", link: "#go" },
  { sigla: "MA", nome: "Maranhão", link: "#ma" },
  { sigla: "MT", nome: "Mato Grosso", link: "#mt" },
  { sigla: "MS", nome: "Mato Grosso do Sul", link: "#ms" },
  { sigla: "MG", nome: "Minas Gerais", link: "#mg" },
  { sigla: "PA", nome: "Pará", link: "#pa" },
  { sigla: "PB", nome: "Paraíba", link: "#pb" },
  { sigla: "PR", nome: "Paraná", link: "#pr" },
  { sigla: "PE", nome: "Pernambuco", link: "#pe" },
  { sigla: "PI", nome: "Piauí", link: "#pi" },
  { sigla: "RJ", nome: "Rio de Janeiro", link: "#rj" },
  { sigla: "RN", nome: "Rio Grande do Norte", link: "#rn" },
  { sigla: "RS", nome: "Rio Grande do Sul", link: "#rs" },
  { sigla: "RO", nome: "Rondônia", link: "#ro" },
  { sigla: "RR", nome: "Roraima", link: "#rr" },
  { sigla: "SC", nome: "Santa Catarina", link: "#sc" },
  { sigla: "SP", nome: "São Paulo", link: "#sp" },
  { sigla: "SE", nome: "Sergipe", link: "#se" },
  { sigla: "TO", nome: "Tocantins", link: "#to" },
];

const StateCard = ({ state, index }: { state: StateInfo; index: number }) => (
  <motion.a
    href={state.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.03, duration: 0.4 }}
    whileHover={{ y: -4, scale: 1.02 }}
    className="group flex flex-col items-center gap-2 rounded-xl bg-card p-5 shadow-card transition-all duration-300 hover:shadow-card-hover border border-border cursor-pointer"
  >
    <div className="flex items-center justify-center w-14 h-14 rounded-full gradient-hero mb-1 group-hover:scale-110 transition-transform">
      <span className="font-display font-black text-xl text-primary-foreground">
        {state.sigla}
      </span>
    </div>
    <span className="text-sm font-medium text-foreground text-center leading-tight">
      {state.nome}
    </span>
    <MapPin className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
  </motion.a>
);

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
            Clique no seu estado para acessar o link exclusivo de cadastro iGreen Energy
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {estados.map((state, i) => (
            <StateCard key={state.sigla} state={state} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StateGrid;
