const fs = require('fs');

let code = fs.readFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/industries.tsx', 'utf8');

// 1. HERO TITLE
// text-[64px] md:text-[88px] lg:text-[96px]
code = code.replace(
  /className="\s*text-white\s*font-bold\s*leading-\[1\.10\]\s*text-\[64px\]\s*md:text-\[88px\]\s*lg:text-\[96px\]\s*"/g,
  'className="type-display text-white"'
);

// 2. HERO SUBTITLE
// text-lg sm:text-xl md:text-2xl font-medium
code = code.replace(
  /className="\s*mt-6\s*text-lg\s*sm:text-xl\s*md:text-2xl\s*font-medium\s*text-white\/80\s*max-w-\[700px\]\s*"/g,
  'className="mt-6 type-lead font-semibold text-white/80 max-w-[700px]"'
);

// 3. COMPLEXITY SECTION ("Every Industry Has Its Own Complexity.")
// text-[48px] md:text-[72px] lg:text-[88px] font-bold leading-[1.05] tracking-tight
code = code.replace(
  /className="\s*text-\[48px\]\s*md:text-\[72px\]\s*lg:text-\[88px\]\s*font-bold\s*leading-\[1\.05\]\s*tracking-tight\s*text-white\s*"/g,
  'className="type-title text-white"'
);

// 4. COMPLIANCE TEXT ("Every sector has different compliance needs...")
// text-[24px] md:text-[32px] lg:text-[40px] font-medium leading-[1.4]
code = code.replace(
  /className="\s*text-center\s*text-white\/90\s*font-medium\s*leading-\[1\.4\]\s*text-\[24px\]\s*md:text-\[32px\]\s*lg:text-\[40px\]\s*max-w-\[900px\]\s*"/g,
  'className="type-statement text-center text-white/90 max-w-[900px]"'
);

// 5. TICKER ("Scale. Pressure. Speed. Regulation.")
// text-[48px] md:text-[74px] lg:text-[88px] font-bold text-transparent stroke-text-green
// text-[48px] md:text-[74px] lg:text-[88px] font-bold text-white
code = code.replace(
  /className="text-\[48px\] md:text-\[74px\] lg:text-\[88px\] font-bold text-transparent stroke-text-green"/g,
  'className="type-display text-transparent stroke-text-green"'
);
code = code.replace(
  /className="text-\[48px\] md:text-\[74px\] lg:text-\[88px\] font-bold text-white"/g,
  'className="type-display text-white"'
);

// 6. INDUSTRIES TITLE ("INDUSTRIES")
// text-[64px] md:text-[88px] lg:text-[104px] font-bold leading-[1.05] tracking-tighter
code = code.replace(
  /className="\s*text-\[64px\]\s*md:text-\[88px\]\s*lg:text-\[104px\]\s*font-bold\s*leading-\[1\.05\]\s*tracking-tighter\s*text-white\s*"/g,
  'className="type-title text-white"'
);

// 7. "Our impact lives inside..." (Case study heading)
// text-[clamp(1.85rem,4vw,3.5rem)] font-bold leading-[1.12]
code = code.replace(
  /className="\s*text-white\s*text-\[clamp\(1\.85rem,4vw,3\.5rem\)\]\s*font-bold\s*leading-\[1\.12\]\s*max-w-\[1400px\]\s*mx-auto\s*"/g,
  'className="type-title text-white max-w-[1400px] mx-auto"'
);

// 8. "Case Studies" button
// text-base sm:text-lg font-bold
code = code.replace(
  /className="\s*text-white\s*text-base\s*sm:text-lg\s*font-bold\s*"/g,
  'className="text-white type-button"'
);

// 9. "Don't see your sector?" (Next Title)
// text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-none
code = code.replace(
  /className="\s*text-white\s*font-bold\s*leading-none\s*text-\[clamp\(2rem,4\.5vw,3\.75rem\)\]\s*"/g,
  'className="type-title text-white"'
);

// 10. "Reach out and let's discuss your specific context." (Next Text)
// text-[clamp(1rem,1.8vw,1.35rem)] font-semibold leading-tight
code = code.replace(
  /className="\s*mt-10\s*text-white\s*text-\[clamp\(1rem,1\.8vw,1\.35rem\)\]\s*font-semibold\s*leading-tight\s*"/g,
  'className="mt-10 type-lead font-semibold text-white"'
);

// 11. "Talk to Us" button
// text-base sm:text-lg font-bold
code = code.replace(
  /className="\s*text-black\s*text-base\s*sm:text-lg\s*font-bold\s*"/g,
  'className="text-black type-button"'
);

fs.writeFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/industries.tsx', code);
console.log("Updated industries.tsx");
