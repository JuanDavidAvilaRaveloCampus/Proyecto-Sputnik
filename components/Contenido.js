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

            },
            article_2: {
                title: '',
                span: ' ',
                subtitle: '',
                paragraph: '',
            },
            article_3: {
                title: '',
                paragraph: '',
                span: ' ',
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
        <p class="blog-post-meta">${val.article.article_1.date} by <a href="${val.article.article_1.by.href}" target="_blank">${val.article.article_1.by.name}</a></p>
        <p>${val.paragraph}</p>
        <hr>
        <p>${val.content}</p>
            <img src="${val.img1}" style ="max-width: 100%;"><br>
            <h2>${val.blockquote}</h2>
        <p>${val.reference}</p>
        <blockquote class="blockquote">
            <p>${val.quote}</p>
        </blockquote>
        <p>${val.additiona}</p>
        <img src="${val.img2}" style ="max-width: 100%;"><br><br>
        <h3>${val.title2}</h3>
        <p>${val.paragraph2}</p>
        <ul>
            <li>${val.list1}</li>
            <li>${val.list2}</li>
            <li>${val.list3} </li>
        </ul>
        <p>${val.reference2}</p>
        <ol>
            <li>${val.list6}</li>
            <li>${val.list7}</li>
            <li>${val.list8}</li>
        </ol>
        <dl>
            <dt>${val.list6}</dt>
            <dd>2006</dd>
            <dt>${val.list7}</dt>
            <dd>2007</dd>
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

