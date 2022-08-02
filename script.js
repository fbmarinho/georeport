HTMLCollection.prototype.forEach = Array.prototype.forEach
HTMLCollection.prototype.filter = Array.prototype.filter
HTMLCollection.prototype.find = Array.prototype.find
String.prototype.toNameFormat = function () {
  return this.replace(/-|\s+/g, '').toLowerCase()
}

//Debounce function
var debounce = (callback, wait = 250) => {
  let timer;
  return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), wait);
  };
};



//Input Creation
function createInput(measurement){
  var container = document.createElement("div");
  container.classList.add("input");

  var label = measurement.type;
  var name = "serial_"+measurement.type.toNameFormat();

  var input = document.createElement("input");
  input.type = "text";
  input.id = name;
  input.name = name;
  
  var title = document.createElement('label');
  title.setAttribute("for", name);
  title.innerText = label;

  container.appendChild(title)
  container.appendChild(input)

  return container;
}

// Selector Creation
function createSelector(name, title, items, length=5, multiple=false){

  //Create container
  var container = document.createElement("div");
  container.classList.add("selector");

  //Create title if informed
  if(title){
    var span = document.createElement("span");
    span.innerHTML = title;
    span.classList.add("title");
    container.appendChild(span);
  }

  //Do we have items ?
  if (items?.length>0) {

    //Create select
    var select = document.createElement("select");
      select.name = name;
      select.multiple = multiple;
      select.size = items.length > length ? items.length : length;

    items.forEach((item)=>{
      var container = document.createElement("option");
      container.innerHTML = item.name;
      container.value = item.name.toNameFormat();
      container.selected = item.checked;
      
      select.appendChild(container);
      
    })

    container.appendChild(select);
  }  else {
    var text = document.createTextNode("No items found");
    container.appendChild(text);
  }

  return container;
}



function getSavedData(){
  const getString = async (e) => {
    var saved = await localStorage.getItem(e.name);
    console.log(saved)
    e.value = saved ? saved : '';
  }
  const getArray = async (e) => {
    var saved = await localStorage.getItem(e.name).split("|");
    console.log(saved)
    if(saved.length>0){
      saved.forEach(s=>e.options.find(c=>c.value == s).selected = true)
    }
  }
  document.getElementsByTagName("input").forEach(getString);
  document.getElementsByTagName("select").forEach(getArray);
}


//DOM Loaded
document.addEventListener("DOMContentLoaded", function() {
  
  function parseCurveData(string){
    //String format "description|record|variable|minemonic|label"
    var data = typeof string == "string" ? string.split("|") : [];
    if(data.length !== 5) return {error: "bad string format"}
    return {
      description:  data[0],
      record:       data[1],
      variable:     data[2],
      minemonic:    data[3],
      label:        data[4]
    };
  }

  var controller_container = document.getElementById("controller");
  var fedata_container = document.getElementById("fedata");
  var drilling_container = document.getElementById("drilling");
  var telemetry_container = document.getElementById("telemetry");
  var tooldata_container = document.getElementById("tooldata");
  
  //Create controller data
  function generateController(){
    controller_container.innerHTML = "";
    controller_container.appendChild(createSelector("controller", null, controller, 1));
  }

  //Create FE Data
  function generateFedata(){
    fedata_container.innerHTML = "";
    fedata.map((measure)=>{
      var name = measure.type.toNameFormat();
      var title = measure.type;
      fedata_container.appendChild(
        createSelector(name,title,measure.tools)
        );
    })
  }

  //Create Drillling Data
  function generateDrilling(){
    drilling_container.innerHTML = "";
    drilling.map((tool)=>{
      var name = tool.name.toNameFormat();
      var title = tool.name;
      drilling_container.appendChild(
        createSelector(name,title,tool.tools, 5, tool.multiple));
    })
  }

  function generateToolData(){
    tooldata_container.innerHTML = "";
    fedata.map((measure)=>{
      var saved = localStorage.getItem(measure.type.toNameFormat());
      if(saved !== "n/a") tooldata_container.appendChild(createInput(measure))
    })
  }

  function generateTelemetry(){
    telemetry_container.innerHTML = "";
    telemetry_container.appendChild(createSelector("telemetry", "Hardware", telemetry));
    telemetry_container.appendChild(createSelector("transmission", "Transmission Method", transmission));
  }

  generateController();
  generateFedata();
  generateDrilling();
  generateToolData();
  generateTelemetry();

  document.getElementsByTagName("select").forEach(async (e) => {
    //Persist data when changed
    e.addEventListener("change",debounce(async (e)=>{
      var na = e.target.options.find((o)=>o.value==="n/a");
      if(na?.selected){
        e.target.selectedIndex = -1;
        na.selected = true;
      }

      var values = [];
      var selected = e.target.options.filter((x)=>x.selected).map((e)=>values.push(e.value));
      await localStorage.setItem(e.target.name, values.join("|"));
      generateToolData();
      getSavedData();
    }, 500));    
  });

  //Persist data when edited
  document.getElementsByTagName("input").forEach(async (e) => {
    e.addEventListener("input",debounce(async ()=>{
      await localStorage.setItem(e.name, e.value);
      getSavedData();
    }, 500));
  });

  getSavedData();

});