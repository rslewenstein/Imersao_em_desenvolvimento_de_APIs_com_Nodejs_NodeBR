const ICrud = require('./../interfaces/interfaceCrud')

//classe abstrata que chama o método de acordo com o que foi passado no construtor.
class ContextStrategy extends ICrud{
    constructor(strategy){
        super()
        this._database = strategy
    }

    create(item){
        return this._database.create(item)
    }

    read(item){
        return this._database.read(item)
    }

    update(id, item){
        return this._database.update(id, item)
    }

    delete(id){
        return this._database.delete(id)
    }
}

module.exports = ContextStrategy