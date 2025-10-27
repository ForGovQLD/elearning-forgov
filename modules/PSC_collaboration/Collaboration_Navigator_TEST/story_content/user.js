window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var player = GetPlayer();
const Q1response = player.GetVar("Q1response");
const Q2response = player.GetVar("Q2response");
const Q3response = player.GetVar("Q3response");
const Q4response = player.GetVar("Q4response");
const Q5response = player.GetVar("Q5response");
const Q6response = player.GetVar("Q6response");
const Q7response = player.GetVar("Q7response");

Constructpdf();

async function Constructpdf() {
  try {
    await loadMods();
    await fillForm();
  } catch (err) {
    console.error("Error in Constructpdf:", err);
  }
}

async function loadMods() {
  try {
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
  } catch (err) {
    console.error("Error loading pdf-lib:", err);
  }
}

async function fillForm() {
  try {
    const { PDFDocument } = PDFLib;
    const formUrl = 'Cross-agency Collaboration Navigator Results - Networking.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // Get field names (fields are named exactly as Storyline variables)
    const Q1responseField = form.getTextField('Q1responseField');
    const Q2responseField = form.getTextField('Q2responseField');
    const Q3responseField = form.getTextField('Q3responseField');
    const Q4responseField = form.getTextField('Q4responseField');
    const Q5responseField = form.getTextField('Q5responseField');
    const Q6responseField = form.getTextField('Q6responseField');
    const Q7responseField = form.getTextField('Q7responseField');

    // Fill in form fields
    Q1responseField.setText(Q1response);
    Q2responseField.setText(Q2response);
    Q3responseField.setText(Q3response);
    Q4responseField.setText(Q4response);
    Q5responseField.setText(Q5response);
    Q6responseField.setText(Q6response);
    Q7responseField.setText(Q7response);

    // Flatten the form fields
    form.flatten();

    // Save and download the form
    const pdfBytes = await pdfDoc.save();
    const filename = "Cross-agency Collaboration Navigator Results.pdf"; // Use a static filename
    await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
      .then(({ default: saveAs }) => {
        const blob = new Blob([pdfBytes], { type: 'application/octet-stream' });
        saveAs(blob, filename);
      })
      .catch((err) => {
        console.error("Error saving the file:", err);
      });
  } catch (err) {
    console.error("Error in fillForm:", err);
  }
}
}

window.Script2 = function()
{
  var player = GetPlayer();
const Q1response = player.GetVar("Q1response");
const Q2response = player.GetVar("Q2response");
const Q3response = player.GetVar("Q3response");
const Q4response = player.GetVar("Q4response");
const Q5response = player.GetVar("Q5response");
const Q6response = player.GetVar("Q6response");
const Q7response = player.GetVar("Q7response");

Constructpdf();

async function Constructpdf() {
  try {
    await loadMods();
    await fillForm();
  } catch (err) {
    console.error("Error in Constructpdf:", err);
  }
}

async function loadMods() {
  try {
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
  } catch (err) {
    console.error("Error loading pdf-lib:", err);
  }
}

async function fillForm() {
  try {
    const { PDFDocument } = PDFLib;
    const formUrl = 'Cross-agency Collaboration Navigator Results - Networking.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

      // Get field names (fields are named exactly as Storyline variables)
    const Q1responseField = form.getTextField('Q1responseField');
    const Q2responseField = form.getTextField('Q2responseField');
    const Q3responseField = form.getTextField('Q3responseField');
    const Q4responseField = form.getTextField('Q4responseField');
    const Q5responseField = form.getTextField('Q5responseField');
    const Q6responseField = form.getTextField('Q6responseField');
    const Q7responseField = form.getTextField('Q7responseField');

    // Fill in form fields
    Q1responseField.setText(Q1response);
    Q2responseField.setText(Q2response);
    Q3responseField.setText(Q3response);
    Q4responseField.setText(Q4response);
    Q5responseField.setText(Q5response);
    Q6responseField.setText(Q6response);
    Q7responseField.setText(Q7response);

    // Flatten the form fields
    form.flatten();

    // Save and download the form
    const pdfBytes = await pdfDoc.save();
    const filename = "Cross-agency Collaboration Navigator Results.pdf"; // Use a static filename
    await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
      .then(({ default: saveAs }) => {
        const blob = new Blob([pdfBytes], { type: 'application/octet-stream' });
        saveAs(blob, filename);
      })
      .catch((err) => {
        console.error("Error saving the file:", err);
      });
  } catch (err) {
    console.error("Error in fillForm:", err);
  }
}
}

