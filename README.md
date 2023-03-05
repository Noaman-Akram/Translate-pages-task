# Translate-pages-task




<p> This website was already developed in English, the python script is used to modify html files to translate it from English to Hindi
 
</p>

<p> You can modify the code below to change from any language to any other language </p>

<br>

## HTML code that translate on page load


    <div id="google_translate_element"></div>
    <script>
    function googleTranslateElementInit() {
    new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'hi', <!-- Change this to your preffered language code -->
    autoDisplay: false
    }, 'google_translate_element');
    var a = document.querySelector("#google_translate_element select");
    a.selectedIndex=1;
    a.dispatchEvent(new Event('change'));
    }
    </script>
    <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>



# [The script](script.py)


**Run this script modify the HTML files in the directory and sub-directories** 

script.py

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


<p> For any questions reach me at : noaman.akram@pm.me  </p>
<p> or https://www.linkedin.com/in/noamanelsayed/ </p>

---
* <img src="https://github.com/Noaman-Akram/Instapost/raw/main/public/favicon.ico" width="20px">  Developed by [Noaman](https://github.com/Noaman-Akram)