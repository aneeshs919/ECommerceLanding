import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import unfilled from '@/assets/Unfilled.png'

const PhotoCarousel = ({ photos }) => {
  console.log('photos', photos)
  return (
    <div className='relative'>
      <div className='absolute right-0 top-0 z-10'>
        <img src={unfilled} width={20} height={20} />
      </div>
      <Carousel showStatus={false}>
        {photos.map(item => (
          <div key={item}>
            <img src={item} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default PhotoCarousel
