export default function Gamecard({data}){
      const {svg,title,description} = data
        // SVG code as a string
        const svgCode = svg;

    return(
    <div className=" bg-white rounded-md text-black w-[400px] h-[300px] flex flex-col justify-center items-center cursor-pointer">
        <div className="w-[100px] h-[100px] m-2">
      <div dangerouslySetInnerHTML={{ __html: svgCode }} />
      </div>
        <h3 className="text-5xl text-center font-medium m-2">{title}</h3>
        <p className="text-xl text-center m-2" >{description}</p>
    </div>
    )
    
}