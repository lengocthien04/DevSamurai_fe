import i18next, { t as i18nTranslate } from 'i18next' // Import initialized i18next

export const delivery_duplicateDeliveryErrorMess = 'some deliveries had been created before'

let httpStatusMessageMap: Map<string, string> | null = null

const errorList = [
  'User not found',
  'password must be longer than or equal to 8 characters',
  'login failed',
  delivery_duplicateDeliveryErrorMess
]

const translateWithNamespace = (key: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const translation = i18nTranslate(key as any, { ns: 'error' })
  return translation
}

// Function to create the map after i18next initialization
const createHttpStatusMessageMap = async (): Promise<Map<string, string>> => {
  // If the map is already created, return it
  if (httpStatusMessageMap) return httpStatusMessageMap

  // Wait for i18next to be initialized if it hasn't been
  if (!i18next.isInitialized) {
    await new Promise<void>((resolve) => {
      i18next.on('initialized', resolve)
    })
  }

  // Create the map after initialization

  httpStatusMessageMap = new Map(errorList.map((name) => [name, translateWithNamespace(name)]))

  return httpStatusMessageMap
}

export default createHttpStatusMessageMap
