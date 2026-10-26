const fs = require('fs');
let code = fs.readFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/index.tsx', 'utf8');

// 1. Hero heading
code = code.replace(/className="text-\[clamp\(2\.5rem,6vw,5\.5rem\)\] text-white"/, 'className="type-display text-white"');
code = code.replace(/className="text-\[clamp\(2\.5rem,6vw,5\.5rem\)\]"(\s*style)/g, 'className="type-display"$1');
code = code.replace(/className="text-\[clamp\(2\.5rem,6vw,5\.5rem\)\] text-white">Ambition/, 'className="type-display text-white">Ambition');

// 2. type-title replacements
// ABOUT US
code = code.replace(/font-bold text-white text-\[clamp\(2\.25rem,5vw,4\.5rem\)\]/, 'type-title text-white');
// WHAT WE DO
code = code.replace(/font-display text-\[clamp\(2\.25rem,5vw,4\.5rem\)\] font-bold uppercase leading-none text-white lg:absolute lg:mb-0 lg:whitespace-nowrap lg:text-\[clamp\(2\.25rem,5vw,4\.5rem\)\]/, 'font-display type-title uppercase text-white lg:absolute lg:mb-0 lg:whitespace-nowrap');
// INDUSTRIES WE SERVE
code = code.replace(/text-\[clamp\(2rem,5vw,4\.5rem\)\] font-bold uppercase leading-\[0\.95\]/, 'type-title uppercase');
// TESTIMONIALS
code = code.replace(/text-\[clamp\(2\.25rem,5vw,4\.5rem\)\] font-bold uppercase leading-none/, 'type-title uppercase');
// Let's Build What's Next.
code = code.replace(/font-bold leading-none text-\[clamp\(2rem,4\.5vw,3\.75rem\)\]/, 'type-title');

// 3. type-statement
code = code.replace(/font-semibold text-black text-\[clamp\(1\.2rem,2\.8vw,2\.35rem\)\]/g, 'type-statement text-black');
code = code.replace(/font-semibold leading-tight tracking-tight text-\[clamp\(1\.2rem,2\.8vw,2\.35rem\)\]/, 'type-statement tracking-tight');

// 4. type-lead
// About Us paragraph
code = code.replace(/text-sm text-white\/85 sm:text-base md:mt-8 md:text-lg/, 'type-lead text-white/85 md:mt-8');
// testimonial quote text
code = code.replace(/text-black text-sm sm:text-lg leading-relaxed/, 'type-lead text-black');

// 5. CTA subtitle
code = code.replace(/text-\[clamp\(1rem,1\.8vw,1\.35rem\)\] font-semibold leading-tight text-white/, 'type-lead font-semibold text-white');

// 6. Testimonial person name
code = code.replace(/text-lg sm:text-2xl font-bold text-black/, 'type-lead font-bold text-black');

// 7. Testimonial person role
code = code.replace(/text-xs sm:text-base text-black/, 'type-body text-black');

// 8. Industry card labels
code = code.replace(/text-\[11px\] sm:text-xs md:text-sm font-semibold text-white/g, 'type-card text-white');
// Case study chips
code = code.replace(/className="case-tag /g, 'className="case-tag type-card ');

// 9. All "Get In Touch" buttons
code = code.replace(/text-black text-base sm:text-lg font-bold/g, 'type-button text-black');

fs.writeFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/index.tsx', code);
console.log("Replaced in index.tsx");
