import { ExternalLink, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { CustomButton } from '@/components/custom/custom-button'

interface ProjectLinksProps {
  frontEndRepositoryUrl?: string
  backEndRepositoryUrl?: string
  repositoryUrl?: string
  link?: string
}

export function ProjectLinks({
  frontEndRepositoryUrl,
  backEndRepositoryUrl,
  repositoryUrl,
  link,
}: ProjectLinksProps) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 border-mainBorder pt-4 dark:border-main-border-dark">
      {frontEndRepositoryUrl && (
        <CustomButton href={frontEndRepositoryUrl}>
          <CustomButton.Icon>
            <Github />
          </CustomButton.Icon>
          <CustomButton.Label>
            {' '}
            {t('projectCard.viewFrontEndRepo')}
          </CustomButton.Label>
        </CustomButton>
      )}
      {backEndRepositoryUrl && (
        <CustomButton href={backEndRepositoryUrl}>
          <CustomButton.Icon>
            <Github />
          </CustomButton.Icon>
          <CustomButton.Label>
            {t('projectCard.viewBackEndRepo')}
          </CustomButton.Label>
        </CustomButton>
      )}
      {!(frontEndRepositoryUrl || backEndRepositoryUrl) && repositoryUrl && (
        <CustomButton href={repositoryUrl}>
          <CustomButton.Icon>
            <Github />
          </CustomButton.Icon>
          <CustomButton.Label>{t('projectCard.viewGitHub')}</CustomButton.Label>
        </CustomButton>
      )}
      {link && (
        <CustomButton href={link}>
          <CustomButton.Icon>
            <ExternalLink />
          </CustomButton.Icon>
          <CustomButton.Label>{t('projectCard.visitSite')}</CustomButton.Label>
        </CustomButton>
      )}
    </div>
  )
}
