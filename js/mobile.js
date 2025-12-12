//--------------------------------------CONSTANTS--------------------------------------
//Elements to disactivate
const e_mlanding=document.getElementById("mobile_landing");

//Elements to activate
const e_mmenu=document.getElementById("mobile_menu");

//--------------------------------------VARIABLES--------------------------------------
//Elements to activate and scroll through
const e_mn=[
    document.getElementById("mobile_menu_roboticist"),
    document.getElementById("mobile_menu_botsmith"),
    document.getElementById("mobile_menu_designer"),
    document.getElementById("mobile_menu_strategist"),
    document.getElementById("mobile_menu_traveller")];      //Append the new element here.



//MAIN
//Elements for getting onclick interrupt                    //Add new element with its interrupt here.
document.getElementById("mobile_roboticist").onclick = function() {LandingRedirectMobile(0)};
document.getElementById("mobile_botsmith").onclick   = function() {LandingRedirectMobile(1)};
document.getElementById("mobile_designer").onclick   = function() {LandingRedirectMobile(2)};
document.getElementById("mobile_strategist").onclick     = function() {LandingRedirectMobile(3)};
document.getElementById("mobile_traveller").onclick  = function() {LandingRedirectMobile(4)};

document.getElementById("mobile_header").onclick     = function() {ReturnToLandingMobile()};





//---------------------------------DIRECTING FUNCTIONS---------------------------------
//First Loading of a Page
function LandingRedirectMobile(page_index){
    MobileLandingDeactivate();

    //Order the mobile menu items.
    MobileMenuOrder(page_index);
    MobileMenuActivate();
    PageActivate(page_index);
}

//Mobile Landing (De)Activate
function MobileLandingActivate(){
    e_mlanding.style.display="grid";                   //Activate landing page
}

function MobileLandingDeactivate(){
    e_mlanding.style.display="none";                    //Deactivate landing page
}



//Mobile Menu Order Set
function MobileMenuOrder(page_index){
    
    e_mn[(page_index+3)%page_count].style.transform= "translateX(calc("+ -2.04 +"*var(--mobmen_x_step)))";
    e_mn[(page_index+4)%page_count].style.transform= "translateX(calc("+ -1.02 +"*var(--mobmen_x_step)))";
    e_mn[(page_index)%page_count].style.transform= "translateX(calc("+ -0 +"*var(--mobmen_x_step)))";
    e_mn[(page_index+1)%page_count].style.transform= "translateX(calc("+ +1 +"*var(--mobmen_x_step)))";
    e_mn[(page_index+2)%page_count].style.transform= "translateX(calc("+ +2 +"*var(--mobmen_x_step)))";

    e_mn[(page_index+3)%page_count].style.textAlign= "right";
    e_mn[(page_index+4)%page_count].style.textAlign= "right";
    e_mn[(page_index)%page_count].style.textAlign= "center";
    e_mn[(page_index+1)%page_count].style.textAlign= "left";
    e_mn[(page_index+2)%page_count].style.textAlign= "left";

    e_mn[(page_index)%page_count].style.fontSize="8vmin";
    e_mn[(page_index+1)%page_count].style.fontSize="6vmin";
    e_mn[(page_index+2)%page_count].style.fontSize="6vmin";
    e_mn[(page_index+3)%page_count].style.fontSize="6vmin";
    e_mn[(page_index+4)%page_count].style.fontSize="6vmin";
    
    e_mn[(page_index)%page_count].style.paddingTop="0vmin";
    e_mn[(page_index+1)%page_count].style.paddingTop="1vmin";
    e_mn[(page_index+2)%page_count].style.paddingTop="1vmin";
    e_mn[(page_index+3)%page_count].style.paddingTop="1vmin";
    e_mn[(page_index+4)%page_count].style.paddingTop="1vmin";

    e_mn[(page_index)%page_count].style.opacity="100%";
    e_mn[(page_index+1)%page_count].style.opacity="30%";
    e_mn[(page_index+2)%page_count].style.opacity="0%";
    e_mn[(page_index+3)%page_count].style.opacity="0%";
    e_mn[(page_index+4)%page_count].style.opacity="30%";

    e_mn[(page_index)%page_count].style.display="block";
    e_mn[(page_index+1)%page_count].style.display="block";
    e_mn[(page_index+2)%page_count].style.display="none";
    e_mn[(page_index+3)%page_count].style.display="none";
    e_mn[(page_index+4)%page_count].style.display="block";

    e_mn[(page_index)%page_count].style.color=colors[page_index];
    e_mn[(page_index+1)%page_count].style.color="rgb(255,255,255)";
    e_mn[(page_index+2)%page_count].style.color="rgb(255,255,255)";
    e_mn[(page_index+3)%page_count].style.color="rgb(255,255,255)";
    e_mn[(page_index+4)%page_count].style.color="rgb(255,255,255)";

    e_mn[(page_index)%page_count].style.textShadow="0 0 50px "+ colors[page_index];
    e_mn[(page_index+1)%page_count].style.textShadow="none";
    e_mn[(page_index+2)%page_count].style.textShadow="none";
    e_mn[(page_index+3)%page_count].style.textShadow="none";
    e_mn[(page_index+4)%page_count].style.textShadow="none";
}



