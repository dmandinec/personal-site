const translations = {
 czech: {
  nadpiss: "Domovská stránka",
   title: "Osobní stránka",
   whoami: "Moje jméno je <strong>Daniel Mandinec</strong>",
   secondarySchool: "Byl jsem studentem <strong>1.KŠPA Praha</strong> (2021-2025).",
   highSchool: "A nyní studuji na <strong>Vyšší odborné škole informačních studií</strong> (2025-dosud).",
   finalExam: "Maturitní zkoušku jsem složil v roce 2025",   
   button: "🇬🇧"
 },
english: {
  nadpiss: "Home",
  title: "Personal Page",
  whoami: "My name is <strong>Daniel Mandinec</strong>.",
  secondarySchool: "I studied at <strong>1st KŠPA Prague</strong> (2021–2025).",
  highSchool: "I am now studying at <strong>Vyšší odborná škola informačních studií</strong> (2025–present).",
  finalExam: "I took the secondary school leaving examination in 2025.",
  button: "🇨🇿"
}
};

// Function to set the language for the page
function setLanguage(lang) {
 document.documentElement.lang = lang;
 document.getElementById("nadpiss").innerHTML = translations[lang].nadpiss;
 document.getElementById("nadpis").innerHTML = translations[lang].title;
 document.getElementById("oMe").innerHTML = translations[lang].whoami;
 document.getElementById("stredniSkola").innerHTML = translations[lang].secondarySchool;
  document.getElementById("vysokaSkola").innerHTML = translations[lang].highSchool;
 document.getElementById("maturita").innerHTML = translations[lang].finalExam;
 document.getElementById("lang-toggle").innerHTML = translations[lang].button;
 localStorage.setItem("language", lang);
}

// Retrieve saved language from localStorage or default to Czech
let currentLang = localStorage.getItem("language") || "czech";
setLanguage(currentLang);

// Toggle language when the button is clicked
document.getElementById("lang-toggle").addEventListener("click", function() {
 currentLang = currentLang === "czech" ? "english" : "czech";
 setLanguage(currentLang);
});
