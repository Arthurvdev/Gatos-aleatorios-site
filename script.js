var miau = document.getElementById('miau');

const loading = document.querySelector(".carregamento");
const gif_cat = document.querySelector(".cat_gif");
const container_img = document.querySelector(".imagem_gerada");



function random(img){

    container_img.style.display = "block";
    document.querySelector(".img_gatinho").src = img
    setTimeout(() => {
        loading.style.opacity = "0%";
    }, 1800);

}

function link_img(dados) {
    const img = dados[0].url
    console.log(img)
    random(img)
}

async function btn(){
    miau.play();
    loading.style.display = "flex";
    loading.style.opacity = "100%";
    gif_cat.style.opacity = "0%";

    const dados = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_5xYND8fOJuz5vPIl4tJKN05ABZbtWEWd035ehl7ufAczofRwawk3ktMvou1zIUmW`).then(response => response.json());
    console.log(dados);
    link_img(dados);
}

