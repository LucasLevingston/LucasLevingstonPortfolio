import { z } from 'zod'

export const env = z
  .object({
    NEXT_GITHUB_TOKEN: z.string(),
    NEXT_GITHUB_USER: z.string().min(2).max(39),
  })
  .parse(process.env)
