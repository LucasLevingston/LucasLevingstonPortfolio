import { Heart, Lightbulb } from 'lucide-react'
import Section from '@/components/custom/section'
import { Badge } from '@/components/ui/badge'

interface AboutSoftSkillsSectionProps {
  skills: string[]
}

export function AboutSoftSkillsSection({
  skills,
}: AboutSoftSkillsSectionProps) {
  return (
    <Section.Root id="Soft Skills">
      <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
        <Heart className="h-5 w-5 !text-mainColor" />
        Soft Skills
      </Section.Title>
      <Section.Content>
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <Badge
              className="gap-1.5 border-mainColor bg-mainColor/10 py-1.5 text-sm text-foreground"
              key={skill}
            >
              <Lightbulb className="h-3.5 w-3.5 !text-mainColor" />
              {skill}
            </Badge>
          ))}
        </div>
      </Section.Content>
    </Section.Root>
  )
}
