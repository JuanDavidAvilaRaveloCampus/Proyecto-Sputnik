export default{
    imagen: "../assets/img/images.squarespace-cdn.jpeg",

    TitleBanner: [
        {
            title2: "Poema",
            name: "ddd",
            content: "ddd"
        }
    ],

    ContentBanner: [
        {
            content: "Todos pensamos en algún momento que la poesia solo son palabras bonitas, pero creo, que hay algo más que eso...",
        }
    ],

    btn: [
        {
            name:"Continuar...",
            href:"https://music.apple.com/mx/artist/la-razon-de-todo/1470297098"
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