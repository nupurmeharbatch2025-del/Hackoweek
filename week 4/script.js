const products = [

{ id:1,name:"Hydrating Face Cream",brand:"Mamaearth",price:499,category:"Skincare",image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348" },

{ id:2,name:"Vitamin C Serum",brand:"Minimalist",price:699,category:"Skincare",image:"https://images.unsplash.com/photo-1601049676869-702ea24cfd58" },

{ id:3,name:"Matte Lipstick",brand:"Lakme",price:350,category:"Makeup",image:"https://images.unsplash.com/photo-1612817288484-6f916006741a" },

{ id:4,name:"Liquid Foundation",brand:"Maybelline",price:799,category:"Makeup",image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },

{ id:5,name:"Hair Repair Oil",brand:"Mamaearth",price:399,category:"Haircare",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be" },

{ id:6,name:"Hair Conditioner",brand:"Plum",price:450,category:"Haircare",image:"https://images.unsplash.com/photo-1598662957563-ee4965d4d72c" },

{ id:7,name:"Rose Perfume",brand:"Nykaa",price:999,category:"Fragrance",image:"https://images.unsplash.com/photo-1541643600914-78b084683601" },

{ id:8,name:"Vanilla Body Mist",brand:"Nykaa",price:699,category:"Fragrance",image:"https://images.unsplash.com/photo-1592945403244-b3fbafd7f539" },

{ id:9,name:"Organic Face Wash",brand:"Mamaearth",price:299,category:"Skincare",image:"https://images.unsplash.com/photo-1556228724-4d99c5e5d7f8" },

{ id:10,name:"Aloe Vera Gel",brand:"Plum",price:250,category:"Skincare",image:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c" },

{ id:11,name:"Blush Palette",brand:"Lakme",price:599,category:"Makeup",image:"https://images.unsplash.com/photo-1583241800698-5a7e4d9b0cce" },

{ id:12,name:"Eye Shadow Kit",brand:"Maybelline",price:899,category:"Makeup",image:"https://images.unsplash.com/photo-1512496015851-a90fb38ba796" },

{ id:13,name:"Body Scrub",brand:"Plum",price:499,category:"Bath & Body",image:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6" },

{ id:14,name:"Shower Gel",brand:"Mamaearth",price:399,category:"Bath & Body",image:"https://images.unsplash.com/photo-1556228578-dd6cfd11e10d" },

{ id:15,name:"Beauty Blender",brand:"Nykaa",price:199,category:"Beauty Tools",image:"https://images.unsplash.com/photo-1591375275624-cf2f6e08b0f3" },

{ id:16,name:"Makeup Brush Set",brand:"Nykaa",price:999,category:"Beauty Tools",image:"https://images.unsplash.com/photo-1512496015851-a90fb38ba796" },

{ id:17,name:"Charcoal Face Mask",brand:"Mamaearth",price:349,category:"Skincare",image:"https://images.unsplash.com/photo-1616394584738-fc6e612e71b9" },

{ id:18,name:"Keratin Shampoo",brand:"Plum",price:550,category:"Haircare",image:"https://images.unsplash.com/photo-1585238342024-78d387f4a707" },

{ id:19,name:"Luxury Perfume",brand:"Nykaa",price:1499,category:"Fragrance",image:"https://images.unsplash.com/photo-1594035910387-fea47794261f" },

{ id:20,name:"Organic Lip Balm",brand:"Mamaearth",price:199,category:"Makeup",image:"https://images.unsplash.com/photo-1608248597279-f99d160bfcbc" }

];

let cart=[];
let wishlist=[];
let currentProduct=null;

const grid=document.getElementById("productGrid");

function displayProducts(list){

grid.innerHTML="";

list.forEach(p=>{

const card=document.createElement("div");

card.className="product";

card.innerHTML=`

<img src="${p.image}">
<h4>${p.name}</h4>
<p>${p.brand}</p>
<p class="price">₹${p.price}</p>

<button onclick="addToCart(${p.id})">Add to Cart</button>
<button onclick="addWishlist(${p.id})">❤️</button>
<button onclick="quickView(${p.id})">Quick View</button>

`;

grid.appendChild(card);

});

}

displayProducts(products);

function addToCart(id){

const item=products.find(p=>p.id===id);

cart.push(item);

document.getElementById("cartCount").innerText=cart.length;

showToast("Item added to cart");

updateCart();

}

function addWishlist(id){

wishlist.push(id);

document.getElementById("wishlistCount").innerText=wishlist.length;

showToast("Added to wishlist");

}

function updateCart(){

const cartItems=document.getElementById("cartItems");

cartItems.innerHTML="";

let total=0;

cart.forEach(item=>{

total+=item.price;

cartItems.innerHTML+=`<p>${item.name} - ₹${item.price}</p>`;

});

document.getElementById("totalPrice").innerText=total;

}

function toggleCart(){

document.getElementById("cartSidebar").classList.toggle("open");

}

function quickView(id){

const item=products.find(p=>p.id===id);

currentProduct=item;

document.getElementById("modal").style.display="flex";

document.getElementById("modalImg").src=item.image;

document.getElementById("modalName").innerText=item.name;

document.getElementById("modalPrice").innerText="₹"+item.price;

}

document.getElementById("modalCartBtn").onclick=()=>{

addToCart(currentProduct.id);

closeModal();

}

function closeModal(){

document.getElementById("modal").style.display="none";

}

function showToast(msg){

const toast=document.getElementById("toast");

toast.innerText=msg;

toast.style.display="block";

setTimeout(()=>{

toast.style.display="none";

},2000);

}

document.getElementById("search").addEventListener("input",e=>{

const value=e.target.value.toLowerCase();

const filtered=products.filter(p=>p.name.toLowerCase().includes(value));

displayProducts(filtered);

});

function filterCategory(cat){

const filtered=products.filter(p=>p.category===cat);

displayProducts(filtered);

}

document.getElementById("darkToggle").onclick=()=>{

document.body.classList.toggle("dark");

};