const fs = require('fs');

const basePath = 'c:/Users/Admin/Documents/Asteri web/frontend/src/routes/';

const filesToUpdate = [
  {
    path: 'index.tsx',
    replacements: [
      [/className="text-white type-title"\s*>\s*Let&apos;s Build What&apos;s Next\./, 'className="text-white type-cta-title">\n              Let&apos;s Build What&apos;s Next.'],
      [/className="mt-4 type-lead font-semibold text-white"\s*>\s*We&apos;ll help you design/, 'className="mt-4 type-cta-subtitle text-white">\n              We&apos;ll help you design']
    ]
  },
  {
    path: 'about.tsx',
    replacements: [
      [/className="type-title text-black"\s*>\s*Let's Build What's Next\./, 'className="type-cta-title text-black">\n              Let\'s Build What\'s Next.'],
      [/className="mt-4 type-lead font-semibold text-black"\s*>\s*We'll help you design/, 'className="mt-4 type-cta-subtitle text-black">\n              We\'ll help you design']
    ]
  },
  {
    path: 'services.tsx',
    replacements: [
      [/<h2 className="type-title">Let’s design the systems<\/h2>/g, '<h2 className="type-cta-title">Let’s design the systems</h2>'],
      [/<h2 className="type-title">Let's design the systems<\/h2>/g, '<h2 className="type-cta-title">Let\'s design the systems</h2>'],
      [/<p className="type-lead font-semibold">behind your next phase of growth\.<\/p>/g, '<p className="type-cta-subtitle">behind your next phase of growth.</p>']
    ]
  },
  {
    path: 'solutions.tsx',
    replacements: [
      [/className="text-white type-title"\s*>\s*Let's Build What's Next\./, 'className="text-white type-cta-title">\n              Let\'s Build What\'s Next.'],
      [/className="mt-4 type-lead font-semibold text-white"\s*>\s*We'll help you design/, 'className="mt-4 type-cta-subtitle text-white">\n              We\'ll help you design']
    ]
  },
  {
    path: 'industries.tsx',
    replacements: [
      [/className="type-title text-white"\s*>\s*Don't see your sector\?/, 'className="type-cta-title text-white">\n                Don\'t see your sector?'],
      [/className="mt-10 type-lead font-semibold text-white"\s*>\s*Reach out and let's discuss your/, 'className="mt-10 type-cta-subtitle text-white">\n                Reach out and let\'s discuss your']
    ]
  },
  {
    path: 'Partnership.tsx',
    replacements: [
      [/className="type-title">Need access to a specific platform\?<\/h2>/, 'className="type-cta-title">Need access to a specific platform?</h2>'],
      [/className="type-lead font-semibold">Our partnerships give you better pricing and direct escalation paths\.<\/p>/, 'className="type-cta-subtitle">Our partnerships give you better pricing and direct escalation paths.</p>']
    ]
  },
  {
    path: 'case-studies.tsx',
    replacements: [
      [/className="type-title">Let&apos;s build your success story<\/h2>/, 'className="type-cta-title">Let&apos;s build your success story</h2>'],
      [/className="type-lead font-semibold">Start a conversation and define what success looks like for your project\.<\/p>/, 'className="type-cta-subtitle">Start a conversation and define what success looks like for your project.</p>']
    ]
  },
  {
    path: 'contact.tsx',
    replacements: [
      [/<h2 className="type-title">Start a Conversation<\/h2>/, '<h2 className="type-cta-title">Start a Conversation</h2>']
    ]
  },
  {
    path: 'Services- Salesforce Consulting.tsx',
    replacements: [
      [/<h2 className="cta-anim will-change-transform type-title leading-none mb-6 text-white">/g, '<h2 className="cta-anim will-change-transform type-cta-title leading-none mb-6 text-white">']
    ]
  }
];

filesToUpdate.forEach(file => {
  const fullPath = basePath + file.path;
  if (fs.existsSync(fullPath)) {
    let code = fs.readFileSync(fullPath, 'utf8');
    file.replacements.forEach(rep => {
      code = code.replace(rep[0], rep[1]);
    });
    fs.writeFileSync(fullPath, code);
    console.log(`Updated ${file.path}`);
  }
});
