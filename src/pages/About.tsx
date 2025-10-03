import parse from 'html-react-parser'
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Clock,
  Code,
  ExternalLink,
  GraduationCap,
  Heart,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  PauseCircle,
  Phone,
  PlayCircle,
  Trophy,
  User,
  Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import CarouselPagination from '@/components/custom/carousel-pagination'
import Container from '@/components/custom/container'
import Sidebar from '@/components/custom/custom-sidebar'
import { HardSkillsSection } from '@/components/custom/hard-skills-section'
import Header from '@/components/custom/header'
import { ImageViewer } from '@/components/custom/image-viewer'
import Section from '@/components/custom/section'
import SectionItem from '@/components/custom/section-item'
import TechnologiesSection from '@/components/custom/technology-section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { useUser } from '@/hooks/use-user'
import { cn } from '@/lib/utils/cn'
import { formationStatus } from '@/types/FormationType'

export function About() {
  const { t, i18n } = useTranslation()
  const { user } = useUser()
  const location = useLocation()
  const [currentCertificate, setCurrentCertificate] = useState<number>(0)
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    i18n.changeLanguage(i18n.language)

    if (!api) {
      return
    }
    setCurrentCertificate(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrentCertificate(api.selectedScrollSnap())
    })
  }, [i18n.language, api])

  useEffect(() => {
    const search = location.search
    if (!search) {
      window.scrollTo(0, 0)
    }
    if (search) {
      const element = document.getElementById(search.substring(1))
      console.log(element)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  const getEducationStatusBadge = (formation: any) => {
    if (formation.graduated) {
      return (
        <Badge className="border-green-300 bg-green-100 text-base text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
          <Trophy className="mr-1 h-3 w-3" />
          {t('about.graduated')}
        </Badge>
      )
    }

    if (
      formation.currentStatus?.toLowerCase().includes('trancado') ||
      formation.currentStatus?.toLowerCase().includes('deferred')
    ) {
      return (
        <Badge
          className="border-red-300 bg-red-50 text-base text-red-700 dark:bg-red-950 dark:text-red-300"
          variant="outline"
        >
          <PauseCircle className="mr-1 h-3 w-3" />
          {t('about.deferred')}
        </Badge>
      )
    }

    return (
      <Badge className="border-blue-300 bg-blue-100 text-base text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
        <PlayCircle className="mr-1 h-3 w-3" />
        {t('about.inProgress')}
      </Badge>
    )
  }

  return (
    <div className="text-foreground">
      <Sidebar />
      <Container>
        <Header />
        <div className="space-y-8">
          <Section.Root>
            <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <User className="h-5 w-5 !text-mainColor" />
              {t('about.professionalProfile')}
            </Section.Title>
            <Section.Content>
              <Card>
                <CardContent>
                  <p className="text-base leading-relaxed text-foreground">
                    {parse(user.professionalProfile)}
                  </p>
                </CardContent>
              </Card>
            </Section.Content>
          </Section.Root>

          <Section.Root id={t('about.personalInfo')}>
            <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <User className="h-5 w-5 !text-mainColor" />
              {t('about.personalInfo')}
            </Section.Title>
            <Section.Content className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 !text-mainColor" />
                    <div>
                      <p className="mb-1 text-base font-medium tracking-wide !text-mainColor dark:!text-mainColor">
                        {t('about.location')}
                      </p>
                      <p className="text-base text-foreground">
                        {user.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 !text-mainColor" />

                    <div>
                      <p className="mb-1 text-base font-medium tracking-wide !text-mainColor dark:!text-mainColor">
                        {t('about.address')}
                      </p>
                      <p className="text-base text-foreground">
                        {user.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 !text-mainColor" />
                    <div>
                      <p className="mb-1 text-base font-medium tracking-wide !text-mainColor dark:!text-mainColor">
                        {t('about.email')}
                      </p>
                      <p className="text-base text-foreground">{user.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 !text-mainColor" />

                    <div>
                      <p className="mb-1 text-base font-medium tracking-wide !text-mainColor dark:!text-mainColor">
                        {t('about.phone')}
                      </p>
                      <p className="text-base text-foreground">{user.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Section.Content>
          </Section.Root>

          <Section.Root id={t('about.technologiesTitle')}>
            <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <Code className="h-5 w-5 !text-mainColor" />
              {t('about.technologiesTitle')}
            </Section.Title>
            <Section.Content>
              <Card>
                <CardContent className="pt-6">
                  <HardSkillsSection skills={user.hardSkills} />
                </CardContent>
              </Card>
            </Section.Content>
          </Section.Root>

          <Section.Root id={t('about.experiencesTitle')}>
            <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <Briefcase className="h-5 w-5 !text-mainColor" />
              {t('about.experiencesTitle')}
            </Section.Title>

            <Section.Content className="flex flex-col gap-2">
              {user.experiences.map((experience, index) => (
                <Card
                  className="transition-shadow hover:shadow-md p-6 gap-2 flex flex-col"
                  key={index}
                >
                  <CardHeader className="p-0 gap-4 flex flex-col">
                    <Section.Title className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 !text-mainColor" />
                      <h3 className="text-lg font-semibold text-foreground">
                        {experience.role}
                      </h3>
                    </Section.Title>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-base !text-mainColor dark:!text-mainColor">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {t('about.start')}: {experience.startsDate} -{' '}
                            {t('about.end')}: {experience.endsDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 !text-mainColor" />
                        <span className="text-base text-foreground">
                          {t('about.enterprise')}:{' '}
                          <span className="font-medium !text-mainColor dark:!text-mainColor">
                            {experience.enterprise}
                          </span>
                        </span>
                      </div>

                      <div className="rounded-lg border-l-4 border-mainColor p-4">
                        <p className="text-base leading-relaxed text-foreground">
                          {parse(experience.description)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Section.Content>
          </Section.Root>

          <Section.Root id={t('about.educationTitle')}>
            <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <GraduationCap className="h-5 w-5 !text-mainColor" />
              {t('about.educationTitle')}
            </Section.Title>
            <Section.Content className="space-y-4">
              {user.formations.map((formation, index) => (
                <Card
                  className="transition-shadow hover:shadow-md p-6 gap-2 flex flex-col"
                  key={index}
                >
                  <CardHeader className="p-0">
                    <div className="flex w-full items-start justify-between gap-4">
                      <div className="flex flex-1 items-center gap-3">
                        <div className="rounded-lg">
                          <BookOpen className="h-4 w-4 text-mainColor" />
                        </div>
                        <h3 className="flex-1 text-lg font-semibold text-foreground">
                          {formation.title}
                        </h3>
                      </div>
                      {getEducationStatusBadge(formation)}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 rounded-lg">
                        <Building2 className="h-4 w-4 !text-mainColor" />
                        <span className="text-base font-medium text-foreground">
                          {formation.institution}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="flex items-center gap-3 rounded-lg">
                          <Calendar className="h-4 w-4 !text-mainColor" />
                          <div>
                            <span className="block text-base font-medium tracking-wide">
                              {t('about.period')}
                            </span>
                            <span className="text-base text-foreground">
                              {formation.startsDate} - {formation.endsDate}
                            </span>
                          </div>
                        </div>

                        {formation.duration && (
                          <div className="flex items-center gap-3 rounded-lg p-3">
                            <Clock className="h-4 w-4 !text-mainColor" />
                            <div>
                              <span className="block text-base font-medium tracking-wide">
                                {t('about.duration')}
                              </span>
                              <span className="text-base text-foreground">
                                {formation.duration}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div
                        className={cn(
                          'rounded-lg border-l-4 p-4',
                          formation.currentStatus ===
                            formationStatus.COMPLETED && 'border-green-500',
                          formation.currentStatus ===
                            formationStatus.DEFERRED && 'border-red-500',
                          formation.currentStatus ===
                            formationStatus.IN_PROGRESS && 'border-blue-500'
                        )}
                      >
                        {' '}
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 !text-mainColor" />
                          <span className="text-base font-medium tracking-wide underline">
                            {t('about.currentStatus')}:
                          </span>
                        </div>
                        <span className="mt-1 block text-base">
                          {formation.currentStatus ===
                            formationStatus.COMPLETED && (
                            <span className="flex items-center gap-2 font-medium text-green-600">
                              <Trophy className="h-4 w-4" />
                              {t('about.completedSuccessfully')}
                            </span>
                          )}
                          {formation.currentStatus ===
                            formationStatus.DEFERRED && (
                            <span className="flex items-center gap-2 font-medium text-red-600">
                              <PauseCircle className="h-4 w-4" />
                              {t('about.deferred')}
                            </span>
                          )}
                          {formation.currentStatus ===
                            formationStatus.IN_PROGRESS && (
                            <span className="flex items-center gap-2 font-medium text-blue-600">
                              <PlayCircle className="h-4 w-4" />
                              {t('about.inProgress')}
                            </span>
                          )}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Section.Content>
          </Section.Root>

          <Section.Root id={t('about.certificatesTitle')}>
            <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <Award className="h-5 w-5 !text-mainColor" />
              {t('about.certificatesTitle')}
            </Section.Title>
            <Section.Content>
              <Card className="transition-shadow hover:shadow-md p-6 gap-2 flex flex-col">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg ">
                      <Trophy className="h-4 w-4 !text-mainColor" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {user.certificates[currentCertificate].title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="rounded-lg ">
                      {user.certificates[currentCertificate].description.map(
                        (description, index) => (
                          <p
                            className="text-base leading-relaxed text-foreground"
                            key={index}
                          >
                            {description}
                          </p>
                        )
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 !text-mainColor" />
                      <p className="text-base font-semibold text-foreground">
                        {t('about.usedTechnologies')}:
                      </p>
                    </div>
                    <div className="flex w-full flex-wrap">
                      <TechnologiesSection
                        technologies={
                          user.certificates[currentCertificate].technologies
                        }
                      />
                    </div>
                    {user.certificates[currentCertificate].image && (
                      <Carousel setApi={setApi}>
                        <CarouselContent className="h-full w-[500px]">
                          {user.certificates.map((certificate, index) => (
                            <CarouselItem className="h-full w-full" key={index}>
                              <ImageViewer
                                alt={certificate.title}
                                src={certificate.image}
                              >
                                <div className="h-full w-full rounded-lg ">
                                  <img
                                    alt={certificate.title}
                                    className="h-full w-full rounded-lg object-contain"
                                    src={certificate.image}
                                  />
                                </div>
                              </ImageViewer>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                    )}
                    <div className="py-2 text-center text-base !text-mainColor dark:!text-mainColor">
                      <CarouselPagination
                        api={api}
                        currentImage={currentCertificate}
                        images={user.certificates.map(
                          certificate => certificate.image
                        )}
                        setCurrentImage={setCurrentCertificate}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Section.Content>
          </Section.Root>

          <Section.Root id={t('about.recommendationsTitle')}>
            <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <MessageSquare className="h-5 w-5 !text-mainColor" />
              {t('about.recommendationsTitle')}
            </Section.Title>
            <Section.Content className="space-y-4">
              {user.recomendations.map(recomendation => (
                <Card
                  className="transition-shadow hover:shadow-md p-6 gap-2 flex flex-col"
                  key={recomendation.id}
                >
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-4">
                      <SectionItem.Avatar
                        imageUrl={recomendation.linkedinImageUrl}
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {recomendation.name}
                        </h3>
                        <p className="text-base !text-mainColor dark:!text-mainColor">
                          {recomendation.position}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 !text-mainColor" />
                        <SectionItem.LinkedIn recommendation={recomendation} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 !text-mainColor" />
                        <p className="text-base font-medium text-foreground">
                          {recomendation.company}
                        </p>
                      </div>
                      <div className="rounded-lg border-l-4 p-4 border-mainColor">
                        <div className="mb-2 flex items-center gap-2">
                          <Calendar className="h-4 w-4 !text-mainColor" />
                          <p className="text-base font-medium tracking-wide !text-mainColor dark:!text-mainColor">
                            {recomendation.date}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <MessageSquare className="mt-1 h-4 w-4 flex-shrink-0 !text-mainColor" />
                          <p className="text-base italic leading-relaxed text-foreground">
                            "{recomendation.comments}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Section.Content>
          </Section.Root>

          <Section.Root id={'Soft Skills'}>
            <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <Heart className="h-5 w-5 !text-mainColor" />
              {'Soft Skills'}
            </Section.Title>
            <Section.Content className="grid gap-4 md:grid-cols-2">
              {user.softSkills.map((skill, index) => (
                <Card className="transition-shadow hover:shadow-md" key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg ">
                        <Lightbulb className="h-4 w-4 !text-mainColor" />
                      </div>
                      <p className="text-base font-medium text-foreground">
                        {skill}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Section.Content>
          </Section.Root>
        </div>
      </Container>
    </div>
  )
}
