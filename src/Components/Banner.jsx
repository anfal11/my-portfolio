import { IoMdDownload } from "react-icons/io";
import pic from '../../public/pic2.jpg'
import "./Banner.css"

const Banner = () => {
    return (
        <div className="max-w-[1520px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center mt-20 mx-20 gap-10">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl font-bold mb-4">Hello, I am Anfal</h1>
                <h2 className="text-2xl font-semibold mb-4">Junior Frontend Developer</h2> 
                <button className="flex px-2 py-2 rounded-lg items-center gap-2 bg-black text-white hover:bg-gray-500">
                <IoMdDownload />Download CV</button>               
            </div>
            <img src={pic} className="one w-[650px]" alt="Anfal Image" />
            </div>
        </div>
    );
};

export default Banner;