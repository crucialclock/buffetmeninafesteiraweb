import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { siteConfig } from "../../config/site";
import logoImg from "../../assets/logo.svg";
import { MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(siteConfig.whatsappMessage);
        window.open(`https://wa.me/${siteConfig.whatsapp}?text=${message}`, "_blank");
    };

    return (
        <footer className="w-full border-t border-[var(--color-border-soft)] bg-[var(--color-canvas)] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-canvas-strong)] opacity-50" />

            {/* Reduzido de py-12 lg:py-16 para py-8 */}
            <div className="page-shell py-8 relative z-10">
                {/* Reduzido de gap-8 para gap-5 */}
                <div className="flex flex-col items-center gap-5">
                    {/* Logo */}
                    {/* Reduzido de gap-4 para gap-1 */}
                    <div className="flex flex-col items-center gap-1">
                        {/* Reduzido o tamanho da logo de h-20/24 para h-14/16 */}
                        <img src={logoImg} alt={siteConfig.brandName} className="h-20 lg:h-24 w-auto object-contain" />
                        <p className="theme-text-secondary text-sm text-center max-w-md">+8 anos criando memórias!</p>
                    </div>

                    {/* Social Links */}
                    {/* Reduzido de gap-6 para gap-4 */}
                    <div className="flex items-center gap-4">
                        {/* Botões reduzidos de w-12/h-12 para w-10/h-10 */}
                        <button onClick={handleWhatsAppClick} className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border-soft)] flex items-center justify-center theme-text-secondary hover:border-[var(--color-gold)] hover:gold-accent transition-all duration-300 hover:scale-110" aria-label="WhatsApp">
                            <FaWhatsapp size={18} />
                        </button>

                        <a href={siteConfig.instagram} className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border-soft)] flex items-center justify-center theme-text-secondary hover:border-[var(--color-gold)] hover:gold-accent transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram size={18} />
                        </a>

                        <a href={siteConfig.instagram} className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border-soft)] flex items-center justify-center theme-text-secondary hover:border-[var(--color-gold)] hover:gold-accent transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <MapPin size={18} />
                        </a>
                    </div>

                    {/* Copyright */}
                    {/* Adicionada uma leve margem top (mt-1) para separar um pouco dos ícones */}
                    <div className="text-center mt-1">
                        <p className="theme-text-muted text-xs">
                            © {currentYear} {siteConfig.brandName}. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
