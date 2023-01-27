import { Link } from "react-router-dom"

export function Home() {
	return (
		<div>
			<h1 className="d-flex justify-content-center align-items-center">
				Welcome to my shop !
			</h1>
			<div className="d-flex flex-wrap position-relative justify-content-center align-items-center">
				<div className="position-absolute p-3 bg-light text-black rounded"><Link to="/Store">Go to store</Link></div>
				<img
					src="imgs/LibraryShop.jpg"
					alt="Image of a library shop"
					className="flex-fill"
				/>
			</div>
		</div>
	);
}
