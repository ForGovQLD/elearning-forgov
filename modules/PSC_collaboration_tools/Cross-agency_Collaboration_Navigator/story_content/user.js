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
  (function () {
    // Get the Storyline player
    var player = GetPlayer();

    // Retrieve the user ID from a Storyline variable (replace "userId" with your actual variable name)
    var userId = player.GetVar("userId"); // Ensure you have a Storyline variable named "userId"

    // Add date and time
    const now = new Date();
    const data = {
        date: now.toLocaleDateString(), // Local date (e.g. 26/09/2025)
        time: now.toLocaleTimeString(), // Local time (e.g. 1:42:00 PM)
        userInfoQ1: player.GetVar("userInfoQ1"), // Replace with your Storyline variable name
        userInfoQ2: player.GetVar("userInfoQ2"), // Replace with your Storyline variable name
        userInfoQ3: player.GetVar("userInfoQ3"), // Replace with your Storyline variable name
        govDepartmentQld: player.GetVar("govDepartmentQld"), // Replace with your Storyline variable name
        overallResult: player.GetVar("overallResult"), // Replace with your Storyline variable name
        Q1response: player.GetVar("Q1response"), // Replace with your Storyline variable name
        Q2response: player.GetVar("Q2response"), // Replace with your Storyline variable name
        Q3response: player.GetVar("Q3response"), // Replace with your Storyline variable name
        Q4response: player.GetVar("Q4response"), // Replace with your Storyline variable name
        Q5response: player.GetVar("Q5response"), // Replace with your Storyline variable name
        Q6response: player.GetVar("Q6response"), // Replace with your Storyline variable name
        Q7response: player.GetVar("Q7response")  // Replace with your Storyline variable name
    };

    // Define the API endpoint URL
    var apiUrl = "https://default51778d2aa6ab4c7697dc782782d650.46.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/e9c8a77f74304260bb0d184883597a08/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OSq9lcnZnUAKRj4Sgw2Ny1Mkq3Bjdm9dk4ISierjmTg"; // Replace with your actual API endpoint

    // Send the data via an HTTP POST request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", apiUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Handle the response (optional)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Data sent successfully:", xhr.responseText);
            } else {
                console.error("Error sending data:", xhr.status, xhr.statusText);
            }
        }
    };

    // Convert the data object to JSON and send it
    xhr.send(JSON.stringify(data));

    // Optionally, log the data object to the console for debugging
    console.log("Data being sent:", data);
})();
}

window.Script2 = function()
{
  (function () {
    // Get the Storyline player
    var player = GetPlayer();

    // Retrieve the user ID from a Storyline variable (replace "userId" with your actual variable name)
    var userId = player.GetVar("userId"); // Ensure you have a Storyline variable named "userId"

    // Add date and time
    const now = new Date();
    const data = {
        date: now.toLocaleDateString(), // Local date (e.g. 26/09/2025)
        time: now.toLocaleTimeString(), // Local time (e.g. 1:42:00 PM)
        userInfoQ1: player.GetVar("userInfoQ1"), // Replace with your Storyline variable name
        userInfoQ2: player.GetVar("userInfoQ2"), // Replace with your Storyline variable name
        userInfoQ3: player.GetVar("userInfoQ3"), // Replace with your Storyline variable name
        govDepartmentQld: player.GetVar("govDepartmentQld"), // Replace with your Storyline variable name
        overallResult: player.GetVar("overallResult"), // Replace with your Storyline variable name
        Q1response: player.GetVar("Q1response"), // Replace with your Storyline variable name
        Q2response: player.GetVar("Q2response"), // Replace with your Storyline variable name
        Q3response: player.GetVar("Q3response"), // Replace with your Storyline variable name
        Q4response: player.GetVar("Q4response"), // Replace with your Storyline variable name
        Q5response: player.GetVar("Q5response"), // Replace with your Storyline variable name
        Q6response: player.GetVar("Q6response"), // Replace with your Storyline variable name
        Q7response: player.GetVar("Q7response")  // Replace with your Storyline variable name
    };

    // Define the API endpoint URL
    var apiUrl = "https://default51778d2aa6ab4c7697dc782782d650.46.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/e9c8a77f74304260bb0d184883597a08/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OSq9lcnZnUAKRj4Sgw2Ny1Mkq3Bjdm9dk4ISierjmTg"; // Replace with your actual API endpoint

    // Send the data via an HTTP POST request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", apiUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Handle the response (optional)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Data sent successfully:", xhr.responseText);
            } else {
                console.error("Error sending data:", xhr.status, xhr.statusText);
            }
        }
    };

    // Convert the data object to JSON and send it
    xhr.send(JSON.stringify(data));

    // Optionally, log the data object to the console for debugging
    console.log("Data being sent:", data);
})();
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
    const formUrl = 'Navigator_Networking result.pdf';
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
    const filename = "Navigator_Networking result.pdf"; // Use a static filename
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
    const formUrl = 'Navigator_Networking result.pdf';
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
    const filename = "Navigator_Networking result.pdf"; // Use a static filename
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
    const formUrl = 'Navigator_Full Collaboration result.pdf';
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
    const filename = "Navigator_Full Collaboration result.pdf"; // Use a static filename
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
    const formUrl = 'Navigator_Full Collaboration result.pdf';
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
    const filename = "Navigator_Full Collaboration result.pdf"; // Use a static filename
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
    const formUrl = 'Navigator_Cooperation result.pdf';
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
    const filename = "Navigator_Cooperation result.pdf"; // Use a static filename
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
    const formUrl = 'Navigator_Cooperation result.pdf';
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
    const filename = "Navigator_Cooperation result.pdf"; // Use a static filename
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

window.Script9 = function()
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
    const formUrl = 'Navigator_Coordination result.pdf';
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
    const filename = "Navigator_Coordination result.pdf"; // Use a static filename
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

window.Script10 = function()
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
    const formUrl = 'Navigator_Coordination result.pdf';
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
    const filename = "Navigator_Coordination result.pdf"; // Use a static filename
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
