import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const NewsFeed = () => {
    return (
        <div className="flex items-center bg-gray-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-4 py-2">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className="px-4 py-2">
                <Link className="mr-4" to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quozs.</Link>
                <Link className="mr-4" to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quozs.</Link>
                <Link className="mr-4" to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quozs.</Link>
            </Marquee>
        </div>
    );
};

export default NewsFeed;