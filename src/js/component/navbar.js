import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<img
					className="navbar-brand mb-0 h1"
					src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
					width="100px"
					height="auto"
					alt="star wars"
				/>
			</Link>

			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<Link to="/">
						<button className="btn btn-warning">Characters</button>
					</Link>

					<Link to="/planets">
						<button className="btn btn-warning ml-2">Planets</button>
					</Link>
				</div>
			</div>

			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
