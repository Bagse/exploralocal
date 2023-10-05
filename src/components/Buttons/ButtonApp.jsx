import "./buttonfood.css"

function ButtonApp({linkapp, iconapp, titleapp}) {
  return (
    <a href={linkapp} target="_blank" rel="noopener noreferrer" className="fancy-button flex gap-2 items-center w-[180px] mt-3">
        {iconapp}
        <span className="flex flex-col gap-1">
            <span className="text-[14px]">Get It On</span>
            <span className="text-[14px]">{titleapp}</span>
        </span>
    </a>
  )
}

export default ButtonApp