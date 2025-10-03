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
  Desenvolvedor Full-Stack com <span class="!text-mainColor"><u>2 anos de experiência</u></span> em projetos acadêmicos, estágios e startups, atuando no desenvolvimento de sistemas completos, desde a coleta de requisitos até a entrega em produção.<br/>
  <span class="!text-mainColor"><u>Graduado em Ciência da Computação</u></span> pela Universidade Estadual da Paraíba e <span class="!text-mainColor"><u>pós-graduando em Desenvolvimento Web</u></span> pela Faculeste.
`,
  professionalProfile: `
  Desenvolvedor Full-Stack com <span class="!text-mainColor"><u>2 anos de experiência</u></span> em projetos acadêmicos, estágios e startups, atuando no desenvolvimento de sistemas completos, desde a coleta de requisitos até a entrega em produção.<br/>
  <span class="!text-mainColor"><u>Graduado em Ciências da Computação</u></span> pela Universidade Estadual da Paraíba e <span class="!text-mainColor"><u>pós-graduando em Desenvolvimento Web</u></span> pela Faculeste, possuo sólida experiência em <span class="!text-mainColor"><u>React, TypeScript, Node.js, Prisma, PostgreSQL, Docker</u></span> e metodologias ágeis.<br/>
  Atuei como líder de equipe e desenvolvedor em sistemas reais, incluindo o <span class="!text-mainColor"><u>CRM Splen</u></span>, utilizado no gerenciamento de vendas de cursos; a plataforma <span class="!text-mainColor"><u>Multi UEPB</u></span>, voltada ao aluguel de produtos universitários; o <span class="!text-mainColor"><u>Verbo Hub</u></span>, sistema de gestão de eventos; o <span class="!text-mainColor"><u>Consulta Fácil</u></span>, sistema para agendamento de consultas médicas integrado ao Stripe; o <span class="!text-mainColor"><u>Gym Evolution</u></span>, sistema de acompanhamento de treinos e dietas com integrações de pagamento e testes automatizados; e o <span class="!text-mainColor"><u>ExpertGP</u></span>, sistema para gestão pública municipal.<br/>
  Sou orientado a resultados, com foco em <span class="!text-mainColor"><u>qualidade de código</u></span>, <span class="!text-mainColor"><u>escalabilidade</u></span> e <span class="!text-mainColor"><u>usabilidade</u></span>, sempre buscando entregar valor real ao usuário e gerar impacto positivo nos negócios.<br/>
  Interesse em <span class="!text-mainColor"><u>desenvolvimento Full-Stack, Front-End e Back-End</u></span>.
`,
  resumeUrl:
    'https://docs.google.com/document/d/12krEMbPJzIrSUoN4tKSt3C5REMoSwNpGPSmVNa9UE9I/edit?usp=sharing',
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
  whatsappImageUrl: generalImages.fotoWhatsapp,
  email: 'lucaslevingston94@gmail.com',
  recomendations: recommendationDataBr,
  softSkills: softSkillsBr,
  address: 'Rua Severino Soares, 70 - Jardim Guanabara',
  location: 'Patos - PB',
}

export const userEn: UserType = {
  name: 'Lucas Levingston',
  completName: 'Lucas Levingston Araújo Gadelha Medeiros',
  description: `
  Full-Stack Developer with <span class="!text-mainColor"><u>2 years of experience</u></span> in academic projects, internships, and startups, working on the development of complete systems, from requirements gathering to production delivery.<br/>
  <span class="!text-mainColor"><u>Graduated in Computer Science</u></span> from the State University of Paraíba and <span class="!text-mainColor"><u>post-graduating in Web Development</u></span> from Faculeste.
`,

  professionalProfile: `
  Full-Stack Developer with <span class="!text-mainColor"><u>2 years of experience</u></span> in academic projects, internships, and startups, developing complete systems from requirements gathering to production deployment.<br/>
  <span class="!text-mainColor"><u>Graduated in Computer Science</u></span> from the State University of Paraíba and <span class="!text-mainColor"><u>post-graduating in Web Development</u></span> from Faculeste, I have solid experience in <span class="!text-mainColor"><u>React, TypeScript, Node.js, Prisma, PostgreSQL, Docker</u></span>, and agile methodologies.<br/>
  I have acted as a team leader and developer in real-world systems, including the <span class="!text-mainColor"><u>Splen CRM</u></span>, used for managing course sales; the <span class="!text-mainColor"><u>Multi UEPB</u></span> platform, for renting university products; the <span class="!text-mainColor"><u>Verbo Hub</u></span>, an event management system; <span class="!text-mainColor"><u>Consulta Fácil</u></span>, a medical appointment scheduling system integrated with Stripe; <span class="!text-mainColor"><u>Gym Evolution</u></span>, a workout and diet tracking system with payment integrations and automated tests; and <span class="!text-mainColor"><u>ExpertGP</u></span>, a system for municipal public management.<br/>
  I am results-oriented, with a focus on <span class="!text-mainColor"><u>code quality</u></span>, <span class="!text-mainColor"><u>scalability</u></span>, and <span class="!text-mainColor"><u>usability</u></span>, always seeking to deliver real value to the user and generate a positive impact on business.<br/>
  Interested in <span class="!text-mainColor"><u>Full-Stack, Front-End, and Back-End development</u></span>.
`,
  resumeUrl:
    'https://docs.google.com/document/d/12krEMbPJzIrSUoN4tKSt3C5REMoSwNpGPSmVNa9UE9I/edit?usp=sharing',
  profilePicture: generalImages.foto,
  certificates: certificatesDataEn,
  experiences: experiencesDataEn,
  projects: projectsDataEn,
  hardSkills: hardSkillsDataEn,
  formations: formationDataEn,
  gitHub: 'https://github.com/LucasLevingston',
  linkedin: 'https://www.linkedin.com/in/lucas-levingston-44b851231/',
  linkedinImageUrl: generalImages.fotoLinkedin,
  instagram: 'https://www.instagram.com/lucaolevingston/?hl=en',
  instagramImageUrl: generalImages.fotoInstagram,
  phone: '(83) 99961-6220',
  whatsapp: 'https://wa.me/message/BL2FCNM72L7GJ1',
  whatsappImageUrl: generalImages.fotoWhatsapp,
  email: 'lucaslevingston94@gmail.com',
  recomendations: recommendationDataEn,
  softSkills: softSkillsEn,
  address: 'Rua Severino Soares, 70 - Jardim Guanabara',
  location: 'Patos - PB',
}
