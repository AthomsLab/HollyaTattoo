"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useImageZoom } from "./use-image-zoom"

const DEFAULT_ZOOM_SCALE = 1.8
const REDUCED_ZOOM_SCALE = 1.35

export type ZoomableImageProps = {
  src: string
  alt: string
  width: number
  height: number
  sizes?: string
  priority?: boolean
  className?: string
  imageClassName?: string
  zoomScale?: number
}

export function ZoomableImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className,
  imageClassName,
  zoomScale = DEFAULT_ZOOM_SCALE,
}: ZoomableImageProps) {
  const { onMouseMove, onMouseLeave } = useImageZoom()
  const hoverScaleClass =
    zoomScale <= REDUCED_ZOOM_SCALE
      ? "[@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.35]"
      : "[@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.8]"

  return (
    <div
      className={cn("group overflow-hidden", className)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={cn(
          "h-auto w-full object-cover transition-transform duration-200 ease-out motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:cursor-zoom-in",
          hoverScaleClass,
          imageClassName,
        )}
        style={{
          transformOrigin: "var(--zoom-x, 50%) var(--zoom-y, 50%)",
        }}
      />
    </div>
  )
}
