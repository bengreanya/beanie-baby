export function renderBabies(baby) {
    const li = document.createElement('li');
    li.classList.add('card');

    const img = document.createElement('img');
    img.src = baby.image;
    img.alt = baby.title;

    const content = document.createElement('div');
    content.classList.add('content');

    const h2 = document.createElement('h2');
    h2.textContent = baby.title;

    const attributes = document.createElement('p');
    attributes.classList.add('attributes');

    const animal = document.createElement('span');
    animal.textContent = baby.animal;

    const subtheme = document.createElement('span');
    subtheme.textContent = baby.subtheme;

    const astroSign = document.createElement('span');
    astroSign.textContent = baby.astroSign;

    attributes.append(animal, subtheme, astroSign);

    const released = document.createElement('p');
    released.classList.add('released');
    released.textContent = `Released ${baby.releaseYear}`;

    content.append(h2, attributes, released);

    li.append(img, content);

    return li;
}

export function renderAstro(astro) {
    const option = document.createElement('option');
    option.value = astro.name;
    option.textContent = astro.name;
    return option;
}
