const http=require('http');
const userHandle=require('./user');
const server=http.createServer(userHandle);

const PORT=3001;
server.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);
});
