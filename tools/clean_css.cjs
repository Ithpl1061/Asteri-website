const fs = require('fs');
let code = fs.readFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services-page.css', 'utf8');

// We want to remove font-size, line-height, letter-spacing, font-weight from specific selectors.
// List of selectors we care about:
const selectors = [
  '.figma-services__hero h1',
  '.figma-services__hero > p',
  '.figma-service-button',
  '.figma-service-button b',
  '.figma-services__statement',
  '.figma-services__core > h2',
  '.figma-services__core article h3',
  '.figma-services__core-side h4',
  '.figma-services__core-side p',
  '.figma-services__core-copy',
  '.figma-services__sap-card h3',
  '.figma-services__sap-side h4',
  '.figma-services__sap-side p',
  '.figma-services__sap-copy',
  '.figma-services__work h2',
  '.figma-services__work h3',
  '.figma-services__work-heading--desktop h2',
  '.figma-services__work-subheading--desktop h3',
  '.figma-services__work strong',
  '.figma-services__work li p',
  '.figma-services__partner-grid h2',
  '.figma-services__quote h2',
  '.figma-services__support',
  '.figma-services__support--desktop p',
  '.figma-services__cta h2',
  '.figma-services__cta p',
  '.figma-services__cta .figma-service-button'
];

for (let sel of selectors) {
  // Regex to match the selector block and remove typography properties
  // CSS rules in the file are often on one line or multiple lines.
  // We'll just replace globally where the selector appears before the properties.
  // But CSS can be tricky. It's easier to just match the properties everywhere, EXCEPT for nav and footer?
  // Let's just do a string replace for the specific lines we saw in grep.
}

// Actually, let's use a simpler approach. 
// Just remove ALL typography from services-page.css EXCEPT for nav, footer, social.
// Let's manually replace the known lines from our grep search.
// Since CSS is well structured, we can just replace `font-size: <val>;` with nothing, but only for our target elements.

const propRegex = /(font-size|line-height|font-weight|letter-spacing)\s*:[^;}]+(;|(?=\}))/g;

code = code.replace(/(\.figma-services__hero h1\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__hero > p\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-service-button\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-service-button b\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__statement\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__core > h2[^{]*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__core article h3\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__core-side h4\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__core-side p\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__core-copy\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__sap-card h3\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__sap-side h4\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__sap-side p\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__sap-copy\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__work h2[^{]*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__work h3\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__work-heading--desktop h2\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__work-subheading--desktop h3\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__work strong\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__work li p\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__partner-grid h2\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__quote h2\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__support\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__support--desktop p\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__cta h2\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));
code = code.replace(/(\.figma-services__cta p\s*\{[^}]+)\}/g, (match) => match.replace(propRegex, ''));

fs.writeFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services-page.css', code);
console.log("Updated services-page.css");
