function email_template_simple(body, company = '') {
    return `
        NOME: ${body.name}
        TELEFONE: ${body.phone}
        EMAIL: ${body.email}
        VIA: ${company}
        
        MENSAGEM
        
        ${body.message}
    `;
}

module.exports = email_template_simple