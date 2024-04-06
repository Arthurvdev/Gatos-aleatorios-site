function random(img){
    document.querySelector(".img_gatinho").src = img
}

function link_img(dados) {
    const img = dados[0].url
    console.log(img)
    random(img)
}

async function btn(){
    const dados = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_5xYND8fOJuz5vPIl4tJKN05ABZbtWEWd035ehl7ufAczofRwawk3ktMvou1zIUmW`).then(response => response.json());
    console.log(dados)
    link_img(dados)
}

