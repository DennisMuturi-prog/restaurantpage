import designHome from './home';
import designMenu from './menu';
import designContact from './contact';
import './styles.css';
function createHeader(){
    const header=document.createElement('header');
    const homedivBtn=document.createElement('div');
    homedivBtn.textContent='Home';
    homedivBtn.classList.add('homebtn');
    const menudivBtn=document.createElement('div');
    menudivBtn.textContent='Menu';
    menudivBtn.classList.add('menubtn');
    const contactdivBtn=document.createElement('div');
    contactdivBtn.textContent='Contact';
    contactdivBtn.classList.add('contactbtn');
    header.appendChild(homedivBtn);
    header.appendChild(menudivBtn);
    header.appendChild(contactdivBtn);
    return header;
}
const contentdiv=document.querySelector('#content');
let borderBottom='home';
contentdiv.appendChild(createHeader());
contentdiv.appendChild(designHome());
const homebtn=document.querySelector('.homebtn');
const menubtn=document.querySelector('.menubtn');
const contactbtn=document.querySelector('.contactbtn');
homebtn.style.cssText += 'border-bottom:2px solid white';
homebtn.addEventListener('click',()=>{
    const contentdiv1=document.querySelector('.remove');
    contentdiv1.remove();
    contentdiv.appendChild(designHome());
    if(borderBottom=='menu'){
        menubtn.style.removeProperty('border-bottom');
    }
    else if(borderBottom=='contact'){
        contactbtn.style.removeProperty('border-bottom');
    }
    homebtn.style.cssText += 'border-bottom:2px solid white';
    borderBottom='home';
});

menubtn.addEventListener('click',()=>{
    const contentdiv1=document.querySelector('.remove');
    contentdiv1.remove();
    contentdiv.appendChild(designMenu());
    if(borderBottom=='home'){
        homebtn.style.removeProperty('border-bottom');
    }
    else if(borderBottom=='contact'){
        contactbtn.style.removeProperty('border-bottom');
    }
    menubtn.style.cssText += 'border-bottom:2px solid white';
    borderBottom='menu';
});
contactbtn.addEventListener('click',()=>{
    
    const contentdiv1=document.querySelector('.remove');
    contentdiv1.remove();
    contentdiv.appendChild(designContact());
    if(borderBottom=='menu'){
        menubtn.style.removeProperty('border-bottom');
    }
    else if(borderBottom=='home'){
        homebtn.style.removeProperty('border-bottom');
    }
    contactbtn.style.cssText += 'border-bottom:2px solid white';
    borderBottom='contact';
});








