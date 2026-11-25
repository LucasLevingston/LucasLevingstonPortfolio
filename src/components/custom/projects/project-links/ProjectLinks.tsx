import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'
import { CustomButton } from '@/components/custom/custom-button'
import type { ProjectLinksProps } from './project-links.types'

export function ProjectLinks({
  frontEndRepositoryUrl,
  backEndRepositoryUrl,
  repositoryUrl,
  link,
}: ProjectLinksProps) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 border-mainBorder pt-4">
      {frontEndRepositoryUrl ? (
        <CustomButton href={frontEndRepositoryUrl}>
          <CustomButton.Icon>
            <FaGithub />
          </CustomButton.Icon>
          <CustomButton.Text>
            {' '}
            {t('projectCard.viewFrontEndRepo')}
          </CustomButton.Text>
        </CustomButton>
      ) : null}
      {backEndRepositoryUrl ? (
        <CustomButton href={backEndRepositoryUrl}>
          <CustomButton.Icon>
            <FaGithub />
          </CustomButton.Icon>
          <CustomButton.Text>
            {t('projectCard.viewBackEndRepo')}
          </CustomButton.Text>
        </CustomButton>
      ) : null}
      {!(frontEndRepositoryUrl || backEndRepositoryUrl) && repositoryUrl && (
        <CustomButton href={repositoryUrl}>
          <CustomButton.Icon>
            <FaGithub />
          </CustomButton.Icon>
          <CustomButton.Text>{t('projectCard.viewGitHub')}</CustomButton.Text>
        </CustomButton>
      )}
      {link ? (
        <CustomButton href={link}>
          <CustomButton.Icon>
            <ExternalLink />
          </CustomButton.Icon>
          <CustomButton.Text>{t('projectCard.visitSite')}</CustomButton.Text>
        </CustomButton>
      ) : null}
    </div>
  )
}
