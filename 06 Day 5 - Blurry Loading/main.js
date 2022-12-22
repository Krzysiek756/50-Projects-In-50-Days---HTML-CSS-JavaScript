const loadText = document.querySelector('.loading-text');
const bG = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);

    }



    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bG.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;




    console.log(load)
    console.log(loadText.style.opacity)
    console.log(bG.style.filter)
}


const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}



//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers