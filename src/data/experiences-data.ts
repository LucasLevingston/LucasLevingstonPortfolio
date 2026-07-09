import { enterpriseLogos } from '../assets/images'
import { ExperienceType } from '../types/ExperienceType'

export const experiencesDataBr: ExperienceType[] = [
  {
    enterprise: 'AI/R',
    location: 'Remoto',
    startsDate: '07/2026',
    endsDate: 'Atual',
    role: 'Desenvolvedor Front-End',
    logo: enterpriseLogos.air,
    features: [
      'Desenvolvimento e manutenção de aplicações web utilizando <span className="highlight">React.js</span>, <span className="highlight">Next.js</span> e <span className="highlight">TypeScript</span>',
      'Implementação de interfaces modernas, responsivas e acessíveis com <span className="highlight">Tailwind CSS</span>, seguindo Design Systems e boas práticas de UI/UX',
      'Consumo e integração de APIs RESTful com foco em escalabilidade e performance',
      'Aplicação de princípios <span className="highlight">SOLID</span>, <span className="highlight">Clean Code</span> e arquitetura front-end escalável, incluindo <span className="highlight">micro-frontends</span>',
      'Gerenciamento de estado com <span className="highlight">Redux</span> e uso avançado de <span className="highlight">React Hooks</span> (useMemo, useCallback, useEffect, hooks customizados)',
      'Otimização de <span className="highlight">performance</span> com estratégias de <span className="highlight">cache</span>, memoization, code splitting e lazy loading',
      'Implementação de <span className="highlight">testes</span> unitários e de integração para garantir qualidade e confiabilidade do código',
      'Tipagem estática com <span className="highlight">TypeScript</span>, elevando segurança e manutenibilidade do código',
      'Colaboração em equipes ágeis utilizando Git, Code Review e metodologias Scrum/Kanban',
      'Atuação na correção de bugs, implementação de novas funcionalidades e melhoria contínua da experiência do usuário',
      'Desenvolvimento com foco em qualidade, performance e manutenibilidade do código',
    ],
  },

  {
    enterprise: 'Freelancer Full-Stack',
    location: 'Remoto',
    startsDate: '01/2023',
    endsDate: 'Atual',
    role: 'Desenvolvedor Full-Stack',
    features: [
      'Criação de aplicações full-stack completas utilizando <span className="highlight">React</span>, <span className="highlight">Next.js</span>, <span className="highlight">Node.js</span>, Fastify, Express, <span className="highlight">Prisma</span> e <span className="highlight">TypeScript</span>, com integração de bancos relacionais e não-relacionais (<span className="highlight">PostgreSQL</span>, <span className="highlight">MongoDB</span>)',
      'Implementação de sistemas de pagamento completos com <span className="highlight">Stripe</span> (pagamentos únicos, recorrentes, subscriptions, webhooks e reconciliação) e <span className="highlight">Mercado Pago</span> (Pix, cartão, QRCode, callbacks e antifraude)',
      'Construção de APIs <span className="highlight">confiáveis</span> e bem documentadas com <span className="highlight">logs estruturados</span>, versionamento, documentação <span className="highlight">Swagger</span> e tratamento profissional de erros',
      'Desenvolvimento de interfaces com <span className="highlight">ShadCN UI</span> + <span className="highlight">Tailwind CSS</span>, componentização, acessibilidade e design system consistente',
      'Configuração de ambientes e <span className="highlight">CI/CD</span> em <span className="highlight">Vercel</span>, <span className="highlight">Render</span> e <span className="highlight">AWS</span> com pipelines de build, testes e deploy automático',
      'Uso de <span className="highlight">Docker</span> para padronização de ambiente, containers de banco e orquestração local',
      'Implementação de testes unitários e de integração com <span className="highlight">Vitest</span>, <span className="highlight">Jest</span> e <span className="highlight">Supertest</span>',
      'Aplicação de práticas de segurança: autenticação <span className="highlight">JWT</span>, controle de permissões (<span className="highlight">RBAC</span>), <span className="highlight">CORS</span>, logs estruturados e variáveis de ambiente',
      'Domínio em performance front-end com <span className="highlight">SSR</span>, <span className="highlight">SSG</span>, <span className="highlight">ISR</span>, <span className="highlight">code splitting</span>, memoization, <span className="highlight">SWR/TanStack Query</span> e otimização de assets',
      'Gestão completa com clientes: captura de requisitos, prototipação, estimativas, entregas por sprint e <span className="highlight">handoff técnico</span>',
      'Experiência em manutenção e evolução de sistemas existentes, incluindo <span className="highlight">refatoração</span>, melhorias de <span className="highlight">UI/UX</span> e migração de stack',
    ],
  },

  {
    enterprise: 'Anhanguera',
    location: 'Patos, PB',
    startsDate: '06/2023',
    endsDate: '06/2024',
    role: 'Estagiário de Desenvolvimento Web',
    logo: enterpriseLogos.anhanguera,
    features: [
      'Construção de <span className="highlight">CRM</span> para gerenciar vendas e alunos da cidade de Patos, PB, com back-end usando API REST + banco de dados (<span className="highlight">Prisma</span> + <span className="highlight">MongoDB</span>)',
      'Estruturação da arquitetura da API REST (camadas, serviços, repositórios, middlewares e DTOs)',
      'Implementação de autenticação, segurança básica, validação de dados, tratamento de erros e documentação de APIs',
      'Implementação de testes unitários e de integração',
      'Análise de requisitos, documentação e organização do código',
    ],
  },

  {
    enterprise: 'EndoDerm',
    location: 'Patos, PB',
    startsDate: '06/2022',
    endsDate: '10/2022',
    role: 'Atendente de consultório médico',
    features: [
      'Agendamento de consultas, organização de planilhas e atendimento ao público',
    ],
  },
]

