import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, ExternalLink, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";

interface ArticleProps {
    title: string;
    description: string;
    imageUrl: string;
    pdfUrl: string;
    date: string;
    category: string;
    readTime: string;
}

const articles: ArticleProps[] = [
    {
        title: "Dos Miradas sobre un Pilar Democrático: Las Acepciones del Sistema Electoral Peruano",
        description: "Análisis jurídico basado en la ponencia magistral del Dr. Willy Ramírez Chávarry sobre el sistema electoral peruano. Explora las dos acepciones fundamentales para interpretar correctamente cómo funciona el sistema electoral en nuestra realidad actual.",
        imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=600&fit=crop",
        pdfUrl: "/assets/articles/fashion-business-article.pdf",
        date: "Diciembre 2025",
        category: "Derecho Constitucional",
        readTime: "12 min lectura",
    },
];

export const Articles = () => {
    const handleDownload = (url: string, title: string) => {
        // Track download event
        if ((window as any).gtag) {
            (window as any).gtag('event', 'download', {
                event_category: 'Articles',
                event_label: title,
            });
        }

        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop() || 'article.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleView = (url: string, title: string) => {
        // Track view event
        if ((window as any).gtag) {
            (window as any).gtag('event', 'view_article', {
                event_category: 'Articles',
                event_label: title,
            });
        }
        window.open(url, "_blank");
    };

    return (
        <section id="articles" className="container py-24 sm:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <Badge className="mb-4 text-lg px-4 py-2" variant="secondary">
                    <FileText className="h-4 w-4 mr-2" />
                    Artículos Destacados
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                        Recursos y{" "}
                    </span>
                    Publicaciones
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Mantente informado con nuestros artículos sobre tendencias legales, análisis de casos y guías prácticas.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {articles.map((article, index) => (
                    <motion.div
                        key={article.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <motion.div
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="overflow-hidden h-full border-2 hover:border-primary/50 transition-all cursor-pointer group">
                                {/* Image Section */}
                                <div className="relative overflow-hidden h-56">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        src={article.imageUrl}
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <Badge variant="secondary" className="bg-primary/90 text-white border-0">
                                            <Tag className="h-3 w-3 mr-1" />
                                            {article.category}
                                        </Badge>
                                    </div>

                                    {/* Date and Read Time */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex gap-2 flex-wrap">
                                            <Badge variant="secondary" className="bg-white/90 text-black">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                {article.date}
                                            </Badge>
                                            <Badge variant="secondary" className="bg-white/90 text-black">
                                                <FileText className="h-3 w-3 mr-1" />
                                                {article.readTime}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <CardHeader>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                                        {article.title}
                                    </CardTitle>
                                    <CardDescription className="text-base line-clamp-3">
                                        {article.description}
                                    </CardDescription>
                                </CardHeader>

                                {/* Actions */}
                                <CardContent className="space-y-3">
                                    <Button
                                        onClick={() => handleView(article.pdfUrl, article.title)}
                                        className="w-full gap-2 bg-primary hover:bg-primary/90"
                                        size="lg"
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                        Ver Artículo
                                    </Button>

                                    <Button
                                        onClick={() => handleDownload(article.pdfUrl, article.title)}
                                        variant="outline"
                                        className="w-full gap-2"
                                    >
                                        <Download className="h-4 w-4" />
                                        Descargar PDF
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Info Note */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-12 max-w-2xl mx-auto"
            >
                <div className="p-6 bg-muted/50 rounded-lg border">
                    <p className="text-sm text-muted-foreground">
                        <strong>Nota:</strong> Nuestros artículos son elaborados por profesionales legales con amplia experiencia.
                        El contenido es de carácter informativo y educativo.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};
