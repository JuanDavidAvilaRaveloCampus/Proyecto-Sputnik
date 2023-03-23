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
                    name: "Abril 2",
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
        const data = this.nav.map((val,id)=>{
            return (
                (val, link)
                    ? this.list(val)
                    : this.cards(val)
            );
        });
        document.querySelector('#nav').insertAdjacentHTML('beforeend', data.join('<br>'))
    },
    cards(p1) {
        return 
        `<div class="pr- mb-r br-light rounder">
            <h4 class="fas-italic">${p1-title}</h4>
            <p class="mb-0">${p1.paragraph}</p>
        </div>
        `;
    },
    list(p1){
        return `
        <div class="p-4">
            <h4 class= "fst-italic">${p1.title}</h4>
            <ol class="list-unstyled mb-0">
                ${p1.link.map(val, id=> `<li><a href="${val.href}">
                ${val.name}</a></li>`).join("")}
            </ol>
        </div>
        `;
    }
}