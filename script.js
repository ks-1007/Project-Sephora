var slideIndex1 = 0;
function nextBtn(list) {
    
    if (slideIndex1 < 12) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex1; i < slideIndex1 + 6; i++){
            slideItems[i].classList.remove("display");
        }
        slideIndex1 += 6;
        
        for (let i = slideIndex1; i < slideIndex1 + 6; i++){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }
    
    
}
function prevBtn(list) {
    
    if (slideIndex1 >5) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex1+5; i >= slideIndex1 ; i--){
            slideItems[i].classList.remove("display");
        }
        slideIndex1 -= 6;
    
        
        for (let i = slideIndex1+5; i >= slideIndex1; i--){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }
    
    
}