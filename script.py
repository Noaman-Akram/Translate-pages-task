import os

#make sure this is correct
directory = "./"



blockOfcode = """ 
<body>
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
"""

for root, dirs, files in os.walk(directory):
    for file in files:
        # Check if file is HTML
        if file.endswith(".html"):
            with open(os.path.join(root, file), "r") as f:
                content = f.read()

            # this removes the body classes if there is any, can be modified but it still works
            content = content.replace("<body", blockOfcode)

            with open(os.path.join(root, file), "w") as f:
                f.write(content)
print("done")