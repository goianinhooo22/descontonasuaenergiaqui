import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import club1 from "@/assets/igreen-club-1.jpeg";
import club2 from "@/assets/igreen-club-2.jpeg";
import club3 from "@/assets/igreen-club-3.jpeg";
import club4 from "@/assets/igreen-club-4.jpeg";

type Slide =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

const slides: Slide[] = [
  { type: "image", src: club1, alt: "iGreen Club - Você escolhe, o app conecta, você economiza" },
  { type: "image", src: club2, alt: "iGreen Club - Muitas possibilidades, descontos exclusivos" },
  { type: "image", src: club3, alt: "iGreen Club - Moda, turismo, gastronomia na palma da sua mão" },
  { type: "image", src: club4, alt: "iGreen Club - Baixe o app e aproveite" },
  { type: "video", src: "/videos/igreen-promo.mp4", alt: "Vídeo promocional iGreen Energy" },
];

const IGreenClubSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <section className="py-20 px-6 bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça o <span className="text-primary">iGreen Club</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Muito mais que desconto na energia. Aproveite benefícios exclusivos!
          </p>
        </motion.div>

        <div className="relative max-w-sm mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-card-hover border border-border">
            {slide.type === "image" ? (
              <motion.img
                key={current}
                src={slide.src}
                alt={slide.alt}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full aspect-[9/16] object-cover"
              />
            ) : (
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full aspect-[9/16] bg-foreground"
              >
                <video
                  src={slide.src}
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </div>

          <button
            onClick={prev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full gradient-hero text-primary-foreground flex items-center justify-center shadow-card hover:opacity-90 transition-opacity"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full gradient-hero text-primary-foreground flex items-center justify-center shadow-card hover:opacity-90 transition-opacity"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  i === current
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={s.type === "video" ? "Vídeo" : `Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IGreenClubSection;
