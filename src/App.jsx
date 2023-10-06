import { useSelector, useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

import { setTabIndex } from '@/actions'
import Header from '@/components/Header'
import Tabs from '@/components/Tabs'
import PhotoFrame from '@/components/PhotoFrame'
import CartDetails from '@/components/CardDetails'
import PhotoCarousel from '@/components/PhotoCarousel'
import { TAB_OPTIONS, TAB_DATA, PHOTOS } from '@/constants'
import { useEffect, useRef, useState } from 'react'

function App () {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const showObserver = useRef(null)
  const state = useSelector(state => state)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isMobile) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      })
      observer.observe(showObserver.current)
      return () => observer.disconnect()
    }
  }, [])

  console.log('isMobile', isMobile)

  return (
    <div className=''>
      <Header isMobile={isMobile} /> 
      <div className='flex flex-col lg:flex-row max-w-maxContainer m-auto gap-14 relative p-4 lg:p-0'>
        {!isMobile ? (
          <div className={`w-full lg:w-[30%] static lg:absolute left-0`}>
            <div
              className={`w-full lg:w-[330px] ${
                isIntersecting ? 'absolute' : 'static lg:fixed'
              }`}
            >
              <Tabs
                options={TAB_OPTIONS}
                onTabClick={index => dispatch(setTabIndex(index))}
                activeIndex={state.tabIndex}
              />
              <div className='pt-6'>{TAB_DATA[state.tabIndex]}</div>
            </div>
          </div>
        ) : null}

        {!isMobile ? (
          <div className='w-[40%] m-auto'>
            <PhotoFrame photos={PHOTOS} />
            <div ref={showObserver} />
          </div>
        ) : <PhotoCarousel photos={PHOTOS} />}

        <div
          className={`w-full lg:w-[30%] static lg:absolute right-0 top-0 pl-0 lg:pl-[40px]`}
        >
          <div
            className={`w-full lg:w-[330px] ${
              isIntersecting ? 'absolute' : 'static lg:fixed'
            }`}
          >
            <CartDetails />
          </div>
        </div>
      </div>
      <div className='flex justify-center uppercase gap-5 mt-5'>
        <div>Jonathan Simkhai</div>
        <div>Blazers</div>
        <div>Viscose</div>
      </div>
      <div className='flex justify-center flex-col w-1/2 m-auto text-center mt-10'>
        <div className='uppercase'>a note from the editor </div>
        <div className='text-xl	py-3'>
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky.
        </div>
        <div>By MINNA SHIM, Fashion Editor</div>
      </div>
    </div>
  )
}

export default App
