const fs = require('fs');

let code = fs.readFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/solutions.tsx', 'utf8');

// ActionButton
code = code.replace(/<span>\{children\}<\/span>/, '<span className="type-button">{children}</span>');

// HERO
code = code.replace(/<h1>Transformation<br \/><span>at&nbsp;&nbsp;Every<\/span> Layer<\/h1>/, '<h1 className="type-display">Transformation<br /><span>at&nbsp;&nbsp;Every</span> Layer</h1>');
code = code.replace(/<p>From startup MVP to enterprise modernization\.<\/p>/, '<p className="type-lead font-semibold">From startup MVP to enterprise modernization.</p>');

// INTRO
code = code.replace(
  /<strong className="text-xl sm:text-2xl md:text-\[1\.8rem\] lg:text-\[2rem\] font-extrabold mb-1 block tracking-tight">/,
  '<strong className="type-lead font-bold mb-1 block">'
);
code = code.replace(
  /<p className="text-base sm:text-lg md:text-\[1\.2rem\] lg:text-\[1\.3rem\] font-medium m-0 max-w-\[320px\] leading-snug text-white\/90">/,
  '<p className="type-body m-0 max-w-[320px] text-white/90">'
);

// STATEMENT
code = code.replace(/<section className="solutions-statement">\s*<p>Every solution is shaped by your specific business context and constraints\.<\/p>\s*<\/section>/g, 
'<section className="solutions-statement">\n          <p className="type-statement">Every solution is shaped by your specific business context and constraints.</p>\n        </section>');

// SECTION TITLES
code = code.replace(/<h2>CORE SERVICES<\/h2>/, '<h2 className="type-title">CORE SERVICES</h2>');
code = code.replace(
  /<h2 ref=\{outcomesHeadingRef\} style=\{\{ perspective: "1000px" \}\} className="solutions-outcomes-heading-text font-bold leading-none tracking-tighter text-white uppercase">/,
  '<h2 ref={outcomesHeadingRef} style={{ perspective: "1000px" }} className="solutions-outcomes-heading-text type-title text-white uppercase">'
);
code = code.replace(
  /<h3 ref=\{outcomesSubHeadingRef\} style=\{\{ perspective: "1000px" \}\}>OUTCOMES<\/h3>/,
  '<h3 ref={outcomesSubHeadingRef} style={{ perspective: "1000px" }} className="type-title">OUTCOMES</h3>'
);

// OUTCOMES LIST
code = code.replace(/<strong>\{o\.title\}<\/strong>/, '<strong className="type-heading">{o.title}</strong>');
code = code.replace(/<p>\{o\.description\}<\/p>/, '<p className="type-lead font-semibold">{o.description}</p>');

// SPLIT HEADING
code = code.replace(
  /<h2 className="text-\[clamp\(2\.25rem,5\.5vw,5rem\)\] font-bold leading-\[1\.1\] tracking-tighter w-full text-white">/,
  '<h2 className="type-title w-full text-white">'
);

// CTA
code = code.replace(/<h2>Which solution fits your challenge\?<\/h2>/, '<h2 className="type-title">Which solution fits your challenge?</h2>');
code = code.replace(/<p>Let&apos;s map the right combination to your specific goals\.<\/p>/, '<p className="type-lead font-semibold">Let&apos;s map the right combination to your specific goals.</p>');

// document.fonts.ready fix
const oldUseEffect = `  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [outcomes]);`;
  
const newUseEffect = `  useEffect(() => {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });
  }, [outcomes]);`;

code = code.replace(oldUseEffect, newUseEffect);

fs.writeFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/solutions.tsx', code);
console.log("Updated solutions.tsx");
