const http = require('http');
const url = 'http://localhost:5173/api/gallery/events';
http.get(url, res=>{
  console.log('status', res.statusCode);
  let data='';
  res.on('data', c=>data+=c);
  res.on('end', ()=>{ console.log('body:', data); });
}).on('error', e=>console.error('error', e.message));
