export default {
    footer: {
        paragrahp: {
            name : 'Blog template built for',
            link_1: {
                name:'Bootstrap',
                href: 'https://getbootstrap.com/',
            },
            span: 'by',
            link_2: {
                name:'@mdo',
                href: 'https://twitter.com/mdo',
            },
        },
        paragrahp_2 : {
            name: 'Back to top',
            href: '#'
        }
    },

    showFooter(){
        document.querySelector('#footer').insertAdjacentHTML('beforeend',`
        <p>
            ${this.footer.paragrahp.name}
            <a href="${this.footer.paragrahp.link_1.href}"> ${this.footer.paragrahp.span}
                ${this.footer.paragrahp.link_1.name}
            </a>
            <a href="${this.footer.paragrahp.link_2.href}">
                ${this.footer.paragrahp.link_2.name}    
            </a>.
        </p>
        <p>
            <a href=" ${this.footer.paragrahp_2.href}"> ${this.footer.paragrahp_2.name}</a>
        </p>
        `)
    },
};