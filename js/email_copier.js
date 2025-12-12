const e_logo_email=document.getElementById("logo_email");
const e_logo_email_copypaste=document.getElementById("logo_email_copypaste");
const e_email_wrapper=document.getElementById("email_wrapper");
const e_email=document.getElementById("email");

const email="mcsipahioglu@gmail.com"
const email_msg="E-mail copied to the clipboard!"

e_logo_email.onclick = function() {EmailActivate()};



function EmailActivate(){
    e_email_wrapper.style.left="calc(100vw - 31.75vmin)";
    e_logo_email_copypaste.addEventListener("click", EmailCopy, true);

    setTimeout(() => {  

        e_email_wrapper.addEventListener("mouseleave", EmailExitCheckInside, true);
        document.addEventListener('mousemove', EmailExitCheckOutside, true);    //Passing the MouseEvent is done like this, it is a fucking nightmare.
    
    }, 1000);  //Give 2 second grace period to get in the email wrapper.
    
}



function EmailCopy() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText(email);
    e_email.innerHTML=email_msg;
}



function EmailExitCheckInside(event){
    if(e_email_wrapper.contains(event.relatedTarget)==0){
        EmailDeactivate();
    }
}



function EmailExitCheckOutside(Event){
    if ( ((document.elementFromPoint(Event.clientX, Event.clientY)).id).includes("email")==0){ //After 2 secs if mouse is not in the email area, despawn it.
        EmailDeactivate();
    }
}



function EmailDeactivate(){
    e_email_wrapper.style.left="100vw";
    setTimeout(() => {  e_email.innerHTML=email; }, 500);
    

    e_logo_email_copypaste.removeEventListener("click", EmailCopy, true);
    e_email_wrapper.removeEventListener("mouseleave", EmailExitCheckInside, true);
    document.removeEventListener('mousemove', EmailExitCheckOutside, true);

}

