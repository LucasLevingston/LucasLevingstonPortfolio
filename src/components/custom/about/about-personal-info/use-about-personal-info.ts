import { Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface UseAboutPersonalInfoProps {
  location: string
  address: string
  email: string
  phone: string
}

export function useAboutPersonalInfo({
  location,
  address,
  email,
  phone,
}: UseAboutPersonalInfoProps) {
  const { t } = useTranslation()

  const items = [
    { icon: MapPin, label: t('about.location'), value: location },
    { icon: MapPin, label: t('about.address'), value: address },
    { icon: Mail, label: t('about.email'), value: email },
    { icon: Phone, label: t('about.phone'), value: phone },
  ]

  return { t, items }
}
