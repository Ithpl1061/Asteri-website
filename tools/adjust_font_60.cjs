const fs = require('fs');
const filePath = 'c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services.tsx';
let code = fs.readFileSync(filePath, 'utf8');

code = code.replace(
  /style=\{\{ fontSize: "clamp\(40px, 8vw, 150px\)" \}\}/g,
  'style={{ fontSize: "clamp(30px, 5vw, 60px)" }}'
);

fs.writeFileSync(filePath, code);
console.log('Fixed font size to 60px in services.tsx');
