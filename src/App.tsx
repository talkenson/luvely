import { ReactComponent as Logo } from './assets/logo.svg'
import ChevronDown from '~icons/ion/chevron-down'
import { useEffect, useState } from 'react'
import { useWindowSize } from './hooks/useWindowSize'

let deletableFunction = (height: number) => {
  let vh = height * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

const App = () => {
  const [canUpdate, setCanUpdate] = useState(true)
  const { height } = useWindowSize()

  useEffect(() => {
    if (canUpdate) deletableFunction(height)
  }, [height])

  useEffect(() => {
    const timer = setTimeout(() => setCanUpdate(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='container h-full mx-auto ring-0 ring-black flex flex-col space-y-8 px-4 text-white'>
      <div className='w-full flex flex-col items-center justify-center shrink-0 screenHeight relative '>
        <Logo className='w-1/2 lg:w-1/3' />
        <ChevronDown className='absolute bottom-6 w-8 h-8 animate-bounce' />
      </div>
    </div>
  )
}

export default App
