const hamMenuBtn        = document.querySelector("#top-bar-ham-menu-btn")
const topBarBrandName   = document.querySelector("#top-bar-brand-name")
const navbarLoginBtn    = document.querySelector("#navbar-login-btn")
const showMyWishlistBtn = document.querySelector("#my-wishlist-btn")
const showMyCartBtn     = document.querySelector("#my-cart-btn")

topBarBrandName.addEventListener('click',()=>{
    window.location="/"
})

showMyWishlistBtn.addEventListener('click',()=>{
    if(window.location.pathname==="/" || window.location.pathname==="/index.html")
    {
        window.location="./Pages/Wishlist-Page/wishlist.html"
    }
    else
    {
        window.location="../Wishlist-Page/wishlist.html"
    }
})

showMyCartBtn.addEventListener('click',()=>{
    if(window.location.pathname==="/" || window.location.pathname==="/index.html")
    {
        window.location="./Pages/Cart-Page/cart.html"
    }
    else
    {
        window.location="../Cart-Page/cart.html"
    }
})

navbarLoginBtn.addEventListener('click',()=>{
    if(window.location.pathname==="/" || window.location.pathname==="/index.html")
    {
        window.location="./Pages/Login-Page/login.html"
    }
    else
    {
        window.location="../Login-Page/login.html"
    }
})

hamMenuBtn.addEventListener('click',()=>{
    if(window.location.pathname==="/" || window.location.pathname==="/index.html")
    {
        window.location="./Pages/Product-Page/product.html"
    }
    else
    {
        window.location="../Product-Page/product.html"
    }
})