export const experiencesDataEn: ExperienceType[] = [
  {
    enterprise: 'AI/R',
    location: 'Remote',
    startsDate: '07/2026',
    endsDate: 'Present',
    role: 'Front-End Developer',
    logo: enterpriseLogos.air,
    features: [
      'Development and maintenance of web applications using <span className="highlight">React.js</span>, <span className="highlight">Next.js</span>, and <span className="highlight">TypeScript</span>',
      'Implementation of modern, responsive, and accessible interfaces with <span className="highlight">Tailwind CSS</span>, following Design Systems and UI/UX best practices',
      'Consumption and integration of RESTful APIs focused on scalability and performance',
      'Application of <span className="highlight">SOLID</span> principles, <span className="highlight">Clean Code</span>, and scalable front-end architecture, including <span className="highlight">micro-frontends</span>',
      'State management with <span className="highlight">Redux</span> and advanced use of <span className="highlight">React Hooks</span> (useMemo, useCallback, useEffect, custom hooks)',
      'Performance optimization with <span className="highlight">caching</span> strategies, memoization, code splitting, and lazy loading',
      'Implementation of unit and integration <span className="highlight">tests</span> to ensure code quality and reliability',
      'Static typing with <span className="highlight">TypeScript</span>, improving code safety and maintainability',
      'Collaboration in agile teams using Git, Code Review, and Scrum/Kanban methodologies',
      'Bug fixing, new feature implementation, and continuous improvement of user experience',
      'Development focused on code quality, performance, and maintainability',
    ],
  },

  {
    enterprise: 'Full-Stack Freelancer',
    location: 'Remote',
    startsDate: '01/2023',
    endsDate: 'Present',
    role: 'Full-Stack Developer',
    features: [
      'Creation of complete full-stack applications using <span className="highlight">React</span>, <span className="highlight">Next.js</span>, <span className="highlight">Node.js</span>, Fastify, Express, <span className="highlight">Prisma</span>, and <span className="highlight">TypeScript</span>, with integration of relational and non-relational databases (<span className="highlight">PostgreSQL</span>, <span className="highlight">MongoDB</span>)',
      'Implementation of complete payment systems with <span className="highlight">Stripe</span> (single payments, recurring, subscriptions, webhooks, and reconciliation) and <span className="highlight">Mercado Pago</span> (Pix, card, QRCode, callbacks, and anti-fraud)',
      'Construction of <span className="highlight">reliable</span>, well-documented APIs with <span className="highlight">structured logging</span>, versioning, <span className="highlight">Swagger</span> documentation and professional error handling',
      'Development of interfaces with <span className="highlight">ShadCN UI</span> + <span className="highlight">Tailwind CSS</span>, componentization, accessibility, and consistent design system',
      'Configuration of environments and <span className="highlight">CI/CD</span> on <span className="highlight">Vercel</span>, <span className="highlight">Render</span>, and <span className="highlight">AWS</span> with build pipelines, tests, and automatic deployment',
      'Use of <span className="highlight">Docker</span> for environment standardization, database containers, and local orchestration',
      'Implementation of unit and integration tests with <span className="highlight">Vitest</span>, <span className="highlight">Jest</span>, and <span className="highlight">Supertest</span>',
      'Application of security practices: <span className="highlight">JWT</span> authentication, permission control (<span className="highlight">RBAC</span>), <span className="highlight">CORS</span>, structured logging, and environment variables',
      'Expertise in front-end performance with <span className="highlight">SSR</span>, <span className="highlight">SSG</span>, <span className="highlight">ISR</span>, <span className="highlight">code splitting</span>, memoization, <span className="highlight">SWR/TanStack Query</span> and asset optimization',
      'Complete client management: requirements capture, prototyping, estimations, sprint deliveries, and <span className="highlight">technical handoff</span>',
      'Experience in maintenance and evolution of existing systems, including <span className="highlight">refactoring</span>, <span className="highlight">UI/UX</span> improvements, and stack migration',
    ],
  },

  {
    enterprise: 'Anhanguera',
    location: 'Patos, PB',
    startsDate: '06/2023',
    endsDate: '06/2024',
    role: 'Web Development Intern',
    logo: enterpriseLogos.anhanguera,
    features: [
      'Construction of a <span className="highlight">CRM</span> to manage sales and students in the city of Patos, PB, with back-end using REST API + database (<span className="highlight">Prisma</span> + <span className="highlight">MongoDB</span>)',
      'Structuring of the REST API architecture (layers, services, repositories, middlewares and DTOs)',
      'Implementation of authentication, basic security, data validation, error handling and API documentation',
      'Implementation of unit and integration tests',
      'Requirements analysis, documentation and code organization',
    ],
  },

  {
    enterprise: 'EndoDerm',
    location: 'Patos, PB',
    startsDate: '06/2022',
    endsDate: '10/2022',
    role: 'Medical Office Attendant',
    features: [
      'Scheduled appointments, organized spreadsheets, and provided customer service',
    ],
  },
]
