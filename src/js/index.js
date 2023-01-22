const buttonTrailer = document.querySelector(".button-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

buttonTrailer.addEventListener("click", () => {
alternarModal();
video.setAttribute("src", linkDoVideo);
});
botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});