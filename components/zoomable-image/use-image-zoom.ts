"use client"

import { useCallback } from "react"
import type { MouseEvent } from "react"
import type { ImageZoomHandlers } from "./types"

function canHoverZoom(): boolean {
  if (typeof window === "undefined") {
    return false
  }

  return window.matchMedia("(hover: hover) and (pointer: fine)").matches
}

function setZoomOrigin(target: HTMLElement, xPercent: number, yPercent: number) {
  target.style.setProperty("--zoom-x", `${xPercent}%`)
  target.style.setProperty("--zoom-y", `${yPercent}%`)
}

export function useImageZoom(): ImageZoomHandlers {
  const onMouseMove = useCallback((event: MouseEvent<HTMLElement>) => {
    if (!canHoverZoom()) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) {
      return
    }

    const xPercent = Math.min(
      100,
      Math.max(0, ((event.clientX - rect.left) / rect.width) * 100),
    )
    const yPercent = Math.min(
      100,
      Math.max(0, ((event.clientY - rect.top) / rect.height) * 100),
    )
    setZoomOrigin(event.currentTarget, xPercent, yPercent)
  }, [])

  const onMouseLeave = useCallback((event: MouseEvent<HTMLElement>) => {
    setZoomOrigin(event.currentTarget, 50, 50)
  }, [])

  return {
    onMouseMove,
    onMouseLeave,
  }
}
