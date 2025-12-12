const em_logo_dots=document.getElementById("mobile_logo_dots");
const em_logo_cv=document.getElementById("mobile_logo_cv");
const em_logo_lang=document.getElementById("mobile_logo_lang");
const em_logo_email=document.getElementById("mobile_logo_email");
const em_logo_instagram=document.getElementById("mobile_logo_instagram");
const em_logo_spotify=document.getElementById("mobile_logo_spotify");
const em_logo_linkedin=document.getElementById("mobile_logo_linkedin");

const em_notification_wrapper=document.getElementById("mobile_notification");
const em_notification_text=document.getElementById("mobile_notification_text");

var sidebar_active=0;
var lang_active=0;
var sidebar_delay_step=1.8;


function MobileSidebarToggle(){

    //Activate
    if(sidebar_active==0){
        sidebar_active=1;           //For typestrategist effect, when coming to screen step by step, when going out of screen all at once.
        em_logo_dots.style.transform="rotate(+180deg)";
        em_logo_lang.style.transitionDelay="calc(var(--sidebar_delay_step) * 1)";
        em_logo_email.style.transitionDelay="calc(var(--sidebar_delay_step) * 2)";
        em_logo_linkedin.style.transitionDelay="calc(var(--sidebar_delay_step) * 3)";
        em_logo_spotify.style.transitionDelay="calc(var(--sidebar_delay_step) * 4)";
        em_logo_instagram.style.transitionDelay="calc(var(--sidebar_delay_step) * 5)";
        em_logo_cv.style.right="0vmin";
        em_logo_lang.style.right="0vmin";
        em_logo_email.style.right="0vmin";
        em_logo_instagram.style.right="0vmin";
        em_logo_spotify.style.right="0vmin";
        em_logo_linkedin.style.right="0vmin";
    }
    
    //Deactivate
    else if(sidebar_active==1){
        sidebar_active=0;
        em_logo_dots.style.transform="rotate(0deg)";
        em_logo_lang.style.transitionDelay="0s";
        em_logo_email.style.transitionDelay="0s";
        em_logo_linkedin.style.transitionDelay="0s";
        em_logo_spotify.style.transitionDelay="0s";
        em_logo_instagram.style.transitionDelay="0s";
        em_logo_cv.style.right="-12vmin";
        em_logo_lang.style.right="-12vmin";
        em_logo_email.style.right="-12vmin";
        em_logo_instagram.style.right="-12vmin";
        em_logo_spotify.style.right="-12vmin";
        em_logo_linkedin.style.right="-12vmin";
    }
    
}

function MobileCVDownload(){
    if(lang_active==0){
        window.open('./assets/Mustafa Cagatay Sipahioglu - CV.pdf');
        MobileNotification("Downloading CV...");
    }else if(lang_active==1){
        window.open('./assets/Mustafa Çağatay Sipahioğlu - CV.pdf');
        MobileNotification("CV indiriliyor...");
    }
}


function MobileLanguageToggle(){
    if(lang_active==0){
        lang_active=1;
        LanguageChangeTr();
        MobileNotification("Dil, Türkçe olarak değiştirildi.");

    }else if(lang_active==1){
        lang_active=0;
        LanguageChangeEng();
        MobileNotification("Language changed to English.");

    }
}

function MobileEmailCopy() {
    navigator.clipboard.writeText(email); // Copy text into clipboard
    MobileNotification(email_msg);
}

function MobileNotification(message){
    em_notification_text.innerHTML=message;
    em_notification_wrapper.style.visibility="visible";
    em_notification_wrapper.style.opacity="100%";
    setTimeout(() => {
    em_notification_wrapper.style.visibility="hidden";
    em_notification_wrapper.style.opacity="0%";      
    }, 1400);
}

function MobileSidebarColor(color) {
    em_logo_dots.style.backgroundColor=color;
    em_logo_cv.style.backgroundColor=color;
    em_logo_lang.style.backgroundColor=color;
    em_logo_email.style.backgroundColor=color;
    em_logo_instagram.style.backgroundColor=color;
    em_logo_spotify.style.backgroundColor=color;
    em_logo_linkedin.style.backgroundColor=color;

}