//simple node server
const http=require('http');
 


const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  if(req.url==='/'){
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Home Page</title>');
    res.write('<body><h1>Welcome to Home Page</h1></body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url==='/products'){
 res.setHeader('Content-type','text/html');
 res.write('<html>');
 res.write('<head><title>Products</title>');
 res.write('<body><h1>Welcome to Products Page</h1></body>');
 res.write('</html>');
return res.end();
}

 res.setHeader('Content-type','text/html');
 res.write('<html>');
 res.write('<head><title>First Response</title>');
 res.write('<body><h1>Welcome to Backend</h1></body>');
 res.write('</html>');
 return res.end();
});
const PORT=3001;
server.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);
});
