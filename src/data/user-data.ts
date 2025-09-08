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
  Desenvolvedor Full-Stack com <span class="!text-mainColor"><u>2 anos</u></span> de experiência em projetos acadêmicos, estágios e startups, atuando no desenvolvimento de sistemas completos, desde a coleta de requisitos até a entrega em produção.<br/>
  <span class="!text-mainColor"><u>Graduado</u></span> em Ciências da Computação pela Universidade Estadual da Paraíba.
`,
  professionalProfile: `
  Desenvolvedor Full-Stack com <span class="!text-mainColor"><u>2 anos</u></span> de experiência em projetos acadêmicos, estágios e startups, atuando no desenvolvimento de sistemas completos, desde a coleta de requisitos até a entrega em produção.<br/>
  <span class="!text-mainColor"><u>Graduado</u></span> em Ciências da Computação pela Universidade Estadual da Paraíba, possuo sólida experiência em <span class="!text-mainColor"><u>React, TypeScript, Node.js, Prisma, PostgreSQL, Docker</u></span> e metodologias ágeis.<br/>
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
  Full-Stack Developer with <span class="!text-mainColor"><u>2 years</u></span> of experience in academic projects, internships, and startups, working on complete systems from requirements gathering to production delivery.<br/>
  <span class="!text-mainColor"><u>Graduated</u></span> in Computer Science from the State University of Paraíba.
`,

  professionalProfile: `
  Full-Stack Developer with <span class="!text-mainColor"><u>2 years</u></span> of experience in academic projects, internships, and startups, working on complete systems from requirements gathering to production delivery.<br/>
  <span class="!text-mainColor"><u>Graduated</u></span> in Computer Science from the State University of Paraíba, with solid expertise in <span class="!text-mainColor"><u>React, TypeScript, Node.js, Prisma, PostgreSQL, Docker</u></span>, and agile methodologies.<br/>
  Acted as both team leader and developer on real-world systems, including <span class="!text-mainColor"><u>CRM Splen</u></span>, used for managing course sales; <span class="!text-mainColor"><u>Multi UEPB</u></span>, a platform for university equipment rentals; <span class="!text-mainColor"><u>Verbo Hub</u></span>, an event management system; <span class="!text-mainColor"><u>Consulta Fácil</u></span>, a medical appointment scheduling system integrated with Stripe; <span class="!text-mainColor"><u>Gym Evolution</u></span>, a platform for workout and diet tracking with payment integrations and automated testing; and <span class="!text-mainColor"><u>ExpertGP</u></span>, a public management system for municipalities.<br/>
  Results-driven, with a strong focus on <span class="!text-mainColor"><u>code quality</u></span>, <span class="!text-mainColor"><u>scalability</u></span>, and <span class="!text-mainColor"><u>usability</u></span>, always aiming to deliver real value to users and generate a positive business impact.<br/>
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
