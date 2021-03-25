import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	//
	return (
		<div className="container">
			<div className="card-columns m-5 animated fadeIn">
				{store.peoples.map((item, index) => {
					return (
						<div key={index} className="card puntero">
							<img
								className="card-img-top"
								src="https://i.postimg.cc/qqbdCbvC/sw.jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">
									<span className="d-block">Gender: {item.gender}</span>
									<span className="d-block">Hair-Color: {item.hair_color}</span>
									<span className="d-block">Eye-Color: {item.eye_color}</span>
								</p>

								<Link to={"/single/" + index}>
									<button className="btn btn-success">Details</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
