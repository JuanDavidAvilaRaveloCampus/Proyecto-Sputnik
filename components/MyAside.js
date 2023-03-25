export default {
    nav: [
        {
            title : "about",
            paragraph: `Customize this section to tell your visitors a title bit abour tour publication, writers, contecnt, or something else enterely. Totally up you.`
        },
        {
            title : "archives",
            link : [
                {
                    name: "Abril 3",
                    href: "#"
                },
                {
                    name: "Abril 2",
                    href: "#"
                },
            ]
        }
    ],


    showAside() {
        this.nav.forEach((val,id)=>{
            if(val.link){
                this.list(val);
            } else {
                this.cards(val);
            }
            console.log(val);
        })
    },
    cards(val) {
        document.querySelector('#card').insertAdjacentHTML('beforeend',`<h4 class="fst-italic">${val.title}</h4><br>
        // ERROR EN EL VAL (NO LO DETECTA)
        <p class="mb-0">${val.paragraph}</p><br>`)
    },
    list(val){
        document.querySelector('#aside').insertAdjacentHTML('beforeend', `<h4 class= "fst-italic">${val.title}</h4><br>
        <ol class="list-unstyled mb-0">
        ${val.link.map((val,id) => `<li><a href="${val.link}" target="_blank">${val.name}</a></li>`).join("")}
        </ol><br>`)
    },
}