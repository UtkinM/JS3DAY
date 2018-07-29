let chooseBtn = document.getElementById('choose'),
    receiveBtn  = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0], // если элемент один на странице, все равно нужно указать номер
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelector('.contactform_phone'),
    mainInput = document.querySelectorAll('.contactfrom_mail')[0],
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close'),
    text = document.getElementsByName('message')[0];

function hover() {
    heading.textContent = 'Действительно все'
    heading.style.cursor = 'pointer'
}

function out() {
    heading.textContent = 'Все включено!'
}

// heading.onmouseenter = hover;
heading.addEventListener('mouseenter', hover);
heading.addEventListener('mouseleave', out);

receiveBtn.addEventListener('click', function() {
    modal.style.display = 'block'
});

close.addEventListener('click', function() {
    modal.style.display = 'none'
});

nameInput.addEventListener('input', function() {
    text.value = 'Меня зовут ' + nameInput.value + '. И я хочу стросить:';
    if (nameInput.value == '') {
        text.value = ''
    }
})