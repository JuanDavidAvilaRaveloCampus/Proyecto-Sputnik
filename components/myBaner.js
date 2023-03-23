export default{
    imagen: "../imagen1.jpg",
    showImage(){
        document.querySelector(".Style-img").style.backgroundImage = `url(${this.imagen})`;
    },

    TitleBanner: [
        {
            title2: "La niña que domo el mundo",
            name: "ddd",
            content: "ddd"
        }
    ],

    ContentBanner: [
        {
            content: "Esta fue la niña que domo el mundo por medio de una fotografia muy polemica",
        }
    ],

    btn: [
        {
            name:"Continuar...",
            href:"https://www.deepl.com/es/translator"
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

    Button(){
        let plantilla ="";
            this.btn.forEach((val, id) => {
                plantilla += `<p class="lead mb-0"><a href="${val.href}" class="text-white fw-bold"> ${val.name}</a></p>`
            });
                document.querySelector(".Btn-Banner").insertAdjacentHTML("beforeend", plantilla);
    }
}