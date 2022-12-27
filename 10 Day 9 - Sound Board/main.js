const sounds = ["arcade-retro", "carton-toy", "dog", "sick-man", "applaus", "telephone"];


sounds.forEach(sound => {

    const btn = document.createElement('buttons');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {

        stopSongs();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);
})


function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}