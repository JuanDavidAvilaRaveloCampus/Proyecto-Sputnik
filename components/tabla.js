export default {
    article: {
        titulo : "Another blog post",
        date : {
            date : "December 23, 2020 by",
            name : "Jacob",
            href: "#",
        },
        paragraph : "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.",

        blockquote : {
            paragraph: "Longer quote goes here, maybe with some",
            strogn: "emphasized text",
            paragraph_continue : 'in the middle of it.',
        },
        paragraph_2 : "This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.",
        title_2 : "Example table",
        paragraph_3 : "And don't forget about tables in these posts:",
        true_Table : {
            thead: {
                col_1 : 'Name',
                col_2 : 'Upvotes',
                col_3 : 'Downvotes',
            },
            tbody: {
                row_1: {
                    td_1: 'Alice',
                    td_2: '10',
                    td_3: '11',   
                },
                row_2: {
                    td_1: 'Bob',
                    td_2: '4',
                    td_3: '3',   
                },
                row_3: {
                    td_1: 'Charlie',
                    td_2: '7',
                    td_3: '9',   
                }
            },
            tfoot: {
                row: {
                    td_1: 'Totals',
                    td_2: '21',
                    td_3: '23',   
                }
            }
        },
        paragraph_4: "This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout."
    },

    showArticle(){
        document.querySelector('#table').insertAdjacentHTML('beforeend',`
        <h2 class="blog-post-title">${this.article.titulo}</h2>
        <p class="blog-post-meta">
            ${this.article.date.date}
            <a href="${this.article.date.href}">
                ${this.article.date.name}
            </a>
        </p>
        <p>${this.article.paragraph}</p>
        <blockquote>
            <p>${this.article.blockquote.paragraph}<strong>
                ${this.article.blockquote.strogn}
            </strong>
            ${this.article.blockquote.paragraph_continue}
            </p>
        </blockquote>
        <p>${this.article.paragraph_2}</p>
        <h3>${this.article.title_2}</h3>
        <p>${this.article.paragraph_3}</p>
        <table class="table">
            <thead>
                <tr>
                    <th>${this.article.true_Table.thead.col_1}</th>
                    <th>${this.article.true_Table.thead.col_2}</th>
                    <th>${this.article.true_Table.thead.col_3}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${this.article.true_Table.tbody.row_1.td_1}</td>
                    <td>${this.article.true_Table.tbody.row_1.td_2}</td>
                    <td>${this.article.true_Table.tbody.row_1.td_3}</td>
                </tr>
                <tr>
                    <td>${this.article.true_Table.tbody.row_2.td_1}</td>
                    <td>${this.article.true_Table.tbody.row_2.td_2}</td>
                    <td>${this.article.true_Table.tbody.row_2.td_3}</td>
                </tr>
                <tr>
                    <td>${this.article.true_Table.tbody.row_3.td_1}</td>
                    <td>${this.article.true_Table.tbody.row_3.td_2}</td>
                    <td>${this.article.true_Table.tbody.row_3.td_3}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>${this.article.true_Table.tfoot.row.td_1}</td>
                    <td>${this.article.true_Table.tfoot.row.td_2}</td>
                    <td>${this.article.true_Table.tfoot.row.td_3}</td>
                </tr>
            </tfoot>
        </table>

        <p>${this.article.paragraph_4}</p>
        `)
    }
}