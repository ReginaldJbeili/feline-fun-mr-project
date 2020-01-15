const checkResponse = response => {
    if (response.status !== 200) {
        console.log(`Error ${response.status}, cat app failed :(`);
        return;
    }
    return response.json();
}

const getAllCatBreeds = () => {
    return fetch ("https://api.thecatapi.com/v1/breeds?limit=200&page=0")
    .then(checkResponse)
    .catch(err => {
        throw new Error(`getAllCatBreeds failed ${err}`);
    });
}

export default getAllCatBreeds