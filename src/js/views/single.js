import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img className="card-img-top" src="https://i.postimg.cc/qqbdCbvC/sw.jpg" alt="Card image cap" />
				</div>
				<div className="col text-center">
					<h1 className="display-4">{store.peoples[params.id].name}</h1>
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
					<span className="d-block">{store.peoples[params.id].name}</span>
				</div>
				<div className="col">
					Birth Year:
					{store.peoples[params.id].birth_year}
				</div>

				<div className="col">
					Gender:
					{store.peoples[params.id].name}
				</div>

				<div className="col">
					<span>Height:</span>
					<span>{store.peoples[params.id].skin_color}</span>
				</div>
				<div className="col">{store.peoples[params.id].name}</div>
				<div className="col">{store.peoples[params.id].name}</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
