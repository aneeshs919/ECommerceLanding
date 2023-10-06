import { CART_DATA } from '@/constants'
import frame1 from '@/assets/frame-1.png'
import frame2 from '@/assets/frame-2.png'
import { useState } from 'react'
const COLOR_PIC = {
  red: frame1,
  black: frame2
}
const CardDetails = () => {
  const [color, setColor] = useState('red')
  const [size, setSize] = useState('l')

  const trueColor = Object.keys(CART_DATA.color)
  const trueSize = Object.keys(CART_DATA.size)

  return (
    <div>
      <div className='text-[36px] leading-none	font-bold'>{CART_DATA.title}</div>
      <div className='my-2'>{CART_DATA.material}</div>
      <div className='font-bold'>${CART_DATA.amount}</div>
      <div className='my-6'>
        <div className='mb-2 uppercase'>COLORS : {color}</div>
        <div className='flex gap-3'>
          {trueColor.map(item => (
            <div
              className={`w-[50px]  border-2 border-gray ${
                color === item && 'border-black'
              }  `}
              key={item}
              onClick={() => setColor(item)}
            >
              <img width={'100%'} src={COLOR_PIC[item]} />
            </div>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className='flex justify-between mb-2'>
        <div className='uppercase'>SIZE : {size}</div>
        <div>Size Guide</div>
      </div>
      <div className='flex gap-2 flex-wrap uppercase'>
        {trueSize.map(item => (
          <div
            key={item}
            className={`border border-gray px-7 py-1 rounded-[20px] ${
              size === item && 'bg-black text-white'
            } ${
              !CART_DATA.size[item] &&
              'line-through pointer-events-none bg-gray-200'
            }`}
            onClick={() => setSize(item)}
          >
            <div>{item}</div>
          </div>
        ))}
      </div>

      <div className='w-full bg-black text-white text-center py-2 rounded-3xl uppercase mt-10 cursor-pointer hover:bg-gray-800'>
        add to bag
      </div>
      <div className='text-sm mt-5 text-gray-400 '>
        Get 4 interest-free payments of $196.25 with Klarna LEARN MORE <br />
        Speak to a Personal Stylist CHAT NOW
      </div>
    </div>
  )
}

export default CardDetails
