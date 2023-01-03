const tagsEl = document.getElementById('tags');
const taxtarea = document.getElementById('textarea');


taxtarea.focus()



taxtarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)


    if (e.key === 'Enter') {

        setTimeout(() => {
            e.target.value = '';
        })

        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !==
        '').map(tag => tag.trim())

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl)
    });
}


function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        hightlightTag(randomTag)

        setTimeout(() => {
            unHightlighttag(randomTag);
        }, 100)

    }, 100);


    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag()

            hightlightTag(randomTag);

        }, 100)
    }, 100 * times)



}


function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]

}


function hightlightTag(tag) {
    tag.classList.add('highlight');
}


function unHightlighttag(tag) {
    tag.classList.remove('highlight');
}