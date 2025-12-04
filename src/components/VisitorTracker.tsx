import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Eye, Heart, UserPlus, TrendingUp, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// API base URL - will use Netlify Functions
const API_BASE = '/.netlify/functions';

interface StatsResponse {
    visits: number;
    likes: number;
    hasLiked?: boolean;
}

export const VisitorTracker = () => {
    const [visits, setVisits] = useState(0);
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [registered, setRegistered] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    // Fetch stats from API
    const fetchStats = async () => {
        try {
            const response = await fetch(`${API_BASE}/stats?action=get`);
            if (response.ok) {
                const data: StatsResponse = await response.json();
                setVisits(data.visits);
                setLikes(data.likes);
                setHasLiked(data.hasLiked || false);
            }
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    // Record a visit
    const recordVisit = async () => {
        try {
            const response = await fetch(`${API_BASE}/stats?action=visit`);
            if (response.ok) {
                const data: StatsResponse = await response.json();
                setVisits(data.visits);
                setLikes(data.likes);
                setHasLiked(data.hasLiked || false);
            }
        } catch (error) {
            console.error('Error recording visit:', error);
        }
    };


    useEffect(() => {
        // Check if user is registered (still using localStorage for this)
        const userRegistered = localStorage.getItem("rutalegal_registered") === "true";
        setRegistered(userRegistered);

        // Check if user already liked (from localStorage)
        const userLiked = localStorage.getItem("rutalegal_user_liked") === "true";
        setHasLiked(userLiked);

        // Record visit and fetch stats
        recordVisit();

        // Show register modal after 5 seconds if not registered
        if (!userRegistered) {
            const timer = setTimeout(() => {
                setShowRegisterModal(true);
            }, 5000);
            return () => clearTimeout(timer);
        }

        // Poll for updates every 3 seconds to show real-time changes
        const interval = setInterval(fetchStats, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleLike = async () => {
        // Check if user is registered first
        if (!registered) {
            // Show registration modal if not registered
            setShowRegisterModal(true);
            return;
        }

        if (!hasLiked) {
            try {
                // Optimistic update - update UI immediately
                const newLikes = likes + 1;
                setLikes(newLikes);
                setHasLiked(true);
                localStorage.setItem("rutalegal_user_liked", "true");

                // Send to server (without IP check)
                const response = await fetch(`${API_BASE}/stats?action=like`, {
                    method: 'POST',
                });

                if (response.ok) {
                    const data: StatsResponse = await response.json();
                    // Update with server response to sync
                    setLikes(data.likes);
                } else {
                    // If server fails, revert
                    console.error('Error liking');
                    setLikes(likes);
                    setHasLiked(false);
                    localStorage.removeItem("rutalegal_user_liked");
                }
            } catch (error) {
                console.error('Error liking:', error);
                // Revert on error
                setLikes(likes);
                setHasLiked(false);
                localStorage.removeItem("rutalegal_user_liked");
            }
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email && name) {
            try {
                const response = await fetch(`${API_BASE}/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email }),
                });

                if (response.ok) {
                    localStorage.setItem("rutalegal_registered", "true");
                    setRegistered(true);
                    setShowRegisterModal(false);
                    setShowSuccessModal(true);
                } else {
                    const error = await response.json();
                    console.error('Error registering:', error);
                    // Still mark as registered locally to avoid annoying the user
                    localStorage.setItem("rutalegal_registered", "true");
                    setRegistered(true);
                    setShowRegisterModal(false);
                }
            } catch (error) {
                console.error('Error registering:', error);
                // Still mark as registered locally
                localStorage.setItem("rutalegal_registered", "true");
                setRegistered(true);
                setShowRegisterModal(false);
            }
        }
    };

    return (
        <>
            {/* Floating Stats Bar */}
            <AnimatePresence mode="wait">
                {!isExpanded ? (
                    <motion.div
                        key="collapsed"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="fixed bottom-6 right-6 z-50"
                    >
                        <Button
                            onClick={() => setIsExpanded(true)}
                            className="rounded-full h-14 w-14 shadow-2xl bg-primary hover:bg-primary/90 flex items-center justify-center"
                        >
                            <TrendingUp className="h-6 w-6 text-white" />
                        </Button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="expanded"
                        initial={{ scale: 0.8, opacity: 0, x: 20, y: 20 }}
                        animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, x: 20, y: 20 }}
                        className="fixed bottom-6 right-6 z-[100] max-w-[calc(100vw-3rem)]"
                        style={{ transformOrigin: "bottom right" }}
                    >
                        <Card className="shadow-2xl border-2 border-primary/20 bg-background/95 backdrop-blur rounded-3xl relative">
                            <Button
                                size="icon"
                                variant="ghost"
                                className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-background border shadow-md z-10 hover:bg-muted"
                                onClick={() => setIsExpanded(false)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                            <CardContent className="p-4">
                                <div className="flex items-center justify-center gap-4 flex-wrap sm:flex-nowrap">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-2 text-sm"
                                    >
                                        <Eye className="h-4 w-4 text-blue-500" />
                                        <div>
                                            <div className="font-bold text-lg">{visits.toLocaleString()}</div>
                                            <div className="text-xs text-muted-foreground">Visitas</div>
                                        </div>
                                    </motion.div>

                                    <div className="h-8 w-px bg-border" />

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleLike}
                                        disabled={hasLiked}
                                        className="flex items-center gap-2 text-sm cursor-pointer disabled:cursor-not-allowed"
                                    >
                                        <Heart
                                            className={`h-4 w-4 transition-colors ${hasLiked ? "fill-red-500 text-red-500" : "text-gray-400"
                                                }`}
                                        />
                                        <div>
                                            <div className="font-bold text-lg">{likes.toLocaleString()}</div>
                                            <div className="text-xs text-muted-foreground">
                                                {hasLiked ? "Te gusta" : "Me gusta"}
                                            </div>
                                        </div>
                                    </motion.button>

                                    <div className="h-8 w-px bg-border" />

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setShowRegisterModal(true)}
                                        className="flex items-center gap-2 text-sm cursor-pointer"
                                    >
                                        <UserPlus className="h-4 w-4 text-green-500" />
                                        <div className="text-xs font-semibold text-primary">
                                            {registered ? "Registrado ✓" : "Regístrate"}
                                        </div>
                                    </motion.button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Registration Modal */}
            <AnimatePresence>
                {showRegisterModal && !registered && (
                    <Dialog open={showRegisterModal} onOpenChange={setShowRegisterModal}>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle className="text-2xl">
                                    ¡Únete a Rutalegal! 🎯
                                </DialogTitle>
                                <DialogDescription className="text-base">
                                    Regístrate para recibir asesoría legal gratuita, actualizaciones sobre tus derechos y recursos exclusivos.
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleRegister} className="space-y-4 mt-4">
                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Tu nombre completo"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Tu correo electrónico"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full"
                                    />
                                </div>
                                <div className="flex gap-3">
                                    <Button type="submit" className="flex-1" size="lg">
                                        <UserPlus className="h-4 w-4 mr-2" />
                                        Registrarme Gratis
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setShowRegisterModal(false)}
                                    >
                                        Después
                                    </Button>
                                </div>
                                <p className="text-xs text-muted-foreground text-center">
                                    No compartiremos tu información. Sin spam.
                                </p>
                            </form>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>

            {/* Success Modal */}
            <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-center text-green-600">
                            ¡Registro Exitoso! 🎉
                        </DialogTitle>
                        <DialogDescription className="text-center text-lg pt-4">
                            ¡Gracias por registrarte! Te mantendremos informado sobre nuestros servicios legales.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center mt-4">
                        <Button onClick={() => setShowSuccessModal(false)} className="w-full sm:w-auto min-w-[120px]">
                            Aceptar
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
