const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.progress__circle'); // pobieranie elementów 


let currentActive = 1; // ustawienie zmiennej licznika na 1 

next.addEventListener('click', () => { // funkcja strzałkowa przycisku next
    currentActive++; // poprzez nacisniecie przycisku next licznik obecnej aktywnosci +1

    if (currentActive > circles.length) { // jeśli licznik aktywnosci jest większy długości tablicy kółek to 

        currentActive = circles.length; // to lucznik aktywnosci ejst równy długości tablicy 

    }

    update(); // wywołanie funkcji update za każdym razem gdy przycisk zostaje klikniety

})

prev.addEventListener('click', () => { // funckja strzałkowa przycisku prev 
    currentActive--; // poprzez nacisniecie przycisku prev licznik obecnej aktywnosci -1

    if (currentActive < 1) { // jeśl licznik aktywności jest mniejszy od 1 ( czyli pierwszemeu kółku) to 

        currentActive = 1; // to licznik jest równy 1 

    }

    update(); // wywołanie funkcji update za każdym razem gdy przycisk zostaje klikniety
})



function update() { // implementacja funkcji update która aktualizuje aktywne klasy 

    circles.forEach((circle, id) => { // pętla forEach sprawdza wszystkie elementy pseudo tablicy kółek , element i id elementu
        if (id < currentActive) { // jeżeli id  jest mniejsze od licznika to
            circle.classList.add('active'); // dodaje klase actic elementowi
        } else { // w przeciwnym wypadku 
            circle.classList.remove('active'); // klasa active zostaje usunięta 
        }
    })


    const actives = document.querySelectorAll('.active'); // pobienranie elementu activ w funkcji update 

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'; // klasie html progres zostaje 
    // zmienienona długość paska postępów / długosć tablicy aktywnej -1 / długosc tablicy kółka -1 pomnożona przez 100 żeby wyszły procenty


    if (currentActive === 1) { // sprawdzanie jeżeli  licznik jest równy 1 to

        prev.disabled = true; // przycisk wstecz dostaje wyłączony
    } else if (currentActive === circles.length) { // a również jeżeli przycisk  acktywny jest równy długości tablicy 

        next.disabled = true; // przycsik next zostaje wylaczony 
    } else { // w przeciwnym wyapdku 

        prev.disabled = false; // klawisze zostaja włączone
        next.disabled = false;
    }



}