import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar: React.FC = () => {
	const [nav, setNav] = useState<boolean>(false);

	return (
		<>
			<div className="flex items-center justify-between mx-6 my-3 md:mx-10 md:my-5 lg:flex">
				<div className="font-semibold text-xl md:text-2xl">Tushar.dev</div>
				<div className="hidden lg:flex items-center gap-8 font-medium">
					<div className="cursor-pointer">Home</div>
					<div className="cursor-pointer">About</div>
					<div className="cursor-pointer">Projects</div>
					<div className="cursor-pointer">Resume</div>
					<div className="cursor-pointer">Contact</div>
				</div>
				<div
					className="text-xl md:text-2xl cursor-pointer lg:hidden"
					onClick={() => setNav(!nav)}>
					<GiHamburgerMenu />
				</div>
			</div>
			<div
				className={
					nav
						? "fixed top-0 left-0 w-screen h-screen bg-white text-black  z-10 duration-700"
						: "fixed top-0 left-[-100%] w-[300px] h-screen bg-white  text-black z-10 duration-700"
				}>
				<div className="flex justify-between mx-6 my-3 md:my-5 md:mx-10">
					<div className="font-semibold text-xl md:text-2xl">Tushar.dev</div>
					<div
						className="text-xl md:text-2xl cursor-pointer mt-1.5"
						onClick={() => setNav(!nav)}>
						<RxCross1 />
					</div>
				</div>

				<div className="flex items-center justify-evenly flex-col gap-8 text-xl font-semibold mt-10 md:text-2xl">
					<div className="">Home</div>
					<div className="">About</div>
					<div className="">Projects</div>
					<div className="">Resume</div>
					<div className="">Contact</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;

// import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross1 } from "react-icons/rx";
// // import "animate.css";

// const Navbar: React.FC = () => {
// 	const [nav, setNav] = useState(false);

// 	function handleDownload() {
// 		const file = new Blob(["Resume content"], { type: "application/pdf" });
// 		const fileURL = URL.createObjectURL(file);
// 		window.open(
// 			"https://drive.google.com/file/d/1NFi23I1auzgar2udNYbba3UJW7JbwaBr/view?usp=sharing"
// 		);
// 	}

// 	return (
// 		<>
// 			<div className="font-poppins text-primary lg:hidden shadow-md">
// 				<div
// 					className=" flex items-center justify-between mx-5 text-2xl h-16  md:text-5xl
//             md:mx-10 md:my-5 md:pb-2 font-extrabold">
// 					<div>Tushar.dev</div>
// 					<div>{/* <ThemeToggle /> */}</div>
// 					<div className="">
// 						<GiHamburgerMenu
// 							// size={30}
// 							onClick={() => setNav(!nav)}
// 							className="cursor-pointer text-3xl md:text-5xl"
// 						/>
// 					</div>
// 				</div>

// 				{/* This will be shown on click ham */}
// 				<div
// 					className={
// 						nav
// 							? "fixed top-0 left-0 w-screen h-screen bg-white text-black  z-10 duration-700"
// 							: "fixed top-0 left-[-100%] w-[300px] h-screen bg-white  text-black z-10 duration-700"
// 					}>
// 					<div className="flex items-center justify-between h-16 mx-5 md:mx-10 md:my-3">
// 						<div className="uppercase text-2xl text-black  md:text-5xl font-bold ">
// 							Tushar.dev
// 						</div>
// 						<RxCross1
// 							onClick={() => setNav(!nav)}
// 							className="text-3xl md:text-5xl"
// 						/>
// 					</div>
// 					<div className="flex flex-col text-center justify-center mt-16 space-y-12 text-4xl md:text-5xl md:space-y-14 md:mt-16">
// 						<div className="">Home</div>
// 						<div className="" onClick={() => setNav(!nav)}>
// 							<a href="#about"> About </a>
// 						</div>
// 						<div onClick={() => setNav(!nav)}>
// 							<a href="#projects">Projects</a>
// 						</div>
// 						<div onClick={() => setNav(!nav)}>
// 							<button onClick={handleDownload}>Resume</button>
// 						</div>
// 						<div onClick={() => setNav(!nav)}>
// 							<a href="#contact">Contact</a>
// 						</div>
// 						<div className=""></div>
// 					</div>
// 				</div>
// 			</div>
// 			{/* Desktop */}
// 			<div>
// 				<div className="font-poppins h-[70px] mt-3 hidden lg:flex items-center justify-between shadow-md">
// 					<div className=" text-2xl font-bold ml-5 xl:ml-8 tracking-widest xl:pb-3 ">
// 						Tushar.dev
// 					</div>
// 					<div className="flex items-center space-x-5 justify-between mr-5 xl:mr-8 xl:space-x-8 ">
// 						<div className="text-2xl ">Home</div>
// 						<div className="text-2xl ">
// 							<a href="#about"> About </a>
// 						</div>
// 						<div className="text-2xl ">
// 							<a href="#projects">Projects</a>
// 						</div>
// 						<div className="text-2xl ">
// 							<a href="#contact">Contact</a>
// 						</div>
// 						<div className="text-2xl">
// 							<button onClick={handleDownload}>Resume</button>
// 						</div>
// 						<div>{/* <ThemeToggle /> */}</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Navbar;
