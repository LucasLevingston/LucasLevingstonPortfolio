import { CertificatesType } from './CertificatesType'
import { ExperienceType } from './ExperienceType'
import { FormationType } from './FormationType'
import { HardSkillsType } from './HardSkillsType'
import { ProjectType } from './ProjectType'
import { RecommendationType } from './RecommendationType'

export interface UserType {
  address: string
  certificates: CertificatesType[]
  completName: string
  description: string
  email: string
  experiences: ExperienceType[]
  formations: FormationType[]
  gitHub: string
  hardSkills: HardSkillsType[]
  instagram: string
  instagramImageUrl: string
  languages?: { language: string; type: string }[]
  linkedin: string
  linkedinImageUrl: string
  location: string
  name: string
  phone: string
  portfolioUrl?: string
  professionalProfile: string
  profilePicture: string
  projects: ProjectType[]
  recomendations: RecommendationType[]
  resumeUrl: string
  softSkills: string[]
  totalCommits?: number
  whatsapp: string
  whatsappImageUrl: string
}
