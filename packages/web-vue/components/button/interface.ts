import type { Size, Status } from '../_types/constant'

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'outline' | 'dashed' | 'text'
  shape?: 'square' | 'round' | 'circle'
  status?: Status
  size?: Size
  long?: boolean
  loading?: boolean
  disabled?: boolean
  htmlType?: string
  href?: string
}
