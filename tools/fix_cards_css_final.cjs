const fs = require('fs');

let css = fs.readFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services-page.css', 'utf8');

// Restore original desktop CSS properties for cards
css = css.replace(/\.figma-services__core article h3\s*\{[^}]*\}/, '.figma-services__core article h3 { position: absolute; left: 90px; top: 75px; width: 670px; word-break: break-all; margin: 0; font-size: 190px; font-weight: 700; letter-spacing: -7px; line-height: .85; text-align: left; }');
css = css.replace(/\.figma-services__core-side h4\s*\{[^}]*\}/, '.figma-services__core-side h4 { margin: 0; font-size: 30px; line-height: 1; color: #fff; font-weight: 700; }');
css = css.replace(/\.figma-services__core-side p\s*\{[^}]*\}/, '.figma-services__core-side p { margin: 10px 0 0; color: #82e926; font-size: 21px; line-height: 1.25; font-weight: 500; }');
css = css.replace(/\.figma-services__core-copy\s*\{[^}]*\}/, '.figma-services__core-copy { position: absolute; left: 90px; top: 460px; width: 860px; margin: 0; transform: none; font-size: 26px; line-height: 1.35; color: #e0e0e0; text-align: left; }');
css = css.replace(/\.figma-services__sap-card h3\s*\{[^}]*\}/, '.figma-services__sap-card h3 { left: 160px !important; top: 58px !important; width: auto !important; font-size: 244px !important; text-align: left; word-break: normal; }');
css = css.replace(/\.figma-services__sap-side h4\s*\{[^}]*\}/, '.figma-services__sap-side h4 { margin: 0; font-size: 34px; line-height: 1; font-weight: 700; color: #fff; }');
css = css.replace(/\.figma-services__sap-side p\s*\{[^}]*\}/, '.figma-services__sap-side p { margin: 7px 0 0; color: #82e926; font-size: 25px; line-height: 1.15; font-weight: 600; }');
css = css.replace(/\.figma-services__sap-copy\s*\{[^}]*\}/, '.figma-services__sap-copy { position: absolute; left: 160px; top: 360px; width: 873px; margin: 0; font-size: 31px; line-height: 1.2; color: #e0e0e0; text-align: left; transform: none; }');

// Restore original mobile CSS properties for cards (this targets the SECOND occurrence of each rule, since the first is the desktop one)
// Wait, `String.prototype.replace(regex)` will ALWAYS match the FIRST occurrence.
// Since we already replaced the first occurrence, its contents now match the regex `\{[^}]*\}`. 
// If we run `replace` again with the same regex, it will overwrite the desktop one we just fixed!
// So we must use a function that keeps track of matches.

function replaceOccurrences(source, regex, replacements) {
  let occurrences = {};
  return source.replace(new RegExp(regex, 'g'), (match, p1) => {
    occurrences[p1] = (occurrences[p1] || 0) + 1;
    let newRule = match;
    if (replacements[p1] && replacements[p1][occurrences[p1]]) {
       newRule = replacements[p1][occurrences[p1]];
    }
    return newRule;
  });
}

const allReplacements = {
  '.figma-services__core article h3': {
    1: '.figma-services__core article h3 { position: absolute; left: 90px; top: 75px; width: 670px; word-break: break-all; margin: 0; font-size: 190px; font-weight: 700; letter-spacing: -7px; line-height: .85; text-align: left; }',
    2: '.figma-services__core article h3 { position: absolute !important; top: 10px !important; left: -10px !important; width: 100% !important; font-size: 80px !important; text-align: left !important; margin: 0 !important; letter-spacing: -3px !important; opacity: 0.06; z-index: 0; word-break: normal !important; white-space: nowrap !important; }'
  },
  '.figma-services__core-side h4': {
    1: '.figma-services__core-side h4 { margin: 0; font-size: 30px; line-height: 1; color: #fff; font-weight: 700; }',
    2: '.figma-services__core-side h4 { font-size: 24px !important; margin: 0 !important; font-weight: 700; color: #fff; }'
  },
  '.figma-services__core-side p': {
    1: '.figma-services__core-side p { margin: 10px 0 0; color: #82e926; font-size: 21px; line-height: 1.25; font-weight: 500; }',
    2: '.figma-services__core-side p { font-size: 16px !important; line-height: 1.5 !important; margin: 8px 0 0 !important; letter-spacing: 0 !important; }'
  },
  '.figma-services__core-copy': {
    1: '.figma-services__core-copy { position: absolute; left: 90px; top: 460px; width: 860px; margin: 0; transform: none; font-size: 26px; line-height: 1.35; color: #e0e0e0; text-align: left; }',
    2: '.figma-services__core-copy { position: relative !important; top: auto !important; left: auto !important; width: 100% !important; font-size: 16px !important; margin: 0 !important; text-align: left !important; line-height: 1.6 !important; color: #ccc; transform: none !important; z-index: 1; }'
  },
  '.figma-services__sap-side h4': {
    1: '.figma-services__sap-side h4 { margin: 0; font-size: 34px; line-height: 1; font-weight: 700; color: #fff; }',
    2: '.figma-services__sap-side h4 { font-size: 24px !important; margin: 0 !important; font-weight: 700; color: #fff; }'
  },
  '.figma-services__sap-side p': {
    1: '.figma-services__sap-side p { margin: 7px 0 0; color: #82e926; font-size: 25px; line-height: 1.15; font-weight: 600; }',
    2: '.figma-services__sap-side p { font-size: 16px !important; line-height: 1.5 !important; margin: 8px 0 0 !important; letter-spacing: 0 !important; }'
  },
  '.figma-services__sap-copy': {
    1: '.figma-services__sap-copy { position: absolute; left: 160px; top: 360px; width: 873px; margin: 0; font-size: 31px; line-height: 1.2; color: #e0e0e0; text-align: left; transform: none; }',
    2: '.figma-services__sap-copy { position: relative !important; top: auto !important; left: auto !important; width: 100% !important; font-size: 16px !important; text-align: left !important; margin: 0 !important; color: #ccc; transform: none !important; z-index: 1; }'
  },
  '.figma-services__sap-card h3': {
    1: '.figma-services__sap-card h3 { left: 160px !important; top: 58px !important; width: auto !important; font-size: 244px !important; text-align: left; word-break: normal; }'
  }
};

let rawCss = fs.readFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services-page.css', 'utf8');

rawCss = replaceOccurrences(
  rawCss, 
  /(\.figma-services__(?:core|sap)[^{]*?)\s*\{[^}]*\}/, 
  allReplacements
);

fs.writeFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services-page.css', rawCss);
console.log("Successfully restored CSS.");
