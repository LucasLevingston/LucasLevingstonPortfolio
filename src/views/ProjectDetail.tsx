'use client'

import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  GitBranch,
  Github,
  ImageIcon,
  Monitor,
  Settings,
  Smartphone,
  Star,
} from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Container from '@/components/custom/container'
import Sidebar from '@/components/custom/custom-sidebar'
import Header from '@/components/custom/header'
import { ProjectDetails } from '@/components/custom/project-details'
import Section from '@/components/custom/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useUser } from '@/hooks/use-user'
import { getProjectIndexBySlug } from '@/lib/utils/project-slug'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

interface ProjectDetailProps {
  slug: string
}

export function ProjectDetail({ slug }: ProjectDetailProps) {
  const { t } = useTranslation()
  const { user } = useUser()

  const index = getProjectIndexBySlug(slug)
  if (index === -1) {
    notFound()
  }
  const project = user.projects[index]

  const {
    title,
    description,
    favorite,
    isMobile,
    isDeveloping,
    showEvolution,
    versions,
    images,
    repositoryUrl,
    frontEndRepositoryUrl,
    backEndRepositoryUrl,
    link,
  } = project

  return (
    <div className="min-h-screen text-foreground">
      <Sidebar />
      <Container>
        <Header />
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
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg p-2">
                      {isMobile ? (
                        <Smartphone className="h-5 w-5 !text-mainColor" />
                      ) : (
                        <Monitor className="h-5 w-5 !text-mainColor" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h1 className="font-semibold text-foreground text-xl">
                          {title}
                        </h1>
                        {favorite && (
                          <Star className="h-4 w-4 fill-current text-yellow-400" />
                        )}
                        {showEvolution && versions && versions.length > 0 && (
                          <GitBranch className="h-4 w-4 !text-mainColor" />
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isDeveloping && (
                      <Badge className="flex items-center gap-1 border-green-300 bg-green-100 text-sm text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
                        <Settings className="h-4 w-4" />
                        {t('projectCard.inDevelopment')}
                      </Badge>
                    )}
                    {images && images.length > 0 && (
                      <ImageIcon className="h-4 w-4 !text-mainColor" />
                    )}
                    {(repositoryUrl ||
                      frontEndRepositoryUrl ||
                      backEndRepositoryUrl) && (
                      <Github className="h-4 w-4 !text-mainColor" />
                    )}
                    {link && (
                      <ExternalLink className="h-4 w-4 !text-mainColor" />
                    )}
                  </div>
                </div>

                <ProjectDetails allProjects={user.projects} project={project} />
              </CardContent>
            </Card>
          </motion.div>
        </Section.Root>
      </Container>
    </div>
  )
}
