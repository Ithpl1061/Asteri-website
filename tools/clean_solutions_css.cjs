const fs = require('fs');
let code = fs.readFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/solutions-page.css', 'utf8');

const propRegex = /(font-size|line-height|font-weight|letter-spacing)\s*:[^;}]+(;|(?=\}))/g;

const targetSelectors = [
  '.solutions-hero h1',
  '.solutions-hero > p',
  '.solutions-hero .solutions-action',
  '.solutions-statement p',
  '.solutions-core > h2',
  '.solutions-outcomes > h2',
  '.solutions-outcomes-subheading h3',
  '.solutions-outcomes strong',
  '.solutions-outcomes li p',
  '.solutions-cta h2',
  '.solutions-cta p'
];

// Replaces typography properties only within blocks of the target selectors
for (const selector of targetSelectors) {
  // We need to match the selector, handle potential pseudo-classes or combinators if we were generic, 
  // but here the selectors match exactly what's in CSS.
  // CSS can have multiple lines, so we match the selector followed by '{', then everything up to '}'.
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp('(' + escapedSelector + '\\s*\\{[^}]+)\\}', 'g');
  code = code.replace(regex, (match, p1) => {
    return p1.replace(propRegex, '') + '}';
  });
}

fs.writeFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/solutions-page.css', code);
console.log("Updated solutions-page.css");
