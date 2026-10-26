const fs = require('fs');
let code = fs.readFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services.tsx', 'utf8');

// HERO
// "Technology Systems Designed To Perform" -> type-display
code = code.replace(/<h1><span>Technology <i>Systems<\/i><\/span><span><i>Designed<\/i> To Perform<\/span><\/h1>/, '<h1 className="type-display"><span>Technology <i>Systems</i></span><span><i>Designed</i> To Perform</span></h1>');
// "From infrastructure to intelligent platforms." -> type-lead font-semibold
code = code.replace(/<p>From infrastructure to intelligent platforms\.<\/p>/, '<p className="type-lead font-semibold">From infrastructure to intelligent platforms.</p>');
// "Explore More" button text -> type-button. Handled inside Button component.
code = code.replace(/<span>\{children\}<\/span>/, '<span className="type-button">{children}</span>');

// SERVICES INTRO
// "We design and deliver technology systems that help organizations…" -> type-body
code = code.replace(/<p className="text-sm sm:text-base md:text-\[1rem\] lg:text-\[1\.05rem\] font-medium m-0 max-w-\[320px\] leading-relaxed text-white\/90">/, '<p className="type-body text-white/90 max-w-[320px] m-0">');
// "Our services combine strategic thinking with practical implementation…" -> type-statement
code = code.replace(/<p className="figma-services__statement">/, '<p className="figma-services__statement type-statement">');

// CORE SERVICES
// "CORE SERVICES" -> type-title
code = code.replace(/<h2>CORE SERVICES<\/h2>/g, '<h2 className="type-title">CORE SERVICES</h2>');
// Card titles "Salesforce", "SAP" -> type-heading
code = code.replace(/<h3>Salesforce<\/h3>/g, '<h3 className="type-heading">Salesforce</h3>');
code = code.replace(/<h3>SAP<\/h3>/g, '<h3 className="type-heading">SAP</h3>');
// "Consulting" -> type-card font-bold
code = code.replace(/<h4>Consulting<\/h4>/g, '<h4 className="type-card font-bold">Consulting</h4>');
// Green tagline ("Strategic CRM solutions that…", and the matching SAP line) -> type-body
code = code.replace(/<p>Strategic CRM solutions that enhance customer engagement and operational visibility\.<\/p>/g, '<p className="type-body">Strategic CRM solutions that enhance customer engagement and operational visibility.</p>');
code = code.replace(/<p>Enterprise-grade solutions designed to streamline complex business operations\.<\/p>/g, '<p className="type-body">Enterprise-grade solutions designed to streamline complex business operations.</p>');
// Card description ("We help organizations implement…", and the matching SAP text) -> type-body
code = code.replace(/<p className="figma-services__core-copy">We help organizations implement, customize, and optimize Salesforce platforms to align with business processes and drive measurable outcomes\.<\/p>/g, '<p className="figma-services__core-copy type-body">We help organizations implement, customize, and optimize Salesforce platforms to align with business processes and drive measurable outcomes.</p>');
code = code.replace(/<p className="figma-services__sap-copy">We support implementation, optimization, and integration of SAP systems to improve efficiency, visibility, and decision-making\.<\/p>/g, '<p className="figma-services__sap-copy type-body">We support implementation, optimization, and integration of SAP systems to improve efficiency, visibility, and decision-making.</p>');

