async function getRandomImage() {
    const response = await fetch('https://api.unsplash.com/photos/random?client_id=WE3a5Bv0a26NMFgj8YDKvHVXISZmm1ievmEsv3y_Iqg');
    const data = await response.json();
    const image = document.getElementById('image');
    image.src = data.urls.regular;
    const photographer = document.getElementById('photographer');
    photographer.textContent = data.user.name;
}

let likeCount = 0;

function likePhoto() {
    likeCount++;
    document.getElementById('like-counter').textContent = likeCount;
}

getRandomImage();