
const data = [
    {
        id: 1,
        title: "Red printed T-shirts",
        ratings: "3.9",
        image: "images/product-1.jpg",
        price: "₹15,028",
        buy: "View More",
        cart: "Add to cart",
        href: "red-prined.html",
        height: "200px",
        width: "100%",
    },
    {
        id: 2,
        title: "Black coloured Shoes",
        ratings: "4.7",
        image: "images/product-2.jpg",
        price: "₹7,028",
        buy: "View More",
        cart: "Add to cart",
        href: "hrx.html",
        height: "180px",
        width: "100%",
    },

    {
        id: 3,
        title: "Fully fitted lower",
        ratings: "4.7",
        image: "images/product-3.jpg",
        price: "₹1,998",
        buy: "View More",
        cart: "Add to cart",
        href: "lower.html",
        height: "200px",
        width: "100%"
    },
    {
        id: 4,
        title: "Fully fitted t-shirt of Blue",
        ratings: "4.7",
        image: "images/product-4.jpg",
        price: "₹899",
        buy: "View More",
        cart: "Add to cart",
        href: "blue-tshirt.html",
        height: "200px",
        width: "100%"
    }
];
// Latest Product 
const data1 = [
    {
        id: 5,
        title: "White coloured Shoes",
        ratings: "3.9",
        image: "images/product-5.jpg",
        price: "₹15,028",
        buy: "Buy Now ",
        cart: "Add to cart",
        href: "5.html",
        height: "200px",
        width: "100%"
    },
    {
        id: 6,
        title: "Black coloured T-shirt",
        ratings: "4.7",
        image: "images/product-6.jpg",
        price: "₹7,028",
        buy: "Buy Now ",
        cart: "Add to cart",
        href: "6.html",
        height: "180px",
        width: "100%"
    },

    {
        id: 7,
        title: "Fully fitted Shocks",
        ratings: "4.7",
        image: "images/product-7.jpg",
        price: "₹1,998",
        buy: "Buy Now ",
        cart: "Add to cart",
        href: "7.html",
        height: "200px",
        width: "100%"
    },
    {
        id: 8,
        title: "Black coloured chain Watch",
        ratings: "4.7",
        image: "images/product-8.jpg",
        price: "₹899",
        buy: "Buy Now ",
        cart: "Add to cart",
        href: "8.html",
        height: "200px",
        width: "100%"
    }
];
// Latest Product 
const data2 = [
    {
        id: 9,
        title: "Black roadster watch",
        ratings: "3.9",
        image: "images/product-9.jpg",
        price: "₹15,028",
        buy: "Buy Now ",
        cart: "Add to cart",
        href: "9.html",
        height: "200px",
        width: "100%"
    },
    {
        id: 10,
        title: "Black and Red coloured Shoes",
        ratings: "4.7",
        image: "images/product-10.jpg",
        price: "₹7,028",
        buy: "Buy Now ",
        cart: "Add to cart",
        href: "10.html",
        height: "180px",
        width: "100%"
    },

    {
        id: 11,
        title: "Loafer Shoes",
        ratings: "4.7",
        image: "images/product-11.jpg",
        price: "₹1,998",
        buy: "Buy Now ",
        cart: "Add to cart",
        href: "11.html",
        height: "200px",
        width: "100%"
    },
    {
        id: 12,
        title: "Fully fitted Lower",
        ratings: "4.7",
        image: "images/product-12.jpg",
        price: "₹899",
        buy: "Buy Now ",
        cart: "Add to cart",
        href: "12.html",
        height: "200px",
        width: "100%"
    }
];

//     data.forEach((element , i) => {
//     const row1 = document.querySelector(".row1");

//     const card = document.createElement('div');
//     card.classList = 'card';

//     const movieCard =` <div class="col-4" >
//     <a href="${data[i].href}"><img src=${data[i].image} ></a>
//     <h4>>${data[i].title}</h4>
//     <p>${data[i].price}</p>
//     <button href="${data[i].href}" onclick="ViewDetails(${data[i].id})">View More</button>
// </div>`;

