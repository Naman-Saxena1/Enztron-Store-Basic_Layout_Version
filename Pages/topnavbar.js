let topBarBrandName = document.querySelector("#top-bar-brand-name")
let showMyWishlistBtn = document.querySelector("#my-wishlist-btn")
let showMyCartBtn = document.querySelector("#my-cart-btn")

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