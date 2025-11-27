// import parse from 'html-react-parser'
// import { UserType } from '@/types/UserType'

// export default function ResumePDF({ user }: { user: UserType }) {
//   return (
//     <>
//       <div
//         className="w-[210mm] min-h-[297mm] bg-white text-black p-10 leading-relaxed text-[12px] font-sans"
//         id="resume-pdf"
//       >
//         <div className="text-center pb-3">
//           <h1 className="text-[24px] font-bold">{user.completName}</h1>
//           <p className="text-[10px]  leading-tight">
//             {user.address} - {user.location} | <strong>Celular:</strong>{' '}
//             {user.phone}
//           </p>
//           <p className="text-[10px] leading-tight">
//             <strong>E-mail:</strong> {user.email} | <strong>LinkedIn:</strong>{' '}
//             linkedin.com/in/lucas-levingston-44b851231/
//           </p>
//           <p className="text-[10px] leading-tight">
//             <strong>Portfólio:</strong> {user.portfolioUrl} |{' '}
//             <strong>GitHub:</strong> github.com/LucasLevingston
//           </p>
//           <p className="text-[11px] font-bold ">
//             Desenvolvedor Full-Stack | React, TypeScript, Node.js
//           </p>
//         </div>

//         <div className="border-t border-black">
//           <h2 className="text-[13px] font-bold ">RESUMO PROFISSIONAL</h2>
//           <p className="text-[11px] text-justify leading-snug text-black">
//             {parse(user.professionalProfile)}
//           </p>
//         </div>

//         <div className="border-t border-black">
//           <h2 className="text-[13px] font-bold ">EXPERIÊNCIA PROFISSIONAL</h2>
//           {user.experiences.map((exp, i) => (
//             <div className="" key={i}>
//               <p className="text-[11px] font-bold">
//                 {exp.role} — {exp.enterprise} ({exp.startsDate} - {exp.endsDate}
//                 )
//               </p>
//               <ul className="list-disc ml-6">
//                 {exp.features.map((feature, j) => (
//                   <li className="text-[10px] leading-tight" key={j}>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="border-t border-black">
//           <h2 className="text-[13px] font-bold ">PROJETOS RELEVANTES</h2>
//           {user.projects
//             .filter(p => p.favorite)
//             .map((project, i) => (
//               <div className="" key={i}>
//                 <p className="text-[11px] font-bold">{project.title}</p>
//                 <p className="text-[10px] text-justify leading-tight ">
//                   {project.description}
//                 </p>
//                 <ul className="list-disc list-inside ml-6">
//                   {project.features?.map((feature, j) => (
//                     <li className="text-[10px] leading-tight" key={j}>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <p className="text-[10px]">
//                   <strong>Skills:</strong> {project.technologies.join(', ')}
//                 </p>
//               </div>
//             ))}
//         </div>

//         <div className="border-t border-black">
//           <h2 className="text-[13px] font-bold ">FORMAÇÃO</h2>
//           {user.formations.map((f, i) => (
//             <p className="text-[11px] " key={i}>
//               <strong>{f.title}</strong> — {f.institution} ({f.endsDate})
//             </p>
//           ))}
//         </div>

//         <div className="border-t border-black">
//           <h2 className="text-[13px] font-bold ">HABILIDADES TÉCNICAS</h2>
//           {user.hardSkills.map((s, i) => (
//             <p className="text-[10px] leading-snug" key={i}>
//               <strong>{s.category}:</strong> {s.technologies.join(', ')}
//             </p>
//           ))}
//         </div>

//         <div className="border-t border-black">
//           <h2 className="text-[13px] font-bold ">IDIOMAS</h2>
//           {user.languages?.map((l, i) => (
//             <p className="text-[10px]" key={i}>
//               <strong>{l.language}:</strong> {l.type}
//             </p>
//           ))}
//         </div>

//         <div className="border-t border-black">
//           <h2 className="text-[13px] font-bold ">SOFT SKILLS</h2>
//           <p className="text-[10px]">{user.softSkills.join(', ')}</p>
//         </div>
//       </div>
//       <style>
//         {`
//           #resume-pdf .highlight {
//             font-weight: 700;
//             color: #000 !important;
//           }
//         `}
//       </style>
//     </>
//   )
// }
