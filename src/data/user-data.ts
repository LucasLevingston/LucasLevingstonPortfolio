import { generalImages } from '@/assets/images'
import { UserType } from '../types/UserType'
import { certificatesDataBr, certificatesDataEn } from './certificates-data'
import { experiencesDataBr, experiencesDataEn } from './experiences-data'
import { formationDataBr, formationDataEn } from './formations-data'
import { hardSkillsDataBr, hardSkillsDataEn } from './hard-skills-data'
import { projectsDataBr, projectsDataEn } from './projects-data'
import {
  recommendationDataBr,
  recommendationDataEn,
} from './recommendations-data'
import { softSkillsBr, softSkillsEn } from './soft-skills-data'

export const userBr: UserType = {
  name: 'Lucas Levingston',
  completName: 'Lucas Levingston Araújo Gadelha Medeiros',
  description: `
  Desenvolvedor Full-Stack com <span class="highlight">3 anos de experiência</span> com freelas, projetos, estágios e startups. 
  Graduado em <span class="highlight">Ciência da Computação pela UEPB</span> e pós-graduando em 
  <span class="highlight">Desenvolvimento Web pela Faculeste</span>.
`,
  professionalProfile: `
Desenvolvedor Full-Stack com <span class="highlight">3 anos de experiência</span> com freelas, projetos, estágios e startups. 
Graduado em <span class="highlight">Ciência da Computação pela UEPB</span> e pós-graduando em 
<span class="highlight">Desenvolvimento Web pela Faculeste</span>.
<br/>
Atuação com <span class="highlight">React, Next.js, Node.js, Prisma, PostgreSQL, MongoDB, Fastify, TypeScript, Tailwind, Docker e AWS</span>, 
com domínio de <span class="highlight">arquitetura, testes, versionamento, CI/CD e Scrum</span>.
<br/>
Experiência em <span class="highlight">sistemas completos, escaláveis e prontos para produção</span>, com foco em 
<span class="highlight">qualidade, segurança, performance e previsibilidade de entregas</span>. Forte domínio de 
<span class="highlight">Clean Code, SOLID, arquiteturas de software, documentação, pipelines automatizados</span>, 
automação de deploy e padrões de projeto.
<br/>
Interesse em desenvolvimento <span class="highlight">Full-Stack, Front-End e Back-End</span>.
`,
  resumeUrl:
    'https://docs.google.com/document/d/1qI_1p0rpyBPJPNHA6MpwM5gGlmV-kN0X2CtzfsdtzyM/edit?usp=sharing',
  profilePicture: generalImages.foto,
  certificates: certificatesDataBr,
  experiences: experiencesDataBr,
  projects: projectsDataBr,
  hardSkills: hardSkillsDataBr,
  formations: formationDataBr,
  gitHub: 'https://github.com/LucasLevingston',
  linkedin: 'https://www.linkedin.com/in/lucas-levingston-44b851231/',
  linkedinImageUrl: generalImages.fotoLinkedin,
  instagram: 'https://www.instagram.com/lucaolevingston/?hl=pt-br',
  instagramImageUrl: generalImages.fotoInstagram,
  phone: '(83) 99961-6220',
  whatsapp: 'https://wa.me/message/BL2FCNM72L7GJ1',
  portfolioUrl: 'https://lucas-levingston.vercel.app/',
  whatsappImageUrl: generalImages.fotoWhatsapp,
  email: 'lucaslevingston94@gmail.com',
  recomendations: recommendationDataBr,
  softSkills: softSkillsBr,
  address: 'Rua Severino Soares, 70 - Jardim Guanabara',
  location: 'Patos - PB',
  languages: [
    {
      language: 'Português',
      type: 'Nativo',
    },
    {
      language: 'Inglês',
      type: 'Intermediário (boa leitura técnica, escrita e conversação básica)',
    },
  ],
}

export const userEn: UserType = {
  name: 'Lucas Levingston',
  completName: 'Lucas Levingston Araújo Gadelha Medeiros',
  description: `  Full-Stack Developer with <span class="highlight">3 years of experience</span> in freelance, projects, internships, and startups. 
  Graduated in <span class="highlight">Computer Science from UEPB</span> and currently pursuing a postgraduate degree in    <span class="highlight">Web Development at Faculeste</span>.`,
  professionalProfile: `Full-Stack Developer with <span class="highlight">3 years of experience</span> in freelance, projects, internships, and startups. 
Graduated in <span class="highlight">Computer Science from UEPB</span> and currently pursuing a postgraduate degree in  <span class="highlight">Web Development at Faculeste</span>. <br/>
Working with <span class="highlight">React, Next.js, Node.js, Prisma, PostgreSQL, MongoDB, Fastify, TypeScript, Tailwind, Docker, and AWS</span>, 
with expertise in <span class="highlight">architecture, testing, version control, CI/CD, and Scrum</span>. <br/>
Experience in <span class="highlight">complete, scalable, production-ready systems</span>, focusing on  <span class="highlight">quality, security, performance, and delivery predictability</span>. Strong expertise in  <span class="highlight">Clean Code, SOLID, software architectures, documentation, automated pipelines</span>, 
deployment automation, and design patterns. <br/>
Interested in <span class="highlight">Full-Stack, Front-End, and Back-End development</span>.`,
  resumeUrl:
    '[https://docs.google.com/document/d/1qI_1p0rpyBPJPNHA6MpwM5gGlmV-kN0X2CtzfsdtzyM/edit?usp=sharing](https://docs.google.com/document/d/1qI_1p0rpyBPJPNHA6MpwM5gGlmV-kN0X2CtzfsdtzyM/edit?usp=sharing)',
  profilePicture: generalImages.foto,
  certificates: certificatesDataEn,
  experiences: experiencesDataEn,
  projects: projectsDataEn,
  hardSkills: hardSkillsDataEn,
  formations: formationDataEn,
  gitHub:
    '[https://github.com/LucasLevingston](https://github.com/LucasLevingston)',
  linkedin:
    '[https://www.linkedin.com/in/lucas-levingston-44b851231/](https://www.linkedin.com/in/lucas-levingston-44b851231/)',
  linkedinImageUrl: generalImages.fotoLinkedin,
  instagram:
    '[https://www.instagram.com/lucaolevingston/?hl=pt-br](https://www.instagram.com/lucaolevingston/?hl=pt-br)',
  instagramImageUrl: generalImages.fotoInstagram,
  phone: '(83) 99961-6220',
  whatsapp:
    '[https://wa.me/message/BL2FCNM72L7GJ1](https://wa.me/message/BL2FCNM72L7GJ1)',
  portfolioUrl:
    '[https://lucas-levingston.vercel.app/](https://lucas-levingston.vercel.app/)',
  whatsappImageUrl: generalImages.fotoWhatsapp,
  email: '[lucaslevingston94@gmail.com](mailto:lucaslevingston94@gmail.com)',
  recomendations: recommendationDataEn,
  softSkills: softSkillsEn,
  address: 'Rua Severino Soares, 70 - Jardim Guanabara',
  location: 'Patos - PB',
  languages: [
    {
      language: 'Portuguese',
      type: 'Native',
    },
    {
      language: 'English',
      type: 'Intermediate (good technical reading, writing, and basic conversation)',
    },
  ],
}
