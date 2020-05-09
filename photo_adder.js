function alo () {
    var ne = document.createElement('img');
    var con = document.getElementById('cat');
    ne.id = 'remov'
    ne.src = "https://media.tenor.com/images/c50ca435dffdb837914e7cb32c1e7edf/tenor.gif";
    ne.alt = "amdmak"
    con.appendChild(ne)
}
function remo() {
    document.getElementById('remov').remove();
}