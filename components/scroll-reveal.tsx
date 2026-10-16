"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState, useEffect } from "react"
import type { ReactNode } from "react"

export const HERO_STAGGER = 0.1

type EntranceRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
}

export function EntranceReveal({
  children,
  className,
  delay = 0,
  duration = 800,
  y = 24,
}: EntranceRevealProps) {
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const delayInSeconds = delay > 10 ? delay / 1000 : delay
  const durationInSeconds = duration > 10 ? duration / 1000 : duration

  if (!mounted || reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ 
        duration: durationInSeconds, 
        delay: delayInSeconds, 
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  once?: boolean
  threshold?: number
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 800,
  y = 24,
  once = true,
}: ScrollRevealProps) {
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const delayInSeconds = delay > 10 ? delay / 1000 : delay
  const durationInSeconds = duration > 10 ? duration / 1000 : duration

  if (!mounted || reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-60px" }}
      transition={{ 
        duration: durationInSeconds, 
        delay: delayInSeconds, 
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

type StaggerRevealProps = {
  children: ReactNode[]
  className?: string
  childClassName?: string
  staggerDelay?: number
  duration?: number
  y?: number
  once?: boolean
  threshold?: number
}

export function StaggerReveal({
  children,
  className,
  childClassName,
  staggerDelay = 80,
  duration = 800,
  y = 24,
  once = true,
}: StaggerRevealProps) {
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const staggerInSeconds = staggerDelay > 10 ? staggerDelay / 1000 : staggerDelay
  const durationInSeconds = duration > 10 ? duration / 1000 : duration

  if (!mounted || reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          className={childClassName}
          initial={{ opacity: 0, y, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once, margin: "-60px" }}
          transition={{ 
            duration: durationInSeconds, 
            delay: index * staggerInSeconds,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}
