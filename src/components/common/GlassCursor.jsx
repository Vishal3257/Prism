import { useEffect, useRef, useState } from 'react'

export default function GlassCursor() {
  const [isTouchDevice] = useState(() => {
    return (
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    )
  })

  const ringRef = useRef(null)
  const dotRef = useRef(null)

  const mousePos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const targetState = useRef({
    visible: false,
    isCard: false,
    isClicking: false,
    isStopped: false,
  })

  useEffect(() => {
    // Disable on touch / mobile devices where mouse hover does not exist
    if (isTouchDevice) return

    let stopTimer = null

    const handlePointerMove = (e) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY

      targetState.current.isStopped = false
      clearTimeout(stopTimer)
      stopTimer = setTimeout(() => {
        targetState.current.isStopped = true
      }, 60)

      const targetElement = e.target
      const cardTarget = targetElement?.closest?.(
        'article, [class*="card" i], [class*="Card"], [data-cursor="card"], [class*="rounded-2xl"][class*="border"], [class*="rounded-3xl"][class*="border"], [class*="rounded-[1.5rem]"][class*="border"], .orbit-item, .tech-chip'
      )
      const heroTarget = targetElement?.closest?.(
        'section[id*="hero" i], section[class*="hero" i], [data-cursor="hero"], #home, main > div > section:first-of-type, main > section:first-of-type'
      )

      if (cardTarget) {
        targetState.current.visible = true
        targetState.current.isCard = true
      } else if (heroTarget) {
        targetState.current.visible = true
        targetState.current.isCard = false
      } else {
        targetState.current.visible = false
      }
    }

    const handleMouseDown = () => {
      targetState.current.isClicking = true
    }
    const handleMouseUp = () => {
      targetState.current.isClicking = false
    }
    const handleMouseLeave = () => {
      targetState.current.visible = false
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    let animationId

    const animate = () => {
      const { visible, isCard, isClicking, isStopped } = targetState.current

      // Slightly snappier "moving" lag, quick settle when stopped — feels tighter/premium
      const lerpFactor = isStopped ? 0.32 : 0.26
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor

      if (ringRef.current) {
        const x = ringPos.current.x - 14
        const y = ringPos.current.y - 14

        let scale = 0
        if (visible) {
          if (isClicking) {
            scale = isCard ? 1.1 : 0.85
          } else if (isCard) {
            scale = isStopped ? 1.35 : 1.25
          } else {
            scale = isStopped ? 1.08 : 1
          }
        }

        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
        ringRef.current.style.opacity = visible ? '1' : '0'
      }

      if (dotRef.current) {
        const dotX = mousePos.current.x - 2.5
        const dotY = mousePos.current.y - 2.5
        const dotScale = visible ? (isClicking ? 0.6 : 1) : 0

        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) scale(${dotScale})`
        dotRef.current.style.opacity = dotScale ? '1' : '0'
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      clearTimeout(stopTimer)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [isTouchDevice])

  if (isTouchDevice) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none"
    >
      {/* Outer ring — border only, no blur, no fill, no glow */}
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-[28px] w-[28px] rounded-full border-[1.5px] border-black bg-transparent opacity-0 will-change-transform dark:border-white"
        style={{
          transition:
            'opacity 0.25s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
        }}
      />

      {/* Center dot — theme-aware, no glow */}
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-[5px] w-[5px] rounded-full bg-black opacity-0 will-change-transform dark:bg-white"
        style={{
          transition: 'opacity 0.2s ease, transform 0.15s ease-out, background-color 0.3s ease',
        }}
      />
    </div>
  )
}