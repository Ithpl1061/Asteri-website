const fs = require('fs');

// REVERT SERVICES.TSX
let code = fs.readFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services.tsx', 'utf8');
code = code.replace(/<h3 className="type-heading">Salesforce<\/h3>/g, '<h3>Salesforce</h3>');
code = code.replace(/<h3 className="type-heading">SAP<\/h3>/g, '<h3>SAP</h3>');
code = code.replace(/<h4 className="type-card font-bold">Consulting<\/h4>/g, '<h4>Consulting</h4>');
code = code.replace(/<p className="type-body">Strategic CRM solutions that enhance customer engagement and operational visibility\.<\/p>/g, '<p>Strategic CRM solutions that enhance customer engagement and operational visibility.</p>');
code = code.replace(/<p className="type-body">Enterprise-grade solutions designed to streamline complex business operations\.<\/p>/g, '<p>Enterprise-grade solutions designed to streamline complex business operations.</p>');
code = code.replace(/<p className="figma-services__core-copy type-body">/g, '<p className="figma-services__core-copy">');
code = code.replace(/<p className="figma-services__sap-copy type-body">/g, '<p className="figma-services__sap-copy">');
fs.writeFileSync('c:/Users/Admin/Documents/Asteri web/frontend/src/routes/services.tsx', code);

console.log("Reverted services.tsx");
