import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	//
	return (
		<div className="container">
			<h1 className="mt-3">Characters</h1>
			<div className="card-columns m-5 animated fadeIn">
				{store.peoples.map((item, id) => {
					return (
						<div key={id} className="card puntero">
							<img
								className="card-img-top"
								src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-characters-ranked-1577122930.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">
									<span className="d-block">Gender: {item.gender}</span>
									<span className="d-block">Hair-Color: {item.hair_color}</span>
									<span className="d-block">Eye-Color: {item.eye_color}</span>
								</p>

								<div className="row">
									<div className="col">
										<Link to={`/single/${id}`}>
											<button className="btn btn-primary">Learn more!</button>
										</Link>
									</div>
									<div className="col text-right">
										<button
											onClick={() => {
												actions.addCharacterFavorite(id);
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
