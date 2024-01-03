//Hitung Luas
function hitungLuas(){
    let panjang = document.getElementById("panjang").value;
    let tinggi = document.getElementById("tinggi").value;
    const luas =  (1/2 * parseFloat(panjang) ) * (parseFloat(tinggi))
    if(!isNaN(luas)){
        document.getElementById("luas").innerHTML = (`Luas segitiga kamu adalah ${luas} cm²`);
    } else {
        document.getElementById("luas").innerHTML = ("Input Kosong")
    }
    const hasilLuas = document.getElementById('luas');
    hasilLuas.classList.add('hasil')
}

//Hitung Keliling
function hitungKeliling(){
    let sisi1 = document.getElementById('sisi1').value;
    let sisi2 = document.getElementById('sisi2').value;
    let sisi3 = document.getElementById('sisi3').value;
    const sum = (parseFloat(sisi1) + parseFloat(sisi2)) + parseFloat(sisi3);
    if(!isNaN(sum)){
        document.getElementById('keliling').innerHTML = (`Keliling segitiga adalah ${sum} cm`)
    } else {
        document.getElementById('keliling').innerHTML = ("Input Kosong")
    }
    const hasilKeliling = document.getElementById('keliling');
    hasilKeliling.classList.add('hasil');
}

//Refresh
function refresh(){
    window.location.reload();
}
