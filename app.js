const express = require("express");
const app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

const port = 3000;
var printer = require("printer");
var fs = require("fs");
const { print } = require("pdf-to-printer");
const PDFDocument = require("pdfkit");
app.post("/", (req, res) => {
  console.log(req.body, "this is body");
  console.log("here");

  const obj = req.body;
  console.log(obj,"this is the packs")
  for (let i = 0; i < obj.packs.length; i++) {
    const name =  obj.name.split(' ').reverse().join(' ')
    console.log(obj.packs[i].tests, "test names here");
    console.log(obj.packs.barcode, "barcode");
    const doc = new PDFDocument({ autoFirstPage: false });
    doc.addPage({
      margins: {top:5,left:5,bottom:5,right:5},
      size: [110, 158],
      layout: "landscape",
    });

    doc.pipe(fs.createWriteStream(`barcode${i}.pdf`));

    //codebar
    doc
      .font("C:\\xampp\\htdocs\\projects\\bootstraped\\new\\font\\arial.ttf")
      .fontSize(18)
      .text(name, 7, 5, { align: "right" });

    doc
      .font("C:\\Users\\Rooney\\Desktop\\LibreBarcode128-Regular.ttf")
      .fontSize(70)

      .text("88888", 10, 25);

    // doc.text(packs.barcode.toString(),0,60,{align:"center"})
    doc
      .font("C:\\xampp\\htdocs\\projects\\bootstraped\\new\\font\\arial.ttf")
      .fontSize(15)

      .text(`barcode ${obj.barcode}`, 7, 80,{align:'right'});
    doc
      .font("C:\\xampp\\htdocs\\projects\\bootstraped\\new\\font\\arial.ttf")
      .fontSize(12)

      .text(obj.packs[i].tests, 5, 70);

    doc.end();
    setTimeout(() => {
      print(`barcode${i}.pdf`, { printDialog: false }).then(console.log);
    }, 300);
  }

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
