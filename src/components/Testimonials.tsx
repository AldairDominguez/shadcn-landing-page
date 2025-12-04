import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  initials: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=8",
    name: "Roberto Fernández",
    userName: "Cliente - Caso Laboral",
    comment: "Excelente atención y profesionalismo. Ganamos el caso de despido injustificado gracias al Dr. Silva. ¡Totalmente recomendados!",
    initials: "RF"
  },
  {
    image: "https://i.pravatar.cc/150?img=5",
    name: "María González",
    userName: "Cliente - Derecho Familiar",
    comment:
      "La Dra. Martínez me ayudó en un proceso de divorcio muy complicado. Su empatía y conocimiento legal fueron fundamentales. Estoy muy agradecida.",
    initials: "MG"
  },

  {
    image: "https://i.pravatar.cc/150?img=14",
    name: "Juan Carlos Pérez",
    userName: "Cliente - Derecho Penal",
    comment:
      "El Dr. Mendoza es un excelente abogado penalista. Su estrategia de defensa fue impecable y logró la absolución en mi caso. Rutalegal es sinónimo de calidad.",
    initials: "JP"
  },
  {
    image: "https://i.pravatar.cc/150?img=9",
    name: "Laura Sánchez",
    userName: "Empresaria - Derecho Corporativo",
    comment:
      "Como empresaria necesitaba asesoría legal confiable. La Dra. Rojas ha sido clave en la estructuración legal de mi empresa. Servicio de primera.",
    initials: "LS"
  },
  {
    image: "https://i.pravatar.cc/150?img=11",
    name: "Miguel Torres",
    userName: "Cliente - Derecho Civil",
    comment:
      "Recuperé mi propiedad gracias a Rutalegal. El equipo fue muy profesional y me mantuvieron informado en todo momento del proceso.",
    initials: "MT"
  },
  {
    image: "https://i.pravatar.cc/150?img=10",
    name: "Carmen Díaz",
    userName: "Cliente - Herencias",
    comment:
      "Proceso de sucesión resuelto de manera eficiente y justa. El equipo de Rutalegal demostró gran conocimiento en derecho sucesorio.",
    initials: "CD"
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold"
      >
        Lo Que Dicen
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Nuestros Clientes{" "}
        </span>
        Sobre Nosotros
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-muted-foreground pt-4 pb-8"
      >
        La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
        Lee sus experiencias y casos de éxito.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment, initials }: TestimonialProps, index) => (
            <motion.div
              key={userName}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="max-w-md md:break-inside-avoid overflow-hidden h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Avatar>
                      <AvatarImage
                        alt={name}
                        src={image}
                      />
                      <AvatarFallback className="bg-primary text-white font-bold">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>

                  <div className="flex flex-col">
                    <CardTitle className="text-lg">{name}</CardTitle>
                    <CardDescription>{userName}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent>{comment}</CardContent>
              </Card>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};
