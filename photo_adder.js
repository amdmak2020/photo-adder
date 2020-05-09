function alo () {
    var ne = document.createElement('img');
    var con = document.getElementById('cat');
    ne.id = 'remov'
    ne.src = "E:/amdmak/amdmak/66348914_2206782002877566_3898477128076754944_n.jpg";
    con.appendChild(ne)
}
function remo() {
    document.getElementById('remov').remove();
}