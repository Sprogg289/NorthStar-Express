const fs = require('fs');
const path = require('path');
const p = path.join(__dirname,'..','photos');
console.log('[local-check] photosDir=', p);
console.log('[local-check] exists=', fs.existsSync(p));
try{
  const entries = fs.readdirSync(p);
  console.log('[local-check] entries=', entries);
  entries.forEach(e=>{
    try{
      const st = fs.statSync(path.join(p,e));
      console.log('[local-check] entry', e, 'isDir=', st.isDirectory());
    }catch(err){ console.log('[local-check] stat error', e, err.message); }
  })
}catch(e){ console.error('[local-check] readdir error', e.message); }
