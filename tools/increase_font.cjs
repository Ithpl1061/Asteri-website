const fs = require('fs');
const filePath = 'c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services.tsx';
let code = fs.readFileSync(filePath, 'utf8');

code = code.replace(
  /style=\{\{ fontSize: "clamp\(30px, 4vw, 50px\)" \}\}/g,
  'style={{ fontSize: "clamp(40px, 8vw, 150px)" }}'
);

fs.writeFileSync(filePath, code);
console.log('Fixed font size to 150px in services.tsx');
