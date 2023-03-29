export default {
    article: [
        {
            article_1: {
                title: '',
                date: '',
                by: {
                    name: '',
                    link: '',
                },
                paragraph: '',
                paragraph_2: '',
                img: ''
            },
            article_2: {
                title: '',
                span: ' ',
                subtitle: '',
                paragraph: '',
                img: '',
            },
            article_3: {
                title: '',
                paragraph: '',
                list: {
                    item_1: '',
                    item_2: '',
                    item_3: '',
                },
                span: ' ',
                list_2: {
                    item_1: '',
                    item_2: '',
                    item_3: '',
                },
                span: '',
                tecnologies: {
                    tecnologie_1: {
                        title: '',
                        paragraph: ' ',
                    },
                    tecnologie_2: {
                        title: '',
                        paragraph: ' ',
                    },
                    tecnologie_3: {
                        title: '',
                        paragraph: ' ',
                    },
                }
            },
            article_4: {
                title: '',
                paragraph: '',
                link: '',
                list: {
                    item_1: '',
                    item_2: '',
                    item_3: '',
                    item_4: '',
                    item_5: '',
                    item_6: '',
                },
                span: '',
            },
            article_5: {
                title: '',
                paragraph: '',
            },
            article_6: {
                title: '',
                paragraph: '',
                span: '',
                paragraph_2: '',
            }

        }
    ],
    article_2: [
        {
            article_1 : {
                title: '',
                date: {
                    month: '',
                    day: '',
                    year: ''
                },
                link: '',
                paragraph: '',
                paragraph_2: '',
                paragraph_3: '',
            },
            article_2: {
                title: '',
                span: '',
                table : {
                    title: '',
                    span : '',
                    tabla : {
                        filas_header : {
                            title: '',
                            title_2: '',
                            title_3: ''
                        },
                        filas_1 : {
                            title: '',
                            title_2: '',
                            title_3: ''
                        },
                        filas_2 : {
                            title: '',
                            title_2: '',
                            title_3: ''
                        },
                        filas_3 : {
                            title: '',
                            title_2: '',
                            title_3: ''
                        },
                        filas_total : {
                            title: '',
                            title_2: '',
                            title_3: ''
                        }
                    },
                },
                paragraph : ''
            },
            article_3 : {
                title: '',
                date : {
                    month: '',
                    day: '',
                    year: ''
                },
                link: '',
                paragraph: '',
                span: '',
                list : {
                    item_1: '',
                    item_2: '',
                    item_3: '',
                },
                paragraph : ''
            },
            button : {
                bton_1 : '',
                bton_2 : '',
            }
        },
    ],

    showArticle(){
        document.querySelector('#article_1').insertAdjacentHTML('beforeend',`<h2 class="blog-post-title">${val.article.article_1.title}</h2>
        <p class="blog-post-meta">${val.article.article_1.date} by <a href="${val.article.article_1.by.link}" target="_blank">${val.article.article_1.by.name}</a></p>
        <p>${val.article.article_1.paragraph}</p>
        <hr>
        <p>${val.atricle.article_1.paragraph2}</p>
        <img src="${val.article.article_1.img}" style ="max-width: 100%;"><br>
        <h2>${val.article.article_2.title}</h2>
        <p>${val.article.article_2.span}</p>
        <blockquote class="blockquote">
            <p>${val.article.article_2.subtitle}</p>
        </blockquote>
        <p>${val.article.article_2.paragraph}</p>
        <img src="${val.article.article_2.img2}" style ="max-width: 100%;"><br><br>
        <h3>${val.article.article_3.title}</h3>
        <p>${val.article.article_3.paragraph}</p>
        <ul>
            <li>${val.article.article_3.list.item_1}</li>
            <li>${val.article.article_3.list.item_2}</li>
            <li>${val.article.article_3.list.item_1} </li>
        </ul>
        <p>${val.article.article_3.span}</p>
        <ol>
            <li>${val.article.article_3.list_2.item_1}</li>
            <li>${val.article.article_3.list_2.item_2}</li>
            <li>${val.article.article_3.list_2.item_3}</li>
        </ol>
        <p>${val.article.article_3.span}</p>
        <dl>
            <dt>${val.article.article_3.tecnologies.tecnologie_1.title}</dt>
            <dd>${val.article.article_3.tecnologies.tecnologie_1.paragraph}</dd>
            <dt>${val.article.article_3.tecnologies.tecnologie_2.title}</dt>
            <dd>${val.article.article_3.tecnologies.tecnologie_2.paragraph}</dd>
            <dt>${val.list8}</dt>
            <dd>2007/2008</dd>
        </dl>
        <img src="${val.img3}" style ="max-width: 100%;"><br>
        <h2>${val.title3}</h2>
        <p>${val.paragraph3}</p>
        <ul>
            <li>${val.album1}</li>
            <li>${val.album2}</li>
            <li>${val.album3}</li>
            <li>${val.album4}</li>
            <li>${val.album5}</li>
            <li>${val.album6}</li>
        </ul>
        <h2>${val.title4}</h2>
        <p>${val.paragraph4}</p>
        <img src="${val.img4}" style ="max-width: 100%;">
        <h3>${val.title5}</h3>
        <p>${val.paragraph5}</p>
    </article>`)
    }
    
};

