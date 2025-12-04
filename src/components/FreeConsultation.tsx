import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface AdvisorProps {
    name: string;
    specialty: string;
    phone: string;
    imageUrl: string;
}

// Abogados internos con asesoría gratuita
const internalAdvisorsList: AdvisorProps[] = [
    {
        name: "Jorge Heredia A.",
        specialty: "Derecho Penal",
        phone: "924144408",
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=400&fit=crop",
    },
    {
        name: "Chantal Orihuela P.",
        specialty: "Derecho Laboral",
        phone: "938611030",
        imageUrl: "/chantal_orihuela.jpg",
    },
    {
        name: "Nadia Tello Herrera",
        specialty: "Derecho Civil",
        phone: "942311336",
        imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=400&fit=crop",
    },
    {
        name: "Sofia Mareli Pretel Rojas",
        specialty: "Derecho Administrativo",
        phone: "933947836",
        imageUrl: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=400&h=400&fit=crop",
    },
];

// Abogados externos asociados
const externalAdvisorsList: AdvisorProps[] = [
    {
        name: "Jorge Machuca V.",
        specialty: "Derecho Administrativo - Tributario, Corporativo - Empresarial",
        phone: "980952498",
        imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=400&fit=crop",
    },
    {
        name: "Albujar & Soria Asociados",
        specialty: "Derecho Laboral",
        phone: "988545907",
        imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop",
    },
];

export const FreeConsultation = () => {
    const handleWhatsAppClick = (phone: string, name: string, isFree: boolean = true) => {
        const message = encodeURIComponent(
            isFree
                ? `Hola ${name}, vi tu perfil en Rutalegal y me gustaría solicitar una asesoría gratuita.`
                : `Hola ${name}, vi tu perfil en Rutalegal y me gustaría solicitar información sobre sus servicios legales.`
        );
        window.open(`https://wa.me/51${phone}?text=${message}`, "_blank");
    };

    return (
        <>
            {/* Sección de Asesoría Gratuita */}
            <section id="free-consultation" className="container py-24 sm:py-32 bg-gradient-to-b from-muted/50 to-background">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <Badge className="mb-4 text-lg px-4 py-2" variant="secondary">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        100% Gratuito
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            Asesoría Legal{" "}
                        </span>
                        Gratuita
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Consulta directamente con nuestros especialistas vía WhatsApp. Sin costo, sin compromiso.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {internalAdvisorsList.map((advisor, index) => (
                        <motion.div
                            key={advisor.phone}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                                <Card className="relative pt-16 flex flex-col justify-center items-center overflow-visible h-full border-2 border-green-500/20 hover:border-green-500/50 transition-all">
                                    <div className="absolute -top-12 left-0 right-0 mx-auto w-24 h-24">
                                        <motion.img
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                            src={advisor.imageUrl}
                                            alt={advisor.name}
                                            className="rounded-full w-full h-full aspect-square object-cover border-4 border-background shadow-xl ring-2 ring-green-500/30"
                                        />
                                    </div>

                                    <CardHeader className="text-center pb-2 pt-4 w-full">
                                        <CardTitle className="text-center text-lg">{advisor.name}</CardTitle>
                                        <CardDescription className="text-primary text-center text-sm font-semibold">
                                            Especialista
                                        </CardDescription>
                                        <div className="flex justify-center gap-2 mt-2">
                                            <Badge variant="outline" className="capitalize bg-primary/10">
                                                {advisor.specialty}
                                            </Badge>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="text-center pb-4 px-4 w-full">
                                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                            <Phone className="h-4 w-4" />
                                            <span className="text-sm font-mono">{advisor.phone}</span>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="pb-6 w-full px-6">
                                        <Button
                                            onClick={() => handleWhatsAppClick(advisor.phone, advisor.name, true)}
                                            className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
                                            size="lg"
                                        >
                                            <MessageCircle className="h-5 w-5" />
                                            Consultar Gratis
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-sm text-muted-foreground italic">
                        * Asesoría inicial gratuita de 15 minutos. Respuesta en horario de oficina.
                    </p>
                </motion.div>
            </section>

            {/* Sección de Abogados Asociados Externos */}
            <section className="container py-16 sm:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <Badge className="mb-4 text-lg px-4 py-2 bg-blue-500/10 text-blue-700 border-blue-500/20">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Abogados Asociados
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-b from-blue-600/60 to-blue-600 text-transparent bg-clip-text">
                            Especialistas{" "}
                        </span>
                        Externos
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Profesionales asociados con amplia experiencia en áreas especializadas.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {externalAdvisorsList.map((advisor, index) => (
                        <motion.div
                            key={advisor.phone}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                                <Card className="relative pt-16 flex flex-col justify-center items-center overflow-visible h-full border-2 border-blue-500/20 hover:border-blue-500/50 transition-all">
                                    <div className="absolute -top-12 left-0 right-0 mx-auto w-24 h-24">
                                        <motion.img
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                            src={advisor.imageUrl}
                                            alt={advisor.name}
                                            className="rounded-full w-full h-full aspect-square object-cover border-4 border-background shadow-xl ring-2 ring-blue-500/30"
                                        />
                                    </div>

                                    <CardHeader className="text-center pb-2 pt-4 w-full">
                                        <CardTitle className="text-center text-lg">{advisor.name}</CardTitle>
                                        <CardDescription className="text-blue-600 text-center text-sm font-semibold">
                                            Abogado Asociado
                                        </CardDescription>
                                        <div className="flex justify-center gap-2 mt-2">
                                            <Badge variant="outline" className="capitalize bg-blue-500/10 border-blue-500/20">
                                                {advisor.specialty}
                                            </Badge>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="text-center pb-4 px-4 w-full">
                                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                            <Phone className="h-4 w-4" />
                                            <span className="text-sm font-mono">{advisor.phone}</span>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="pb-6 w-full px-6">
                                        <Button
                                            onClick={() => handleWhatsAppClick(advisor.phone, advisor.name, false)}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2"
                                            size="lg"
                                        >
                                            <MessageCircle className="h-5 w-5" />
                                            Contactar
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
};
