function getpilihanComputer() {
    const camp = Math.random();

        if( comp < 0.34 )return 'batu';
        if( comp >= 0.34 && comp < 0.67)return 'kertas';
        return 'gunting';
}

function getHasil(comp, player) {
    if( player == comp ) return'SERI!';
     if( player == 'batu' ) return ( comp == 'kertas' ) ? 'MENANG!' : 'KALAH!';
     if( player == 'kertas' ) return ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!';
     if( player == 'gunting' ) 
        return ( comp == 'kertas' ) ? 'KALAH' : 'MENANG!';
    
} 

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
        const gambar = ['batu', 'kertas', 'gunting'];
        let i = 0;
        const waktuMulai = new Date().getTime();
        setInterval(function() {
            if( new Date().getTime() - waktuMulai > 1000 ){
                clearInterval;
            }
            imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
            if( i == gambar.length )  i = 0;
        }, 100) 
    }



const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComputer = getpilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function() {
        const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
        const info = document.querySelector('info');
        info.innerHTML = hasil;
    }, 1000);



    })

})

const pBatu = document.querySelector('.batu');
pBatu.addEventListener('click', function() {
    const pilihanComputer = getpilihanComputer();
    const pilihanPlayer = pBatu.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    const info = document.querySelector('info');
    info.innerHTML = hasil;

})

const pKertas = document.querySelector('.kertas');
pBatu.addEventListener('click', function() {
    const pilihanComputer = getpilihanComputer();
    const pilihanPlayer = pKertas.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    const info = document.querySelector('info');
    info.innerHTML = hasil;

})

const pGunting = document.querySelector('.gunting');
pBatu.addEventListener('click', function() {
    const pilihanComputer = getpilihanComputer();
    const pilihanPlayer = pGunting.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    const info = document.querySelector('info');
    info.innerHTML = hasil;

})