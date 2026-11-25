import {
  ExternalLink,
  ImageIcon,
  Monitor,
  Server,
  Smartphone,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { FaGithub } from 'react-icons/fa'
import type { ProjectFilterState } from '@/hooks/use-project-filters'

export interface ProjectFilterToggle {
  filterKey: keyof Pick<
    ProjectFilterState,
    | 'hasImage'
    | 'hasGitHub'
    | 'hasDeploy'
    | 'isMobile'
    | 'isFrontEnd'
    | 'isBackEnd'
  >
  icon: ComponentType<{ className?: string }>
  key: string
  labelKey: string
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
    icon: FaGithub,
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
