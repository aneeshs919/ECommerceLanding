const Links = [
  'The Edit',
  'New Arrivals',
  'Designers',
  'Clothing',
  'Shoes',
  'Bags',
  'Accessories',
  'Jewelry',
  'Beauty',
  'home'
]
const Header = ({ isMobile }) => {
  if (isMobile)
    return (
      <div className='max-w-maxContainer m-auto flex justify-between pl-4'>
        <div className='p-3 pl-0'>COMPANY NAME.COM</div>
      </div>
    )
  return (
    <div className='mb-5'>
      <div className='max-w-maxContainer m-auto flex justify-between'>
        <div className='p-3 pl-0'>COMPANY NAME.COM</div>
        <div className='flex'>
          {Links.map(item => (
            <a key={item} className='p-3'>
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
