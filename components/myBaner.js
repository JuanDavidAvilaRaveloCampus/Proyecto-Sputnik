export default{
    imagen: "../assets/img/9af92b173c78184514bfc394f26e0a07.jpg",

    TitleBanner: [
        {
            title2: "LEAGUE OF LEYENDS",
            name: "ddd",
            content: "ddd"
        }
    ],

    ContentBanner: [
        {
            content: "Uno de los juegos más adcitivos y toxicos del mundo.",
        }
    ],

    btn: [
        {
            name:"DESCARGAR...",
            href:"https://www.leagueoflegends.com/es-mx/"
        }
    ],

    listTitleBanner(){
        let plantilla ="";
            this.TitleBanner.forEach((val, id) => {
                plantilla += `<h1 class="display-4 fst-italic">${val.title2}</h1>`
            });
                document.querySelector(".TitleBanner").insertAdjacentHTML("beforeend", plantilla);
    },

    listContentBanner(){
        let plantilla ="";
            this.ContentBanner.forEach((val, id) => {
                plantilla += `<p class="ContentBanner my-3">${val.content}</p>`
            });
                document.querySelector(".ContentBanner").insertAdjacentHTML("beforeend", plantilla);
    },
    showImage(){
        document.querySelector(".Style-img").style.backgroundImage = `url(${this.imagen})`;
    },

    Button(){
        let plantilla ="";
            this.btn.forEach((val, id) => {
                plantilla += `<p class="lead mb-0"><a href="${val.href}" class="text-white fw-bold"> ${val.name}</a></p>`
            });
                document.querySelector(".Btn-Banner").insertAdjacentHTML("beforeend", plantilla);
    }
}