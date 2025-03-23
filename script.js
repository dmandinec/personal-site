const translations = {
 cs: {
   title: "Osobní stránka",
   description: "Moje jméno je <strong>Daniel Mandinec</strong><br>",
   school: "Jsem studentem 1.KŠPA Praha už 4. roky(dlouhá doba)",
   finalExam: "Maturitní zkoušky budu skládát v roce 2025",   
   button: "🇬🇧"
 },
 en: {
   title: "Personal Page",
   description: "My name is <strong>Daniel Mandinec</strong>.",
   school: "I have been a student at 1st KŠPA Prague for 4 years (a while)",
   finalExam: "I will take the final exams in 2025",
   button: "🇨🇿"
 }
};

// Function to set the language for the page
function setLanguage(lang) {
 document.documentElement.lang = lang;
 document.getElementById("nadpis").innerHTML = translations[lang].title;
 document.getElementById("oMe").innerHTML = translations[lang].description;
 document.getElementById("skola").innerHTML = translations[lang].school;
 document.getElementById("maturita").innerHTML = translations[lang].finalExam;
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