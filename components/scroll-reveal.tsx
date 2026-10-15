"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  threshold?: number
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 700,
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", onChange)
    
    const timer = requestAnimationFrame(() => {
      setIsReady(true)
    })
    
    return () => {
      mq.removeEventListener("change", onChange)
      cancelAnimationFrame(timer)
    }
  }, [])

  useEffect(() => {
    if (!isReady || reducedMotion) {
      setIsVisible(true)
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: "0px 0px -100px 0px" }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [isReady, reducedMotion, once, threshold])

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(48px)",
        transition: isReady 
          ? `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`
          : "none",
      }}
    >
      {children}
    </div>
  )
}

type StaggerRevealProps = {
  children: ReactNode[]
  className?: string
  childClassName?: string
  staggerDelay?: number
  duration?: number
  once?: boolean
  threshold?: number
}

export function StaggerReveal({
  children,
  className,
  childClassName,
  staggerDelay = 100,
  duration = 700,
  once = true,
  threshold = 0.15,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", onChange)
    
    const timer = requestAnimationFrame(() => {
      setIsReady(true)
    })
    
    return () => {
      mq.removeEventListener("change", onChange)
      cancelAnimationFrame(timer)
    }
  }, [])

  useEffect(() => {
    if (!isReady || reducedMotion) {
      setIsVisible(true)
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: "0px 0px -100px 0px" }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [isReady, reducedMotion, once, threshold])

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(childClassName)}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(48px)",
            transition: isReady 
              ? `opacity ${duration}ms ease-out ${index * staggerDelay}ms, transform ${duration}ms ease-out ${index * staggerDelay}ms`
              : "none",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
