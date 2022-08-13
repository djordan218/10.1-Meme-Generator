const addDiv = document.createElement('div');
const url = document.querySelector('#url');
const topTextInput = document.querySelector('#topText')
const bottomTextInput = document.querySelector('#bottomText');
const memeLocation = document.querySelector('#location');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const createImg = document.createElement('img');
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'meme')
    newDiv.classList.add('memeDiv');
    memeLocation.append(newDiv);

    const imgNewDiv = document.createElement('div');
    let img = url.value; // create variable or url input
    let src = img;
    let imgTag = createImg;
    imgTag.src = src;
    imgNewDiv.append(imgTag)
    newDiv.append(imgNewDiv); // add img to memeLocation div in HTML

    let textTop = document.createElement('div');
    textTop.classList.add("textTop");
    textTop.innerHTML = topTextInput.value;
    newDiv.append(textTop);

    let textBottom = document.createElement('div');
    textBottom.classList.add("textBottom");
    textBottom.innerHTML = bottomTextInput.value;
    newDiv.append(textBottom);

    const addBtn = document.createElement('button');
    addBtn.classList.add('removeBtn')
    addBtn.innerText = "I hate this meme.";
    newDiv.append(addBtn);

    form.reset();

});

document.addEventListener('click', function (e) {
    if (e.target.className === "removeBtn")
        e.target.parentNode.remove();
});



const btn = document.querySelector('#reload');
btn.addEventListener('click', function () {
    window.location.reload();
})