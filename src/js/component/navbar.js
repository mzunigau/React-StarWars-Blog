import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<img
					className="navbar-brand ml-5 mb-0 h1"
					src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
					width="100px"
					height="auto"
					alt="star wars"
				/>
			</Link>

			<div className="collapse navbar-collapse ml-5" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<Link to="/">
						<button className="btn btn-warning">Characters</button>
					</Link>

					<Link to="/planets">
						<button className="btn btn-warning ml-2">Planets</button>
					</Link>
				</div>
			</div>

			<div className="dropdown ml-auto dropleft">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
					<span className="badge badge-light">{store.favorites.length}</span>
				</button>
				<div className="dropdown-menu text-center" aria-labelledby="dropdownMenuButton">
					{store.favorites.length > 0 ? (
						store.favorites.map((item, index) => {
							return (
								<a
									key={index}
									onClick={() => {
										actions.deleteFavorite(index);
									}}
									className="dropdown-item"
									href="#">
									{item.name}
									<i className="bi bi-trash ml-2" />
								</a>
							);
						})
					) : (
						<p className="text-center">Empty</p>
					)}
				</div>
			</div>
		</nav>
	);
};
