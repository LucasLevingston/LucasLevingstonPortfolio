import { ExternalLink, Github, ImageIcon, Settings } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils/cn'

interface ProjectStatusIconsProps {
  isDeveloping?: boolean
  images?: string[]
  repositoryUrl?: string
  frontEndRepositoryUrl?: string
  backEndRepositoryUrl?: string
  link?: string
  className?: string
}

export function ProjectStatusIcons({
  isDeveloping,
  images,
  repositoryUrl,
  frontEndRepositoryUrl,
  backEndRepositoryUrl,
  link,
  className,
}: ProjectStatusIconsProps) {
  const { t } = useTranslation()

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {isDeveloping && (
        <Badge className="flex items-center gap-1 border-green-300 bg-green-100 text-sm text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
          <Settings className="h-4 w-4" />
          {t('projectCard.inDevelopment')}
        </Badge>
      )}
      {images && images.length > 0 && (
        <ImageIcon className="h-4 w-4 !text-mainColor" />
      )}
      {(repositoryUrl || frontEndRepositoryUrl || backEndRepositoryUrl) && (
        <Github className="h-4 w-4 !text-mainColor" />
      )}
      {link && <ExternalLink className="h-4 w-4 !text-mainColor" />}
    </div>
  )
}
