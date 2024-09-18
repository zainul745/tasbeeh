
const firebaseConfig = {
  apiKey: "AIzaSyDZcuQmv6W-n_EiLw_5i0qU6nIV1_M_VSU",
  authDomain: "zainulabideen-95d8b.firebaseapp.com",
  projectId: "zainulabideen-95d8b",
  storageBucket: "zainulabideen-95d8b.appspot.com",
  messagingSenderId: "650585851882",
  appId: "1:650585851882:web:12c40a2398e358677c9493"
};
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var db = firebase.firestore();

var userData = {};
var subhanallah = 0;
var alhamdulillah = 0;
var kalmaShareef = 0;
var duroodEPak = 0;
var acti_Tasbeeh = "";

function homeclick(){
    var all_dispaly = document.getElementById("all_dispaly");
  var tasbeeh_section = document.getElementById("tasbeeh_section");
  all_dispaly.classList.remove("d-none");
  tasbeeh_section.classList.add("d-none");
  console.log("yes");
}

function showtasbeeh(tasbeeh){
    var allTasbeeh = {
        alhamdulillah,
        kalmaShareef,
        duroodEPak,
        subhanallah,
      };
    var all_dispaly = document.getElementById("all_dispaly");
  var tasbeeh_section = document.getElementById("tasbeeh_section");
  all_dispaly.classList.add("d-none");
  tasbeeh_section.classList.remove("d-none");
  var hading = document.getElementById("tasbeeh_h")
  var count = document.getElementById("tasbeeh_c")
  acti_Tasbeeh = tasbeeh;
  hading.innerHTML = tasbeeh
  count.innerHTML = allTasbeeh[tasbeeh]
  console.log("tasbe")
}

function changenumber(number) {
    var count = document.getElementById("tasbeeh_c");
    if (number === "+") {
      if (acti_Tasbeeh === "subhanallah") {
        subhanallah++;
        count.innerHTML = subhanallah;
      }
      if (acti_Tasbeeh === "alhamdulillah") {
        alhamdulillah++;
        count.innerHTML = alhamdulillah;
      }
      if (acti_Tasbeeh === "kalmaShareef") {
        kalmaShareef++;
        count.innerHTML = kalmaShareef;
      }
      if (acti_Tasbeeh === "duroodEPak") {
        duroodEPak++;
        count.innerHTML = kalmaShareef;
      }
    } 
    if (number === "-") {
      if (acti_Tasbeeh === "subhanallah") {
        subhanallah--
        count.innerHTML = subhanallah;
      }
      if (acti_Tasbeeh === "alhamdulillah") {
        alhamdulillah--
        count.innerHTML = alhamdulillah;
      }
      if (acti_Tasbeeh === "kalmaShareef") {
        kalmaShareef--
        count.innerHTML = kalmaShareef;
      }
      if (acti_Tasbeeh === "duroodEPak") {
        duroodEPak--
        count.innerHTML = kalmaShareef;
      }
    } 
  }