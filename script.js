function szamolasok() {
    let jegyek = parseInt(document.getElementById("jegyek").value)
    let ossz = jegyek * 1500

    if (jegyek > 30 || 1 > jegyek) {
        ossz = 'Hiba (Jegyek száma 1-30)'
    }

    document.getElementById("osszegki").innerHTML = `Fizetendő összeg: 
    ${ossz}`
}