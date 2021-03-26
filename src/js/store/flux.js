const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			planets: [],
			peoples: []
		},
		actions: {
			// Poblar el store desde el localstorage
			setLocalStorage: (people, planet, favorites) => {
				setStore(JSON.parse(people));
				setStore(JSON.parse(planet));
				setStore(JSON.parse(favorites));
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
						localStorage.setItem("people", JSON.stringify({ peoples: data.results }));
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
						localStorage.setItem("planet", JSON.stringify({ planets: data.results }));
					});
			},
			addCharacterFavorite: index => {
				const store = getStore();

				let obj = store.favorites.find(obj => obj.name == store.peoples[index].name);

				if (obj == undefined) {
					store.favorites.push(store.peoples[index]);
					setStore(store);
					localStorage.setItem("favorites", JSON.stringify({ favorites: store.favorites }));
				}
			},
			addPlanetFavorite: id => {
				const store = getStore();

				let obj = store.favorites.find(favorite => favorite.name == store.planets[id].name);

				if (obj == undefined) {
					store.favorites.push(store.planets[id]);
					setStore(store);
					localStorage.setItem("favorites", JSON.stringify({ favorites: store.favorites }));
				}
			},
			deleteFavorite: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore(store);
				localStorage.setItem("favorites", JSON.stringify({ favorites: store.favorites }));
			}
		}
	};
};

export default getState;
