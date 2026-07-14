const CURRENT_JOB_END_DATES = new Set(['atual', 'present'])

export function isCurrentJob(endsDate: string): boolean {
  return CURRENT_JOB_END_DATES.has(endsDate.toLowerCase())
}
