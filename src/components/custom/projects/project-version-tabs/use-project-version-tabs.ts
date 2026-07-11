import { useState } from 'react'
import type { ProjectVersion } from '@/types/ProjectType'

export function useProjectVersionTabs(versions: ProjectVersion[]) {
  const [selectedVersion, setSelectedVersion] = useState(
    String(versions.length - 1)
  )

  return { selectedVersion, setSelectedVersion }
}
