import { GitBranch, Monitor, Smartphone, Star } from 'lucide-react'
import type { ProjectType } from '@/types/ProjectType'
import { ProjectStatusIcons } from './project-status-icons'

interface ProjectDetailHeaderProps {
  project: ProjectType
}

export function ProjectDetailHeader({
  project: {
    title,
    description,
    favorite,
    isMobile,
    isDeveloping,
    showEvolution,
    versions,
    images,
    repositoryUrl,
    frontEndRepositoryUrl,
    backEndRepositoryUrl,
    link,
  },
}: ProjectDetailHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-lg p-2">
          {isMobile ? (
            <Smartphone className="h-5 w-5 !text-mainColor" />
          ) : (
            <Monitor className="h-5 w-5 !text-mainColor" />
          )}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-foreground text-xl">{title}</h1>
            {favorite && (
              <Star className="h-4 w-4 fill-current text-yellow-400" />
            )}
            {showEvolution && versions && versions.length > 0 && (
              <GitBranch className="h-4 w-4 !text-mainColor" />
            )}
          </div>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      <ProjectStatusIcons
        backEndRepositoryUrl={backEndRepositoryUrl}
        frontEndRepositoryUrl={frontEndRepositoryUrl}
        images={images}
        isDeveloping={isDeveloping}
        link={link}
        repositoryUrl={repositoryUrl}
      />
    </div>
  )
}
