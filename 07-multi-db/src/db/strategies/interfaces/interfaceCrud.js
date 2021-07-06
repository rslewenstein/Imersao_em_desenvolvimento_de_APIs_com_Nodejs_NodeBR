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

module.exports = ICrud