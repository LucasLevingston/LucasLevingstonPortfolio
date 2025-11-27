import { Eye } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useUser } from '@/hooks/use-user'
import { CustomButton } from './custom-button'

export function ResumeButton() {
  const { t } = useTranslation()
  const { user } = useUser()

  return (
    <CustomButton href={user.resumeUrl}>
      <CustomButton.Icon>
        <Eye />
      </CustomButton.Icon>
      <CustomButton.Label>{t('resume.viewResume')}</CustomButton.Label>
    </CustomButton>
  )
}
