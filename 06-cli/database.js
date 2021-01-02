const {
    readFile,
    writeFile
} = require('fs');

const {
    promisify
} = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

// outra forma de obter dados do json
// const dadosJson = require('./herois.json')

class Database {
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }

    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    async escreverDadosArquivo(dados){
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async cadastrar(heroi){
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Database.now();

        /*
            {
                nome: Flash,
                poder: Velocidade
            }

            {
                id: 16516655
            }

            {
                nome: Flash,
                poder: Velocidade,
                id: 1
            }
        */

        const heroiComId = {
            id,
            ...heroi
        }

        const dadosFinal = [
            ...dados,
            heroiComId
        ]

        const resultado = await this.escreverDadosArquivo(dadosFinal)
        return resultado;
    }

    async listar(id){
        const dados = await this.obterDadosArquivo()

        //se o id foi passado, é para trazer os dados filtrados. Se não foi passado, traga todos os dados
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }
}

module.exports = new Database()