import { projectImages } from '@/assets/images'
import type { ProjectType } from '@/types/ProjectType'

export const projectsDataBr: ProjectType[] = [
  {
    title: 'ExpertGP',
    favorite: true,
    description:
      'Sistema de gestão pública municipal com dashboards em tempo real.',
    about:
      'Plataforma para gestão de programas, ações, indicadores, funcionários e contratos. Inclui autenticação com permissões avançadas, logs de auditoria, integração com Mercado Pago e deploy automatizado em AWS com CI/CD completo.',
    technologies: [
      'react',
      'typescript',
      'vite',
      'tailwindcss',
      'shadcn',
      'zustand',
      'tanstackquery',
      'fastify',
      'nodejs',
      'prisma',
      'postgresql',
      'docker',
      'vitest',
      'amazonwebservices',
      'mercadopago',
    ],
    features: [
      'Dashboards em tempo real com sincronização eficiente (<span className="highlight">TanStack Query</span>)',
      'Autenticação <span className="highlight">JWT</span> + Refresh Token com <span className="highlight">RBAC</span> avançado',
      'Logs de auditoria e rastreamento de ações',
      'Clean Architecture com separação de responsabilidades',
      'Testes automatizados (unit + integration com <span className="highlight">Vitest</span>)',
      '<span className="highlight">CI/CD</span> completo (build → testes → deploy)',
      'Ambientes isolados (dev/staging/prod) em <span className="highlight">AWS</span>',
      'Integração <span className="highlight">Mercado Pago</span> para transações',
      'Validações com <span className="highlight">Zod</span> e schemas tipados',
      'Componentes reutilizáveis com <span className="highlight">ShadCN UI</span>',
    ],
    link: 'https://expert-gp.vercel.app/',
    isMobile: false,
    showEvolution: false,
    startsDate: '06/2025',
    isDeveloping: true,
  },

  {
    title: 'Consulta Fácil',
    favorite: true,
    description:
      'Plataforma de consultas médicas com pagamentos integrados via Stripe.',
    about:
      'Permite agendamento de consultas, gerenciamento de pacientes e processamento seguro de pagamentos. Suporta 100+ agendamentos simultâneos, oferece autenticação JWT com NextAuth e revalidação dinâmica de dados.',
    technologies: [
      'nextjs',
      'typescript',
      'stripe',
      'nodejs',
      'tailwindcss',
      'postgresql',
      'prisma',
      'docker',
      'git',
      'github',
      'zod',
      'jwt',
      'shadcn',
      'nextauth',
    ],
    features: [
      'Integração completa com <span className="highlight">Stripe</span>: pagamentos, cartões salvos e webhooks',
      'Reprocessamento automático de falhas e conciliação de transações',
      'Escalabilidade para <span className="highlight">100+ agendamentos</span> simultâneos',
      'SSR otimizado com <span className="highlight">Next.js</span> (ISR dinâmico)',
      '<span className="highlight">NextAuth</span> com proteção de rotas e sessão server-side',
      'Validação com <span className="highlight">Zod</span> (front + back)',
      'Logs estruturados e monitoramento de transações',
      'Deploy automático em <span className="highlight">Vercel</span> (CD)',
      'Interface responsiva com <span className="highlight">ShadCN UI</span> + Tailwind',
      'Segurança com <span className="highlight">JWT</span> + Refresh Tokens',
    ],
    images: projectImages.consultaFacil,
    link: 'https://consulta-facil-next.vercel.app/',
    repositoryUrl: 'https://github.com/LucasLevingston/consultaFacil',
  },

  {
    title: 'Verbo Hub',
    favorite: true,
    description:
      'Sistema de gestão de eventos para comunidades com suporte a participantes ilimitados.',
    about:
      'Gerencia eventos com balanceamento de carga automático para 200+ participantes simultâneos. Oferece 99,9% de uptime com infraestrutura em AWS, painel administrativo com componentes reutilizáveis e documentação de API com Swagger.',
    images: projectImages.verbo,
    technologies: [
      'react',
      'typescript',
      'nodejs',
      'express',
      'tailwindcss',
      'docker',
      'vite',
      'swagger',
      'postgresql',
      'prisma',
      'vitest',
      'postman',
      'amazonwebservices',
      'git',
      'github',
    ],
    features: [
      '<span className="highlight">AWS CloudFront</span> (CDN) + Elastic Beanstalk com <span className="highlight">99,9% uptime</span>',
      'Balanceamento de carga automático para eventos com <span className="highlight">200+ participantes</span>',
      'Suporte a participantes ilimitados com elasticidade',
      'Cache estratégico em endpoints críticos para performance',
      'Testes automatizados com <span className="highlight">Vitest</span> (prevenção de regressões)',
      'Documentação de API com <span className="highlight">Swagger/OpenAPI</span>',
      'Deploy automatizado com <span className="highlight">Docker</span> + GitFlow',
      'Logs estruturados e monitoramento em produção',
      'Painel administrativo com componentes reutilizáveis',
      '<span className="highlight">CI/CD</span> com pipelines de entrega contínua',
    ],
  },

  {
    title: 'GymEvolution',

    description:
      'Sistema de acompanhamento de evolução na musculação com treinos e nutrição.',
    about:
      'Permite criar rotinas personalizadas, acompanhar progresso físico e nutricional em tempo real. Inclui autenticação JWT, validações com Zod e testes com Vitest. Banco de dados escalável de SQLite para desenvolvimento até PostgreSQL em produção.',
    images: projectImages.gymEvolution,
    technologies: [
      'react',
      'typescript',
      'nodejs',
      'fastify',
      'vite',
      'tailwindcss',
      'prisma',
      'swagger',
      'sqlite',
      'vitest',
      'eslint',
      'postman',
      'git',
      'github',
      'jwt',
      'rest',
      'shadcn',
      'zod',
    ],
    features: [
      'Rotinas de treino personalizadas com progressão',
      'Acompanhamento nutricional integrado',
      'Visualização de progresso físico em tempo real',
      'Arquitetura <span className="highlight">Fastify</span> para alta performance',
      'Validações com <span className="highlight">Zod</span> em toda a stack',
      'Testes unitários e de integração com <span className="highlight">Vitest</span>',
      'Documentação de API com <span className="highlight">Swagger</span>',
      'Segurança com <span className="highlight">JWT</span> + Refresh Tokens',
      'Escalabilidade: <span className="highlight">SQLite → PostgreSQL</span>',
      'Interface responsiva com <span className="highlight">ShadCN UI</span>',
    ],
    frontEndRepositoryUrl: 'https://github.com/LucasLevingston/gymevolution',
    backEndRepositoryUrl: 'https://github.com/LucasLevingston/gymevolutionAPI',
  },

  {
    title: 'CRM Splen',

    description:
      'Sistema CRM para gestão centralizada de leads e vendas de cursos.',
    about:
      'Centraliza leads, automatiza processos de vendas e oferece relatórios de performance. Implementa arquitetura em camadas com DTOs para validação, CI/CD com builds automatizados e Docker para padronização entre ambientes.',
    technologies: [
      'typescript',
      'react',
      'nodejs',
      'tailwindcss',
      'mongodb',
      'vite',
      'express',
      'docker',
      'prisma',
      'git',
      'github',
      'postman',
      'scrum',
      'eslint',
    ],
    features: [
      'Gerenciamento centralizado de leads',
      'Automação de processos de vendas',
      'Relatórios de performance detalhados',
      'Arquitetura em camadas (controllers, services, repositories)',
      'DTOs para validação de dados e consistência',
      '<span className="highlight">CI/CD</span> com builds automatizados',
      'Code reviews e linting automático (ESLint/Prettier)',
      'Docker para padronização dev/prod',
      'Metodologia <span className="highlight">Scrum</span> com sprints',
      '<span className="highlight">MongoDB</span> com <span className="highlight">Prisma</span> para acesso eficiente',
    ],
  },

  {
    title: 'Anéis de Poder',

    description:
      'E-commerce de customização de anéis com interface interativa.',
    about:
      'Permite customização visual de produtos, gerenciamento de inventário e processamento de pedidos. Implementa Repository Pattern, validações com Zod, testes com Vitest e documentação com Swagger. Deploy containerizado com Docker.',
    technologies: [
      'react',
      'typescript',
      'vite',
      'nodejs',
      'fastify',
      'tailwindcss',
      'postgresql',
      'sequelize',
      'docker',
      'git',
      'github',
      'postman',
      'zod',
      'jwt',
      'axios',
      'zustand',
      'vitest',
      'swagger',
    ],
    features: [
      'Customização interativa de produtos',
      'Gerenciamento de inventário integrado',
      'Repository Pattern + Dependency Injection',
      'Arquitetura orientada a testes',
      'Validações com <span className="highlight">Zod</span> em front e back',
      'Testes unitários e de integração com <span className="highlight">Vitest</span>',
      'Autenticação com <span className="highlight">JWT</span> e Refresh Tokens',
      'Documentação de API com <span className="highlight">Swagger</span>',
      'Deploy containerizado com <span className="highlight">Docker</span>',
      'CORS configurado e proteção de rotas',
    ],
    images: projectImages.aneis,
    repositoryUrl: 'https://github.com/LucasLevingston/AneisDePoder',
  },

  {
    title: 'DevStage',
    favorite: false,
    description: 'Plataforma de desenvolvimento com componentes reutilizáveis.',
    about:
      'Oferece design system consistente, geração automática de clientes HTTP com Orval e type-safety end-to-end. Utiliza SSR otimizado, cache com Redis e ORM Drizzle para queries type-safe.',
    technologies: [
      'react',
      'nextjs',
      'typescript',
      'nodejs',
      'fastify',
      'tailwindcss',
      'orval',
      'drizzle',
      'redis',
      'zod',
      'docker',
      'git',
    ],
    features: [
      'Geração automática de clientes HTTP com <span className="highlight">Orval</span>',
      'Type-safety end-to-end (back → front)',
      'SSR otimizado com <span className="highlight">Next.js</span>',
      'Cache estratégico com <span className="highlight">Redis</span>',
      'ORM <span className="highlight">Drizzle</span> com queries type-safe',
      'Design system consistente em toda plataforma',
      'Componentes reutilizáveis com padrões de composição',
      'Otimização avançada de bundle',
      'Docker + <span className="highlight">CI/CD</span> automatizado',
      'Developer experience otimizada',
    ],

    backEndRepositoryUrl: 'https://github.com/LucasLevingston/devstage-server',
    frontEndRepositoryUrl: 'https://github.com/LucasLevingston/devstage-client',
  },

  {
    title: 'Let me Ask',

    description:
      'Sistema de salas interativas com transcrição de áudio e respostas por IA.',
    about:
      'Processa áudio em tempo real, integra Google Gemini para transcrição e respostas automáticas. Sincroniza dados com TanStack Query, implementa clean architecture e suporta múltiplos canais de comunicação integrados.',
    technologies: [
      'nodejs',
      'fastify',
      'docker',
      'postgresql',
      'react',
      'vite',
      'tailwindcss',
      'tanstackquery',
      'drizzle',
      'gemini',
      'axios',
      'typescript',
      'jwt',
      'zod',
      'shadcn',
      'git',
    ],
    features: [
      'Processamento de áudio em tempo real',
      'Integração com <span className="highlight">Google Gemini</span> (IA)',
      'Transcrição automática de áudio',
      'Respostas automáticas alimentadas por IA',
      'Sincronização em tempo real com <span className="highlight">TanStack Query</span>',
      'Clean Architecture e separação de responsabilidades',
      'Hooks customizados para state management complexo',
      'ORM <span className="highlight">Drizzle</span> com queries type-safe',
      'Deploy e execução com <span className="highlight">Docker</span>',
      'Múltiplos canais de comunicação integrados',
    ],

    backEndRepositoryUrl:
      'https://github.com/LucasLevingston/let-me-ask-server',
    frontEndRepositoryUrl:
      'https://github.com/LucasLevingston/let-me-ask-client',
  },
  {
    title: 'Nearby - Mobile',
    description:
      'Aplicativo móvel para descobrir restaurantes próximos por geolocalização.',
    about:
      'Recomendações de estabelecimentos por localização, offline básico e integração com APIs nativas para melhor experiência móvel.',
    images: projectImages.nearby,
    repositoryUrl: 'https://github.com/LucasLevingston/Nearby',
    technologies: ['reactnative', 'typescript', 'expo', 'css3', 'git'],
    isMobile: true,
    features: [
      'Recomendações por <span className="highlight">geolocalização</span> e filtros contextuais',
      'Integração com APIs nativas (GPS, câmera) para melhor UX',
      'Cache e suporte <span className="highlight">offline</span> básico',
      'Notificações push para novidades e reservas',
      'Interface mobile otimizada com componentes reusáveis',
    ],
  },
  {
    title: 'Pass In Web',
    description: 'Plataforma para gestão de eventos com check-in automático.',
    about:
      'Automatiza check-in de participantes, controla presença em tempo real e oferece relatórios detalhados. Implementa validação robusta com Zod, autenticação JWT segura, testes com Vitest e documentação com Swagger.',
    images: projectImages.passInWeb.combined,
    technologies: [
      'vite',
      'react',
      'typescript',
      'tailwindcss',
      'git',
      'github',
      'nodejs',
      'fastify',
      'prisma',
      'sqlite',
      'zod',
      'jwt',
      'swagger',
      'vitest',
    ],
    features: [
      'Check-in automatizado de participantes',
      'Controle em tempo real de presença',
      'Relatórios detalhados por evento',
      'Validação com <span className="highlight">Zod</span> em toda a stack',
      'JWT seguro com proteção de rotas (<span className="highlight">JWT</span>)',
      'Testes unitários com <span className="highlight">Vitest</span>',
      'Documentação API com <span className="highlight">Swagger</span>',
      'Versionamento semântico com <span className="highlight">Git</span>',
      'Componentes modulares reutilizáveis',
      'Separação clara frontend/backend',
    ],
    frontEndRepositoryUrl:
      'https://github.com/LucasLevingston/pass-in-web-reactjs',
    backEndRepositoryUrl:
      'https://github.com/LucasLevingston/pass-in-web-nodejs',
  },
  {
    title: 'Blog Soft',
    description:
      'Plataforma de blog com CRUD completo e painel administrativo.',
    about:
      'Oferece sistema de publicação intuitivo, gerenciamento de conteúdo eficiente e interface otimizada para leitura. Implementa arquitetura RESTful com documentação Swagger, validação com Zod e aplicações de SEO.',
    repositoryUrl: 'https://github.com/LucasLevingston/Blog',
    technologies: [
      'react',
      'typescript',
      'nodejs',
      'fastify',
      'vite',
      'tailwindcss',
      'prisma',
      'swagger',
      'sqlite',
      'eslint',
      'postman',
      'git',
      'github',
      'zod',
      'jwt',
    ],
    features: [
      'Editor de publicações intuitivo e painel administrativo',
      'SEO básico e otimizações para leitura',
      'API REST documentada com <span className="highlight">Swagger</span>',
      'Validações com <span className="highlight">Zod</span>',
      'Autenticação e controle de permissões',
    ],
  },

  {
    title: 'Threads Clone',

    description:
      'Réplica da rede social Threads com posts, interações e navegação dinâmica.',
    about:
      'Implementa sistema de posts com interações, navegação dinâmica e gerenciamento de estado avançado. Autenticação social integrada, otimizações de performance e deploy em Vercel.',
    images: projectImages.threads,
    repositoryUrl: 'https://github.com/LucasLevingston/threads_app',
    link: 'https://threads-app-nextjs13.vercel.app/',
    technologies: [
      'react',
      'typescript',
      'nextjs',
      'tailwindcss',
      'mongodb',
      'git',
      'github',
      'vercel',
    ],
    features: [
      'Feed em tempo real com carregamento incremental',
      'Reações, comentários e compartilhamentos',
      'Autenticação social integrada',
      'SEO e otimizações de rendering (SSR/ISR)',
      'Deploy em <span className="highlight">Vercel</span>',
    ],
  },

  {
    title: 'Spotify Clone',

    description: 'Réplica da interface e funcionalidades do Spotify.',
    about:
      'Oferece navegação complexa, reprodução de áudio com gerenciamento de estado e interface responsiva. Backend com PostgreSQL e otimizações personalizadas para streaming de música.',
    images: projectImages.spotify,
    repositoryUrl: 'https://github.com/LucasLevingston/spotify-clone',
    link: 'https://spotify-nextjs13.vercel.app/',
    technologies: [
      'react',
      'typescript',
      'nextjs',
      'tailwindcss',
      'postgresql',
      'git',
      'github',
      'vercel',
    ],
    features: [
      'Reprodução de áudio com controle de fila e <span className="highlight">progress bar</span>',
      'Playlists e gerenciamento local de preferências',
      'Streaming otimizado com backend em <span className="highlight">PostgreSQL</span>',
      'UI responsiva para desktop e mobile',
      'Deploy e demonstração pública',
    ],
  },

  {
    title: 'Flexibble',

    description:
      'Plataforma para desenvolvedores compartilharem e colaborarem em projetos.',
    about:
      'Facilita networking profissional entre desenvolvedores com vitrine para projetos. Integração com APIs GraphQL, autenticação social e otimizações de SEO avançadas.',
    images: projectImages.flexibble,
    repositoryUrl: 'https://github.com/LucasLevingston/grafbase_Flexibble',
    link: 'https://flexibble-nexjs13.vercel.app/',
    technologies: [
      'react',
      'typescript',
      'nextjs',
      'graphql',
      'tailwindcss',
      'git',
      'github',
      'vercel',
    ],
    features: [
      'Vitrine para projetos com filtros e busca',
      'Autenticação e perfil de usuário',
      'Integração com <span className="highlight">GraphQL</span>',
      'SEO e otimizações para discoverability',
      'Compartilhamento fácil de projetos',
    ],
  },

  {
    title: 'RHControl',

    description:
      'Sistema para administração de recursos humanos e gestão de pessoal.',
    about:
      'Automatiza tarefas de RH, gera documentos automáticos e sincroniza dados em tempo real com Firebase. Oferece relatórios detalhados e interface consistente com design system ShadCN UI.',
    technologies: [
      'react',
      'typescript',
      'tailwindcss',
      'firebase',
      'vite',
      'git',
      'github',
      'shadcn',
      'zustand',
      'eslint',
    ],
    features: [
      'Relatórios em tempo real com <span className="highlight">Firebase</span>',
      'Autenticação e permissões centralizadas',
      'Design system com <span className="highlight">ShadCN UI</span>',
      'Componentes reutilizáveis e evolução de versão',
      'Sincronização de dados em tempo real',
    ],
    frontEndRepositoryUrl:
      'https://github.com/LucasLevingston/rhcontrol-project',
    showEvolution: true,
    versions: [
      {
        images: [
          projectImages.rhcontrol[0],
          projectImages.rhcontrol[1],
          projectImages.rhcontrol[2],
        ],
        technologies: [
          'react',
          'typescript',
          'tailwindcss',
          'firebase',
          'vite',
          'git',
          'github',
          'shadcn',
        ],
      },
      {
        images: [
          projectImages.rhcontrol[3],
          projectImages.rhcontrol[4],
          projectImages.rhcontrol[5],
          projectImages.rhcontrol[6],
        ],
        technologies: [
          'react',
          'typescript',
          'tailwindcss',
          'firebase',
          'vite',
          'git',
          'github',
          'zustand',
          'shadcn',
        ],
      },
    ],
  },

  {
    title: 'VI Sercomp',
    images: projectImages.sercomp,
    description:
      'Portal oficial do congresso acadêmico com informações e inscrições.',
    about:
      'Centraliza informações do evento, facilita processo de inscrição e oferece experiência unificada para participantes através de design responsivo e componentes modulares.',
    technologies: ['react', 'javascript', 'css3', 'git', 'vite', 'github'],
    link: 'https://sercomppb.com.br/',
    features: [
      'Página informativa do evento com agenda e palestrantes',
      'Formulário de inscrição e confirmação por e-mail',
      'Design responsivo para todos dispositivos',
      'SEO básico para descoberta do evento',
      'Deploy estável e monitoramento de uptime',
    ],
  },

  {
    title: 'Caputeeno',

    description: 'E-commerce com interface intuitiva e experiência otimizada.',
    about:
      'Oferece catálogo organizado, lazy loading e cache inteligente. Implementa otimizações de performance, gerenciamento de estado eficiente e checkout simplificado.',
    images: projectImages.caputeeno,
    repositoryUrl: 'https://github.com/LucasLevingston/capputeeno',
    technologies: [
      'vite',
      'react',
      'typescript',
      'tailwindcss',
      'nodejs',
      'graphql',
      'git',
      'github',
    ],
    features: [
      'Catálogo inteligente com <span className="highlight">lazy loading</span>',
      'Checkout simplificado e seguro',
      'Cache de assets e otimizações de performance',
      'Gestão de inventário e variantes de produto',
      'Interface responsiva com foco em conversão',
    ],
  },

  {
    title: 'Plann.er',
    favorite: false,
    description:
      'API para organização e gerenciamento colaborativo de viagens.',
    about:
      'Oferece APIs bem documentadas com Swagger, validação rigorosa com Zod e tratamento de erros padronizado. Facilita planejamento colaborativo e centraliza informações de viagens em grupo.',
    repositoryUrl: 'https://github.com/LucasLevingston/planner',
    technologies: [
      'typescript',
      'zod',
      'nodejs',
      'fastify',
      'prisma',
      'sqlite',
      'swagger',
      'git',
      'rest',
    ],
    features: [
      'APIs bem documentadas com <span className="highlight">Swagger</span>',
      'Validação com <span className="highlight">Zod</span> e tratamento de erros consistente',
      'Endpoints versionados e testáveis',
      'Autenticação básica e controle de acesso',
      'Logs e monitoramento para análise de uso',
    ],
  },

  {
    title: 'FocalPoint',
    favorite: false,
    description:
      'Gerenciador de tarefas com interface moderna e funcionalidades avançadas.',
    about:
      'Oferece organização eficiente de tarefas, validação em tempo real e feedback visual imediato. Implementa gerenciamento de estado otimizado com Zustand e sincronização de dados.',
    repositoryUrl: 'https://github.com/LucasLevingston/focalPoint',
    technologies: [
      'typescript',
      'react',
      'zod',
      'nodejs',
      'zustand',
      'axios',
      'shadcn',
      'tailwindcss',
      'git',
      'github',
    ],
    features: [
      'Quadro de tarefas com prioridade e filtros',
      'Sincronização de estado com <span className="highlight">Zustand</span>',
      'Feedback visual imediato e validações em tempo real',
      'Exportação de tarefas e relatórios simples',
      'Interfaces reutilizáveis para fluxo de trabalho',
    ],
  },

  {
    title: 'Gerenciamento Escolar',
    favorite: false,
    description:
      'Sistema educacional para controle de notas e desempenho acadêmico.',
    about:
      'Centraliza informações acadêmicas, facilita acompanhamento de desempenho e oferece relatórios detalhados. Utiliza Material UI para consistência visual e componentes prontos.',
    repositoryUrl: 'https://github.com/LucasLevingston/gerenciamento-escolar',
    technologies: ['javascript', 'react', 'bootstrap', 'axios', 'materialui'],
    features: [
      'Controle de notas e frequências',
      'Relatórios detalhados por aluno e turma',
      'Painel de administração com <span className="highlight">Material UI</span>',
      'Exportação de relatórios e documentos',
      'Configurações por perfil (professor/administrador)',
    ],
  },

  {
    title: 'Meu Portfólio',
    favorite: false,
    description:
      'Portfólio pessoal desenvolvido como primeiro projeto em React.',
    about:
      'Serve como vitrine profissional com apresentação organizada de projetos e habilidades. Implementa design responsivo com Tailwind CSS e animações sutis.',
    images: projectImages.meuPortfolio,
    repositoryUrl:
      'https://github.com/LucasLevingston/LucasLevingstonPortifolio',
    technologies: ['react', 'typescript', 'tailwindcss', 'git', 'github'],
    features: [
      'Design responsivo com foco em portfólio profissional',
      'Animações sutis para melhorar experiência',
      'Seção de projetos com links e repositórios',
      'Deploy público e fácil atualização',
    ],
  },

  {
    title: 'Campo Minado',
    favorite: false,
    description:
      'Implementação do clássico jogo Campo Minado com interface gráfica.',
    about:
      'Aplica padrões de design como Observer Pattern e programação orientada a objetos. Implementa lógica complexa de jogo, interface gráfica interativa e testes unitários.',
    images: projectImages.campoMinado,
    repositoryUrl: 'https://github.com/LucasLevingston/Campo_Minado',
    technologies: ['java'],
    features: [
      'Lógica de jogo completa com flags e abertura de células',
      'Padrões de design aplicados (<span className="highlight">Observer</span>)',
      'Interface gráfica com interação mouse/teclado',
      'Testes unitários cobrindo regras principais',
    ],
  },

  {
    title: 'Calculadora',
    favorite: false,
    description:
      'Calculadora funcional com interface gráfica e operações matemáticas.',
    about:
      'Implementa Observer Pattern para atualizações de interface e arquitetura modular. Oferece ferramenta para cálculos básicos com separação entre lógica de negócio e interface.',
    images: projectImages.calculadora,
    repositoryUrl: 'https://github.com/LucasLevingston/Calculadora.git',
    technologies: ['java'],
    features: [
      'Operações matemáticas básicas com interface gráfica',
      'Separação entre lógica e apresentação',
      'Atualização da UI via <span className="highlight">Observer Pattern</span>',
    ],
  },
]

