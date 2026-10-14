import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="theme-page flex min-h-[calc(100vh-64px)] items-center">
            <div className="page-shell w-full text-center">
                <h1 className="theme-text-primary text-6xl font-bold sm:text-8xl">404</h1>
                <p className="theme-text-secondary mt-4 text-xl">Página não encontrada</p>
                <p className="theme-text-muted mt-2 text-base">
                    O endereço que você tentou acessar não existe.
                </p>
                
                <Link 
                    to="/" 
                    className="mt-8 inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-8 py-3 text-sm font-semibold text-[var(--color-accent-contrast)] transition-all hover:opacity-90"
                >
                    Voltar para home
                </Link>
            </div>
        </main>
    );
}