//Mobile Menu (De)Activate
function MobileMenuActivate(){
    e_mmenu.style.display="block";
    e_mmenu.addEventListener("touchstart", TouchStart, true);
    e_mmenu.addEventListener("touchend", TouchEnd, true);
}

function MobileMenuDeactivate(){
    e_mmenu.style.display="none";
    e_mmenu.removeEventListener("touchstart", TouchStart, true);
    e_mmenu.removeEventListener("touchend", TouchEnd, true);
}





//--------------------------------REDIRECTING FUNCTIONS--------------------------------
//Redirecting Between Two Main Pages
function MobileMenuRedirect(page_index){
    //Deactivate Open Projects. (Must check if there is an active project to not fire the function uselessly)
    if(e_pp){
        ProjectDeactivate();
        setTimeout(() => {  PageDeactivate(); PageRedirectMobile(page_index); }, 200);  //Must give delay for project deactivation animation to conclude.
    }else{
        PageDeactivate();
        PageRedirectMobile(page_index);
    }
    
}


function AllDeactivateMobile(){
    //Deactivate Open Projects. (Must check if there is an active project to not fire the function uselessly)
    if(e_pp){
        ProjectDeactivate();
    }
}


//Redirect to Page[page_index]
function PageRedirectMobile(page_index){

    //Order the mobile menu items.
    MobileMenuOrder(page_index);

    e_p.style.transition="opacity 0.4s";

    PageActivate(page_index);
}



//Return to Landing Interrupt via S Logo
function ReturnToLandingMobile(){
    //Deactivate All Pages
    if(e_pp){
        ProjectDeactivate();
        setTimeout(() => {      
            MobileMenuDeactivate();
            PageDeactivateExceptLanding();
            MobileLandingActivate(); }, 400);  //Must give delay for project deactivation animation to conclude.
    }else{
        MobileMenuDeactivate();
        PageDeactivateExceptLanding();
        MobileLandingActivate();
    }


    

}






//----------------------------------SWIPING FUNCTIONS----------------------------------
var touchstartX, touchendX, diffX;

function TouchStart(e){
    touchstartX=e.touches[0].screenX;

}

function TouchEnd(e){
    touchendX=e.changedTouches[0].screenX;
    
    var diffX = touchstartX - touchendX;
    var threshold = screen.width / 5;
    if (Math.abs(diffX) < threshold) {
        MobileMenuOrder(active_page_index);
    } else if (diffX>0){
        MobileMenuRedirect((active_page_index+1)%page_count);
    } else if (diffX<0){
        MobileMenuRedirect((active_page_index -1 +page_count)%page_count);
    }
}