export const projectsDataEn: ProjectType[] = [
  {
    title: 'ExpertGP',

    description:
      'Municipal public management system with real-time dashboards.',
    about:
      'Platform for managing programs, actions, indicators, employees, and contracts. Includes authentication with advanced permissions, audit logs, Mercado Pago integration, and automated AWS deployment with complete CI/CD.',
    technologies: [
      'react',
      'typescript',
      'vite',
      'tailwindcss',
      'shadcn',
      'zustand',
      'tanstackquery',
      'fastify',
      'nodejs',
      'prisma',
      'postgresql',
      'docker',
      'vitest',
      'amazonwebservices',
      'mercadopago',
    ],
    features: [
      'Real-time dashboards with efficient synchronization (TanStack Query)',
      'JWT + Refresh Token authentication with advanced RBAC',
      'Audit logs and action tracking',
      'Clean Architecture with separation of concerns',
      'Automated tests (unit + integration with Vitest)',
      'Complete CI/CD (build → tests → deploy)',
      'Isolated environments (dev/staging/prod) on AWS',
      'Mercado Pago integration for transactions',
      'Rigorous validations with Zod/typed schemas',
      'Reusable components with ShadCN UI',
    ],
    link: 'https://expert-gp.vercel.app/',
    isMobile: false,
    showEvolution: false,
    startsDate: '06/2025',
    isDeveloping: true,
  },

  {
    title: 'Consulta Fácil',

    description:
      'Medical consultation platform with Stripe integrated payments.',
    about:
      'Allows appointment scheduling, patient management, and secure payment processing. Supports 100+ simultaneous appointments, offers JWT authentication with NextAuth and dynamic data revalidation.',
    technologies: [
      'nextjs',
      'typescript',
      'stripe',
      'nodejs',
      'tailwindcss',
      'postgresql',
      'prisma',
      'docker',
      'git',
      'github',
      'zod',
      'jwt',
      'shadcn',
      'nextauth',
    ],
    features: [
      'Complete Stripe: single payments, saved cards, webhooks',
      'Automatic failure reprocessing + transaction reconciliation',
      'Scalability for 100+ simultaneous appointments',
      'Optimized SSR with Next.js (dynamic ISR revalidation)',
      'NextAuth with route protection and server-side session',
      'Rigorous validation with Zod (front + back)',
      'Structured logs + transaction monitoring',
      'Automatic deployment on Vercel with CD',
      'Responsive interface with ShadCN UI + Tailwind',
      'JWT + Refresh Tokens for security',
    ],
    images: projectImages.consultaFacil,
    link: 'https://consulta-facil-next.vercel.app/',
    repositoryUrl: 'https://github.com/LucasLevingston/consultaFacil',
  },

  {
    title: 'Verbo Hub',

    description:
      'Event management system for communities with unlimited participants support.',
    about:
      'Manages events with automatic load balancing for 200+ simultaneous participants. Offers 99.9% uptime with AWS infrastructure, administrative panel with reusable components, and API documentation with Swagger.',
    images: projectImages.verbo,
    technologies: [
      'react',
      'typescript',
      'nodejs',
      'express',
      'tailwindcss',
      'docker',
      'vite',
      'swagger',
      'postgresql',
      'prisma',
      'vitest',
      'postman',
      'amazonwebservices',
      'git',
      'github',
    ],
    features: [
      'AWS CloudFront (CDN) + Elastic Beanstalk with 99.9% uptime',
      'Automatic load balancing for events with 200+ participants',
      'Unlimited participants support with elasticity',
      'Strategic caching on critical endpoints',
      'Automated tests with Vitest (regression prevention)',
      'API documentation with Swagger/OpenAPI',
      'Automated deployment with Docker + GitFlow',
      'Structured logs + production monitoring',
      'Administrative panel with reusable components',
      'CI/CD with continuous delivery pipelines',
    ],
  },

  {
    title: 'GymEvolution',

    description:
      'Bodybuilding evolution tracking system with training and nutrition.',
    about:
      'Allows creating personalized routines, tracking physical and nutritional progress in real-time. Includes JWT authentication, Zod validations, and Vitest testing. Scalable database from SQLite for development to PostgreSQL in production.',
    images: projectImages.gymEvolution,
    technologies: [
      'react',
      'typescript',
      'nodejs',
      'fastify',
      'vite',
      'tailwindcss',
      'prisma',
      'swagger',
      'sqlite',
      'vitest',
      'eslint',
      'postman',
      'git',
      'github',
      'jwt',
      'rest',
      'shadcn',
      'zod',
    ],
    features: [
      'Personalized training routines with progression',
      'Integrated nutritional tracking',
      'Real-time physical progress visualization',
      'Fastify architecture for maximum performance',
      'Rigorous validations with Zod across stack',
      'Unit + integration tests with Vitest',
      'API documentation with Swagger',
      'JWT + Refresh Tokens for security',
      'SQLite → PostgreSQL easily scalable',
      'Responsive interface with ShadCN UI',
    ],
    frontEndRepositoryUrl: 'https://github.com/LucasLevingston/gymevolution',
    backEndRepositoryUrl: 'https://github.com/LucasLevingston/gymevolutionAPI',
  },

  {
    title: 'CRM Splen',

    description: 'CRM system for centralized lead and course sales management.',
    about:
      'Centralizes leads, automates sales processes, and provides performance reports. Implements layered architecture with DTOs for validation, CI/CD with automated builds, and Docker for environment standardization.',
    technologies: [
      'typescript',
      'react',
      'nodejs',
      'tailwindcss',
      'mongodb',
      'vite',
      'express',
      'docker',
      'prisma',
      'git',
      'github',
      'postman',
      'scrum',
      'eslint',
    ],
    features: [
      'Centralized lead management',
      'Sales process automation',
      'Detailed performance reports',
      'Layered architecture (controllers, services, repositories)',
      'DTOs for robust data validation',
      'CI/CD with automated builds',
      'Code reviews + automatic linting (ESLint/Prettier)',
      'Docker for dev/prod standardization',
      'Scrum methodology with sprints',
      'MongoDB with Prisma for efficient access',
    ],
  },

  {
    title: 'Rings of Power',

    description: 'Ring customization e-commerce with interactive interface.',
    about:
      'Allows visual product customization, inventory management, and order processing. Implements Repository Pattern, Zod validations, Vitest testing, and Swagger documentation. Containerized deployment with Docker.',
    technologies: [
      'react',
      'typescript',
      'vite',
      'nodejs',
      'fastify',
      'tailwindcss',
      'postgresql',
      'sequelize',
      'docker',
      'git',
      'github',
      'postman',
      'zod',
      'jwt',
      'axios',
      'zustand',
      'vitest',
      'swagger',
    ],
    features: [
      'Interactive product customization',
      'Integrated inventory management',
      'Repository Pattern + Dependency Injection',
      'Test-oriented architecture',
      'Zod validation on front + back',
      'Unit + integration tests with Vitest',
      'JWT + Refresh Tokens',
      'API documentation with Swagger',
      'Docker for consistent environments',
      'CORS configured + route protection',
    ],
    images: projectImages.aneis,
    repositoryUrl: 'https://github.com/LucasLevingston/AneisDePoder',
  },

  {
    title: 'DevStage',
    favorite: false,
    description: 'Development platform with reusable components.',
    about:
      'Provides consistent design system, automatic HTTP client generation with Orval, and end-to-end type-safety. Uses optimized SSR, Redis caching, and Drizzle ORM for type-safe queries.',
    technologies: [
      'react',
      'nextjs',
      'typescript',
      'nodejs',
      'fastify',
      'tailwindcss',
      'orval',
      'drizzle',
      'redis',
      'zod',
      'docker',
      'git',
    ],
    features: [
      'Automatic HTTP client generation with Orval',
      'End-to-end type-safety (back → front)',
      'Optimized SSR with Next.js',
      'Strategic caching with Redis',
      'Drizzle ORM with type-safe queries',
      'Consistent design system across platform',
      'Reusable components with composition patterns',
      'Advanced bundle optimization',
      'Docker + automated CI/CD',
      'Optimized developer experience',
    ],

    backEndRepositoryUrl: 'https://github.com/LucasLevingston/devstage-server',
    frontEndRepositoryUrl: 'https://github.com/LucasLevingston/devstage-client',
  },

  {
    title: 'Let me Ask',

    description:
      'Interactive classroom system with audio transcription and AI responses.',
    about:
      'Processes audio in real-time, integrates Google Gemini for transcription and automatic responses. Syncs data with TanStack Query, implements clean architecture, and supports multiple integrated communication channels.',
    technologies: [
      'nodejs',
      'fastify',
      'docker',
      'postgresql',
      'react',
      'vite',
      'tailwindcss',
      'tanstackquery',
      'drizzle',
      'gemini',
      'axios',
      'typescript',
      'jwt',
      'zod',
      'shadcn',
      'git',
    ],
    features: [
      'Real-time audio processing',
      'Google Gemini (IA) integration',
      'Automatic audio transcription',
      'AI-powered automatic responses',
      'Real-time synchronization with TanStack Query',
      'Clean Architecture + separation of concerns',
      'Custom hooks for complex state management',
      'Drizzle ORM with type-safe queries',
      'Docker for containerization',
      'Multiple integrated communication channels',
    ],

    backEndRepositoryUrl:
      'https://github.com/LucasLevingston/let-me-ask-server',
    frontEndRepositoryUrl:
      'https://github.com/LucasLevingston/let-me-ask-client',
  },

  {
    title: 'Nearby - Mobile',
    description: 'Mobile app to discover nearby restaurants by geolocation.',
    about:
      'Provides establishment recommendations based on location. Responsive interface with reusable components, integration with native device APIs, and efficient state management.',
    images: projectImages.nearby,
    repositoryUrl: 'https://github.com/LucasLevingston/Nearby',
    technologies: ['reactnative', 'typescript', 'expo', 'css3', 'git'],
    isMobile: true,
  },

  {
    title: 'Pass In Web',

    description: 'Event management platform with automated check-in.',
    about:
      'Automates participant check-in, controls real-time attendance, and provides detailed reports. Implements Zod validation, secure JWT authentication, Vitest testing, and Swagger documentation.',
    images: projectImages.passInWeb.combined,
    technologies: [
      'vite',
      'react',
      'typescript',
      'tailwindcss',
      'git',
      'github',
      'nodejs',
      'fastify',
      'prisma',
      'sqlite',
      'zod',
      'jwt',
      'swagger',
      'vitest',
    ],
    features: [
      'Automated participant check-in',
      'Real-time attendance control',
      'Detailed reports per event',
      'Validation with <span className="highlight">Zod</span> across the stack',
      'Secure JWT with route protection',
      'Unit tests with <span className="highlight">Vitest</span>',
      'API documentation with <span className="highlight">Swagger</span>',
      'Semantic versioning with <span className="highlight">Git</span>',
      'Reusable modular components',
      'Clear frontend/backend separation',
    ],
    frontEndRepositoryUrl:
      'https://github.com/LucasLevingston/pass-in-web-reactjs',
    backEndRepositoryUrl:
      'https://github.com/LucasLevingston/pass-in-web-nodejs',
  },

  {
    title: 'Blog Soft',
    description: 'Blog platform with complete CRUD and administrative panel.',
    about:
      'Provides intuitive publishing system, efficient content management, and reading-optimized interface. Implements RESTful architecture with Swagger documentation, Zod validation, and SEO best practices.',
    features: [
      'Editor de publicações intuitivo e painel administrativo',
      'SEO básico e otimizações para leitura',
      'API REST documentada com <span className="highlight">Swagger</span>',
      'Validações com <span className="highlight">Zod</span>',
      'Autenticação e controle de permissões',
    ],
    repositoryUrl: 'https://github.com/LucasLevingston/Blog',
    technologies: [
      'react',
      'typescript',
      'nodejs',
      'fastify',
      'vite',
      'tailwindcss',
      'prisma',
      'swagger',
      'sqlite',
      'eslint',
      'postman',
      'git',
      'github',
      'zod',
      'jwt',
    ],
  },

  {
    title: 'Threads Clone',

    description:
      'Threads social network replica with posts, interactions, and dynamic navigation.',
    about:
      'Implements post system with interactions, dynamic navigation, and advanced state management. Integrated social authentication, performance optimizations, and Vercel deployment.',
    images: projectImages.threads,
    repositoryUrl: 'https://github.com/LucasLevingston/threads_app',
    link: 'https://threads-app-nextjs13.vercel.app/',
    technologies: [
      'react',
      'typescript',
      'nextjs',
      'tailwindcss',
      'mongodb',
      'git',
      'github',
      'vercel',
    ],
    features: [
      'Feed em tempo real com carregamento incremental',
      'Reações, comentários e compartilhamentos',
      'Autenticação social integrada',
      'SEO e otimizações de rendering (SSR/ISR)',
      'Deploy em <span className="highlight">Vercel</span>',
    ],
  },

  {
    title: 'Spotify Clone',

    description: 'Spotify interface and functionality replica.',
    about:
      'Offers complex navigation, audio playback with state management, and responsive interface. PostgreSQL backend with personalized streaming optimizations.',
    images: projectImages.spotify,
    repositoryUrl: 'https://github.com/LucasLevingston/spotify-clone',
    link: 'https://spotify-nextjs13.vercel.app/',
    technologies: [
      'react',
      'typescript',
      'nextjs',
      'tailwindcss',
      'postgresql',
      'git',
      'github',
      'vercel',
    ],
    features: [
      'Reprodução de áudio com controle de fila e progress bar',
      'Playlists e gerenciamento local de preferências',
      'Streaming otimizado com backend em <span className="highlight">PostgreSQL</span>',
      'UI responsiva para desktop e mobile',
      'Deploy e demonstração pública',
    ],
  },

  {
    title: 'Flexibble',

    description:
      'Platform for developers to share and collaborate on projects.',
    about:
      'Facilitates professional networking between developers with project showcase. GraphQL API integration, social authentication, and advanced SEO optimizations.',
    images: projectImages.flexibble,
    repositoryUrl: 'https://github.com/LucasLevingston/grafbase_Flexibble',
    link: 'https://flexibble-nexjs13.vercel.app/',
    technologies: [
      'react',
      'typescript',
      'nextjs',
      'graphql',
      'tailwindcss',
      'git',
      'github',
      'vercel',
    ],
    features: [
      'Vitrine para projetos com filtros e busca',
      'Autenticação e perfil de usuário',
      'Integração com <span className="highlight">GraphQL</span>',
      'SEO e otimizações para discoverability',
      'Compartilhamento fácil de projetos',
    ],
  },

  {
    title: 'RHControl',

    description:
      'System for human resources administration and personnel management.',
    about:
      'Automates HR tasks, generates automatic documents, and syncs data in real-time with Firebase. Provides detailed reports and consistent interface with ShadCN UI design system.',
    technologies: [
      'react',
      'typescript',
      'tailwindcss',
      'firebase',
      'vite',
      'git',
      'github',
      'shadcn',
      'zustand',
      'eslint',
    ],
    features: [
      'Relatórios em tempo real com <span className="highlight">Firebase</span>',
      'Autenticação e permissões centralizadas',
      'Design system com <span className="highlight">ShadCN UI</span>',
      'Componentes reutilizáveis e evolução de versão',
      'Sincronização de dados em tempo real',
    ],
    frontEndRepositoryUrl:
      'https://github.com/LucasLevingston/rhcontrol-project',
    showEvolution: true,
    versions: [
      {
        images: [
          projectImages.rhcontrol[0],
          projectImages.rhcontrol[1],
          projectImages.rhcontrol[2],
        ],
        technologies: [
          'react',
          'typescript',
          'tailwindcss',
          'firebase',
          'vite',
          'git',
          'github',
          'shadcn',
        ],
      },
      {
        images: [
          projectImages.rhcontrol[3],
          projectImages.rhcontrol[4],
          projectImages.rhcontrol[5],
          projectImages.rhcontrol[6],
        ],
        technologies: [
          'react',
          'typescript',
          'tailwindcss',
          'firebase',
          'vite',
          'git',
          'github',
          'zustand',
          'shadcn',
        ],
      },
    ],
  },

  {
    title: 'VI Sercomp',
    images: projectImages.sercomp,
    description:
      'Official academic congress portal with information and registration.',
    about:
      'Centralizes event information, facilitates registration process, and provides unified experience for participants through responsive design and modular components.',
    technologies: ['react', 'javascript', 'css3', 'git', 'vite', 'github'],
    link: 'https://sercomppb.com.br/',
    features: [
      'Página informativa do evento com agenda e palestrantes',
      'Formulário de inscrição e confirmação por e-mail',
      'Design responsivo para todos dispositivos',
      'SEO básico para descoberta do evento',
      'Deploy estável e monitoramento de uptime',
    ],
  },

  {
    title: 'Caputeeno',

    description:
      'E-commerce with intuitive interface and optimized experience.',
    about:
      'Provides organized catalog, lazy loading, and intelligent caching. Implements performance optimizations, efficient state management, and simplified checkout.',
    images: projectImages.caputeeno,
    repositoryUrl: 'https://github.com/LucasLevingston/capputeeno',
    technologies: [
      'vite',
      'react',
      'typescript',
      'tailwindcss',
      'nodejs',
      'graphql',
      'git',
      'github',
    ],
    features: [
      'Catálogo inteligente com <span className="highlight">lazy loading</span>',
      'Checkout simplificado e seguro',
      'Cache de assets e otimizações de <span className="highlight">performance</span>',
      'Gestão de inventário e variantes de produto',
      'Interface responsiva com foco em conversão',
    ],
  },

  {
    title: 'Plann.er',
    favorite: false,
    description: 'API for collaborative travel organization and management.',
    about:
      'Provides well-documented APIs with Swagger, rigorous validation with Zod, and standardized error handling. Facilitates collaborative planning and centralizes group travel information.',
    repositoryUrl: 'https://github.com/LucasLevingston/planner',
    technologies: [
      'typescript',
      'zod',
      'nodejs',
      'fastify',
      'prisma',
      'sqlite',
      'swagger',
      'git',
      'rest',
    ],
    features: [
      'APIs bem documentadas com <span className="highlight">Swagger</span>',
      'Validação com <span className="highlight">Zod</span> e tratamento de erros consistente',
      'Endpoints versionados e testáveis',
      'Autenticação básica e controle de acesso',
      'Logs e monitoramento para análise de uso',
    ],
  },

  {
    title: 'FocalPoint',
    favorite: false,
    description: 'Task manager with modern interface and advanced features.',
    about:
      'Provides efficient task organization, real-time validation, and immediate visual feedback. Implements optimized state management with Zustand and data synchronization.',
    repositoryUrl: 'https://github.com/LucasLevingston/focalPoint',
    technologies: [
      'typescript',
      'react',
      'zod',
      'nodejs',
      'zustand',
      'axios',
      'shadcn',
      'tailwindcss',
      'git',
      'github',
    ],
    features: [
      'Quadro de tarefas com prioridade e filtros',
      'Sincronização de estado com <span className="highlight">Zustand</span>',
      'Feedback visual imediato e validações em tempo real',
      'Exportação de tarefas e relatórios simples',
      'Interfaces reutilizáveis para fluxo de trabalho',
    ],
  },

  {
    title: 'School Management',
    favorite: false,
    description:
      'Educational system for grade control and academic performance.',
    about:
      'Centralizes academic information, facilitates performance tracking, and provides detailed reports. Uses Material UI for visual consistency and ready-to-use components.',
    repositoryUrl: 'https://github.com/LucasLevingston/gerenciamento-escolar',
    technologies: ['javascript', 'react', 'bootstrap', 'axios', 'materialui'],
    features: [
      'Controle de notas e frequências',
      'Relatórios detalhados por aluno e turma',
      'Painel de administração com Material UI',
      'Exportação de relatórios e documentos',
      'Configurações por perfil (professor/administrador)',
    ],
  },

  {
    title: 'My Portfolio',
    favorite: false,
    description: 'Personal portfolio developed as first React project.',
    about:
      'Serves as professional showcase with organized project presentation and skills. Implements responsive design with Tailwind CSS and subtle animations.',
    images: projectImages.meuPortfolio,
    repositoryUrl:
      'https://github.com/LucasLevingston/LucasLevingstonPortifolio',
    technologies: ['react', 'typescript', 'tailwindcss', 'git', 'github'],
    features: [
      'Design responsivo com foco em portfólio profissional (<span className="highlight">Tailwind CSS</span>)',
      'Animações sutis para melhorar experiência',
      'Seção de projetos com links e repositórios',
      'Deploy público e fácil atualização',
    ],
  },

  {
    title: 'Minesweeper',
    favorite: false,
    description:
      'Classic Minesweeper game implementation with graphical interface.',
    about:
      'Applies design patterns like Observer Pattern and object-oriented programming. Implements complex game logic, interactive graphical interface, and unit tests.',
    images: projectImages.campoMinado,
    repositoryUrl: 'https://github.com/LucasLevingston/Campo_Minado',
    technologies: ['java'],
    features: [
      'Lógica de jogo completa com flags e abertura de células',
      'Padrões de design aplicados (Observer)',
      'Interface gráfica com interação mouse/teclado',
      'Testes unitários cobrindo regras principais',
    ],
  },

  {
    title: 'Calculator',
    favorite: false,
    description:
      'Functional calculator with graphical interface and math operations.',
    about:
      'Implements Observer Pattern for interface updates and modular architecture. Provides basic calculation tool with separated business logic and interface.',
    images: projectImages.calculadora,
    repositoryUrl: 'https://github.com/LucasLevingston/Calculadora.git',
    technologies: ['java'],
    features: [
      'Operações matemáticas básicas com interface gráfica',
      'Separação entre lógica e apresentação',
      'Atualização da UI via Observer Pattern',
    ],
  },
]
