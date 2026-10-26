const fs = require('fs');

function cleanCSS(filePath, selectors) {
  if (!fs.existsSync(filePath)) return;
  let cssCode = fs.readFileSync(filePath, 'utf8');
  const propRegex = /(font-size|line-height|font-weight|letter-spacing)\s*:[^;}]+(;|(?=\}))/g;

  for (const selector of selectors) {
    const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp('(' + escapedSelector + '\\s*\\{[^}]+)\\}', 'g');
    cssCode = cssCode.replace(regex, (match, p1) => {
      return p1.replace(propRegex, '') + '}';
    });
  }
  fs.writeFileSync(filePath, cssCode);
  console.log(`Updated CSS: ${filePath}`);
}

// 1. BLOG
let blogPath = 'c:/Users/Admin/Documents/Asteri web/frontend/src/routes/blog.tsx';
if (fs.existsSync(blogPath)) {
  let code = fs.readFileSync(blogPath, 'utf8');
  code = code.replace(/<h1 className="group relative inline-flex flex-col items-center justify-center cursor-default">/, '<h1 className="type-display group relative inline-flex flex-col items-center justify-center cursor-default">');
  code = code.replace(/<p>Insights from our certified architects and strategists\.<\/p>/, '<p className="type-lead font-semibold">Insights from our certified architects and strategists.</p>');
  code = code.replace(/<h2>Featured Posts<\/h2>/, '<h2 className="type-title">Featured Posts</h2>');
  code = code.replace(/<h2>Recent Posts<\/h2>/, '<h2 className="type-title">Recent Posts</h2>');
  code = code.replace(/<h2>Get insights delivered<\/h2>/, '<h2 className="type-title">Get insights delivered</h2>');
  code = code.replace(/<p>Practitioner-written articles - no fluff, real lessons\.<\/p>/, '<p className="type-lead font-semibold">Practitioner-written articles - no fluff, real lessons.</p>');
  fs.writeFileSync(blogPath, code);
  cleanCSS('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/blog.css', ['.blog-hero h1', '.blog-hero p', '.featured-posts>h2', '.recent-posts>h2', '.newsletter>h2', '.newsletter p']);
}

// 2. CASE STUDIES
let csPath = 'c:/Users/Admin/Documents/Asteri web/frontend/src/routes/case-studies.tsx';
if (fs.existsSync(csPath)) {
  let code = fs.readFileSync(csPath, 'utf8');
  code = code.replace(/<h1>/, '<h1 className="type-display">');
  code = code.replace(/<p>How Asteri has helped businesses transform with technology\.<\/p>/, '<p className="type-lead font-semibold">How Asteri has helped businesses transform with technology.</p>');
  code = code.replace(/<h2>Every case study<\/h2>/, '<h2 className="type-title">Every case study</h2>');
  code = code.replace(/<h2>follows the same arc<\/h2>/, '<h2 className="type-title">follows the same arc</h2>');
  code = code.replace(/<p>A real situation, our approach, and a<\/p>/, '<p className="type-lead font-semibold">A real situation, our approach, and a</p>');
  code = code.replace(/<p>measurable outcome\.<\/p>/, '<p className="type-lead font-semibold">measurable outcome.</p>');
  code = code.replace(/<h2 className="case-study-heading">Case Studies<\/h2>/, '<h2 className="case-study-heading type-title">Case Studies</h2>');
  code = code.replace(/<h2>We measure,<\/h2>/, '<h2 className="type-title">We measure,</h2>');
  code = code.replace(/<h2>document, and prove it<\/h2>/, '<h2 className="type-title">document, and prove it</h2>');
  code = code.replace(/<h2>Let&apos;s build your success story<\/h2>/, '<h2 className="type-title">Let&apos;s build your success story</h2>');
  code = code.replace(/<p>Start a conversation and define what success looks like for your project\.<\/p>/, '<p className="type-lead font-semibold">Start a conversation and define what success looks like for your project.</p>');
  fs.writeFileSync(csPath, code);
  cleanCSS('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/case-studies.css', ['.case-study-hero h1', '.case-study-hero p', '.case-study-arc>h2', '.case-study-arc p', '.case-study-heading', '.case-study-proof>h2', '.case-study-cta h2', '.case-study-cta p']);
}

// 3. CONTACT
let contactPath = 'c:/Users/Admin/Documents/Asteri web/frontend/src/routes/contact.tsx';
if (fs.existsSync(contactPath)) {
  let code = fs.readFileSync(contactPath, 'utf8');
  code = code.replace(/<h1><span><i>Got a<\/i> Project<\/span><span>In Mind\? <i>Let's Talk\.<\/i><\/span><\/h1>/, '<h1 className="type-display"><span><i>Got a</i> Project</span><span>In Mind? <i>Let\'s Talk.</i></span></h1>');
  code = code.replace(/<p>We respond within 24 hours\.<\/p>/, '<p className="type-lead font-semibold">We respond within 24 hours.</p>');
  code = code.replace(/<h2>CONTACT INFORMATION<\/h2>/, '<h2 className="type-title">CONTACT INFORMATION</h2>');
  code = code.replace(/<h2[^>]*>Start a Conversation<\/h2>/, '<h2 className="type-title">Start a Conversation</h2>');
  fs.writeFileSync(contactPath, code);
  cleanCSS('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/contact.css', ['.contact-hero h1', '.contact-hero p', '.contact-information h2', '.contact-details', '.contact-conversation h2']);
}

