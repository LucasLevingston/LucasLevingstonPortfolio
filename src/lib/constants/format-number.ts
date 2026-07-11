const PHONE_NUMBER_PATTERN = /^(\d{2})(\d{5})(\d{4})$/

export const formatPhoneNumber = (phoneNumber: string): string => {
  const match = phoneNumber.match(PHONE_NUMBER_PATTERN)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phoneNumber
}
