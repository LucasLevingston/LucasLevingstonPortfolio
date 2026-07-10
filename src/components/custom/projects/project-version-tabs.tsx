'use client'

import { ArrowRight, GitBranch, ImageIcon } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import TechnologiesSection from '@/components/custom/technology-section'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { ProjectVersion } from '@/types/ProjectType'
import { ProjectImageCarousel } from './project-image-carousel'

interface ProjectVersionTabsProps {
  versions: ProjectVersion[]
  isMobile?: boolean
  paginationImages?: string[]
}

export function ProjectVersionTabs({
  versions,
  isMobile,
  paginationImages,
}: ProjectVersionTabsProps) {
  const { t } = useTranslation()
  const [selectedVersion, setSelectedVersion] = useState(
    String(versions.length - 1)
  )

  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <GitBranch className="h-4 w-4 !text-mainColor" />
        <h4 className="font-semibold text-foreground text-sm">
          {t('projectEvolution')}
        </h4>
      </div>
      <Tabs onValueChange={setSelectedVersion} value={selectedVersion}>
        <TabsList
          className="grid w-full"
          style={{
            gridTemplateColumns: `repeat(${versions.length}, minmax(0, 1fr))`,
          }}
        >
          {versions
            .map((version, index) => (
              <TabsTrigger key={index} value={String(index)}>
                {version.name ?? `v${index + 1}`}
              </TabsTrigger>
            ))
            .reverse()}
        </TabsList>

        {versions
          .map((version, index) => (
            <TabsContent className="mt-4" key={index} value={String(index)}>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ArrowRight className="h-4 w-4" />
                  <span>
                    {version.description || `${version.name} do projeto`}
                  </span>
                </div>
                <TechnologiesSection technologies={version.technologies} />
                {version.images && version.images.length > 0 && (
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <ImageIcon className="h-4 w-4 !text-mainColor" />
                      <h4 className="font-semibold text-foreground text-sm">
                        {t('projectCard.images')}
                      </h4>
                    </div>
                    <ProjectImageCarousel
                      images={version.images}
                      isMobile={isMobile}
                      paginationImages={paginationImages}
                    />
                  </div>
                )}
              </div>
            </TabsContent>
          ))
          .reverse()}
      </Tabs>
    </div>
  )
}
