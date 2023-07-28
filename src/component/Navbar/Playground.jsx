export default function Playground(){

    return (
        <div className="py-5 flex flex-col justify-around items-center md:h-[580px] w-full bg-[#6d59bc] ">
            <img className="w-3/4/ h-3/4" src="./src/assets/playground-banner.jpg" alt="banner" />
            <div className="text-2xl font-semibold tracking-wider">Measure your abilities with brain games and cognitive tests.</div>
            <div className="text-lg font-semibold bg-[#E55807] rounded-2xl w-32 h-fit p-3 cursor-pointer ">START TEST</div>
        </div>
    )

}