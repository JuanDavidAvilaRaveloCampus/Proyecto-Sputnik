export default {
    article: {
        title : 'New feature',
        paragraph : {
            title: 'December 14, 2020 by ',
            link: {
                name: 'Chris',
                href: '#'
            }
        },
        paragraph_2 : "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.",
        table : {
            ul: {
                li_1: 'First list item',
                li_2: 'Second list item with a longer description',
                li_3: 'Third list item to close it out',
            }
        },
        paragraph_3 : `This is some additional paragraph placeholder content. It's a
        slightly shorter version of the other highly repetitive body text
        used throughout.`,
    },

    showArticle(){
        document.querySelector('#article_3').insertAdjacentHTML('beforeend',`
            <h2 class="blog-post-title">${this.article.title}</h2>
            <p class="blog-post-meta">
                ${this.article.paragraph.title}
                <a href="${this.article.paragraph.link.href}">${this.article.paragraph.link.name}</a>
            </p>

            <p>${this.article.paragraph_2}</p>
            <ul>
                <li>${this.article.table.ul.li_1}</li>
                <li>${this.article.table.ul.li_2}</li>
                <li>${this.article.table.ul.li_3}</li>
            </ul>
            <p>${this.article.paragraph_3}</p>
        `)
    }
};