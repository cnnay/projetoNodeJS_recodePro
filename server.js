const http = require('https')

const server = http.createServer((req, res) => {
 //utilizando array para simplificar o codigo abaixo 
 
 const resp = []
 resp['/'] = '<h1>Home2</h1>'
 resp['/contato'] = '<h1>Contato2</h1>'
 resp['semURL'] = '<h1>resposta nao encontrada nessa url</h1>'
//  console.log(resp[req.url])



 res.end(resp[req.url] || resp['semURL'])



//forma de fazer usando o IF e chamando variaveis individualmente

    //     if(req.url == '/') {
//         res.end('<h1>Home</h1>')
//     }
        

//     if(req.url == '/contato') {
//         res.end('<h1>Contato</h1>')

//     } 
    
//     res.end('<h1>resposta nao encontrada nessa url</h1>')
    
})

server.listen(3001, 'localhost', () => {
    console.log('servidor de ligado em: http://localhost:3001')
    console.log('para desligar o servidor: ctrl + c')
})

