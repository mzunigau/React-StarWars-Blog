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
				await fetch("https://swapi.dev/api/people/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					}
				})
					.then(function(response) {
						return response.json();
					})
					.then(data => {
						setStore({ peoples: data.results });
					});
			},
			getPlanets: async () => {
				await fetch("https://swapi.dev/api/planets/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					}
				})
					.then(function(response) {
						return response.json();
					})
					.then(data => {
						setStore({ planets: data.results });
					});
			},
			addCharacterFavorite: index => {
				const store = getStore();

				let obj = store.favorites.find(obj => obj.name == store.peoples[index].name);

				if (obj == undefined) {
					store.favorites.push(store.peoples[index]);
					setStore(store);
				}
			},
			addPlanetFavorite: id => {
				const store = getStore();

				let obj = store.favorites.find(favorite => favorite.name == store.planets[id].name);

				if (obj == undefined) {
					store.favorites.push(store.planets[id]);
					setStore(store);
				}
			},
			deleteFavorite: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore(store);
			}
		}
	};
};

export default getState;
