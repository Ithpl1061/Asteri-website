const fs = require('fs');

let css = fs.readFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services-page.css', 'utf8');

// The file is currently stripped of these properties. I need to find the stripped lines and replace them entirely.
// Let's replace the lines using regex that matches the selector until the closing bracket.
const replacements = {
  // Desktop
  '.figma-services__core article h3': '.figma-services__core article h3 { position: absolute; left: 90px; top: 75px; width: 670px; word-break: break-all; margin: 0; font-size: 190px; font-weight: 700; letter-spacing: -7px; line-height: .85; text-align: left; }',
  '.figma-services__core-side h4': '.figma-services__core-side h4 { margin: 0; font-size: 30px; line-height: 1; color: #fff; font-weight: 700; }',
  '.figma-services__core-side p': '.figma-services__core-side p { margin: 10px 0 0; color: #82e926; font-size: 21px; line-height: 1.25; font-weight: 500; }',
  '.figma-services__core-copy': '.figma-services__core-copy { position: absolute; left: 90px; top: 460px; width: 860px; margin: 0; transform: none; font-size: 26px; line-height: 1.35; color: #e0e0e0; text-align: left; }',
  '.figma-services__sap-card h3': '.figma-services__sap-card h3 { left: 160px !important; top: 58px !important; width: auto !important; font-size: 244px !important; text-align: left; word-break: normal; }',
  '.figma-services__sap-side h4': '.figma-services__sap-side h4 { margin: 0; font-size: 34px; line-height: 1; font-weight: 700; color: #fff; }',
  '.figma-services__sap-side p': '.figma-services__sap-side p { margin: 7px 0 0; color: #82e926; font-size: 25px; line-height: 1.15; font-weight: 600; }',
  '.figma-services__sap-copy': '.figma-services__sap-copy { position: absolute; left: 160px; top: 360px; width: 873px; margin: 0; font-size: 31px; line-height: 1.2; color: #e0e0e0; text-align: left; transform: none; }',
};

// Replace Desktop occurrences (which come first in the file)
let desktopReplaced = 0;
for (const [selector, originalLine] of Object.entries(replacements)) {
  const regex = new RegExp(selector.replace(/\./g, '\\.') + '\\s*\\{[^}]*\\}');
  css = css.replace(regex, (match) => {
    desktopReplaced++;
    return originalLine;
  });
}

// Now replace the mobile breakpoints occurrences (they are later in the file)
const mobileReplacements = {
  '.figma-services__core article h3': '.figma-services__core article h3 { position: absolute !important; top: 10px !important; left: -10px !important; width: 100% !important; font-size: 80px !important; text-align: left !important; margin: 0 !important; letter-spacing: -3px !important; opacity: 0.06; z-index: 0; word-break: normal !important; white-space: nowrap !important; }',
  '.figma-services__core-side h4': '.figma-services__core-side h4 { font-size: 24px !important; margin: 0 !important; font-weight: 700; color: #fff; }',
  '.figma-services__core-side p': '.figma-services__core-side p { font-size: 16px !important; line-height: 1.5 !important; margin: 8px 0 0 !important; letter-spacing: 0 !important; }',
  '.figma-services__core-copy': '.figma-services__core-copy { position: relative !important; top: auto !important; left: auto !important; width: 100% !important; font-size: 16px !important; margin: 0 !important; text-align: left !important; line-height: 1.6 !important; color: #ccc; transform: none !important; z-index: 1; }',
  '.figma-services__sap-side h4': '.figma-services__sap-side h4 { font-size: 24px !important; margin: 0 !important; font-weight: 700; color: #fff; }',
  '.figma-services__sap-side p': '.figma-services__sap-side p { font-size: 16px !important; line-height: 1.5 !important; margin: 8px 0 0 !important; letter-spacing: 0 !important; }',
  '.figma-services__sap-copy': '.figma-services__sap-copy { position: relative !important; top: auto !important; left: auto !important; width: 100% !important; font-size: 16px !important; text-align: left !important; margin: 0 !important; color: #ccc; transform: none !important; z-index: 1; }',
};

// Because we already replaced the first occurrence (desktop), the regex should now hit the second occurrence (mobile) 
// except for sap-card h3 which only has one rule in the mobile section? Actually sap-card h3 doesn't have a mobile rule! It only had a desktop rule.
for (const [selector, originalLine] of Object.entries(mobileReplacements)) {
  const regex = new RegExp(selector.replace(/\./g, '\\.') + '\\s*\\{[^}]*\\}');
  css = css.replace(regex, originalLine);
}

fs.writeFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services-page.css', css);
console.log("Reverted services-page.css");
