let carts = document.querySelectorAll('.add-to-cart');


let products = [
    {
        name: 'Oxdog stick',
        tag: 'Oxdogstick-2023',
        price: 328,
        incart: 0,
        img_src: 'floorballstick1.jpg'
    },
    {
        name: 'Unihoc stick',
        tag: 'Unihocstick-2023',
        price: 285,
        incart: 0,
        img_src:'floorballstick3a.jpg'
    },
    {
        name: 'Zone stick',
        tag: 'Zonestick-hyperlight',
        price: 134,
        incart: 0,
        img_src:'floorballstick5a.jpg'
    },
    {
        name: 'Fatpipe stick',
        tag: 'Fatpipe-stick',
        price: 228,
        incart: 0,
        img_src:'floorballstick7a.jpg'
    },
    {
        name: 'Exel stick',
        tag: 'Exel-stick',
        price: 241,
        incart: 0,
        img_src:'floorballstick2b.jpg'
    },
    {
        name: 'Green grip',
        tag: 'green-grip',
        price: 16,
        incart: 0,
        img_src:'grip1a.jpg'
    },
    {
        name: 'black-white ball',
        tag: 'black-white-ball',
        price: 2,
        incart: 0,
        img_src:'ball1a.jpg'
    },
    {
        name: 'blue ball',
        tag: 'blue-ball',
        price: 2,
        incart: 0,
        img_src:'ball3.jpg'
    },
    {
        name: 'red-white ball',
        tag: 'red-white-ball',
        price: 2,
        incart: 0,
        img_src:'ball4.jpg'
    },
    {
        name: 'purple ball',
        tag: 'purple-ball',
        price: 2,
        incart: 0,
        img_src:'ball5.jpg'
    },
    {
        name: 'Court Shoe',
        tag: 'Blue-white',
        price: 67,
        incart: 0,
        img_src:'courtshoe1.jpg'
    },
    {
        name: 'pink blade',
        tag: 'pink-blade',
        price: 30,
        incart: 0,
        img_src: 'blade1.png'
    },
]


for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function productQuantity() {
    let productNumbers = localStorage.getItem('cartNumbers');


    if(productNumbers) {
        document.querySelector('.topnav span').textContent = productNumbers;
    }
}
function onloadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');


    if(productNumbers) {
        document.querySelector('.topnav span').textContent = productNumbers;
    }
}
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.topnav span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.topnav span').textContent = 1;
    }
    setItems(product);
   
}
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    if(cartItems != null) {
        if(cartItems[product.tag] == undefined ) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }

            product.inCart = 1;
        } else {
            cartItems[product.tag].inCart +=1;
        }
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


function totalCost(product) {
   
    let cartCost = localStorage.getItem('totalCost');
   
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }
}
function removeItem(tag) {
    let cartItems = localStorage.getItem('productsInCart');
    let cartCost = localStorage.getItem('totalCost');
    cartItems = JSON.parse(cartItems);
    delete cartItems[tag];
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        if (product.tag === tag) {
            product.inCart = 0;
            document.querySelector("." + product.tag).outerHTML = "";
            cartCost = parseInt(cartCost);
            localStorage.setItem('totalCost', cartCost - product.price);
            document.querySelector(".basketTotalContainer").innerHTML = `
                <h4 class = "basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class = "basketTotal">
                    $${localStorage.getItem('totalCost')}.00
                </h4>
            `;
            break;
        }
    }
    
    let productNumbers = localStorage.getItem('cartNumbers');
    localStorage.setItem('cartNumbers', productNumbers - 1);
    document.querySelector('.topnav span').textContent = productNumbers - 1;
} 
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product ${item.tag}">
                <ion-icon onclick="removeItem('${item.tag}');" name="close-circle-outline"></ion-icon>
                <img src=${item.img_src}></img>
                <span>${item.name}</span>
                <span>$${item.price}.00</span>
                <span>${item.inCart}</span> 
                <span>$${item.inCart * item.price}.00</span>
                
            </div>  
            
            `;
        });

        productContainer.innerHTML += `
            <div class= "basketTotalContainer">
            <h4 class = "basketTotalTitle">
                Basket Total
            </h4>
            <h4 class = "basketTotal">
                $${cartCost}.00
            </h4>
            </div>
        `


    }

}
onloadCartNumbers();
displayCart();
