let quay1lan = document.getElementById('quay1');
quay1lan.addEventListener('click',fquay1lan);

let soClick = 0;
let choquay = true;
function fquay1lan(){
    let randomViTriStop = [];
    let arrayRandom = [];
    soClick++;
    let vongquay1 = document.querySelector('.scene--carousel1 .carousel--dynamic');
    let vongquay2 = document.querySelector('.scene--carousel2 .carousel--dynamic');
    let vongquay3 = document.querySelector('.scene--carousel3 .carousel--dynamic');
    let vongquaydung = 360/7;
    let hieuUngVongQuay = 3240 *soClick;
    for(let i=0; i<3; i++){
        arrayRandom[i] = Math.floor(Math.random() * 70) + 1;
        randomViTriStop =  arrayRandom;
    }
    let ViTriStop1 = Math.ceil(randomViTriStop[0]/10);
    let quayso1 = ViTriStop1 *vongquaydung + hieuUngVongQuay - vongquaydung;
    vongquay1.style.transform = `translateZ(-104px) rotateX(${-quayso1}deg)`;

    let ViTriStop2 = Math.ceil(randomViTriStop[1]/10);
    let quayso2 = ViTriStop2 *vongquaydung + hieuUngVongQuay - vongquaydung;
    vongquay2.style.transform = `translateZ(-104px) rotateX(${-quayso2}deg)`;

    let ViTriStop3 = Math.ceil(randomViTriStop[2]/10);
    let quayso3 = ViTriStop3 *vongquaydung + hieuUngVongQuay - vongquaydung;
    vongquay3.style.transform = `translateZ(-104px) rotateX(${-quayso3}deg)`;
    setTimeout(() =>{
        document.getElementById('render').innerHTML = `Chúc mừng bạn đã trúng <b>${ViTriStop1}${ViTriStop2}${ViTriStop3}</b>`;
    },6000);
}
