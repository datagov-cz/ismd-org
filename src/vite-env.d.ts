/// <reference types="vite/client" />

interface Window {
  GOV_DS_CONFIG: {
    iconsPath: string
    iconsLazyLoad?: boolean
    canValidateWcagOnRender?: boolean
    warningLog?: boolean
    errorLog?: boolean
    log?: boolean
  }
}
