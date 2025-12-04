import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface LegalCodeProps {
    title: string;
    description: string;
    imageUrl: string;
    downloadUrl: string;
    year: string;
    pages: string;
}

const legalCodes: LegalCodeProps[] = [
    {
        title: "Código Civil Peruano",
        description: "Texto actualizado del Código Civil del Perú. Incluye todas las modificaciones vigentes.",
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=600&fit=crop",
        downloadUrl: "https://www.oas.org/dil/esp/Codigo_Civil_Peru.pdf",
        year: "2024",
        pages: "800+",
    },
    {
        title: "Código Penal Peruano",
        description: "Código Penal actualizado con jurisprudencia relevante y últimas reformas legislativas.",
        imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=600&fit=crop",
        downloadUrl: "https://spijweb.minjus.gob.pe/wp-content/uploads/2018/08/CODIGOPENAL.pdf",
        year: "2024",
        pages: "600+",
    },
];

export const LegalResources = () => {
    const handleDownload = (url: string, title: string) => {
        // Track download event
        if ((window as any).gtag) {
            (window as any).gtag('event', 'download', {
                event_category: 'Legal Resources',
                event_label: title,
            });
        }
        window.open(url, "_blank");
    };

    return (
        <section id="resources" className="container py-24 sm:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <Badge className="mb-4 text-lg px-4 py-2" variant="secondary">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Recursos Legales
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                        Códigos Legales{" "}
                    </span>
                    Descargables
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Accede gratuitamente a los códigos legales más importantes del Perú. Actualizados y verificados.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {legalCodes.map((code, index) => (
                    <motion.div
                        key={code.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <motion.div
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="overflow-hidden h-full border-2 hover:border-primary/50 transition-all cursor-pointer group">
                                <div className="relative overflow-hidden h-64">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        src={code.imageUrl}
                                        alt={code.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex gap-2 mb-2">
                                            <Badge variant="secondary" className="bg-white/90 text-black">
                                                <FileText className="h-3 w-3 mr-1" />
                                                {code.pages} páginas
                                            </Badge>
                                            <Badge variant="secondary" className="bg-white/90 text-black">
                                                Edición {code.year}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {code.title}
                                    </CardTitle>
                                    <CardDescription className="text-base">
                                        {code.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-3">
                                    <Button
                                        onClick={() => handleDownload(code.downloadUrl, code.title)}
                                        className="w-full gap-2 bg-primary hover:bg-primary/90"
                                        size="lg"
                                    >
                                        <Download className="h-5 w-5" />
                                        Descargar PDF Gratis
                                    </Button>

                                    <Button
                                        onClick={() => window.open(code.downloadUrl, "_blank")}
                                        variant="outline"
                                        className="w-full gap-2"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Ver Online
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-12 max-w-2xl mx-auto"
            >
                <div className="p-6 bg-muted/50 rounded-lg border">
                    <p className="text-sm text-muted-foreground">
                        <strong>Nota:</strong> Estos documentos son de dominio público y están disponibles en los sitios oficiales del Estado Peruano.
                        Rutalegal facilita el acceso a estos recursos con fines educativos e informativos.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};
