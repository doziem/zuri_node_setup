const http = require('node:http');
const os = require('os');

const PORT = 3000;
   
  const server = http.createServer((req, res) => {

    if (req.method === 'OPTIONS') {
      res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      });
      res.end();
      return;
    };
    
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'GET') {
      setTimeout(() => {
        //CPU and OS information
        const cpuData = os.cpus();
        const osData = {
          platform: os.platform(),
          type: os.type(),
          release: os.release(),
          totalMemory: os.totalmem(),
          freeMemory: os.freemem(),
          hostname:os.hostname(),
          userInfo:os.userInfo()
        };
        
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ cpuData, osData }));
      }, Math.floor(Math.random() * 5000));
    } 
    
  });

  
  server.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
  });