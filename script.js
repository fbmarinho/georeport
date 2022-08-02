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
function createInput(tool){
  var container = document.createElement("div");
  container.classList.add("input");

  var label = tool.title;
  var name = "serial_"+(tool.name || tool.title.toNameFormat());

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
};

//Create Select
function createSelect(s){
  //Create container
  var container = document.createElement("div");
  container.classList.add("selector");

  //Create title if informed
  if(s.title){
    var span = document.createElement("span");
    span.classList.add("title");
    span.innerHTML = s.title;
    container.appendChild(span);
  };


  if(s.options?.length > 0){

    //Create select
    var select = document.createElement("select");
    select.name = s.name ? s.name : s.title.toNameFormat();
    select.multiple = s.multiple;
    select.size = s.minlength || s.options.length;

    s.options.forEach((o)=>{
      var opt = document.createElement("option");
      opt.innerHTML = o.title;
      opt.value = o.value ? o.value : o.title.toNameFormat();
      opt.selected = o.selected;
      select.appendChild(opt); //add option to select
    })
  
    container.appendChild(select);

  } else {

    var text = document.createTextNode("No data");
    container.appendChild(text);

  }

  return container;
}

//Create selects in container with given id
function generateSelectorsInContainer(id, data){
  var container = document.getElementById(id);
  container.innerHTML = "";
  data.forEach((select)=>{
    container.appendChild(createSelect(select));
  })
}

//Generate Selected tools inputs
function generateToolData(id="tooldata"){
  var container = document.getElementById(id);
  container.innerHTML = "";
  const get = (tool)=>{
    var saved = localStorage.getItem(tool.name || tool.title.toNameFormat());
    console.log(saved)
    if(saved !== "n/a") container.appendChild(createInput(tool))
  }
  fedata.forEach(get);
  drilling.forEach(get);
};

//Populate fields with saved data
function getSavedData(){
  const getString = async (e) => {
    var saved = await localStorage.getItem(e.name);
    e.value = saved ? saved : '';
  }
  const getArray = async (e) => {
    var saved = await localStorage.getItem(e.name).split("|");
    if(saved.length>0){
      saved.forEach(s=>e.options.find(c=>c.value == s).selected = true)
    }
  }
  document.getElementsByTagName("input").forEach(getString);
  document.getElementsByTagName("select").forEach(getArray);
}

//DOM Loaded
document.addEventListener("DOMContentLoaded", function() {

  generateSelectorsInContainer("controller", controller);
  generateSelectorsInContainer("fedata", fedata);
  generateSelectorsInContainer("drilling", drilling);
  generateSelectorsInContainer("telemetry", telemetry);

  
  //Persist data when select change value
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
      console.log('Saving select:',e.target.name,values)
      generateToolData();
      getSavedData();
    }, 500));    
  });

  //Persist data when input is edited
  document.getElementsByTagName("input").forEach(async (e) => {
    e.addEventListener("input",debounce(async ()=>{
      await localStorage.setItem(e.name, e.value);
      console.log('Saving input:',e.name, e.value)
      getSavedData();
    }, 500));
  });

  //Initial state
  generateToolData();
  getSavedData();

});