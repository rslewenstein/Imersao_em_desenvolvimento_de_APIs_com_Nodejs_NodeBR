class NotImplementedException extends Error{
    constructor(){
        super("Not Implemented Exception")
    }
}

//Como javascript não tem interface
//Essa classe simulará uma.
class ICrud{
    create(item){
        throw new NotImplementedException()
    }

    read(query){
        throw new NotImplementedException()
    }

    update(id, item){
        throw new NotImplementedException()
    }

    delete(id){
        throw new NotImplementedException()
    }
}

class MongoDB extends ICrud{

}

class ContextStrategy{
    constructor(strategy){
        this._database = strategy
    }

    create(item){
        return this._database.create(item)
    }
}