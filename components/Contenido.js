export default {
    article: [
        {
            article_1: {
                title: 'From the Firehose',
                date: 'Sample blog post',
                by: {
                    name: 'January 1, 2021 by ',
                    href: '',
                    link: 'Mark',
                },
                paragraph: "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
                paragraph_2: "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat often to keep the demonstration flowing, so be on the lookout for this exact same string of text.",
                img: ''
            },
            article_2: {
                title: 'Blockquotes',
                span: 'This is an example blockquote in action:',
                subtitle: 'Quoted text goes here.',
                paragraph: "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.",
                img: '',
            },
            article_3: {
                title: 'Example lists',
                paragraph: "This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:",
                list: {
                    item_1: 'First list item',
                    item_2: 'Second list item with a longer description',
                    item_3: 'Third list item to close it out',
                },
                span: 'And this is an ordered list:',
                list_2: {
                    item_1: 'First list item',
                    item_2: 'Second list item with a longer description',
                    item_3: 'Third list item to close it out',
                },
                span: 'And this is a definiton list:',
                tecnologies: {
                    tecnologie_1: {
                        title: 'HyperText Markup Language (HTML)',
                        paragraph: 'The language used to describe and define the content of a Web page',
                    },
                    tecnologie_2: {
                        title: 'Cascading Style Sheets (CSS)',
                        paragraph: 'Used to describe the appearance of Web content',
                    },
                    tecnologie_3: {
                        title: 'JavaScript (JS)',
                        paragraph: 'The programming language used to build advanced Web sites and applications',
                    },
                img : '',
                }
            },
            article_4: {
                title: 'Inline HTML elements',
                paragraph: 'HTML defines a long list of available inline tags, a complete list of which can be found on the',
                link: {
                    name : 'Mozilla Developer Network',
                    link : 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
                },
                list: {
                    item_1: {
                        strong: 'To bold text',
                        use : 'use',
                        code : '&lt;strong&gt;',
                    },
                    item_2: {
                        em: 'To italicize text',
                        use : ', use',
                        code : '&lt;em&gt;',
                    },
                    item_3: {
                        span : 'Abbreviations, like',
                        abbr : 'HTML',
                        span_2 : 'should use',
                        code : '',
                        span_3 : '',
                    },
                    item_4: {
                        strong: '',
                        use : '',
                        code : '',
                    },
                    item_5: {
                        strong: '',
                        use : '',
                        code : '',
                    },
                    item_6: {
                        strong: '',
                        use : '',
                        code : '',
                    },
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
        <p class="blog-post-meta">${val.article.article_1.by.name}<a href="${val.article.article_1.by.href}">${val.article.article_1.by.link}</a>
        </p>
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
            <dd>${val.article.article_3.tecnologies.tecnologie_3.title}</dd>
            <dd>${val.article.article_3.tecnologies.tecnologie_3.paragraph}</dd>
        </dl>
        <img src="${val.article.article_3.img}" style ="max-width: 100%;"><br>


        <h2>${val.article.article_4.title}</h2>
        <p>${val.article.article_4.paragraph}
            < href=${val.article.article_4.link.link}>${val.article.article_4.link.name}</a>.
        </p>
        <ul>
            <li>
                <strong>${val.article.article_4.list.item_1.strong}</strong>
                ${val.article.article_4.list.item_1.use}
                <code class="language-plaintext highlighter-rouge">${val.article.article_4.list.item_1.code}</code>
            </li>
            <li>
                <em>${val.article.article_4.list.item_2.em}</em>            
                ${val.article.article_4.list.item_2.use}
                <code class="language-plaintext highlighter-rouge">${val.article.article_4.list.item_2.code}</code>
            </li>
            <li>
                ${val.article.article_4.list.item_3.span}
                <abbr title="HyperText Markup Langage">${val.article.article_4.list.item_3.abbr}</abbr>  
                ${val.article.article_4.list.list_3.span_2}          
                <code class="language-plaintext highlighter-rouge">${val.article.article_4.list.item_3.code}</code>
            </li>
            <li>
                ${val.article.article_4.list.item_4.use}
                <strong>${val.article.article_4.list.item_4.strong}</strong>            
                <code>${val.article.article_4.list.item_4.code}</code>
            </li>
            <li>
                ${val.article.article_4.list.item_5.use}
                <strong>${val.article.article_4.list.item_5.strong}</strong>            
                <code>${val.article.article_4.list.item_5.code}</code>
            </li>
            <li>
                ${val.article.article_4.list.item_6.use}
                <strong>${val.article.article_4.list.item_6.strong}</strong>
                <code>${val.article.article_4.list.item_6.code}</code>
            </li>
        </ul>
        <p>${val.article.article_4.span}</p>


        <h2>${val.article.article_5.title}</h2>
        <p>${val.article.article_5.paragraph}</p>


        <h3>${val.article.article_6.title}</h3>
        <p>${val.article.article.paragraph}</p>
        <pre><code>${val.article.article_6.span}</code></pre>
        <p>${val.article.article_6.paragraph2}</p>
    </article>`
    )},
};

