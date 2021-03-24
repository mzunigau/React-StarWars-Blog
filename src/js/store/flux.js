const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            favorites: [],
            planets: [],
            peoples: []
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            getCharacters: async () => {
                await fetch(
                    "https://www.swapi.tech/api/people",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        }
                    }
                )
                    .then(function (response) {
                        return response.json();
                    })
                    .then(data => {
                        setStore({ peoples: data });
                    })

            },
            getPlanets: async () => {
                await fetch(
                    "https://www.swapi.tech/api/planets",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        }
                    }
                )
                    .then(function (response) {
                        return response.json();
                    })
                    .then(data => {
                        setStore({ planets: data });
                    })

            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({ demo: demo });
            }
        }
    };
};

export default getState;
