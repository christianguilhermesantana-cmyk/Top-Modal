const all_img = document.querySelectorAll(".imagem");
const img_mudar = document.querySelector("#modal-img");
const modal = document.querySelector("#modal");
const fechar = document.querySelector("#btn-fechar");
const modall = document.querySelector(".modal");

const mudar_o_src = (quem) =>{
    img_mudar.src = quem;
}


all_img.forEach((imagem) => {
    imagem.addEventListener('click', (evento) => {
        const src = evento.currentTarget.src;
        console.log(src);
        mudar_o_src(src);

        modal.style.display = "flex";
        modall.style.display = "none";
    });
});

fechar.addEventListener("click", (e) => {
    modal.style.display = "none"; 
    modall.style.display = "grid";
});