window.Script3 = function()
{
  var player = GetPlayer();
const Q1response = player.GetVar("Q1response");
const Q2response = player.GetVar("Q2response");
const Q3response = player.GetVar("Q3response");
const Q4response = player.GetVar("Q4response");
const Q5response = player.GetVar("Q5response");
const Q6response = player.GetVar("Q6response");
const Q7response = player.GetVar("Q7response");

Constructpdf();

async function Constructpdf() {
  try {
    await loadMods();
    await fillForm();
  } catch (err) {
    console.error("Error in Constructpdf:", err);
  }
}

async function loadMods() {
  try {
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
  } catch (err) {
    console.error("Error loading pdf-lib:", err);
  }
}

async function fillForm() {
  try {
    const { PDFDocument } = PDFLib;
    const formUrl = 'Cross-agency Collaboration Navigator Results - Cooperation.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // Get field names (fields are named exactly as Storyline variables)
    const Q1responseField = form.getTextField('Q1response');
    const Q2responseField = form.getTextField('Q2response');
    const Q3responseField = form.getTextField('Q3response');
    const Q4responseField = form.getTextField('Q4response');
    const Q5responseField = form.getTextField('Q5response');
    const Q6responseField = form.getTextField('Q6response');
    const Q7responseField = form.getTextField('Q7response');

    // Fill in form fields
    Q1responseField.setText(Q1response);
    Q2responseField.setText(Q2response);
    Q3responseField.setText(Q3response);
    Q4responseField.setText(Q4response);
    Q5responseField.setText(Q5response);
    Q6responseField.setText(Q6response);
    Q7responseField.setText(Q7response);

    // Flatten the form fields
    form.flatten();

    // Save and download the form
    const pdfBytes = await pdfDoc.save();
    const filename = "Cross-agency Collaboration Navigator Results.pdf"; // Use a static filename
    await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
      .then(({ default: saveAs }) => {
        const blob = new Blob([pdfBytes], { type: 'application/octet-stream' });
        saveAs(blob, filename);
      })
      .catch((err) => {
        console.error("Error saving the file:", err);
      });
  } catch (err) {
    console.error("Error in fillForm:", err);
  }
}
}

window.Script4 = function()
{
  var player = GetPlayer();
const Q1response = player.GetVar("Q1response");
const Q2response = player.GetVar("Q2response");
const Q3response = player.GetVar("Q3response");
const Q4response = player.GetVar("Q4response");
const Q5response = player.GetVar("Q5response");
const Q6response = player.GetVar("Q6response");
const Q7response = player.GetVar("Q7response");

Constructpdf();

async function Constructpdf() {
  try {
    await loadMods();
    await fillForm();
  } catch (err) {
    console.error("Error in Constructpdf:", err);
  }
}

async function loadMods() {
  try {
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
  } catch (err) {
    console.error("Error loading pdf-lib:", err);
  }
}

async function fillForm() {
  try {
    const { PDFDocument } = PDFLib;
    const formUrl = 'Cross-agency Collaboration Navigator Results - Cooperation.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // Get field names (fields are named exactly as Storyline variables)
    const Q1responseField = form.getTextField('Q1response');
    const Q2responseField = form.getTextField('Q2response');
    const Q3responseField = form.getTextField('Q3response');
    const Q4responseField = form.getTextField('Q4response');
    const Q5responseField = form.getTextField('Q5response');
    const Q6responseField = form.getTextField('Q6response');
    const Q7responseField = form.getTextField('Q7response');

    // Fill in form fields
    Q1responseField.setText(Q1response);
    Q2responseField.setText(Q2response);
    Q3responseField.setText(Q3response);
    Q4responseField.setText(Q4response);
    Q5responseField.setText(Q5response);
    Q6responseField.setText(Q6response);
    Q7responseField.setText(Q7response);

    // Flatten the form fields
    form.flatten();

    // Save and download the form
    const pdfBytes = await pdfDoc.save();
    const filename = "Cross-agency Collaboration Navigator Results.pdf"; // Use a static filename
    await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
      .then(({ default: saveAs }) => {
        const blob = new Blob([pdfBytes], { type: 'application/octet-stream' });
        saveAs(blob, filename);
      })
      .catch((err) => {
        console.error("Error saving the file:", err);
      });
  } catch (err) {
    console.error("Error in fillForm:", err);
  }
}
}

