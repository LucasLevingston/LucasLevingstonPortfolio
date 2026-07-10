'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { PageShell } from '@/components/custom/page-shell'
import { ProjectDetails } from '@/components/custom/project-details'
import { ProjectDetailHeader } from '@/components/custom/projects/project-detail-header'
import Section from '@/components/custom/section'
import { Card, CardContent } from '@/components/ui/card'
import { useProjectBySlug } from '@/hooks/use-project-by-slug'
import { useUser } from '@/hooks/use-user'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

interface ProjectDetailProps {
  slug: string
}

export function ProjectDetail({ slug }: ProjectDetailProps) {
  const { t } = useTranslation()
  const { user } = useUser()
  const project = useProjectBySlug(slug)

  return (
    <PageShell>
      <Section.Root>
        <Link
          className="mb-4 inline-flex items-center gap-2 text-sm text-mainColor hover:opacity-70"
          href="/projects"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('projects.backToProjects')}
        </Link>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <Card>
            <CardContent className="space-y-6 pt-6">
              <ProjectDetailHeader project={project} />
              <ProjectDetails allProjects={user.projects} project={project} />
            </CardContent>
          </Card>
        </motion.div>
      </Section.Root>
    </PageShell>
  )
}
