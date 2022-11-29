import { SECTIONS } from './routes'

export const filteredSections = SECTIONS.filter((s) => s.path !== '/admin')
export const PA = SECTIONS.find((s) => s.path === '/admin')
