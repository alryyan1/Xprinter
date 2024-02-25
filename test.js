var printer = require("printer");
const express = require('express')
const app =  express()

var fs = require('fs');
const   { print} = require('pdf-to-printer')
 const PDFDocument = require('pdfkit');

// const doc = new PDFDocument();
// doc.pipe(fs.createWriteStream('r.pdf'));

// doc.text('Hello, World!');
// doc.end();
var marginTB = 0;
var marginLR = 0;
// create a document and pipe to a blob

// var doc = new PDFDocument(
    
    
//     {
        
        
//         layout :'landscape',
//          // can be 'landscape'
//         size: [158, 110] // a smaller document for small badge printers
// });

const doc = new PDFDocument({ autoFirstPage: false });
doc.addPage({
    margin:0,
    size: [110, 158],
    layout: 'landscape'
  });
  


doc.pipe(fs.createWriteStream('barcode.pdf'));

//codebar
doc.font("C:\\xampp\\htdocs\\projects\\bootstraped\\new\\font\\arial.ttf")
.fontSize(12)
 
.text ("17",0,5)
doc.font("C:\\Users\\Rooney\\Desktop\\LibreBarcode128-Regular.ttf")
    .fontSize(70)
     
    .text ("88888",10,20)

    
  //  doc.font("C:\\xampp\\htdocs\\projects\\bootstraped\\new\\font\\arial.ttf")
    //.fontSize(12)
    //doc.text ("*88888*",0,40)
     
    //doc.text ("LFt - RFT  - Urea - Creatinine - Creatinine - Creatinine",0,50)
    //doc.text ("عثمان محجوب الريان",0,60)
doc.end();
setTimeout(() => {
    
    print("barcode.pdf",{printDialog:true}).then(console.log);
}, 300);



// console.log('default printer name: ' + (printer.getDefaultPrinterName() || 'is not defined on your computer'));

// printer.printDirect({data:fs.readFileSync('output.pdf'),
// type: 'PDF',
//   printer: process.env[3], // printer name, if missing then will print to default printer
//   success:function(jobID){
//     console.log("sent to printer with ID: "+jobID);
//   },
//   error:function(err){
//     console.log(err);
//   }
// });


// const     util = require('util');
// console.log("installed printers:\n"+util.inspect(printer.getPrinters(), {colors:true, depth:10}));

// printer.printDirect({data:"print from Node.JS buffer" // or simple String: "some text"
// 	//, printer:'Foxit Reader PDF Printer' // printer name, if missing then will print to default printer
// 	, type: 'RAW' // type: RAW, TEXT, PDF, JPEG, .. depends on platform
// 	, success:function(jobID){
// 		console.log("sent to printer with ID: "+jobID);
// 	}
// 	, error:function(err){console.log(err);}
// });