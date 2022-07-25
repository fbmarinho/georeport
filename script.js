HTMLCollection.prototype.forEach = Array.prototype.forEach
HTMLCollection.prototype.filter = Array.prototype.filter

//Debounce function
var debounce = (callback, wait = 250) => {
  let timer;
  return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), wait);
  };
};

//DOM Loaded
document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementsByTagName("input").forEach(async (input) => {
    //Persist data when edited
    input.addEventListener("input",debounce(async ()=>{
      await localStorage.setItem(input.name, input.value);
    }, 500));    
     
    //Get Saved Data if exists
     var saved = await localStorage.getItem(input.name);
     input.value = saved ? saved : ''
  });
  

});