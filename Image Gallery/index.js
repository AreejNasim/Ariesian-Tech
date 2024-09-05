 // Selecting all filterable cards and buttons
 const filterButtons = document.querySelectorAll(".filter-buttons button");
 const filterableCards = document.querySelectorAll(".filterable-cards .card");
 
 // Defining the functions of the filter cards
 const filterCards = e => {
     document.querySelector(".active").classList.remove("active");
     e.target.classList.add("active");
     console.log(e.target);
 
     //iterate over each filterable cards
     filterableCards.forEach(card => {
         //adding hide class to hide the card initially
         card.classList.add("hide");
         //checking if the card matches the selected filter or if all is selected
         if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");   
         }
     })
 };
 
 //adding event listener to all buttons
 filterButtons.forEach(button => button.addEventListener("click" , filterCards));
 
 var fullImgBox = document.getElementById("fullImgBox");
 var fullImg = document.getElementById("fullImg");
 
 function openFullImg(pic){
     fullImgBox.style.display = "flex";
     fullImg.src = pic;
 }
 
 function closeFullImg(){
     fullImgBox.style.display = "none";
 }                                    