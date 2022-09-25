// text file data
let textButton = document.querrySelector('#text-btn');
textButton.addEventListener('click', function () {

    // create an ajax Request
    let xhr = new XMLHttpRequest();

    // prepare the request
    xhr.open('GET', 'message.text', true);

    // send request the request
    xhr.send();

    // process the request
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            displayTextData(data);
        }
    }
});

// display TextData
let displayTextData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querySelector('#text-card').innerHTML = htmlTemplate


}