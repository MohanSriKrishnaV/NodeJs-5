var http = require("http");
const httpServer = http.createServer(handleServer);
function handleServer(req, res) {
    const url = req.url
    if(url=="/"){
        res.writeHead(200, {
            "content-type": "text/plain"
        })
        res.end(
           "Change in the url to go to the welcome page or contact page"
        )
    }
    else if (url == "/welcome") {
        res.writeHead(200, {
            "content-type": "text/plain"
        })
        res.end(
            "Welcome to Dominos!"
        )
    }
    else if (url == "/contact") {
        res.writeHead(200, {
            "content-type": "text/json"
        })
        res.end(JSON.stringify({
            phone: '18602100000', 
  	        email: 'guestcaredominos@jublfood.com' 
        })
        )
    }else{
        res.writeHead(404, {
            "content-type": "text/json"
        })
        res.end(
            "404 ERROR NOT FOUND"
        )
    }

}


httpServer.listen(8081, () => {
    console.log("server is started")
})
module.exports = httpServer;