// 4. SALESFORCE CONSULTING
let sfPath = 'c:/Users/Admin/Documents/Asteri web/frontend/src/routes/Services- Salesforce Consulting.tsx';
if (fs.existsSync(sfPath)) {
  let code = fs.readFileSync(sfPath, 'utf8');
  code = code.replace(/text-\[36px\] md:text-\[68px\]/g, 'type-display');
  code = code.replace(/text-\[16px\] md:text-\[26px\]/g, 'type-lead font-semibold');
  code = code.replace(/text-\[14px\] md:text-\[22px\]/g, 'type-button');
  code = code.replace(/text-\[44px\] md:text-\[130px\]/g, 'type-title');
  code = code.replace(/text-\[18px\] md:text-\[24px\]/g, 'type-heading');
  code = code.replace(/text-\[16px\] md:text-\[18px\]/g, 'type-body');
  code = code.replace(/text-\[24px\] md:text-\[60px\]/g, 'type-title');
  code = code.replace(/text-\[21px\] md:text-\[64px\]/g, 'type-statement');
  code = code.replace(/text-\[28px\] md:text-\[60px\]/g, 'type-title');
  code = code.replace(/text-\[21px\]/g, 'type-heading');
  code = code.replace(/text-\[14px\] md:text-\[18px\]/g, 'type-body');
  fs.writeFileSync(sfPath, code);
  console.log('Updated Salesforce Consulting');
}

// 5. ASTERI PRODUCT SUITE
let suitePath = 'c:/Users/Admin/Documents/Asteri web/frontend/src/routes/Asteri_product-suite.tsx';
if (fs.existsSync(suitePath)) {
  let code = fs.readFileSync(suitePath, 'utf8');
  // text-sm sm:text-base (button/pill)
  code = code.replace(/text-sm font-bold text-black sm:text-base/g, 'type-button text-black');
  code = code.replace(/text-sm font-semibold text-black/g, 'type-button text-black');
  // max-w-md text-base font-semibold leading-snug text-white sm:text-lg
  code = code.replace(/text-base font-semibold leading-snug text-white sm:text-lg/g, 'type-lead font-semibold text-white');
  // text-lg text-black sm:text-xl
  code = code.replace(/text-lg text-black sm:text-xl/g, 'type-body font-semibold text-black');
  // text-sm font-bold text-black sm:text-xl (card type)
  code = code.replace(/text-sm font-bold text-black sm:text-xl/g, 'type-heading text-black');
  // text-sm leading-[1.25] text-black sm:text-xl (card description)
  code = code.replace(/text-sm leading-\[1\.25\] text-black sm:text-xl/g, 'type-body text-black');
  // text-4xl font-bold leading-none tracking-\[-0.05em\] text-white sm:text-6xl
  code = code.replace(/text-4xl font-bold leading-none tracking-\[-0\.05em\] text-white sm:text-6xl/g, 'type-title text-white');
  
  fs.writeFileSync(suitePath, code);
  console.log('Updated Asteri Product Suite');
}

// 6. PRODUCTS
let prodPath = 'c:/Users/Admin/Documents/Asteri web/frontend/src/routes/products.tsx';
if (fs.existsSync(prodPath)) {
  let code = fs.readFileSync(prodPath, 'utf8');
  // Hero
  code = code.replace(/text-\[clamp\(3rem,8vw,7rem\)\] leading-\[0\.9\]/g, 'type-display');
  code = code.replace(/text-\[clamp\(1\.2rem,2vw,1\.6rem\)\]/g, 'type-lead');
  code = code.replace(/text-\[clamp\(1rem,1\.5vw,1\.25rem\)\]/g, 'type-button');
  
  // Stats
  code = code.replace(/text-\[clamp\(3rem,5vw,4\.5rem\)\] leading-none/g, 'type-title');
  code = code.replace(/text-lg sm:text-xl font-medium/g, 'type-heading');

  // Architecture text
  code = code.replace(/text-\[clamp\(1\.5rem,3\.5vw,3rem\)\]/g, 'type-statement');
  code = code.replace(/text-\[clamp\(2rem,4\.5vw,4rem\)\] leading-\[1\.1\]/g, 'type-title');

  // Feature cards
  code = code.replace(/text-xl sm:text-2xl/g, 'type-heading');
  code = code.replace(/text-sm sm:text-base/g, 'type-body');
  code = code.replace(/text-base sm:text-lg/g, 'type-lead font-semibold');

  fs.writeFileSync(prodPath, code);
  console.log('Updated products.tsx');
}
