const priceInput = document.querySelectorAll(".price-input input");
const rangeInput = document.querySelectorAll(".range-input input");
const progress   = document.querySelector(".slider .progress");

let priceGap = 1000;

priceInput.forEach(input=>{

    input.addEventListener("input",e=>{
        let minVal = Number(priceInput[0].value),
            maxVal = Number(priceInput[1].value);
        
        if(maxVal - minVal >= priceGap && maxVal <= 10000)
        {
            if(e.target.className === "input-min")
            {
                //If active input is at min input
                priceInput[0].value = minVal;
                rangeInput[0].value = minVal;
            }
            else
            {
                priceInput[1].value = maxVal;
                rangeInput[1].value = maxVal;
            }
        }
    })
})

rangeInput.forEach(input=>{

    input.addEventListener("input",e=>{
        let minVal = Number(rangeInput[0].value),
            maxVal = Number(rangeInput[1].value);
        
        if(maxVal - minVal < priceGap)
        {
            if(e.target.className === "range-min")
            {
                //If Slider is at min value
                rangeInput[0].value = maxVal - priceGap;
            }
            else
            {
                rangeInput[1].value = minVal + priceGap;
            }
        }
        else
        {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left  =       ( (minVal / rangeInput[0].max) * 100 ) + "%";
            progress.style.right = 100 - ( (maxVal / rangeInput[1].max) * 100 ) + "%";
        }
    })
})