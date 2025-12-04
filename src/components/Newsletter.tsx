import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const Newsletter = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }
    setIsSubscribed(true);
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Mantente{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Informado
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Suscríbete a nuestro boletín y recibe actualizaciones sobre cambios en
          la legislación, consejos legales y noticias relevantes del sector jurídico.
        </p>

        {isSubscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center gap-4 py-4"
          >
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
              <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-xl font-semibold text-green-600 dark:text-green-400">
              ¡Gracias por suscribirte!
            </p>
            <p className="text-muted-foreground">
              Revisa tu correo para confirmar tu suscripción.
            </p>
          </motion.div>
        ) : (
          <form
            className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
            onSubmit={handleSubmit}
          >
            <Input
              placeholder="tucorreo@ejemplo.com"
              className="bg-muted/50 dark:bg-muted/80 "
              aria-label="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button>Suscribirse</Button>
          </form>
        )}
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
