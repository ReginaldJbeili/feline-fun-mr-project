const checkResponse = response => {
    if (response.status !== 200) {
        console.log(`Error ${response.status}, cat app failed :(`);
        return;
    }
    return response.json();
}

const getCatInfo = breedId => {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`)
    .then(checkResponse)
    .catch(err => {
        throw new Error(`fetch getCatBreed failed ${err}`)
    });
};

export default getCatInfo

// breedId = will be the input.value of the getAllCats