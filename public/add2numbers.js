function kalkulator(operator) {
    let angka = document.querySelectorAll('input'); //
    let bil1 = parseInt(angka[0].value); // Bilangan pertama
    let bil2 = parseInt(angka[1].value); // Bilangan pertama

    switch (operator.value) {
        case '+':
            angka[2].value = bil1 + bil2;
            break;
        case '-':
            angka[2].value = bil1 - bil2;
            break;
        case '/':
            if (bil2 === 0) {
                alert('Pembagian dengan 0 tidak terdefinis!');
            } else {
                angka[2].value = bil1 / bil2;
            }
            break;
        case 'X':
            angka[2].value = bil1 * bil2;
            break;
        default:
            break;
    }
}

let button = document.querySelector('button');
button.addEventListener('click', function () {
    let operator = document.querySelector('#operator');
    kalkulator(operator);
});
