import { ProjectDetail } from '@/views/ProjectDetail'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  return <ProjectDetail slug={slug} />
}
