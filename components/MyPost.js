export default {
    post : [
        {
            article: "Libro",
            title : "La Cabaña del tío Tom",
            date : "1852",
            paragraph : "Diez años después de la publicación de La cabaña del tío Tom, cuando Harriet Beecher Stowe se entrevistó con Abraham Lincoln en 1862, ya entrada la Guerra de Secesión y a poco tiempo de la definitiva abolición de la esclavitud en Estados Unidos, el presidente Lincoln la saludó diciendo: “Así que tú eres la pequeña mujer que escribió el libro que inició esta gran guerra”.",
            autor : "Harriet Beecher Stowe",
            img : "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1645114815-510Oec6py-L._SL500_.jpg?crop=1xw:1xh;center,top&resize=480%3A%2A",
            btn : {
                name : "Ver",
                href : "https://www.esquire.com/es/actualidad/libros/a39122519/libros-novelas-cambiaron-mundo/"
            },
        },
        {
            article: "Libro",
            title : "Diario de Ana Frank",
            date : "1947",
            paragraph : "El diario detallado de Ana Frank durante los dos años que pasó escondida de la ocupación nazi en los Países Bajos no es el único testimonio ni el más riguroso sobre el Holocausto. Ahí está Si esto es un hombre, el estremecedor relato de Primo Levi. Pero quizás por su abrupto final, que no incluye la trágica muerte de Ana en un campo de exterminio en 1944 con solo 15 años, o por la sencillez de su forma diarística o por la mirada de una adolescente que trata de mantener algún atisbo de normalidad en una pesadilla, El diario de Ana Frank se ha convertido en la conciencia mundial de lo que fue el exterminio de millones de personas por un régimen fascista. Más que ninguno, este es un libro que nos recuerda que hay historias que nunca se deberían repetir. ¿Acaso eso no es cambiar el mundo?",
            autor : "Anne Frank",
            img : "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1637075883-41dILCpdJvS._SL500_.jpg?crop=1xw:1xh;center,top&resize=480%3A%2A",
            btn : {
                name : "Ver",
                href : "https://www.esquire.com/es/actualidad/libros/a39122519/libros-novelas-cambiaron-mundo/"
            },
        },
        {
            article: "Libro",
            title : "1984",
            date : "1949",
            paragraph : "Que el año 1984 el Consejo de Europa se reuniera con personalidades de todo el mundo para debatir acerca de la novela de George Orwell, escrita 35 años antes, da perfecta cuenta de la repercusión que tuvo este libro. Y no hace tanto, hará cinco años, volvió a pasar: la política mundial volvió a disparar las ventas de 1984. La archiconocida distopía de ciencia ficción fue una de las primeras, más lúcidas y más importantes denuncias de la represión en la Unión Soviética, pero sobre todo analiza la mecánica de cualquier clase de totalitarismo. Y es que los conceptos de Gran Hermano, de la Policía del Pensamiento, de la neolengua y del doblepensar han aportado más al debate contemporáneo que algunos de los mejores libros de política. ”.",
            autor : "George Orwell  ",
            img : "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1625949476-51V5tGGgwHL._SL500_.jpg?crop=1xw:1xh;center,top&resize=480%3A%2A",
            btn : {
                name : "Ver",
                href : "https://www.esquire.com/es/actualidad/libros/a39122519/libros-novelas-cambiaron-mundo/"
            },
        },
        {
            article: "Libro",
            title : "Canción de Navidad ",
            date : "1843",
            paragraph : "Al lado de todos estos libros puede resultar frívolo reivindicar Canción de Navidad como uno de los que más cambiaron y a mejor el mundo pero… ¿qué haríamos sin la Navidad? Es cierto que la noche del 24 de diciembre se lleva celebrando desde que el mundo es mundo y existe el solsticio de invierno, pero lo que hoy todos entendemos como el “espíritu navideño” se lo debemos a esta pequeña historia sobre la transformación de un tacaño en un solidario benefactor. Gracias, Ebenezer Scrooge.”.",
            autor : "Charles Dickens ",
            img : "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1645115666-51C00zophLS._SL500_.jpg?crop=1xw:1xh;center,top&resize=480%3A%2A",
            btn : {
                name : "Ver",
                href : "https://www.esquire.com/es/actualidad/libros/a39122519/libros-novelas-cambiaron-mundo/"
            },
        },
    ],

    showCard(){
        this.post.forEach((val,id) => {
            document.querySelector("#targets").insertAdjacentHTM('beforeend',`
            <div class="col-md-6 ">
                <div id="chover" class="row h-auto g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                        <h3 class="mb-0">${val.title}</h3>
                        <div class="mb-1 text-muted">${val.date}</div>
                        <p class="card-text mb-auto">${val.paragraph}</p>
                        <a href="${val.btn.href}" target="_blank" class="stretched-link">${val.btn.name}</a>
                        <cite>${val.autor}</cite>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img src="${val.img}" class="img_book img-thumbnail">
                    </div>
                </div>
            </div>`);
        })
    },
}