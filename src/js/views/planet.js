import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img className="card-img-top" src="https://i.postimg.cc/qqbdCbvC/sw.jpg" alt="Card image cap" />
				</div>
				<div className="col text-center">
					<h1 className="display-4">{store.planets[params.id].name}</h1>
					<p>
						It is a long established fact that a reader will be distracted by the readable content of a page
						when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using
					</p>
				</div>
			</div>

			<hr />

			<div className="row">
				<div className="col text-center">
					<span className="d-block">Name:</span>
					<span className="d-block">{store.planets[params.id].name}</span>
				</div>
				<div className="col text-center">
					<span className="d-block">Climate:</span>
					<span className="d-block">{store.planets[params.id].climate}</span>
				</div>
				<div className="col text-center">
					<span className="d-block">Population:</span>
					<span className="d-block">{store.planets[params.id].population}</span>
				</div>

				<div className="col">
					<span className="d-block">Orbital period:</span>
					<span className="d-block">{store.planets[params.id].orbital_period}</span>
				</div>
				<div className="col">
					<span className="d-block">Rotation period:</span>
					<span className="d-block">{store.planets[params.id].rotation_period}</span>
				</div>
				<div className="col">
					<span className="d-block">Diameter:</span>
					<span className="d-block">{store.planets[params.id].diameter}</span>
				</div>
			</div>

			<div className="container mt-3">
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

Planet.propTypes = {
	match: PropTypes.object
};
