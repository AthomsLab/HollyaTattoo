import type { MouseEvent } from "react"

export type ImageZoomHandlers = {
  onMouseMove: (event: MouseEvent<HTMLElement>) => void
  onMouseLeave: (event: MouseEvent<HTMLElement>) => void
}