//     card.innerHTML += movieCard;
//     row1.appendChild(card);
//     });
//     // Latest product 
//     data1.forEach((element , i) => {
//     const row2 = document.querySelector(".row2");

//     const card = document.createElement('div');
//     card.classList = 'card';

//     const movieCard =` <div class="col-4" >
//     <a href=${data1[i].href}><img src=${data1[i].image} ></a>
//     <div class="ratings">
//         <i class="fa fa-star" aria-hidden="true"></i>
//         <i class="fa fa-star" aria-hidden="true"></i>
//         <i class="fa fa-star" aria-hidden="true"></i>
//         <i class="fa fa-star-o" aria-hidden="true"></i>
//         <i class="fa fa-star-o" aria-hidden="true"></i>
//     </div>
//     <h4>>${data1[i].title}</h4>
//     <p>${data1[i].price}</p>
// </div>`;

//     card.innerHTML += movieCard;
//     row2.appendChild(card);
//     });
//     data2.forEach((element , i) => {
//     const row3 = document.querySelector(".row3");

//     const card = document.createElement('div');
//     card.classList = 'card';

//     const movieCard =` <div class="col-4" >
//     <a href=${data2[i].href}><img src=${data2[i].image} ></a>
//     <div class="ratings">
//         <i class="fa fa-star" aria-hidden="true"></i>
//         <i class="fa fa-star" aria-hidden="true"></i>
//         <i class="fa fa-star" aria-hidden="true"></i>
//         <i class="fa fa-star-o" aria-hidden="true"></i>
//         <i class="fa fa-star-o" aria-hidden="true"></i>
//     </div>
//     <h4>>${data2[i].title}</h4>
//     <p>${data2[i].price}</p>
// </div>`;

//     card.innerHTML += movieCard;
//     row3.appendChild(card);
//     });

// products


const row1 = document.getElementById("row1");
console.log("===", row1);
data.map((project, index) => {
    row1.innerHTML += `<div class="card">
    <div class="col-4" >
    <a href="#"><img src=${project.image} ></a>
    <h4>>${project.title}</h4>
    <p>${project.price}</p>
    <button href="./product.html" onclick="ViewDetails(${project.id})">View More</button>
</div>
</div>`
})



const ViewDetails = (id) => {
    console.log(id, "id");
    var x = localStorage.getItem("productdetails");
    let product = data.find(item => item.id == id);
    if(id === id){
    if (x){
        let storage =  JSON.parse(x);
        storage.push(product);
        localStorage.setItem("productdetails", JSON.stringify(storage));
    } else {
        newArr = [];
        newArr.push(product)
        localStorage.setItem("productdetails", JSON.stringify(newArr));
    }
};
};


// latest products 
const row2 = document.getElementById("row2");
console.log("====", row2);
data1.map((item, index) => {
    row2.innerHTML += `<div class="col-4" >
                            <a href="${item.href}"><img src=${item.image} ></a>
                            <h4>>${item.title}</h4>
                            <p>${item.price}</p>
                            <button href="product.html" onclick="ViewDetail(${item.id})">View More</button>
                        </div>`
})

// const ViewDetail = (id) => {
//     console.log(id, "id");
//     arr = [];
//     data1.map((item) => {
//         console.log(item.id, "id");
//         if (item.id == id) {
//             arr.push(item);
//             localStorage.setItem("productdetails", JSON.stringify(item));
//         }
//     });
// };

const ViewDetail = async (id) => {
    console.log(id, "id");
    var x = localStorage.getItem("productdetails");
    let product = data1.find(item => item.id == id)
    if (x) {
        let storage = await JSON.parse(x)
        storage.push(product);
        localStorage.setItem("productdetails", JSON.stringify(storage));
    } else {
        newArr = [];
        newArr.push(product)
        localStorage.setItem("productdetails", JSON.stringify(newArr));
    }
};

// new products 

const row3 = document.getElementById("row3");
console.log("====", row3);

