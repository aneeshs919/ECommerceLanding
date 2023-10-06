import unfilled from '@/assets/Unfilled.png'

const PhotoFrame = ({ photos }) => {
  const storeImage = [...photos]
  const newGroup = storeImage.slice(1, 3)
  storeImage.splice(1, 1)
  const groupItem = newGroup.map(item => (
    <img key={item} src={item} alt={`Photo ${item}`} />
  ))

  return (
    <div className='relative flex flex-col gap-3'>
      <div className='absolute right-10 top-0'>
        <div className='fixed'><img src={unfilled} width={20} height={20} /></div>
      </div>
      {storeImage.map((photo, index) => {
        if (index === 1) {
          return (
            <div key={index} className='flex'>
              {groupItem}
            </div>
          )
        } else {
          return (
            <div key={photo}>
              <img src={photo} alt={`Photo ${photo}`} />
            </div>
          )
        }
      })}
    </div>
  )
}

export default PhotoFrame
