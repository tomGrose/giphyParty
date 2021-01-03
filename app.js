const searchInput = document.querySelector('#searchInput');
const submitBtn = document.querySelector('#submitBtn');
const dltBtn = document.querySelector('#delete');
const apiKey = "rjDhmcxPifvxlunt8jW0CNyUVML1qZU4"
const memeDiv = document.querySelector('#memeDiv')

async function getData(query, key){
    try{
        let randInt = Math.floor(Math.random() * 40);
        const res = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {api_key:key, q:query, limit:40}});
        createImg(res.data.data[randInt].images.downsized_medium.url);

    } catch{
        alert("Enter a search term in the input!")
    }
}

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    const query  = searchInput.value;
    searchInput.value = "";
    getData(query, apiKey);
})

function createImg(url) {
    const gifImg = document.createElement('img');
    const gifContainer = document.createElement('div');
    gifContainer.classList.add("col");
    gifContainer.classList.add("m-3");
    gifImg.classList.add("img-fluid");
    gifImg.src = url;
    gifContainer.append(gifImg);
    memeDiv.append(gifContainer);

}
dltBtn.addEventListener("click", function(e){
    e.preventDefault();
    memeDiv.innerHTML = ""
})