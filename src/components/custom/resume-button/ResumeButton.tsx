import { Eye } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { CustomButton } from '@/components/custom/custom-button'
import { useUser } from '@/hooks/use-user'

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
