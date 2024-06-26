import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import ProfileButton from "./ProfileButton";

const Header = () => {

	const { isLoggedIn } = useAppContext();
	return (
		<div className="bg-[#BB6464] py-6">
			<div className="container mx-auto flex justify-between">
				<span className="text-3xl text-white font-bold tracking-tight">
					<Link to="/">VISTADEL</Link>
				</span>
				<span className="flex space x-2">
					{isLoggedIn ? (<>
						<Link className="flex items-center text-white px-3 font-bold hover:bg-white hover:text-black" to="/">Home</Link>
						<Link className="flex items-center text-white px-3 font-bold hover:bg-white hover:text-black" to="/my-bookings">My Bookings</Link>
						<ProfileButton />
					</>) : (
						<Link to="/sign-in" className="flex bg-[#FFF2E1] items-center text-black-600 px-3 font-bold hover:bg-white hover:text-black hover:text-black-600">
							Sign In
						</Link>)}


				</span>
			</div>
		</div>
	);
};

export default Header;
