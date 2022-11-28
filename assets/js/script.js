// Mantém data rodapé atualizada.
const DataCopyRight = new Date().getFullYear();
const dataHTML = document.getElementById('data');
dataHTML.innerText = DataCopyRight;
// 

// alerta email:

const ClickMail = document.getElementById('ClickMail');
ClickMail.addEventListener('click', () => {
    alert('Você será redirencionado(a) para uma outra aba!');
})


// MODAL FASE
// CONTACT
const ModalContact = document.getElementById('OpenContact');
const ModalContact2 = document.getElementById('OpenContact2');
const ItenContato = document.getElementById('ModalOne');
const CloseContato = document.getElementById('CloseContact');
ModalContact.addEventListener('click', () => {
    ItenContato.classList.add("ModalMenuContactON");
});
ModalContact2.addEventListener('click', () => {
    ItenContato.classList.add("ModalMenuContactON");
});
CloseContato.addEventListener('click', () => {
    ItenContato.classList.remove('ModalMenuContactON');
})
// FIM CONTACT


// menu
const MenuModal = document.getElementById('MenuModal');
const BotaoModalMenu = document.getElementById('DesceMenu')
function AbreMenu(){
    MenuModal.style.top = "0px";
    BotaoModalMenu.innerHTML = `<i class="ri-close-line"></i>`;
    BotaoModalMenu.setAttribute("onclick", 'FechaMenu()');
}
function FechaMenu() {
    MenuModal.style.top = "-600px";
    BotaoModalMenu.innerHTML = `<i class='bx bx-menu'></i>`;
    BotaoModalMenu.setAttribute("onclick", 'AbreMenu()');
}



const telaVideo = document.getElementById('screen');
const LinkVideo = document.getElementById('linkVideo');
const TitleVideo = document.getElementById('Title');
const Titulos = {
    video01: "HOW TO GET A MAN",
    video02: "I HATE FACEBOOK",
    video03: "I HATE VEGANS",
    video04: "LOSER READS HATER COMMENTS"
}
const Links = {
    link01: `https://www.youtube.com/embed/z-kWZIBmdoY`,
    link02: `https://www.youtube.com/embed/iZOLvuujrPk`,
    link03: `https://www.youtube.com/embed/Yxs_mTRjLAU`,
    link04: `https://www.youtube.com/embed/2q9C1p4x_NU`
}
function OpenModal(a){
    telaVideo.classList.add('activedScreen');
    switch(a){
        case 1:
            // TitleVideo.innerText = Titulos.video01;
            LinkVideo.setAttribute('src', Links.link01);
            break
        case 2: 
            // TitleVideo.innerText = Titulos.video02;
            LinkVideo.setAttribute('src', Links.link02);
            break
        case 3:
            // TitleVideo.innerText = Titulos.video03;
            LinkVideo.setAttribute('src', Links.link03);
            break
        case 4:
            // TitleVideo.innerText = Titulos.video04;
            LinkVideo.setAttribute('src', Links.link04);
            break
        default:
            console.log('nenhum foi clicado');
            break
    }
}
document.getElementById('closeScrenn').addEventListener('click', () => {
    telaVideo.classList.remove('activedScreen');
    LinkVideo.setAttribute('src', "");
})
document.getElementById('closeScreenToo').addEventListener('click', () => {
    telaVideo.classList.remove('activedScreen');
    LinkVideo.setAttribute('src', "");
})
