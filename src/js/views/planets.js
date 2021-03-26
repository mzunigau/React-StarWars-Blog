import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/planets.scss";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="mt-3">Planets</h1>
			<div className="card-columns m-5 animated fadeIn">
				{store.planets.map((item, index) => {
					return (
						<div key={index} className="card puntero">
							<img
								className="card-img-top"
								src="https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/n2suqqwwzf1k5lsuzwly.jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">
									<span className="d-block">Population: {item.population}</span>
									<span className="d-block">Terrains: {item.terrain}</span>
								</p>

								<div className="row">
									<div className="col">
										<Link to={`/planets/${index}`}>
											<button className="btn btn-primary">Learn more!</button>
										</Link>
									</div>
									<div className="col text-right">
										<button
											onClick={() => {
												actions.addPlanetFavorite(index);
											}}
											className="btn btn-primary">
											<i className="bi bi-heart" />
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
