export interface HardSkillsType {
	category: string;
	technologies: string[];
}

export const HardSkillsData: HardSkillsType[] = [
	{
		category: 'Linguagens de Programação',
		technologies: ['javascript', 'typescript', 'java', 'python'],
	},
	{
		category: 'Front-End Frameworks',
		technologies: ['react', 'tailwindcss', 'nextjs'],
	},
	{
		category: 'Back-End Frameworks',
		technologies: ['nodejs', 'prisma', 'fastify', 'express'],
	},
	{
		category: 'Banco de dados',
		technologies: ['postgresql', 'mysql', 'mongodb', 'firebase', 'sqlite'],
	},
	{
		category: 'Ferramentas',
		technologies: ['docker', 'git', 'github', 'postman', 'figma'],
	},
	{
		category: 'metodologias ágeis',
		technologies: ['scrum'],
	},
];
