import GitH from '../assets/CertificadoGiteGitHub.jpg';
import CertificadoSercomp from '../assets/CertificadoSercomp.jpg';
import CertificadoReact from '../assets/CertificadoReact.jpg';
import CertificadoNode from '../assets/CertificadoNode.jpg';

export interface CertificadoType {
   nome: string;
   imagem: string;
   sobre: string[];
   tecnologias: string[];
}


export const certificados: CertificadoType[] = [
   {
      nome: 'Git e GitHub',
      imagem: GitH,
      sobre: ['Git e GitHub do básico ao avançado (c/ gist e GitHub Pages)'],
      tecnologias: ['git', 'github'],
   },
   {
      nome: 'Sercomp 2023',
      imagem: CertificadoSercomp,
      sobre: [
         "Minicurso VI: Introdução a API's Rest em Java com Spring Boot",
         'Oficina VIII - Testes de software em back-end: estratégias e ferramentas para garantir a qualidade do seu sistema',
      ],
      tecnologias: ['python', 'java', 'javascript', 'postman'],
   },
   {
      nome: 'NLW Unite RocketSeat - React',
      imagem: CertificadoReact,
      sobre: [
         "Curso do evento da Rocketseat em que foi desenvolvido o front-end do sistema Pass In Web.",
      ],
      tecnologias: ['vite', 'react', 'typescript', 'tailwindcss'],
   },
   {
      nome: 'NLW Unite RocketSeat - Node',
      imagem: CertificadoNode,
      sobre: [
         "Curso do evento da Rocketseat em que foi desenvolvido o back-end do sistema Pass In Web.",
      ],
      tecnologias: ['nodejs', 'typescript', 'prisma', 'sqlite', 'fastify'],
   },
]
