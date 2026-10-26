const fs = require('fs');

let code = fs.readFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/Partnership.tsx', 'utf8');

// 1. HERO TITLE
code = code.replace(
  /className="text-\[clamp\(2\.5rem,6\.67vw,6rem\)\] text-white"/g,
  'className="type-display text-white"'
);

// 2. HERO SUBTITLE
code = code.replace(
  /className="mt-8 font-mono text-\[clamp\(1\.125rem,2vw,2rem\)\] font-semibold leading-tight text-white\/90"/g,
  'className="mt-8 font-mono type-lead font-semibold text-white/90"'
);

// 3. EXPLORE MORE BUTTON
code = code.replace(
  /className="inline-flex items-center gap-4 rounded-\[40px\] bg-\[#82E926\] pl-8 pr-3 py-3 text-\[clamp\(1\.25rem,2\.5vw,2rem\)\] font-semibold text-black transition-transform hover:scale-105"/g,
  'className="inline-flex items-center gap-4 rounded-[40px] bg-[#82E926] pl-8 pr-3 py-3 type-button text-black transition-transform hover:scale-105"'
);

// 4. STATEMENT HEADLINE
code = code.replace(
  /<h2 className="text-center font-bold">/g,
  '<h2 className="type-title text-center">'
);

// 5. STATEMENT PROOF
code = code.replace(
  /<p ref=\{proofTextRef\}>Every partnership backs a real, certified implementation capability\.<\/p>/g,
  '<p ref={proofTextRef} className="type-statement">Every partnership backs a real, certified implementation capability.</p>'
);

// 6. ECOSYSTEM TITLE
code = code.replace(
  /<h2 ref=\{ecosystemTitleRef\} style=\{\{ fontSize: "clamp\(40px,7vw,90px\)", whiteSpace: "nowrap", margin: 0, fontWeight: "bold" \}\}>Our Partner Ecosystem<\/h2>/g,
  '<h2 ref={ecosystemTitleRef} className="type-title" style={{ whiteSpace: "nowrap", margin: 0 }}>Our Partner Ecosystem</h2>'
);

// 7. PARTNER PANEL INFO
code = code.replace(/<h3>\{partnerName\}<\/h3>/, '<h3 className="type-heading">{partnerName}</h3>');
code = code.replace(/<p>\{partnerSubtitle\}<\/p>/, '<p className="type-lead font-semibold">{partnerSubtitle}</p>');
code = code.replace(/<a className="partnership-outline-button" href="\/contact">/, '<a className="partnership-outline-button type-button" href="/contact">');

// 9. BENEFITS
code = code.replace(/<p ref=\{benefit1Ref\}>Better licensing pricing\.<\/p>/, '<p ref={benefit1Ref} className="type-title">Better licensing pricing.</p>');
code = code.replace(/<p ref=\{benefit2Ref\}>Faster implementation\.<\/p>/, '<p ref={benefit2Ref} className="type-title">Faster implementation.</p>');
code = code.replace(/<p ref=\{benefit3Ref\}>Direct vendor escalation paths\.<\/p>/, '<p ref={benefit3Ref} className="type-title">Direct vendor escalation paths.</p>');

// 10. PRINCIPLES TITLE
code = code.replace(/<h2 ref=\{principlesTitleRef\}>Partnership Principles<\/h2>/, '<h2 ref={principlesTitleRef} className="type-title">Partnership Principles</h2>');

// 12. CTA
code = code.replace(/<h2 ref=\{ctaHeadingRef\}>Need access to a specific platform\?<\/h2>/, '<h2 ref={ctaHeadingRef} className="type-title">Need access to a specific platform?</h2>');
code = code.replace(/<p ref=\{ctaTextRef\}>Our partnerships give you better pricing and direct escalation paths\.<\/p>/, '<p ref={ctaTextRef} className="type-lead font-semibold">Our partnerships give you better pricing and direct escalation paths.</p>');
code = code.replace(
  /className="mt-10 inline-flex items-center gap-4 rounded-\[40px\] bg-\[#82E926\] pl-8 pr-3 py-3 text-\[clamp\(1\.25rem,2\.5vw,2rem\)\] font-semibold text-black transition-transform hover:scale-105"/g,
  'className="mt-10 inline-flex items-center gap-4 rounded-[40px] bg-[#82E926] pl-8 pr-3 py-3 type-button text-black transition-transform hover:scale-105"'
);

fs.writeFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/Partnership.tsx', code);
console.log("Updated Partnership.tsx");

// CSS Update
let cssCode = fs.readFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/partnership-page.css', 'utf8');

const propRegex = /(font-size|line-height|font-weight|letter-spacing)\s*:[^;}]+(;|(?=\}))/g;

const targetSelectors = [
  '.partnership-statement--headline h2',
  '.partnership-statement--proof p',
  '.partnership-ecosystem>h2',
  '.partnership-partner-intro h3',
  '.partnership-partner-intro>p',
  '.partnership-outline-button',
  '.partnership-benefits p',
  '.partnership-principles>h2',
  '.partnership-cta h2',
  '.partnership-cta p'
];

for (const selector of targetSelectors) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp('(' + escapedSelector + '\\s*\\{[^}]+)\\}', 'g');
  cssCode = cssCode.replace(regex, (match, p1) => {
    return p1.replace(propRegex, '') + '}';
  });
}

fs.writeFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/partnership-page.css', cssCode);
console.log("Updated partnership-page.css");
