let time = 3500,
    currentImageindex = 0,
    images = document.querySelectorAll(".imgCarrousel img");
bullets = document.querySelectorAll(".bullet");

number = document.getElementById("tel");

max = images.length;

function nextImage() {
    images[currentImageindex].classList.remove("selected"),
        bullets[currentImageindex].classList.remove("selected");

    currentImageindex++;

    if (currentImageindex >= max) {
        currentImageindex = 0;
    }

    images[currentImageindex].classList.add("selected");
    bullets[currentImageindex].classList.add("selected");
}

function start() {
    setInterval(() => {
        nextImage();
    }, time);
}

function selectForm() {
    document
        .querySelector(".formOptions button.login")
        .classList.toggle("active");
    document.querySelector(".formOptions button").classList.toggle("active");
    formActive();
}

function selectLogin() {
    document.querySelector(".formOptions button").classList.toggle("active");
    document
        .querySelector(".formOptions button.login")
        .classList.toggle("active");

    formActive();
}

function formActive() {
    document.querySelector(".registerForm").classList.toggle("disable");
    document.querySelector(".loginForm").classList.toggle("disable");
}

number.oninput = function() {
    var tel = number.value;

    if (tel.length == 2) {
        number.value += " "
    }

    if (tel.length == 8) {
        number.value += "-"
    }


};


window.addEventListener("load", start);
document
    .querySelector(".formOptions button")
    .addEventListener("click", selectForm);
document
    .querySelector(".formOptions button.login")
    .addEventListener("click", selectLogin);