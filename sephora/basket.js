var slideIndex1 = 0;
function nextBtn1(list) {
    
    if (slideIndex1 < 8) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex1; i < slideIndex1 + 4; i++){
            slideItems[i].classList.remove("display");
        }
        slideIndex1 += 4;
        
        for (let i = slideIndex1; i < slideIndex1 + 4; i++){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }
    
    
}
function prevBtn1(list) {
    
    if (slideIndex1 >3) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex1+3; i >= slideIndex1 ; i--){
            slideItems[i].classList.remove("display");
        }
        slideIndex1 -= 4;
    
        
        for (let i = slideIndex1+3; i >= slideIndex1; i--){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }
    
    
}