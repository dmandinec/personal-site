const translations = {
 cs:{
  nadpiss: "Kontakt",
  title: "Kontakt",
 button: "🇬🇧",
 },
 en:{
  nadpiss: "Contact",
  title: "Contact",
  button: "🇨🇿",
 }
}
function setLanguage(lang) {
 document.documentElement.lang = lang;
 document.getElementById("nadpiss").innerHTML = translations[lang].nadpiss;
 document.getElementById("nadpis").innerHTML = translations[lang].title;
 document.getElementById("lang-toggle").innerHTML = translations[lang].button;
 localStorage.setItem("language", lang);
}
let currentLang = localStorage.getItem("language") || "cs";
setLanguage(currentLang);

// Toggle language when the button is clicked
document.getElementById("lang-toggle").addEventListener("click", function() {
 currentLang = currentLang === "cs" ? "en" : "cs";
 setLanguage(currentLang);
});
