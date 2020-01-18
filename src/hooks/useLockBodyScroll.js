import { useLayoutEffect } from 'react'

export default function useLockBodyScroll() {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow
    const originalPosition = window.getComputedStyle(document.body).position

    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.position = originalPosition
    }
  }, [])
}
