import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça a <span className="text-primary">iGreen Energy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Veja como funciona o desconto na sua conta de energia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border">
            <video
              src="/videos/igreen-promo.mp4"
              controls
              playsInline
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