window.Script5 = function()
{
  var player = GetPlayer();
const Q1response = player.GetVar("Q1response");
const Q2response = player.GetVar("Q2response");
const Q3response = player.GetVar("Q3response");
const Q4response = player.GetVar("Q4response");
const Q5response = player.GetVar("Q5response");
const Q6response = player.GetVar("Q6response");
const Q7response = player.GetVar("Q7response");

Constructpdf();

async function Constructpdf() {
  try {
    await loadMods();
    await fillForm();
  } catch (err) {
    console.error("Error in Constructpdf:", err);
  }
}

async function loadMods() {
  try {
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
  } catch (err) {
    console.error("Error loading pdf-lib:", err);
  }
}

async function fillForm() {
  try {
    const { PDFDocument } = PDFLib;
    const formUrl = 'Cross-agency Collaboration Navigator Results - Coordination.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // Get field names (fields are named exactly as Storyline variables)
    const Q1responseField = form.getTextField('Q1response');
    const Q2responseField = form.getTextField('Q2response');
    const Q3responseField = form.getTextField('Q3response');
    const Q4responseField = form.getTextField('Q4response');
    const Q5responseField = form.getTextField('Q5response');
    const Q6responseField = form.getTextField('Q6response');
    const Q7responseField = form.getTextField('Q7response');

    // Fill in form fields
    Q1responseField.setText(Q1response);
    Q2responseField.setText(Q2response);
    Q3responseField.setText(Q3response);
    Q4responseField.setText(Q4response);
    Q5responseField.setText(Q5response);
    Q6responseField.setText(Q6response);
    Q7responseField.setText(Q7response);

    // Flatten the form fields
    form.flatten();

    // Save and download the form
    const pdfBytes = await pdfDoc.save();
    const filename = "Cross-agency Collaboration Navigator Results.pdf"; // Use a static filename
    await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
      .then(({ default: saveAs }) => {
        const blob = new Blob([pdfBytes], { type: 'application/octet-stream' });
        saveAs(blob, filename);
      })
      .catch((err) => {
        console.error("Error saving the file:", err);
      });
  } catch (err) {
    console.error("Error in fillForm:", err);
  }
}
}

window.Script6 = function()
{
  var player = GetPlayer();
const Q1response = player.GetVar("Q1response");
const Q2response = player.GetVar("Q2response");
const Q3response = player.GetVar("Q3response");
const Q4response = player.GetVar("Q4response");
const Q5response = player.GetVar("Q5response");
const Q6response = player.GetVar("Q6response");
const Q7response = player.GetVar("Q7response");

Constructpdf();

async function Constructpdf() {
  try {
    await loadMods();
    await fillForm();
  } catch (err) {
    console.error("Error in Constructpdf:", err);
  }
}

async function loadMods() {
  try {
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
  } catch (err) {
    console.error("Error loading pdf-lib:", err);
  }
}

async function fillForm() {
  try {
    const { PDFDocument } = PDFLib;
    const formUrl = 'Cross-agency Collaboration Navigator Results - Coordination.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // Get field names (fields are named exactly as Storyline variables)
    const Q1responseField = form.getTextField('Q1response');
    const Q2responseField = form.getTextField('Q2response');
    const Q3responseField = form.getTextField('Q3response');
    const Q4responseField = form.getTextField('Q4response');
    const Q5responseField = form.getTextField('Q5response');
    const Q6responseField = form.getTextField('Q6response');
    const Q7responseField = form.getTextField('Q7response');

    // Fill in form fields
    Q1responseField.setText(Q1response);
    Q2responseField.setText(Q2response);
    Q3responseField.setText(Q3response);
    Q4responseField.setText(Q4response);
    Q5responseField.setText(Q5response);
    Q6responseField.setText(Q6response);
    Q7responseField.setText(Q7response);

    // Flatten the form fields
    form.flatten();

    // Save and download the form
    const pdfBytes = await pdfDoc.save();
    const filename = "Cross-agency Collaboration Navigator Results.pdf"; // Use a static filename
    await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
      .then(({ default: saveAs }) => {
        const blob = new Blob([pdfBytes], { type: 'application/octet-stream' });
        saveAs(blob, filename);
      })
      .catch((err) => {
        console.error("Error saving the file:", err);
      });
  } catch (err) {
    console.error("Error in fillForm:", err);
  }
}
}

