import React from "react";
import "../../styles/home.scss";

export const Home = () => {
    const { store, actions } = useContext(Context);

    //onClick={() => actions.changeColor(index, "orange")}
    return (

        <div className="container mt-5">

            <div class="card-columns m-5 animated fadeIn">


                {store.people.map((item, index) => {
                    return (

                        <div class="card-columns m-5 animated fadeIn">
                            <div key={index} class="card puntero">
                                <img class="card-img-top" src="https://i.postimg.cc/qqbdCbvC/sw.jpg" alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">{item.name}</h5>
                                        <p class="card-text">
                                            {item}
                                        </p>
                                        <button className="btn btn-success" >Change Color</button>
                                    </div>
                            </div>
                        </div>

					);
				})}
                </div>


                        <Link to="/">
                            <button className="btn btn-primary">Back home</button>
                        </Link>


        </div>

    );
}

