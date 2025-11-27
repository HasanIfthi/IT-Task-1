fetch("components/nav/nav.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("nav").innerHTML = html;
    })

fetch("components/home/home.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("home").innerHTML = html;
    })

function todo() {

    const homepage = document.getElementById('home');
    if (homepage) homepage.remove();
    fetch("components/todo/todo.html")

        .then(response => response.text())
        .then(html => {
            document.getElementById("root").innerHTML = html;
        })
}

function view() {

    const homepage = document.getElementById('home');
    if (homepage) homepage.remove();
    fetch("components/view/view.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("root").innerHTML = html;
        })
}

function logoClick() {
    const homepage = document.getElementById('home');
    if (homepage) homepage.remove();
    fetch("components/home/home.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("root").innerHTML = html;

        })
}