export default function designContact(){
    const contactdiv=document.createElement('div');
    contactdiv.classList.add('remove');
    contactdiv.classList.add('contactdiv');
    const contactinfo=document.createElement('div');
    const contactp=document.createElement('p');
    contactp.textContent='we are located in Ngong hills park along ngong road';
    contactinfo.appendChild(contactp);
    const contactp1=document.createElement('p');
    contactp1.textContent='call us on 0796906772';
    contactinfo.appendChild(contactp1);
    contactdiv.appendChild(contactinfo);
    const contactmap=document.createElement('div');
    contactmap.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.785740291729!2d36.63820425541992!3d-1.358768499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f03c7b92d5199%3A0x9474d5f8f82de48b!2sAl-yusra%20Restaurant%20Ngong!5e0!3m2!1sen!2ske!4v1695199942591!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    contactdiv.appendChild(contactmap);
    return contactdiv;
}