window.Script7 = function()
{
  var player = GetPlayer();
const Q1response = player.GetVar("Q1response");
const Q2response = player.GetVar("Q2response");
const Q3response = player.GetVar("Q3response");
const Q4response = player.GetVar("Q4response");
const Q5response = player.GetVar("Q5response");
const Q6response = player.GetVar("Q6response");
const Q7response = player.GetVar("Q7response");

Constructpdf();

async function Constructpdf() {
  try {
    await loadMods();
    await fillForm();
  } catch (err) {
    console.error("Error in Constructpdf:", err);
  }
}

async function loadMods() {
  try {
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
  } catch (err) {
    console.error("Error loading pdf-lib:", err);
  }
}

async function fillForm() {
  try {
    const { PDFDocument } = PDFLib;
    const formUrl = 'Cross-agency Collaboration Navigator Results - Full Collaboration.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // Get field names (fields are named exactly as Storyline variables)
    const Q1responseField = form.getTextField('Q1response');
    const Q2responseField = form.getTextField('Q2response');
    const Q3responseField = form.getTextField('Q3response');
    const Q4responseField = form.getTextField('Q4response');
    const Q5responseField = form.getTextField('Q5response');
    const Q6responseField = form.getTextField('Q6response');
    const Q7responseField = form.getTextField('Q7response');

    // Fill in form fields
    Q1responseField.setText(Q1response);
    Q2responseField.setText(Q2response);
    Q3responseField.setText(Q3response);
    Q4responseField.setText(Q4response);
    Q5responseField.setText(Q5response);
    Q6responseField.setText(Q6response);
    Q7responseField.setText(Q7response);

    // Flatten the form fields
    form.flatten();

    // Save and download the form
    const pdfBytes = await pdfDoc.save();
    const filename = "Cross-agency Collaboration Navigator Results.pdf"; // Use a static filename
    await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
      .then(({ default: saveAs }) => {
        const blob = new Blob([pdfBytes], { type: 'application/octet-stream' });
        saveAs(blob, filename);
      })
      .catch((err) => {
        console.error("Error saving the file:", err);
      });
  } catch (err) {
    console.error("Error in fillForm:", err);
  }
}
}

window.Script8 = function()
{
  var player = GetPlayer();
const Q1response = player.GetVar("Q1response");
const Q2response = player.GetVar("Q2response");
const Q3response = player.GetVar("Q3response");
const Q4response = player.GetVar("Q4response");
const Q5response = player.GetVar("Q5response");
const Q6response = player.GetVar("Q6response");
const Q7response = player.GetVar("Q7response");

Constructpdf();

async function Constructpdf() {
  try {
    await loadMods();
    await fillForm();
  } catch (err) {
    console.error("Error in Constructpdf:", err);
  }
}

async function loadMods() {
  try {
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
  } catch (err) {
    console.error("Error loading pdf-lib:", err);
  }
}

async function fillForm() {
  try {
    const { PDFDocument } = PDFLib;
    const formUrl = 'Cross-agency Collaboration Navigator Results - Full Collaboration.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // Get field names (fields are named exactly as Storyline variables)
    const Q1responseField = form.getTextField('Q1response');
    const Q2responseField = form.getTextField('Q2response');
    const Q3responseField = form.getTextField('Q3response');
    const Q4responseField = form.getTextField('Q4response');
    const Q5responseField = form.getTextField('Q5response');
    const Q6responseField = form.getTextField('Q6response');
    const Q7responseField = form.getTextField('Q7response');

    // Fill in form fields
    Q1responseField.setText(Q1response);
    Q2responseField.setText(Q2response);
    Q3responseField.setText(Q3response);
    Q4responseField.setText(Q4response);
    Q5responseField.setText(Q5response);
    Q6responseField.setText(Q6response);
    Q7responseField.setText(Q7response);

    // Flatten the form fields
    form.flatten();

    // Save and download the form
    const pdfBytes = await pdfDoc.save();
    const filename = "Cross-agency Collaboration Navigator Results.pdf"; // Use a static filename
    await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
      .then(({ default: saveAs }) => {
        const blob = new Blob([pdfBytes], { type: 'application/octet-stream' });
        saveAs(blob, filename);
      })
      .catch((err) => {
        console.error("Error saving the file:", err);
      });
  } catch (err) {
    console.error("Error in fillForm:", err);
  }
}
}

};
