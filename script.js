const task1ElementId = document.getElementById('task1');
const task1ElementClass = document.querySelector('.task1');
const addImgBtn = document.getElementById("addImg");
const increaseImgSizeBtn = document.getElementById("increaseImgSize");
const decreaseImgSizeBtn = document.getElementById("decreaseImgSize");
const deleteImgBtn = document.getElementById("deleteImg");
const getRandomColor = () => {
    return Math.floor(Math.random() * 255);
}
const getRGB = () => {
    return 'rgb(' + getRandomColor() + ',' + getRandomColor() + ',' +
getRandomColor() + ')';
}
task1ElementId.addEventListener('click', () => {
    task1ElementId.style.backgroundColor = getRGB();
    task1ElementId.style.color = getRGB();
})
task1ElementClass.addEventListener('click', () => {
    task1ElementClass.style.backgroundColor = getRGB();
    task1ElementClass.style.color = getRGB();
})
addImgBtn.addEventListener("click", () => {
    const image = document.createElement('img');
    image.src =
    "Innsbruk.jpg";
    image.id = "pastedImage";
    document.body.append(image);
    addImgBtn.disabled = true;
    increaseImgSizeBtn.disabled = false;
    decreaseImgSizeBtn.disabled = false;
    deleteImgBtn.disabled = false;
})
deleteImgBtn.addEventListener("click", () => {
    const image = document.getElementById("pastedImage");
    image?.remove();
    addImgBtn.disabled = false;
    increaseImgSizeBtn.disabled = true;
    decreaseImgSizeBtn.disabled = true;
    deleteImgBtn.disabled = true;
})
increaseImgSizeBtn.addEventListener("click", () => {
    const image = document.getElementById("pastedImage");
    if (image.offsetWidth >= 1400) {
        increaseImgSizeBtn.disabled = true;
        decreaseImgSizeBtn.disabled = false;
    } else {
        image.style.width = image.offsetWidth + 20 + "px";
        increaseImgSizeBtn.disabled = image.offsetWidth >= 1400;
        decreaseImgSizeBtn.disabled = false;
    }
})
decreaseImgSizeBtn.addEventListener("click", () => {
    const image = document.getElementById("pastedImage");
    if (image.offsetWidth <= 500) {
        increaseImgSizeBtn.disabled = false;
        decreaseImgSizeBtn.disabled = true;
    } else {
        image.style.width = image.offsetWidth - 20 + "px";
        increaseImgSizeBtn.disabled = false;
    
        decreaseImgSizeBtn.disabled = image.offsetWidth <= 500;
    }
})