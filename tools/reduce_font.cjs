const fs = require('fs');
const filePath = 'c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services.tsx';
let code = fs.readFileSync(filePath, 'utf8');

// Replace the desktop quote
code = code.replace(
  /<h2 ref=\{quoteLine1Ref\} className="type-statement whitespace-nowrap">Technology works best<\/h2>\s*<h2 ref=\{quoteLine2Ref\} className="type-statement whitespace-nowrap">when it works quietly\.<\/h2>/,
  '<h2 ref={quoteLine1Ref} className="type-statement whitespace-nowrap" style={{ fontSize: "50px" }}>Technology works best</h2>\n          <h2 ref={quoteLine2Ref} className="type-statement whitespace-nowrap" style={{ fontSize: "50px" }}>when it works quietly.</h2>'
);

// Replace the mobile quote (if it needs to be 50px too, though 50px on mobile might overflow, I'll use a clamp or just 50px since they said "to 50 px", but wait, clamp is better).
// Actually, I'll just change the desktop one to clamp(30px, 4vw, 50px) to be safe.
code = code.replace(
  /<section className="figma-services__quote figma-services__quote--mobile"><h2 className="type-statement">Technology works best<\/h2><h2 className="type-statement">when it works quietly\.<\/h2><\/section>/,
  '<section className="figma-services__quote figma-services__quote--mobile"><h2 className="type-statement" style={{ fontSize: "clamp(30px, 4vw, 50px)" }}>Technology works best</h2><h2 className="type-statement" style={{ fontSize: "clamp(30px, 4vw, 50px)" }}>when it works quietly.</h2></section>'
);

// Actually, let's also fix the desktop one to use the clamp so it doesn't break small screens.
code = code.replace(
  /style=\{\{ fontSize: "50px" \}\}/g,
  'style={{ fontSize: "clamp(30px, 4vw, 50px)" }}'
);


fs.writeFileSync(filePath, code);
console.log('Fixed font size in services.tsx');
