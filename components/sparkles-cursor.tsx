"use client"

import { useEffect, useState } from "react"

export function SparklesCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Glowing cross cursor */}
      <div className="relative w-8 h-8">
        {/* Outer glow layer */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
        
        {/* Cross shape with glow */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="absolute inset-0"
          style={{
            filter: "drop-shadow(0 0 6px rgba(255,255,255,0.9)) drop-shadow(0 0 12px rgba(255,255,255,0.6)) drop-shadow(0 0 20px rgba(255,255,255,0.3))",
          }}
        >
          {/* Vertical line */}
          <line
            x1="16"
            y1="4"
            x2="16"
            y2="28"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Horizontal line */}
          <line
            x1="4"
            y1="16"
            x2="28"
            y2="16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
