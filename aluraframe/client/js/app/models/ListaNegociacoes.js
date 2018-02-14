class ListaNegociacoes{
    
    //Esse contexto é o NegociacaoController
    constructor(){

        this._negociacoes = [];
        
    }

    adiciona(negociacao){
        
        this._negociacoes.push(negociacao);
        //Recebe a própria instancia da classe
     
    }

    get negociacoes(){

        //Programação defensiva - cria uma cópia do array original e retorna
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = []; 
       
    }


}