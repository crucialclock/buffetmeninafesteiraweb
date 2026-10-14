# Web Vite Starter

Um starter pack moderno para desenvolvimento rápido de landing pages com Vite + React.

## Stack

- **Vite 8** - Build tool rápido
- **React 19** - Biblioteca UI
- **TypeScript 6** - Type safety
- **Tailwind CSS 4** - Styling utilitário
- **React Router DOM 7** - Roteamento
- **Motion (Framer Motion)** - Animações
- **Lucide React** - Ícones
- **ESLint** - Linting

## Estrutura de Pastas

```
src/
├── api/              # Integração com APIs
│   ├── core/         # Utilitários da API
│   ├── resources/    # Endpoints
│   └── types/        # Tipos de dados da API
├── assets/           # Imagens, fontes, etc
├── components/       # Componentes React
│   ├── analytics/    # Analytics
│   ├── brand/        # Elementos de marca
│   ├── feedback/     # Feedback UI
│   ├── layout/       # Layout base
│   └── seo/          # SEO
├── config/           # Configurações do projeto
├── features/         # Features por domínio
├── pages/            # Páginas principais
├── services/         # Serviços (analytics, etc)
└── styles/           # Estilos globais
```

## Começando

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Build para produção:
```bash
npm run build
```

4. Preview da build:
```bash
npm run preview
```

## Configuração

Edite o arquivo `src/config/site.ts` com as informações do seu projeto:

```typescript
export const siteConfig = {
    brandName: "Seu Projeto",
    siteUrl: "https://seusite.com.br",
    contactEmail: "contato@seusite.com.br",
    // ...
};
```

## Customização de Tema

Os tokens de design estão em `src/styles/index.css` no bloco `@theme`:

```css
@theme {
    --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
    --color-canvas: #ffffff;
    --color-accent: #000000;
    // ...
}
```

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run lint` - Executa ESLint
- `npm run preview` - Preview da build de produção

## Baseado em

Este starter pack foi criado baseado na arquitetura do projeto limosin-web.
