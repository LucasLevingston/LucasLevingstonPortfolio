import {
  ExternalLink,
  Github,
  ImageIcon,
  type LucideIcon,
  Monitor,
  Server,
  Smartphone,
} from 'lucide-react'
import type { ProjectFilterState } from '@/hooks/use-project-filters'

export interface ProjectFilterToggle {
  key: string
  icon: LucideIcon
  labelKey: string
  filterKey: keyof Pick<
    ProjectFilterState,
    | 'hasImage'
    | 'hasGitHub'
    | 'hasDeploy'
    | 'isMobile'
    | 'isFrontEnd'
    | 'isBackEnd'
  >
}

export const PROJECT_FILTER_TOGGLES: ProjectFilterToggle[] = [
  {
    key: 'hasImage',
    icon: ImageIcon,
    labelKey: 'projects.hasImage',
    filterKey: 'hasImage',
  },
  {
    key: 'hasGitHub',
    icon: Github,
    labelKey: 'GitHub',
    filterKey: 'hasGitHub',
  },
  {
    key: 'hasDeploy',
    icon: ExternalLink,
    labelKey: 'Deploy',
    filterKey: 'hasDeploy',
  },
  {
    key: 'isMobile',
    icon: Smartphone,
    labelKey: 'Mobile',
    filterKey: 'isMobile',
  },
  {
    key: 'isFrontEnd',
    icon: Monitor,
    labelKey: 'Front-End',
    filterKey: 'isFrontEnd',
  },
  {
    key: 'isBackEnd',
    icon: Server,
    labelKey: 'Back-End',
    filterKey: 'isBackEnd',
  },
]
