import Image from "next/image";

export default function Ad(){
    return (
        <div style={{height:'511px'}} className=" w-60 bg-white p-3 shadow-lg flex flex-col items-center">
            <div className="relative">
                <Image
                    src='/ad.jpeg'
                    width={218}
                    height={218}
                    alt="ad"
                />
                <div className="bg-gray-900 w-fit font-bold text-sm text-white px-3 py-1 absolute right-0 top-0">Ad</div>
            </div>
            <p className=" font-medium text-lg mt-4">Advertisement title</p>
            <p className=" text-sm font-normal mt-4 text-gray-600 px-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    )
}