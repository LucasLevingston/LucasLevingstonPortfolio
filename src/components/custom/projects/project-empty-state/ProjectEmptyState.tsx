'use client'

import { FolderOpen, RotateCcw } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface ProjectEmptyStateProps {
  onClearFilters: () => void
}

export function ProjectEmptyState({ onClearFilters }: ProjectEmptyStateProps) {
  const { t } = useTranslation()

  return (
    <Card className="border-mainBorder dark:border-main-border-dark">
      <CardContent className="pt-6">
        <div className="py-8 text-center">
          <FolderOpen className="mx-auto mb-4 h-12 w-12 !text-mainColor" />
          <h3 className="mb-2 text-lg font-medium text-foreground">
            Nenhum projeto encontrado
          </h3>
          <p className="mb-4 text-sm !text-mainColor dark:!text-mainColor">
            Tente ajustar os filtros ou termos de busca
          </p>
          <Button
            className="border-mainBorder bg-transparent text-sm hover:bg-lightMainColor dark:border-main-border-dark dark:hover:bg-light-main-color-dark"
            onClick={onClearFilters}
            variant="outline"
          >
            <RotateCcw className="mr-2 h-4 w-4 !text-mainColor" />
            {t('projects.clear')}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
