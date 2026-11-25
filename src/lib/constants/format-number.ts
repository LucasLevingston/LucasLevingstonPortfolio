const PHONE_NUMBER_PATTERN = /^(?<area>\d{2})(?<prefix>\d{5})(?<line>\d{4})$/u

export const formatPhoneNumber = (phoneNumber: string): string => {
  const groups = phoneNumber.match(PHONE_NUMBER_PATTERN)?.groups
  if (groups) {
    return `(${groups.area}) ${groups.prefix}-${groups.line}`
  }
  return phoneNumber
}
