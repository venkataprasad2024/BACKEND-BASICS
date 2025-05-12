//simple node server
const http=require('http');
const fs=require('fs');
const { URLSearchParams } = require('url');


const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body>');
    res.write('<h1>Submit Your Name</h1>');
    res.write('<form action="/submit" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name" >');
    res.write(`<br>`)
    res.write(`<label for="male" >Male</label>`)
    res.write('<input type="radio" name="gender"  value="male" >');
       res.write(`<label for="female" >Fe-Male</label>`)
    res.write('<input type="radio" name="gender"  value="female" >');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url.toLowerCase()==="/submit"&&req.method=="POST"){
    const body=[];

    req.on("data",chunk=>{
      console.log(chunk); 
    body.push(chunk);
     });
     req.on('end',()=>{
 const fullBody=Buffer.concat(body).toString();
// console.log(fullBody);
const params=new URLSearchParams(fullBody);
const bodyObject=Object.fromEntries(params);
console.log(bodyObject);
     })
fs.writeFileSync('file.txt',"PRASAD");
res.statusCode=302;
res.setHeader('Location','/');
  }
if(req.url==='/products'){
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
