export default{
    title: [
        {
            name: "DE TODO UN POCO",
            href: "https://www.youtube.com/@UnPocoDeTodoYT"
        }
    ],
    company: [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "Folders",
            href: "#"
        },
        {
            name: "Music",
            href: "#"
        },
        {
            name: "Spotify",
            href: "#"
        },
        {
            name: "Videos",
            href: "#"
        },
    ],

    listTitle(){
        let plantilla ="";
            this.title.forEach((val, id) => {
                plantilla += `<a id="title" class="blog-header-logo text-dark" href="#">${val.name}</a>`
            });
                document.querySelector("#title").insertAdjacentHTML("beforeend", plantilla);
    },

    listCompany(){
        let plantilla ="";
        this.company.forEach((val, id) => {
            plantilla += `<a class="p-2 link-secondary" href="#">${val.name}</a>`
        });
        document.querySelector("#company").insertAdjacentHTML("beforeend", plantilla)
    },
}