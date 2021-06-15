let l1=0
function nextBtn1(list) {
    l1++
    let itemList = document.getElementsByClassName(list)
    for (var i of itemList) {
        if(l1===0){i.style.left="0px";}
        if(l1===1){i.style.left="-1070px";}
        if(l1===2){i.style.left="-2140px";}
        if (l1 > 2) { l1 = 2;}
    }
}
function prevBtn1(list) {
    l1--
    let itemList = document.getElementsByClassName(list)
    for (var i of itemList) {
        if(l1===0){i.style.left="0px";}
        if(l1===1){i.style.left="-1070px";}
        if(l1===2){i.style.left="-2140px";}
        if (l1 < 0) { l1 = 0;}
    }
}

let l2=0
function nextBtn2(list) {
    l2++
    let itemList = document.getElementsByClassName(list)
    for (var i of itemList) {
        if(l2===0){i.style.left="0px";}
        if(l2===1){i.style.left="-1070px";}
        if(l2===2){i.style.left="-2140px";}
        if (l2 > 2) { l2 = 2;}
    }
}
function prevBtn2(list) {
    l2--
    let itemList = document.getElementsByClassName(list)
    for (var i of itemList) {
        if(l2===0){i.style.left="0px";}
        if(l2===1){i.style.left="-1070px";}
        if(l2===2){i.style.left="-2140px";}
        if (l2 < 0) { l2 = 0;}
    }
}

let l3=0
function nextBtn3(list) {
    l3++
    let itemList = document.getElementsByClassName(list)
    for (var i of itemList) {
        if(l3===0){i.style.left="0px";}
        if(l3===1){i.style.left="-1070px";}
        if(l3===2){i.style.left="-2140px";}
        if (l3 > 2) { l3 = 2;}
    }
}
function prevBtn3(list) {
    l3--
    let itemList = document.getElementsByClassName(list)
    for (var i of itemList) {
        if(l3===0){i.style.left="0px";}
        if(l3===1){i.style.left="-1070px";}
        if(l3===2){i.style.left="-2140px";}
        if (l3 < 0) { l3 = 0;}
    }
}

let l4=0
function nextBtn4(list) {
    l4++
    let itemList = document.getElementsByClassName(list)
    for (var i of itemList) {
        if(l4===0){i.style.left="0px";}
        if(l4===1){i.style.left="-1070px";}
        if(l4===2){i.style.left="-2140px";}
        if (l4 > 2) { l4 = 2;}
    }
}
function prevBtn4(list) {
    l4--
    let itemList = document.getElementsByClassName(list)
    for (var i of itemList) {
        if(l4===0){i.style.left="0px";}
        if(l4===1){i.style.left="-1070px";}
        if(l4===2){i.style.left="-2140px";}
        if (l4 < 0) { l4 = 0;}
    }
}

let l5=0
function nextBtn5(list) {
    l5++
    let itemList = document.getElementsByClassName(list)
    for (var i of itemList) {
        if(l5===0){i.style.left="0px";}
        if(l5===1){i.style.left="-1070px";}
        if(l5===2){i.style.left="-2140px";}
        if (l5 > 2) { l5 = 2;}
    }
}
function prevBtn5(list) {
    l5--
    let itemList = document.getElementsByClassName(list)
    for (var i of itemList) {
        if(l5===0){i.style.left="0px";}
        if(l5===1){i.style.left="-1070px";}
        if(5===2){i.style.left="-2140px";}
        if (l5 < 0) { l5 = 0;}
    }
}


function signinToggle() {  
     var popup_signin = document.getElementById('popup_signin');
    popup_signin.classList.add('signinBtnActivee');
    //  var blur = document.getElementById('body');
    // blur.setAttribute('class', 'signinBtnActive');
}

function signin(e) {
    e.preventDefault();
    let form = document.getElementById('signin_form')
    let mail = form.email.value;
    let password = form.password.value;

    
}