data2.map((items, index) => {
    row3.innerHTML += `<div class="col-4" >
                        <a href="${items.href}">
                        <img src=${items.image} ></a>
                        <h4>>${items.title}</h4>
                        <p>${items.price}</p>
                        <button href="${items.href}" onclick="ViewDetailss(${items.id})">View More</button>
                     </div>`
})

// const ViewDetailss = (id) => {
//     console.log(id, "id");
//     arr = [];
//     data2.map((items) => {
//         console.log(items.id, "id");
//         if (items.id == id) {
//             arr.push(items);
//             localStorage.setItem("productdetails", JSON.stringify(items));
//         }
//     });
// };
const ViewDetailss = async (id) => {
    console.log(id, "id");
    var x = localStorage.getItem("productdetails");
    let product = data2.find(item => item.id == id)
    if (x) {
        let storage = await JSON.parse(x)
        storage.push(product);
        localStorage.setItem("productdetails", JSON.stringify(storage));
    } else {
        newArr = [];
        newArr.push(product)
        localStorage.setItem("productdetails", JSON.stringify(newArr));
    }
};


const cartBox = document.querySelector(".cart1");
console.log("--cart-", cartBox);
const cartBoxTable = cartBox.querySelector(".cart-content");
let tableData = "";
// tableData += ` <tr>
// <th>S No.</th>
// <th>Item name</th>
// <th>Item No.</th>
// <th>Item Price</th>
// <th></th>
// </tr>`;
let newData = localStorage.getItem("productdetails");
let verifyData = JSON.parse(newData);

// console.log("verified ", typeof(newData));
console.log("====verigy", verifyData);
if (!newData ) {
    tableData += ` <tr ><td colspan="5">No items found</td></tr>`
} else {
    verifyData.map(data5 => {
        tableData += `<div class="cart-display">
        <div class="SNo">${data5.id}</div>
        <img src="${data5.image}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${data5.title}</div>
            <div class="cart-price">${data5.price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <!-- ---Remove Cart----->
        <i class='bx bxs-trash-alt cart-remove' >
        </i></div>`
        // tableData += `<tr><th>${data5.id}</th><th>${data5.title}</th><th>${data5.id}</th><th>${data5.price}</th>
        // <th><a href="#">Delete</a></th></tr>`
    });
}
cartBoxTable.innerHTML = tableData;











//-------------------------- For Single Product data ------------------------
// const row4 = document.querySelector(".row4");
// console.log("--product-", row4);
// const productBoxTable = productBox.querySelector("product-detail");
// let productData = "";
// // tableData += ` <tr>
// // <th>S No.</th>
// // <th>Item name</th>
// // <th>Item No.</th>
// // <th>Item Price</th>
// // <th></th>
// // </tr>`;
// let newProductData = localStorage.getItem("productdetails");
//  let verifyProductData = JSON.parse(newProductData);
//  console.log("====verigy",verifyProductData);
// if (verifyProductData === null) {
//     productData += ` <tr ><td colspan="5">No items found</td></tr>`
// } else {
//     Object.values(verifyProductData).map(data6 => {
//         productData += `<div class="col-2"><img src="${data6.image}" width="100%" id="ProductImg">
//         </div>
//             <div class="col-2">
//             <h2>${data6.title}</h2>
//             <p>${data6.ratings}</p>
//             <h4>${data6.price}</h4>
//             <select >
//                 <option >Select Size</option>
//                 <option >XXL</option>
//                 <option >XL</option>
//                 <option >Large</option>
//                 <option >Medium</option>
//                 <option >Small</option>
//             </select>
//             <input type="number" value="1">
//             <a onclick="findData" class="btn">Add to Cart</a>
//             <h3>Product Details</h3>
//             <p>Give your summer a style with the HRX men's Active T-shirt</p>
//     </div>`
//         // tableData += `<tr><th>${data5.id}</th><th>${data5.title}</th><th>${data5.id}</th><th>${data5.price}</th>
//         // <th><a href="#">Delete</a></th></tr>`
//     });
// }
// productBoxTable.innerHTML = productData;





// function removeCartItem(event){
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.remove();
//     updatetotal();
// }
// cartBoxTable.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
// console.log(tableData);





















