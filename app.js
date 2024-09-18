

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var db = firebase.firestore();

var userData = {};
var subhanallah = 0;
var alhamdulillah = 0;
var kalmaShareef = 0;
var duroodEPak = 0;
var activeTasbeeh = "";

function homeclick(){
    var all_dispaly = document.getElementById("all_dispaly");
  var tasbeeh_section = document.getElementById("tasbeeh_section");
  all_dispaly.classList.remove("d-none");
  tasbeeh_section.classList.add("d-none");
  console.log("Daboard");
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
  activeTasbeeh = tasbeeh;
  hading.innerHTML = tasbeeh
  count.innerHTML = allTasbeeh[tasbeeh]
  console.log("tasbeeh")
}

function changenumber(type) {
    var count = document.getElementById("tasbeeh_c");
    if (type === "plus") {
      if (activeTasbeeh === "subhanallah") {
        subhanallah++;
        count.innerHTML = subhanallah;
      }
      if (activeTasbeeh === "alhamdulillah") {
        alhamdulillah++;
        count.innerHTML = alhamdulillah;
      }
      if (activeTasbeeh === "kalmaShareef") {
        kalmaShareef++;
        count.innerHTML = kalmaShareef;
      }
      if (activeTasbeeh === "duroodEPak") {
        duroodEPak++;
        count.innerHTML = kalmaShareef;
      }
    } else {
      if (Number(count.innerHTML) > 0) {
        if (activeTasbeeh === "subhanallah") {
          subhanallah--;
          count.innerHTML = subhanallah;
        }
        if (activeTasbeeh === "alhamdulillah") {
          alhamdulillah--;
          count.innerHTML = alhamdulillah;
        }
        if (activeTasbeeh === "kalmaShareef") {
          kalmaShareef--;
          count.innerHTML = kalmaShareef;
        }
        if (activeTasbeeh === "duroodEPak") {
          duroodEPak--;
          count.innerHTML = kalmaShareef;
        }
      }
    }
  }