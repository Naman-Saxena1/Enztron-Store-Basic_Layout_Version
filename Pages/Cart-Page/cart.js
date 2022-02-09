const decreaseQuantityBtns = document.querySelectorAll(".cart-quantity-minus-btn")
const increaseQuantityBtns = document.querySelectorAll(".cart-quantity-plus-btn")

decreaseQuantityBtns.forEach(decreaseBtn =>{
    decreaseBtn.addEventListener('click',(event)=>{
        quantityInput = event.target.nextElementSibling;
        
        if(quantityInput.value>0)
        {
            quantityInput.value = Number(quantityInput.value) - 1;
        }    
    })
})

increaseQuantityBtns.forEach(increaseBtn =>{
    increaseBtn.addEventListener('click',(event)=>{
        quantityInput = event.target.previousElementSibling;

        quantityInput.value = Number(quantityInput.value) + 1;
    })
})