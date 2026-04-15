// 📁 Mapeamento de Estrutura do Projeto
//
// /
// ├── .env.example              // Variáveis de ambiente de exemplo
// ├── .gitignore                // Arquivos e pastas ignorados pelo Git
// ├── index.html                // Template HTML principal
// ├── metadata.json             // Metadados do projeto (nome, descrição, permissões)
// ├── package-lock.json         // Árvore de dependências exata do NPM
// ├── package.json              // Dependências e scripts do projeto NPM
// ├── tsconfig.json             // Configurações do compilador TypeScript
// ├── vite.config.ts            // Configurações do bundler Vite
// └── src/                      // Código fonte principal
//     ├── App.tsx               // Componente raiz da aplicação React
//     ├── index.css             // Estilos globais e configuração do Tailwind CSS
//     ├── main.tsx              // Ponto de entrada do React (renderização no DOM)
//     ├── components/           // Componentes de interface de usuário (UI)
//     │   ├── CardNav.css       // Estilos específicos para a navegação em cards
//     │   ├── CardNav.tsx       // Componente de navegação principal
//     │   ├── Contact.tsx       // Seção de formulário de contato
//     │   ├── FAQSection.tsx    // Seção de perguntas frequentes
//     │   ├── FloatingCTA.tsx   // Botão flutuante de Call to Action
//     │   ├── Footer.tsx        // Rodapé da página
//     │   ├── Header.tsx        // Cabeçalho da página
//     │   ├── Hero.tsx          // Seção principal (Hero) com menu
//     │   ├── Mission.tsx       // Seção de missão da empresa
//     │   ├── Portfolio.tsx     // Seção de portfólio/projetos com carrossel
//     │   ├── Process.tsx       // Seção de serviços e processos
//     │   ├── SmoothScroll.tsx  // Configuração de rolagem suave (Lenis)
//     │   ├── Values.tsx        // Seção de valores da empresa
//     │   └── ui/               // Componentes de UI genéricos e reutilizáveis
//     │       └── Image.tsx     // Componente de imagem otimizado com lazy loading
//     ├── data/                 // Dados estáticos e mocks
//     │   ├── portfolio.ts      // Dados dos projetos do portfólio
//     │   └── services.ts       // Dados dos serviços oferecidos
//     └── hooks/                // Hooks customizados do React (Lógica de negócio)
//         ├── useContactForm.ts // Lógica de estado e validação do formulário de contato
//         └── useScrollDirection.ts // Hook para detectar a direção da rolagem
//
// 🏗️ Arquitetura
// - /src/components: Contém os blocos de construção visuais da aplicação. Separados por seções da landing page e componentes genéricos (/ui).
// - /src/hooks: Isola a lógica de negócio (estado, validação, efeitos colaterais) da camada de visualização, seguindo o princípio de responsabilidade única (SRP).
// - /src/data: Centraliza dados estáticos, facilitando a manutenção e preparando o terreno para futura integração com CMS ou APIs.
//
// 🚀 Ponto de Entrada
// - src/main.tsx é responsável por iniciar a aplicação React e injetar o componente App no DOM.
// - index.html é o arquivo servido pelo servidor web que carrega o main.tsx.
//
// ⚙️ Configurações
// - vite.config.ts armazena parâmetros do empacotador e servidor de desenvolvimento.
// - tsconfig.json define as regras de compilação e tipagem do TypeScript.
// - package.json gerencia as dependências e scripts de execução do projeto.
