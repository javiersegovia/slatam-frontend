import { useLayoutEffect } from 'react'

export default function useLockBodyScroll() {
  useLayoutEffect(() => {
    document.body.classList.add('body__open-popper')

    return () => {
      document.body.classList.remove('body__open-popper')
    }
  }, [])
}
