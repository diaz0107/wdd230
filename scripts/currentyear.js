function year() {
    let d = new Date();
    let b = d.getFullYear();
    document.querySelector("#currentyear").innerHTML = b;
}