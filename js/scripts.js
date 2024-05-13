var burgerBtn = document.querySelector("#burger-container button");
var mainNavContainer = document.querySelector("#main-nav");

var mainNavVisible = false;

burgerBtn.addEventListener("click", () =>{
    console.log("burger clicked");

    // check to see if we can see the main nav
    if(mainNavVisible === false){

        mainNavVisible = true;

    }else{

        mainNavVisible = false;
    }


})

