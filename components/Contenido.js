export default {
    article: {
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
                        code : 'title',
                        span_3 : 'attribute for the full phrase.',
                    },
                    
                    item_4: {
                        span : 'Citations, like',
                        cite: '— Mark Otto',
                        span_2 : 'should use',
                        code : '&lt;cite&gt;',
                    },
                    item_5: {
                        del: 'Deleted',
                        span : 'text should use',
                        code : '&lt;del&gt;',
                        span_2 : 'and',
                        ins : 'inserted',
                        span_3 : 'text should use',
                        code_2 : '&lt;ins&gt;',
                    },
                    item_6: {
                        span : 'Superscript',
                        sup : 'text',
                        span_2 : 'uses',
                        code : '&lt;sup&gt;',
                        span_3 : 'and subscript ',
                        sup_2 : 'text',
                        span_4 : 'uses',
                        code_2 : '&lt;sub&gt',
                        
                        
                        ins : '',

                    },
                },
                span: '',
            },
            article_5: {
                title: 'Heading',
                paragraph: "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.",
                title_2: "Sub-heading",
                paragraph_2: "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.",
                pre : "Example code block",
                paragraph_3 : "This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.",
            },
    },
    showArticle(){
        document.querySelector('#article_1').insertAdjacentHTML('beforeend',`<h2 class="blog-post-title">${this.article.article_1.title}</h2>
        <p class="blog-post-meta">${this.article.article_1.by.name}<a href="${this.article.article_1.by.href}">${this.article.article_1.by.link}</a>
        </p>
        <p>${this.article.article_1.paragraph}</p>
        <hr>
        <p>${this.article.article_1.paragraph2}</p>
        <img src="${this.article.article_1.img}" style ="max-width: 100%;"><br>

        
        <h2>${this.article.article_2.title}</h2>
        <p>${this.article.article_2.span}</p>
        <blockquote class="blockquote">
            <p>${this.article.article_2.subtitle}</p>
        </blockquote>
        <p>${this.article.article_2.paragraph}</p>
        <img src="${this.article.article_2.img2}" style ="max-width: 100%;"><br><br>


        <h3>${this.article.article_3.title}</h3>
        <p>${this.article.article_3.paragraph}</p>
        <ul>
            <li>${this.article.article_3.list.item_1}</li>
            <li>${this.article.article_3.list.item_2}</li>
            <li>${this.article.article_3.list.item_1} </li>
        </ul>
        <p>${this.article.article_3.span}</p>
        <ol>
            <li>${this.article.article_3.list_2.item_1}</li>
            <li>${this.article.article_3.list_2.item_2}</li>
            <li>${this.article.article_3.list_2.item_3}</li>
        </ol>
        <p>${this.article.article_3.span}</p>
        <dl>
            <dt>${this.article.article_3.tecnologies.tecnologie_1.title}</dt>
            <dd>${this.article.article_3.tecnologies.tecnologie_1.paragraph}</dd>
            <dt>${this.article.article_3.tecnologies.tecnologie_2.title}</dt>
            <dd>${this.article.article_3.tecnologies.tecnologie_2.paragraph}</dd>
            <dd>${this.article.article_3.tecnologies.tecnologie_3.title}</dd>
            <dd>${this.article.article_3.tecnologies.tecnologie_3.paragraph}</dd>
        </dl>
        <img src="${this.article.article_3.img}" style ="max-width: 100%;"><br>


        <h2>${this.article.article_4.title}</h2>
        <p>${this.article.article_4.paragraph}
            < href=${this.article.article_4.link.link}>${this.article.article_4.link.name}</a>.
        </p>
        <ul>
            <li>
                <strong>${this.article.article_4.list.item_1.strong}</strong>
                ${this.article.article_4.list.item_1.use}
                <code class="language-plaintext highlighter-rouge">${this.article.article_4.list.item_1.code}</code>
            </li>
            <li>
                <em>${this.article.article_4.list.item_2.em}</em>            
                ${this.article.article_4.list.item_2.use}
                <code class="language-plaintext highlighter-rouge">${this.article.article_4.list.item_2.code}</code>
            </li>
            <li>
                ${this.article.article_4.list.item_3.span}
                <abbr title="HyperText Markup Langage">${this.article.article_4.list.abbr}</abbr>  
                ${this.article.article_4.list.span_2}          
                <code class="language-plaintext highlighter-rouge">${this.article.article_4.list.code}</code>
                ${this.article.article_4.list.span_3}
            </li>
            <li>
                <del>${this.article.article_4.list.item_5.del}</del> 
                ${this.article.article_4.list.item_5.span}
                <code class="language-plaintext highlighter-rouge">${this.article.article_4.list.item_5.code}</code>
                ${this.article.article_4.list.item_5.span_2} 
                <ins>${this.article.article_4.list.item_5.ins}</ins> 
                ${this.article.article_4.list.item_5.span_3}
                <code class="language-plaintext highlighter-rouge">${this.article.article_4.list.item_5.code_2}</code>.
            </li>
            <li>
                ${this.article.article_4.list.item_6.span} 
                <sup>${this.article.article_4.list.item_6.sup}</sup>
                ${this.article.article_4.list.item_6.span_2}
                <code class="language-plaintext highlighter-rouge">${this.article.article_4.list.item_6.code}</code>
                ${this.article.article_4.list.item_6.span_3}
                <sub>${this.article.article_4.list.item_6.sup_2}</sub>
                ${this.article.article_4.list.item_6.span_4}
                <code class="language-plaintext highlighter-rouge">${this.article.article_4.list.item_6.code}</code>.
            </li>
        </ul>
        <p>${this.article.article_4.span}</p>


        <h2>${this.article.article_5.title}</h2>
        <p>${this.article.article_5.paragraph}</p>
        <h3>${this.article.article_5.title_2}</h3>
        <p>${this.article.article_5.paragraph_2}</p>
        <pre><code>${this.article.article_5.pre}</code></pre>
        <p>${this.article.article_5.paragraph_3}</p>
    </article>`
    )},
};

