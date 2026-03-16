// Brand colors for SVG illustrations
export const COLORS = {
  primary: '#1a5fb4',
  primaryDark: '#154d94',
  primaryLight: '#2a7de6',
  accent: '#e74c3c',
  accentDark: '#c0392b',
  beige: '#d4c5a0',
  beigeLight: '#e8dcc4',
  white: '#ffffff',
  gray: '#e0e0e0',
  grayDark: '#9e9e9e',
  grayDarker: '#616161',
  green: '#27ae60',
  greenLight: '#2ecc71',
} as const

export interface IllustrationProps {
  className?: string
  width?: number | string
  height?: number | string
}
