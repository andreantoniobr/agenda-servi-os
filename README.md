# Agenda de Serviços - Projeto Fullstack Next.js

📝 **Descrição**

Aplicação de agendamento de serviços, desenvolvida com Next.js, TypeScript, Tailwind CSS e HeroUI/NextUI.

O projeto possui:

- Cadastro e login de usuários com autenticação via JWT
- Dashboard do usuário
- CRUD completo para Usuários, Profissionais e Agendamentos
- Rotas protegidas com middleware de autenticação
- Estrutura de API pronta para integração com MongoDB Atlas

🚀 **Tecnologias utilizadas**

- Next.js (App Router / TypeScript)
- Tailwind CSS
- HeroUI / NextUI
- MongoDB Atlas (via Mongoose)
- JWT para autenticação
- bcryptjs para hash de senha

📂 **Estrutura de pastas**

/app
/api
/usuarios
route.ts # CRUD de usuários
/login
route.ts # Login com JWT
/profissionais
route.ts # CRUD de profissionais
/agendamentos
route.ts # CRUD de agendamentos
/cadastro
page.tsx # Página de cadastro
/login
page.tsx # Página de login
/dashboard
page.tsx # Dashboard do usuário
/components
Navbar.tsx # Navbar reutilizável
layout.tsx
loading.tsx
not-found.tsx
/lib
mongodb.ts # Conexão com MongoDB
auth.ts # Funções de geração de token JWT
authMiddleware.ts # Middleware de autenticação
/models
usuario.ts
profissional.ts
agendamento.ts
.env.local # Variáveis de ambiente (não subir valores sensíveis)


⚙️ **Configuração do ambiente**

1. Instalar dependências:

```bash
npm install

Criar arquivo .env.local na raiz do projeto com as variáveis:
MONGODB_URI=COLE_SUA_URI_AQUI
JWT_SECRET=COLE_UMA_CHAVE_SECRETA
NEXTAUTH_URL=http://localhost:3000

Rodar o projeto localmente:
npm run dev