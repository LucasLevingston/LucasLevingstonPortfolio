import { Eye } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useUser } from '@/hooks/user-hooks'
import { CustomButton } from './custom-button'

export function ResumeButton() {
  const { t } = useTranslation()
  const { resumeUrl } = useUser()

  return (
    <CustomButton href={resumeUrl}>
      <CustomButton.Icon>
        <Eye />
      </CustomButton.Icon>
      <CustomButton.Label>{t('resume.viewResume')}</CustomButton.Label>
    </CustomButton>
  )
}
