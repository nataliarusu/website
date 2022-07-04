const contactSection=document.getElementById('contact');
const backdrop=document.querySelector('.backdrop');

const removeMessage=()=>{
    setTimeout(()=>{
        contactSection.removeChild(contactSection.querySelector('.message-container'));
        backdrop.classList.add('hidden');

    }, 5000);
   
      
};

const renderMessage=(name)=>{
    const card=document.createElement('div');
    card.classList.add('message-container');
    const message=document.createElement('p');
    message.classList.add('message');
    message.innerHTML=`Dear ${name},`+'<br/>Thank you for your message<br/>I will be in touch with you soon';
    backdrop.classList.remove('hidden');
    card.append(message);    
    contactSection.append(card);
    removeMessage();
};

