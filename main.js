"use strict"
 let coll = document.getElementsByClassName("accordion");
 // Loop buttons
 for (let i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function(evnt) {
     const currClassList = evnt.currentTarget.classList;
     if (currClassList.contains('collapsed')) {
         evnt.currentTarget.classList.remove("collapsed");
         let content = evnt.currentTarget.nextElementSibling;
         content.style.maxHeight = null;
         
         // Toggle icon
         let iconElem = evnt.currentTarget.children[0];
         iconElem.classList.remove("arrowU");
         iconElem.classList.add("arrowD");
     } else {
       for (let j = 0; j < coll.length; j++) {
            coll[j].classList.remove("collapsed")
            coll[j].nextElementSibling.style.maxHeight = null;
            coll[j].children[0].classList.remove("arrowU");
            coll[j].children[0].classList.add("arrowD");
       }
       this.classList.toggle("collapsed");
       let content = this.nextElementSibling;
       if (content.style.maxHeight){
         content.style.maxHeight = null;
       } else {
         content.style.maxHeight = content.scrollHeight + "px";
       }
       // Toggle icon
       let iconElem = evnt.currentTarget.children[0];
       iconElem.classList.remove("arrowD");
       iconElem.classList.add("arrowU");
     }
   });
 }