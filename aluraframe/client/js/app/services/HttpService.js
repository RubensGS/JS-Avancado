class HttpService {

    get(url){
        
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                 /*
                    0: requisição ainda não iniciada
                    
                    1: conexão com o servidor estabelecida
    
                    2: requisição recebida
    
                    3: processando requisição
    
                    4: requisição concluída e a respota está pronta
                */
               if (xhr.readyState == 4){
                   if (xhr.status == 200){
                       console.log('Obtendo as negociações...');
                        resolve(JSON.parse(xhr.responseText))   ;                        
                                               
                   } else {
                        reject(xhr.responseText);                      
                   }
               }
            }
            xhr.send();
        });
    }
}