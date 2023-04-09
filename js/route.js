// Se não tem o default é export named, se é named na hora de importar precisa do { }
export class Router { 
    routes = {}

    add(routeName ,  page) { // toda função dentro de uma class é chamado de método
    //    Variavel / Propriedade / Valor
        this.routes[routeName] = page // todas as varíaveis dentro de uma class é chamado de atributo

    }

    // Dentro de uma class, uma função não precisa usar a palavra reservada function
    route(event) {
        event = event || window.event // Verifica se eu passei um evento, se não pega o que está na janela
        event.preventDefault() // Evita o padrão, nesse caso, não carrega o link a
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle() // Cliquei no route, ai ele executa o handle e me diz a location do pathname
    // THIS. é necessário para utilizar uma função de outro escopo ou propriedade
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
    //  fetch vai sempre retornar um promessa, assíncrono, vai tirar e executar depois
        fetch(route)
    // then vai concluir quando tiver executado o fetch, voltar com uma function q voc pode dar o nome,
        .then(function (data) {
            return data.text()
        })
    // * utilizei dois jeitos, function e com arrow function *    
    // text em cima do data, vai transformar os dados em texto
    // arrow function quando está em apenas uma linha, já executa o return direto
        .then(html => {
            document.querySelector('#app').innerHTML = html
    // innerHTML porque tem html dentro do texto, quando tiver apenas texto, utilizamos .textContent
        })
    // html,data é o nome da function, então eu que escolho.
    }
}
