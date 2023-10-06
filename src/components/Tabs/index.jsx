const Tabs = ({ options, onTabClick, activeIndex }) => {
  return (
    <div className="flex gap-3">
      {options?.map((item, index) => (
        <div
          key={item}
          className={` ${activeIndex === index ? 'text-[red]' : 'text-gray-500'} uppercase`}
          onClick={() => onTabClick(index)}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default Tabs