// HOW WE WORK / PROCESS
// "HOW WE WORK" and "OUR PROCESS" -> type-title
code = code.replace(/<h2>HOW WE WORK<\/h2>/, '<h2 className="type-title">HOW WE WORK</h2>');
code = code.replace(/<h3>OUR PROCESS<\/h3>/, '<h3 className="type-title">OUR PROCESS</h3>');
code = code.replace(/<h2 ref=\{workHeadingRef\} style=\{\{ perspective: "1000px" \}\} className="uppercase leading-none">HOW WE WORK<\/h2>/, '<h2 ref={workHeadingRef} style={{ perspective: "1000px" }} className="type-title uppercase">HOW WE WORK</h2>');
code = code.replace(/<h3 ref=\{workSubHeadingRef\} style=\{\{ perspective: "1000px" \}\} className="uppercase leading-none">OUR PROCESS<\/h3>/, '<h3 ref={workSubHeadingRef} style={{ perspective: "1000px" }} className="type-title uppercase">OUR PROCESS</h3>');
// Step titles "Understand", "Design", "Implement", "Support" -> type-heading
code = code.replace(/<strong>Understand<\/strong>/g, '<strong className="type-heading">Understand</strong>');
code = code.replace(/<strong>Design<\/strong>/g, '<strong className="type-heading">Design</strong>');
code = code.replace(/<strong>Implement<\/strong>/g, '<strong className="type-heading">Implement</strong>');
code = code.replace(/<strong>Support<\/strong>/g, '<strong className="type-heading">Support</strong>');
// Step descriptions -> type-lead font-semibold
code = code.replace(/<p>We begin by learning how your organization operates — technically and operationally\.<\/p>/g, '<p className="type-lead font-semibold">We begin by learning how your organization operates — technically and operationally.</p>');
code = code.replace(/<p>Solutions are architected with clarity, scalability, and long-term sustainability in mind\.<\/p>/g, '<p className="type-lead font-semibold">Solutions are architected with clarity, scalability, and long-term sustainability in mind.</p>');
code = code.replace(/<p>We execute with structured delivery, ensuring stability and minimal disruption\.<\/p>/g, '<p className="type-lead font-semibold">We execute with structured delivery, ensuring stability and minimal disruption.</p>');
code = code.replace(/<p>Our engagement continues beyond implementation, ensuring systems evolve with your needs\.<\/p>/g, '<p className="type-lead font-semibold">Our engagement continues beyond implementation, ensuring systems evolve with your needs.</p>');

// PLATFORMS & PARTNERS
// "PLATFORMS & PARTNERS" -> type-title
code = code.replace(/<h2>PLATFORMS &amp;<br \/>PARTNERS<\/h2>/g, '<h2 className="type-title">PLATFORMS &amp;<br />PARTNERS</h2>');

// STATEMENTS
// "Technology works best when it works quietly." -> type-statement
code = code.replace(/<h2>Technology works best<\/h2><h2>when it works quietly\.<\/h2>/, '<h2 className="type-statement">Technology works best</h2><h2 className="type-statement">when it works quietly.</h2>');
code = code.replace(/<h2 ref=\{quoteLine1Ref\} className="whitespace-nowrap">Technology works best<\/h2>/, '<h2 ref={quoteLine1Ref} className="type-statement whitespace-nowrap">Technology works best</h2>');
code = code.replace(/<h2 ref=\{quoteLine2Ref\} className="whitespace-nowrap">when it works quietly\.<\/h2>/, '<h2 ref={quoteLine2Ref} className="type-statement whitespace-nowrap">when it works quietly.</h2>');

// "Systems that support teams, decisions, and growth — without unnecessary complexity." -> type-statement
code = code.replace(/<p className="figma-services__support figma-services__support--mobile">Systems that support teams, decisions, and growth — without unnecessary complexity\.<\/p>/, '<p className="figma-services__support figma-services__support--mobile type-statement">Systems that support teams, decisions, and growth — without unnecessary complexity.</p>');
code = code.replace(/<p ref=\{supportTextRef\} className="max-w-\[1000px\] text-center px-6 text-white font-semibold">/, '<p ref={supportTextRef} className="type-statement max-w-[1000px] text-center px-6 text-white">');

// CTA
// "Let's design the systems" -> type-title
code = code.replace(/<h2>Let’s design the systems<\/h2>/g, '<h2 className="type-title">Let’s design the systems</h2>');
// "behind your next phase of growth." -> type-lead font-semibold
code = code.replace(/<p>behind your next phase of growth\.<\/p>/g, '<p className="type-lead font-semibold">behind your next phase of growth.</p>');

fs.writeFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services.tsx', code);
console.log("Updated services.tsx");
