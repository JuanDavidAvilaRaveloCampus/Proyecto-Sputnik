export default{
    title: [
        {
            name: "¿Por que sí?",
            href: "#"
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
            name: "Relaxing",
            href: "#"
        },
        {
            name: "Meditation",
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