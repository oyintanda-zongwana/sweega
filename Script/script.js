//Oyintanda Zongwana


document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("btn");
    
    btn.addEventListener('click', () => {
        let femaleQty = parseFloat(document.getElementById("femaleQty").value) || 0;
        let maleQty = parseFloat(document.getElementById("maleQty").value) || 0;
        let femalePrice = 150.95;
        let malePrice = 180.95;

        let femaleTotal = document.getElementById("femaleTotal");
        let maleTotal = document.getElementById("maleTotal");
        let orderTotal = document.getElementById("totalPrice");

        femaleTotal.innerText = 'R' + (femaleQty * femalePrice).toFixed(2);
        maleTotal.innerText = 'R' + (maleQty * malePrice).toFixed(2);
        orderTotal.innerText = 'R' + ((femaleQty * femalePrice) + (maleQty * malePrice)).toFixed(2);
    });
});

let femaleResult = () => {
    femaleTotal.innerText = 'R' + parseFloat(femaleQty * femalePrice).toFixed(2);
}

femaleQty.addEventListener('input', femaleResult)
// maleQty.addEventListener('input', () => {
//     maleTotal.innerText = 'R' + (maleQty * malePrice).toFixed(2);
// })