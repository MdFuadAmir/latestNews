import moment from "moment";
import logo from"../../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-2">
            <div>
                <img className="w-[300px]" src={logo} alt="" />
            </div>
            <h2 className="text-gray-500">Jurnalism Without Fear or Favour</h2>
            <p className="text-gray-600">{moment().format('dddd,MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;