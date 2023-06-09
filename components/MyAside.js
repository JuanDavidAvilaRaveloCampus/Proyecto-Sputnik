export default {
    nav: [
        {
            title: "About",
            paragranph: "Esta pagina se trata de mostrar un poco acerca de las motos como; su historia, motos, la moto mas rapida, la seguridad que debemos tener entre otros. Te queremos enseñar lo mas posible para que puedas aprender algo acerca de estos vehiculos de movilizacion sobre dos ruedas en generalEsta pagina se trata de mostrar un poco acerca de las motos como; su historia, motos, la moto mas rapida, la seguridad que debemos tener entre otros. Te queremos enseñar lo mas posible para que puedas aprender algo acerca de estos vehiculos de movilizacion sobre dos ruedas en generalEsta pagina se trata de mostrar un poco acerca de las motos como; su historia, motos, la moto mas rapida, la seguridad que debemos tener entre otros. Te queremos enseñar lo mas posible para que puedas aprender algo acerca de estos vehiculos de movilizacion sobre dos ruedas en generalEsta pagina se trata de mostrar un poco acerca de las motos como; su historia, motos, la moto mas rapida, la seguridad que debemos tener entre otros. Te queremos enseñar lo mas posible para que puedas aprender algo acerca de estos vehiculos de movilizacion sobre dos ruedas en general",
        },
        {
            title: "Archives",
            link: [
                {
                    name: "1817",
                    href: "https://issuu.com/joseluissagredofernandez/docs/historia_bici",
                },
                {
                    name: "1867",
                    href: "https://www.bikester.es/info/historia-bicicleta/",
                },
                {
                    name: "1885",
                    href: "https://es.wikipedia.org/wiki/Daimler_Reitwagen",
                },
                {
                    name: "1894",
                    href: "https://www.motorpasionmoto.com/clasicas/hildebrand-wolfmuller-se-vende-la-primera-moto-de-la-historia",
                }
            ]
        },
        {
            title: "Elsewhere",
            link: [
                {
                    name: "GitHub",
                    href: "https://github.com/JuanDiegoQuinteroCampus",
                },
                {
                    name: "Instagram",
                    href: "https://www.instagram.com/",
                },
                {
                    name: "Facebook",
                    href: "https://www.facebook.com/",
                },
            ]
        }
    ],

    showAside() {

        const data = this.nav.map((val, id) => {
            return (
                (val.link)
                    ? this.list(val)
                    : this.cards(val)
            );
        });
        document.querySelector("#nav").insertAdjacentHTML("beforeend", data.join(""))
    },
    cards(p2) {
        return `
            <div class="p-4 mb-3 bg-black rounded ">
                <h4 class="fst-italic">${p2.title}</h4>
                <p class="mb-0">${p2.paragranph}</p>
            </div>` ;
    },
    list(p1) {
        return `
        <div class="p-4">
                <h4 class="fst-italic">${p1.title}</h4>
                <ol class="list-unstyled mb-0">
                ${p1.link.map((val, id) => `<li><a href="${val.href}">${val.name}</a></li>`).join("")}
                
                </ol>
            </div>
        `
    },

}