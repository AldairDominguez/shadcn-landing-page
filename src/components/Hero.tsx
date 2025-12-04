import { Button } from "./ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/law_firm_hero_image_1764186148905.png"
          alt="Rutalegal Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-primary/30 text-white border border-primary/50 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg">
                Nuevos en el Mercado Legal
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white drop-shadow-lg">
                  Rutalegal
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                Defendemos Tus Derechos con Excelencia
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white leading-relaxed max-w-2xl drop-shadow-md"
            >
              Somos una firma de abogados comprometida con la justicia.
              Nuestro equipo de profesionales te brinda soluciones legales
              integrales con dedicación, ética y resultados efectivos.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-primary/50 transition-all text-white font-semibold w-full sm:w-auto"
                  asChild
                >
                  <a href="https://wa.me/51924144408" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    Consulta Gratuita
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all shadow-xl w-full sm:w-auto"
                  asChild
                >
                  <a href="#free-consultation">
                    Nuestros Servicios
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/30"
            >
              {[
                { icon: Phone, label: "Llámanos", value: "+51 924144408" },
                { icon: Mail, label: "Email", value: "info@rutalegal.pe" },
                { icon: MapPin, label: "Ubicación", value: "Lima, Perú" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-white"
                >
                  <div className="bg-primary/20 p-2 rounded-lg backdrop-blur-sm">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80 font-medium">{item.label}</p>
                    <p className="font-bold text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};
