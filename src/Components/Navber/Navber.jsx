import { Link } from "react-router-dom";
import userIcon from"../../assets/user.png"

const Navber = () => {
    return (
        <div className="flex justify-between items-center my-4">
            {/* col 1 */}
            <div></div>
            {/* col 2 */}
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/carrer">Carrer</Link>
                <Link to="/about">About</Link>
            </div>
            {/* col 3 */}
            <div className="login flex items-center gap-3">
                <div className="">
                    <img src={userIcon} alt="" className="w-12"/>
                </div>
                <button className="btn btn-neutral rounded-none">Login</button>
            </div>
        </div>
    );
};
export default Navber;