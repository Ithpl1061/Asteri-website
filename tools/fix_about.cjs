const fs = require('fs');
let code = fs.readFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/about.tsx', 'utf8');

// HERO
// h1 "We Design Digital Systems That Work And Scale."
code = code.replace(/font-display text-\[clamp\(2\.5rem,6vw,5\.5rem\)\] font-bold leading-\[1\.2\] tracking-normal/, 'font-display type-display');
// Hero button text "Get in touch"
code = code.replace(/text-base sm:text-lg font-bold/, 'type-button');

// STATEMENT
// h2 with the three statement lines
code = code.replace(/text-\[clamp\(1\.2rem,2\.8vw,2\.35rem\)\] font-bold leading-\[1\.35\] tracking-tight/, 'type-statement');

// WE SERVE CLIENTS
// h2 "We Serve Clients"
code = code.replace(/text-\[clamp\(2\.25rem,5vw,4\.5rem\)\] font-bold tracking-tight/, 'type-title');
// The wrapper div of "Across / India / And globally"
code = code.replace(/font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight/, 'type-display');

// MISSION and VISION
// h2 "Our Mission" and "Our Vision"
code = code.replace(/text-\[clamp\(2\.25rem,5vw,4\.5rem\)\] font-bold tracking-tight/g, 'type-title');
// Their paragraphs
code = code.replace(/text-\[clamp\(1\.2rem,2\.8vw,2\.35rem\)\] font-medium leading-snug tracking-tight/g, 'type-statement');

// OUR APPROACH
// h2 "OUR APPROACH"
code = code.replace(/text-\[clamp\(2\.25rem,5vw,4\.5rem\)\] font-bold uppercase tracking-tight/, 'type-title uppercase');
// Card titles (Discovery, Team Assembly, Agile Delivery, Support & Scale)
code = code.replace(/text-xl sm:text-2xl font-bold/g, 'type-card font-bold');
// Card descriptions
code = code.replace(/text-sm sm:text-base leading-relaxed/g, 'type-body');

// VISIONARIES (VisionariesSection component)
// "The Visionaries" label
code = code.replace(/text-sm uppercase tracking-\[0\.3em\]/g, 'type-label');
// Person name h2
code = code.replace(/text-\[clamp\(2\.25rem,5vw,4\.5rem\)\] font-bold leading-none/g, 'type-heading');
// Role h3
code = code.replace(/text-xl sm:text-2xl font-semibold/g, 'type-card');
// Experience paragraph
code = code.replace(/text-base md:text-lg leading-7/g, 'type-body');
// "LinkedIn" text
code = code.replace(/text-lg([^>]*>LinkedIn<\/span>)/g, 'type-body$1');

// CULTURE & VALUES
// h2 "CULTURE & VALUES"
code = code.replace(/text-\[clamp\(2\.25rem,5vw,4\.5rem\)\] font-bold text-white tracking-tight/, 'type-title text-white');

// Card titles on both the front and back (Innovation, Integrity, Client-First, Agility)
code = code.replace(/text-2xl sm:text-3xl font-bold tracking-tight/g, 'type-card font-bold');
// Back h4 lines
code = code.replace(/font-bold text-sm sm:text-base leading-snug/g, 'type-body font-bold');
// Back paragraphs
code = code.replace(/font-normal text-sm leading-relaxed/g, 'type-body');

// TECHNOLOGY MATTERS
// h2 "Technology Only Matters When It Delivers Clarity."
code = code.replace(/text-\[clamp\(2\.25rem,5vw,4\.5rem\)\] font-medium leading-\[1\.3\] text-center text-white tracking-tight/g, 'type-statement text-center text-white');
// In case the spacing differs
code = code.replace(/text-\[clamp\(2\.25rem,5vw,4\.5rem\)\] font-medium leading-\[1\.3\]/g, 'type-statement');

// DESIGNED FOR WHAT'S NEXT
// h2 "Designed For What's Next."
code = code.replace(/font-bold leading-tight text-\[clamp\(2rem,4\.5vw,3\.75rem\)\]/, 'type-title');
// Subtitle paragraph
code = code.replace(/text-\[clamp\(1rem,1\.8vw,1\.35rem\)\] font-semibold leading-snug/, 'type-lead font-semibold');
// "Talk To Us" button text
code = code.replace(/text-base sm:text-lg font-bold/g, 'type-button');

fs.writeFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/about.tsx', code);
console.log("Updated about.tsx");
