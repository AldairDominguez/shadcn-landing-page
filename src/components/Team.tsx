import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Facebook, Instagram, Linkedin, CheckCircle2, Star, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  specialty: string;
  rating: number;
  reviews: number;
  verified: boolean;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=12",
    name: "Grupo HOPT",
    position: "Socio Fundador",
    specialty: "penal",
    rating: 4.9,
    reviews: 124,
    verified: true,
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/" },
      { name: "Facebook", url: "https://www.facebook.com/" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=47",
    name: "Dra. Ana Martínez",
    position: "Socia Senior",
    specialty: "civil",
    rating: 4.8,
    reviews: 98,
    verified: true,
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/" },
      { name: "Instagram", url: "https://www.instagram.com/" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=33",
    name: "Dr. Roberto Silva",
    position: "Abogado Asociado",
    specialty: "laboral",
    rating: 4.7,
    reviews: 76,
    verified: true,
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/" },
      { name: "Facebook", url: "https://www.facebook.com/" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=43",
    name: "Dra. Patricia Rojas",
    position: "Especialista",
    specialty: "corporativo",
    rating: 5.0,
    reviews: 45,
    verified: true,
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/" },
      { name: "Instagram", url: "https://www.instagram.com/" },
    ],
  },
];

export const Team = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin": return <Linkedin size="20" />;
      case "Facebook": return <Facebook size="20" />;
      case "Instagram": return <Instagram size="20" />;
    }
  };

  const filteredTeam = teamList.filter((member) => {
    const matchesFilter = filter === "all" || member.specialty === filter;
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="team" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Encuentra tu
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {" "}Abogado Ideal{" "}
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Directorio de abogados verificados. Filtra por especialidad y revisa sus calificaciones reales.
        </p>
      </motion.div>

      {/* Buscador y Filtros */}
      <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select onValueChange={setFilter} defaultValue="all">
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Especialidad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las áreas</SelectItem>
            <SelectItem value="penal">Derecho Penal</SelectItem>
            <SelectItem value="civil">Derecho Civil</SelectItem>
            <SelectItem value="laboral">Derecho Laboral</SelectItem>
            <SelectItem value="corporativo">Corporativo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredTeam.map(
          ({ imageUrl, name, position, specialty, rating, reviews, verified, socialNetworks }: TeamProps, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="bg-muted/50 relative pt-16 flex flex-col justify-center items-center overflow-visible h-full border-t-4 border-t-primary">
                  {verified && (
                    <div className="absolute top-4 right-4" title="Abogado Verificado">
                      <CheckCircle2 className="h-6 w-6 text-blue-500 fill-blue-100" />
                    </div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-12 left-0 right-0 mx-auto w-24 h-24"
                  >
                    <img
                      src={imageUrl}
                      alt={`${name} ${position}`}
                      className="rounded-full w-full h-full aspect-square object-cover border-4 border-background shadow-xl"
                    />
                  </motion.div>

                  <CardHeader className="text-center pb-2 pt-4 w-full">
                    <CardTitle className="text-center text-lg">{name}</CardTitle>
                    <CardDescription className="text-primary text-center text-sm font-semibold">
                      {position}
                    </CardDescription>
                    <div className="flex justify-center gap-2 mt-2">
                      <Badge variant="secondary" className="capitalize">{specialty}</Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="text-center pb-4 px-4 w-full">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold">{rating}</span>
                      <span className="text-muted-foreground text-sm">({reviews} reseñas)</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Especialista verificado con historial de casos exitosos en {specialty}.
                    </p>
                  </CardContent>

                  <CardFooter className="pb-6">
                    <div className="flex gap-2">
                      {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                        <motion.div
                          key={name}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <a
                            rel="noreferrer noopener"
                            href={url}
                            target="_blank"
                            className={buttonVariants({ variant: "ghost", size: "sm" })}
                          >
                            <span className="sr-only">{name} icon</span>
                            {socialIcon(name)}
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};
