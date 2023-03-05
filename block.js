const fs = require('fs');
const path = require('path');

// Path to directory containing HTML files
const directoryPath = './';

// Block of code to add
const codeBlock = `
<div id="google_translate_element"></div>
<script>
function googleTranslateElementInit() {
new google.translate.TranslateElement({
pageLanguage: 'en',
includedLanguages: 'hi',
autoDisplay: false
}, 'google_translate_element');
var a = document.querySelector("#google_translate_element select");
a.selectedIndex=1;
a.dispatchEvent(new Event('change'));
}
</script>
<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

`

global.document = new JSDOM(html).window.document;


// Get list of files in directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  // Loop through each file in directory
  files.forEach(file => {
    // Check if file is an HTML file
    if (path.extname(file) === '.html') {
      // Read file contents
      fs.readFile(path.join(directoryPath, file), 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading file: ${err}`);
          return;
        }

        // Create new DOM element with code block
        const div = document.createElement('div');
        div.innerHTML = codeBlock;

        // Add new element to body of HTML file
        const bodyIndex = data.indexOf('<body>');
        const bodyEndIndex = data.indexOf('</body>');
        if (bodyIndex !== -1 && bodyEndIndex !== -1) {
          const bodyContents = data.substring(bodyIndex + 6, bodyEndIndex);
          const newFileContents = `${data.substring(0, bodyEndIndex)}${div.outerHTML}${data.substring(bodyEndIndex)}`;
          
          // Write modified file contents back to file
          fs.writeFile(path.join(directoryPath, file), newFileContents, err => {
            if (err) {
              console.error(`Error writing file: ${err}`);
              return;
            }
            console.log(`File "${file}" updated.`);
          });
        }
      });
    }
  });
});

 