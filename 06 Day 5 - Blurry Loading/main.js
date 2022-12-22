const loadText = document.querySelector('.loading-text');
const bG = document.querySelector('.bg'); // pobieranie przyciskow 

let load = 0; // zmienna licznik load ustaiwiona od zera 

let int = setInterval(blurring, 30); // na zmienna int jest przypisany interval funkcji , druga wlasciwosc to ms


//Gdy odpalimy nasz skrypt, wykonuje się on natychmiast - linia po linii.
//W JavaScript istnieją też asynchroniczne funkcje, które pozwalają odpalić nasz kod z opóźnieniem czasowym, lub pozwalają odpalać taki kod //cyklicznie co jakiś czas.

function blurring() { // funckja ładująca blur 
    load++; // licznik ++

    if (load > 99) { // jeżeli load dojdzie do 100 
        clearInterval(int); // wyczysci interwal int

    }

    loadText.innerText = `${load}%`; // wczytuje text w diva
    loadText.style.opacity = scale(load, 0, 100, 1, 0); // zmienna stylów diva
    bG.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // zmienna stylów diva


}



//JavaScript / jQuery - mapuj zakres liczb na inny zakres liczb
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}





//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers