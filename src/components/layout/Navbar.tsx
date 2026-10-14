import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "../../config/site";
import logoSvg from "../../assets/logo.svg";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Início", path: "/" },
        { name: "O Buffet", path: "#sobre" },
        { name: "Avaliações", path: "#avaliacoes" },
        { name: "Galeria", path: "#galeria" },
        { name: "Contato", path: "#contato" },
    ];

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(siteConfig.whatsappMessage);
        window.open(`https://wa.me/${siteConfig.whatsapp}?text=${message}`, "_blank");
        setMobileMenuOpen(false);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (path === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (path.startsWith("#")) {
            const element = document.querySelector(path);
            if (element) {
                const offset = 80; // navbar height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border-soft)] bg-[var(--color-canvas)] shadow-lg">
            <nav className="page-shell flex h-20 sm:h-24 items-center justify-between py-2">
                <Link to="/" onClick={(e) => handleNavClick(e as any, "/")} className="flex items-center group">
                    <img src={logoSvg} alt="Buffet Menina Festeira" className="h-14 sm:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.path} 
                            href={link.path} 
                            onClick={(e) => handleNavClick(e, link.path)} 
                            className="relative theme-text-secondary text-sm font-medium transition-all duration-300 group hover:theme-text-primary hover:gold-accent"
                        >
                            <span className="relative z-10">{link.name}</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 gold-bg transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <button onClick={handleWhatsAppClick} className="btn-primary text-sm px-5 py-2.5">
                        Solicitar orçamento
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden z-50 p-2 theme-text-primary hover:gold-accent motion-micro" aria-label="Toggle menu">
                    {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
                            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 250 }} className="fixed top-0 right-0 bottom-0 w-72 bg-[var(--color-canvas)] border-l border-[var(--color-border-strong)] shadow-2xl z-40 md:hidden">
                                {/* Header do Menu Mobile */}
                                <div className="border-b border-[var(--color-border-soft)] p-6 bg-[var(--color-canvas-strong)]">
                                    <h3 className="text-lg font-semibold theme-text-primary">Menu</h3>
                                </div>

                {/* Links de Navegação */}
                <div className="flex flex-col gap-1 p-4">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.path}
                            href={link.path}
                            onClick={(e) => handleNavClick(e, link.path)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="relative theme-text-secondary hover:theme-text-primary hover:gold-accent text-base font-medium py-4 px-4 rounded-lg hover:bg-[var(--color-gold-soft)] transition-all duration-300 group"
                        >
                            <span className="flex items-center justify-between">
                                {link.name}
                                <span className="text-xs opacity-0 group-hover:opacity-100 gold-text transition-opacity duration-300">→</span>
                            </span>
                            <span className="absolute bottom-0 left-4 w-0 h-px gold-bg group-hover:w-[calc(100%-2rem)] transition-all duration-300" />
                        </motion.a>
                    ))}
                </div>

                                {/* Botão de Orçamento */}
                                <div className="p-4 mt-auto absolute bottom-6 left-0 right-0">
                                    <motion.button onClick={handleWhatsAppClick} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="btn-primary w-full text-sm justify-center">
                                        Solicitar orçamento
                                    </motion.button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
