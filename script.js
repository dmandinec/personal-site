const translations = {
 cs: {
   title: "Osobní stránka",
   description: "Moje jméno je <strong>Daniel Mandinec</strong>.",
   button: "🇬🇧"
 },
 en: {
   title: "Personal Page",
   description: "My name is <strong>Daniel Mandinec</strong>.",
   button: "🇨🇿"
 }
};

// Function to set the language for the page
function setLanguage(lang) {
 document.documentElement.lang = lang;
 document.getElementById("nadpis").innerHTML = translations[lang].title;
 document.getElementById("oMe").innerHTML = translations[lang].description;
 document.getElementById("lang-toggle").innerHTML = translations[lang].button;
 localStorage.setItem("language", lang);
}

// Retrieve saved language from localStorage or default to Czech
let currentLang = localStorage.getItem("language") || "cs";
setLanguage(currentLang);

// Toggle language when the button is clicked
document.getElementById("lang-toggle").addEventListener("click", function() {
 currentLang = currentLang === "cs" ? "en" : "cs";
 setLanguage(currentLang);
});