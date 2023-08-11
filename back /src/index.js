
const http = require('http');
const getCharById  = require( './controllers/getCharById' );


http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")  ){
        
        let id = req.url.split('/').at(-1);
        
        getCharById(res, Number(id));
    
    }else{
        return("error 404")
    


}}).listen(3001, 'localhost')