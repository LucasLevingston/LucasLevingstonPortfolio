'use client'

import { FolderOpen, RotateCcw } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { CustomButton } from '@/components/custom/custom-button'
import { PageShell } from '@/components/custom/page-shell'
import Section from '@/components/custom/section'
import { Card, CardContent } from '@/components/ui/card'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <PageShell>
      <Section.Root>
        <Card>
          <CardContent className="pt-6">
            <div className="py-8 text-center">
              <FolderOpen className="mx-auto mb-4 h-12 w-12 !text-mainColor" />
              <h3 className="mb-2 text-lg font-medium text-foreground">
                {t('projects.notFound')}
              </h3>
              <CustomButton href="/projects">
                <CustomButton.Icon>
                  <RotateCcw />
                </CustomButton.Icon>
                <CustomButton.Label>
                  {t('projects.backToProjects')}
                </CustomButton.Label>
              </CustomButton>
            </div>
          </CardContent>
        </Card>
      </Section.Root>
    </PageShell>
  )
}
