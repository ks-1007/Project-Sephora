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

let products = {
    item1:{
        class: "item1",
        brand: "KVD Beauty",
        desc: "Everlasting Blush Refills",
        price: 25,
        image:"https://www.sephora.com/productimages/sku/s2452266-main-zoom.jpg?imwidth=135&pb=2020-03-sephora-clean-2019&imwidth=97"
    },
    item2:{
        class: "item2",
        brand: "NARS",
        desc: "Puff Painted Liquid Blush",
        price: 15,
        image:"https://www.sephora.com/productimages/sku/s2426930-main-zoom.jpg?imwidth=135&imwidth=97"
    },
    item3:{
        class: "item3",
        brand: "Youth to the People",
        desc: "Antioxidant Cleanser",
        price: 35,
        image:"https://www.sephora.com/productimages/sku/s1237379-main-zoom.jpg?imwidth=135&imwidth=97"
    },
    item4:{
        class: "item4",
        brand: "Dior",
        desc: "Dior Addict Lip Glow",
        price: 30,
        image:"https://www.sephora.com/productimages/sku/s2305480-main-zoom.jpg?imwidth=135&imwidth=97"
    }
}

localStorage.setItem('productList', JSON.stringify(products));
let totalprice = 0;
let itemcount = 0;
let itemcountContainer = document.getElementById("itemNo");
let totalpriceCont = document.getElementById("merchandiseTotal")
function addToCart(item) {
    let products = JSON.parse(localStorage.getItem('productList'));
    let elem = products[item];
    let cartItems = localStorage.getItem("cartList");
    if (cartItems == null) {
        cartItems = {};
    } else {
        cartItems = JSON.parse(cartItems);
    }
    elem.quantity = 1;
    if (cartItems[item]) {
        cartItems[item].quantity++;
    } else {
        cartItems[item] = elem;
    }
    localStorage.setItem("cartList", JSON.stringify(cartItems));
    document.location.reload();
}

let cart = document.getElementById("cart");
let cartitems = JSON.parse(localStorage.getItem("cartList"));

if (cartitems != null) {
    for (key in cartitems) {
        let parentdiv = document.createElement("div")
        let image = document.createElement("img");
        let brand = document.createElement("h4")
        let desc = document.createElement("p")
        let quantity = document.createElement("p")
        let price = document.createElement("h4")
        image.src = cartitems[key].image;
        brand.innerHTML = cartitems[key].brand;
        desc.innerHTML = cartitems[key].desc;
        price.innerHTML = `$${cartitems[key].price}`
        totalprice += cartitems[key].price * cartitems[key].quantity;
        itemcount += cartitems[key].quantity;
        quantity.innerHTML = cartitems[key].quantity;
        let imagediv = document.createElement("div");
        let infodiv = document.createElement("div")
        let quantitydiv = document.createElement("div")
        let pricediv = document.createElement("div");
        let removebutton = document.createElement("button");
        removebutton.innerHTML = `<button onclick="removeFromCart('${key}')">REMOVE</button>`
        imagediv.append(image);
        infodiv.append(brand, desc)
        quantitydiv.append(quantity)
        pricediv.append(price, removebutton);
        parentdiv.append(imagediv, infodiv, quantitydiv, pricediv);
        cart.append(parentdiv);
        totalpriceCont.innerHTML = `$${totalprice}`;
        itemcountContainer.innerHTML = `Items in basket (${itemcount})`
    }
}

function removeFromCart(item) {
    // totalprice -= cartitems[item].price;
    // totalpriceCont.innerHTML = `$${totalprice}`;
    delete cartitems[item];
    localStorage.setItem("cartList", JSON.stringify(cartitems));
    document.location.reload()
}