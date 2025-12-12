//--------------------------------------CONSTANTS--------------------------------------
//Elements to disactivate
const e_landing_header_name=document.getElementById("landing_header_name");
const e_landing_header_surname=document.getElementById("landing_header_surname");
const e_landing_swatch_wrapper=document.getElementById("landing_swatch_wrapper");
const e_navbar_menu_scroll_indicator=document.getElementById("navbar_menu_scroll_indicator");

//Elements for transition to other pages
const e_sweeper_wrapper=document.getElementById("sweeper_wrapper");
const e_sweeper_divider=document.getElementById("sweeper_divider");
const e_sweeper_neon=document.getElementById("sweeper_neon");
const e_sweeper_secondary=document.getElementById("sweeper_secondary");
const e_logo_S=document.getElementById("logo_S");

//Elements to activate
const e_navbar_wrapper=document.getElementById("navbar_wrapper");
const e_navbar_menu=document.getElementById("navbar_menu");
const e_navbar_name=document.getElementById("navbar_name");

var navmen_og_index=0;  //Original page condition at navmen.
var navmen_index=0;
var active_page_index= -1;
var i;  //Misc counter


//--------------------------------------VARIABLES--------------------------------------
//Elements to activate and scroll through
const e_n=[
    document.getElementById("navbar_menu_roboticist"),
    document.getElementById("navbar_menu_botsmith"),
    document.getElementById("navbar_menu_designer"),
    document.getElementById("navbar_menu_strategist"),
    document.getElementById("navbar_menu_traveller")];      //Append the new element here.

//Pages to activate
let e_p;
page_names=["page_roboticist",
            "page_botsmith",
            "page_designer",
            "page_strategist",
            "page_traveller"];             //Append the new element here.]
const page_count=5;                                         //Add 1 here.

const colors=[
    "var(--swatch_red)",
    "var(--swatch_purple)",
    "var(--swatch_orange)",
    "var(--swatch_turqoise)",
    "var(--swatch_green)"];                                 //Append the new element here.

const return_button_colors=[
    "var(--swatch_red)",
    "var(--swatch_purple)",
    "var(--swatch_orange)",
    "var(--swatch_turqoise)",
    "var(--bg_black)"];                                 //Append the new element here.

const S_ids=["logo_S_red",
    "logo_S_purple",
    "logo_S_orange",
    "logo_S_turqoise",
    "logo_S_green"];                                        //Append the new element here.




//---------------------------------DIRECTING FUNCTIONS---------------------------------
//First Loading of a Page
function LandingRedirect(page_index){
    LandingDeactivate();

    e_sweeper_neon.style.backgroundColor=colors[page_index];//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin "+colors[page_index];
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_divider.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= S_ids[page_index];

    //Order the navbar menu items.
    NavbarMenuOrder(page_index);
    NavbarMenuActivate();
    navmen_og_index=page_index;
    navmen_index=page_index;
    setTimeout(() => {  PageActivate(page_index); }, 2500);
}



//Landing (De)Activate
function LandingActivate(){
    e_landing_header_name.style.display="inline";            //Activate landing page
    e_landing_header_surname.style.display="inline";
    e_landing_swatch_wrapper.style.display="block";
    document.addEventListener("wheel", SwatchRotate, true);
}

function LandingDeactivate(){
    e_landing_header_name.style.display="none";             //Deactivate landing page
    e_landing_header_surname.style.display="none";
    e_landing_swatch_wrapper.style.display="none";
    document.removeEventListener("wheel", SwatchRotate, true);
}



//Navbar Order Set
function NavbarMenuOrder(page_index){
    
    e_n[(page_index+3)%page_count].style.transform= "translateY(calc("+ -1.78 +"*var(--navmen_y_step)))";
    e_n[(page_index+4)%page_count].style.transform= "translateY(calc("+ -0.78 +"*var(--navmen_y_step)))";
    e_n[(page_index)%page_count].style.transform= "translateY(calc("+ 0 +"*var(--navmen_y_step)))";
    e_n[(page_index+1)%page_count].style.transform= "translateY(calc("+ 1 +"*var(--navmen_y_step)))";
    e_n[(page_index+2)%page_count].style.transform= "translateY(calc("+ 2 +"*var(--navmen_y_step)))";

    e_n[(page_index)%page_count].style.fontSize="4.5vmin";
    e_n[(page_index+1)%page_count].style.fontSize="3vmin";
    e_n[(page_index+2)%page_count].style.fontSize="3vmin";
    e_n[(page_index+3)%page_count].style.fontSize="3vmin";
    e_n[(page_index+4)%page_count].style.fontSize="3vmin";

    e_n[(page_index)%page_count].style.opacity="100%";
    e_n[(page_index+1)%page_count].style.opacity="30%";
    e_n[(page_index+2)%page_count].style.opacity="0%";
    e_n[(page_index+3)%page_count].style.opacity="0%";
    e_n[(page_index+4)%page_count].style.opacity="30%";

    e_n[(page_index)%page_count].style.display="block";
    e_n[(page_index+1)%page_count].style.display="block";
    e_n[(page_index+2)%page_count].style.display="none";
    e_n[(page_index+3)%page_count].style.display="none";
    e_n[(page_index+4)%page_count].style.display="block";

    e_n[(page_index)%page_count].style.color=colors[page_index];
    e_n[(page_index+1)%page_count].style.color="rgb(255,255,255)";
    e_n[(page_index+2)%page_count].style.color="rgb(255,255,255)";
    e_n[(page_index+3)%page_count].style.color="rgb(255,255,255)";
    e_n[(page_index+4)%page_count].style.color="rgb(255,255,255)";

    e_n[(page_index)%page_count].style.textShadow="0 0 50px "+ colors[page_index];
    e_n[(page_index+1)%page_count].style.textShadow="none";
    e_n[(page_index+2)%page_count].style.textShadow="none";
    e_n[(page_index+3)%page_count].style.textShadow="none";
    e_n[(page_index+4)%page_count].style.textShadow="none";
}



//Navbar (De)Activate
function NavbarMenuActivate(){
    setTimeout(() => {  e_navbar_wrapper.style.justifyContent="space-between"; e_navbar_name.style.opacity="100%"; }, 1000);//Spawn via opacity to not mess up the flex display composition
    setTimeout(() => {  e_navbar_menu.style.visibility="visible"; e_navbar_menu.style.opacity="100%"; }, 1750);     //Can't animate in from display none, instead animate in from visibility+opacity
    e_sweeper_secondary.style.display="block";     //Also spawn in the secondary sweeper.
}

function NavbarMenuDeactivate(){
    e_sweeper_secondary.style.display="none";     //Despawn the secondary sweeper.
    e_navbar_name.style.opacity="0%";             //Despawn navbar
    e_navbar_menu.style.visibility="hidden";
    e_navbar_menu.style.opacity="0%";
}



//Activate Main Page
function PageActivate(page_index){
    e_p=document.getElementById(page_names[page_index]);
    e_p.style.visibility="visible";
    e_p.style.opacity="100%";
    e_logo_S.style.pointerEvents="all";
    active_page_index=page_index;
    ReturnButtonColor(return_button_colors[active_page_index]);
}





//--------------------------------REDIRECTING FUNCTIONS--------------------------------
//Hover+Wheel interrupt to use the navbar menu
document.addEventListener('mousemove', e => {
    if ( ((document.elementFromPoint(e.clientX, e.clientY)).id).includes("navbar_menu") ){ //When on the navbar_menu elements:
        document.addEventListener("wheel", NavbarMenuScroll, true);       //Check for scrolling. (Scroll navbar_menu when scrolling while hovering on it.)
        document.addEventListener("click", NavbarMenuRedirect, true);     //If clicked when able to scroll. Then redirect.
    }else{
        document.removeEventListener("wheel", NavbarMenuScroll, true);    //When leaving navbar_menu area, stop listening for events and revert to original condition.
        document.removeEventListener("click", NavbarMenuRedirect, true);
        NavbarMenuOrder(navmen_og_index);
    }
  }, {passive: true})



//Scrolling Function
function NavbarMenuScroll(event){
    var delta = Math.sign(event.deltaY);     //Normalize Scroll's deltaY (+-120 for Chrome into -+1)

    if (delta==1){         //Scroll Down
        navmen_index=((navmen_index+1)%page_count+page_count)%page_count;     //Weird modulo so that negative numbers become positive as well.
    }
    else if (delta==-1){   //Scroll Up
        navmen_index=((navmen_index-1)%page_count+page_count)%page_count;     //Weird modulo so that negative numbers become positive as well.
    }

    NavbarMenuOrder(navmen_index);
    e_navbar_menu_scroll_indicator.style.display="none";
}

//Redirecting Between Two Main Pages
function NavbarMenuRedirect(){
    page_index=navmen_index;
    AllDeactivate();                    //Deactivate active project or CV pages.
    e_sweeper_wrapper.style.left="calc(100vw + 5vmin)";         //Reset for left sweep animation. (Right Sweep)
    e_sweeper_secondary.style.left="0vw";

    setTimeout(() => {  PageDeactivate(); PageRedirect(); }, 1000);
}

//Close Any Open Projects or the CV
function AllDeactivate(){
    //Deactivate CV.
    CVDeactivate();

    //Deactivate Open Projects. (Must check if there is an active project to not fire the function uselessly)
    if(e_pp){
        ProjectDeactivate();
    }
    
}

//Deactivate Active Page
function PageDeactivate(){
    e_p.style.transition="opacity 0s";     //Make transitions 0s. Such that the previous pages despawn immediately to not be seen during the sweeper left animation.
    e_p.style.visibility="hidden";
    e_p.style.opacity="0%";
}

//Redirect to Page[page_index]
function PageRedirect(){
    e_sweeper_neon.style.backgroundColor = colors[page_index];//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin "+colors[page_index];
    e_sweeper_wrapper.style.left="-0.75vmin";                 //Sweep to left
    e_sweeper_secondary.style.left="calc(-100vw - 5.75vmin)";
    e_logo_S.id= S_ids[page_index];

    //Order the navbar menu items.
    NavbarMenuOrder(page_index);
    navmen_og_index=page_index;

    setTimeout(() => {          //Reassign animation length after sweeping before activating the page.
        e_p.style.transition="opacity 0.4s";
    }, 400);  

    setTimeout(() => {  PageActivate(page_index); }, 1000);
}



//Return to Landing Interrupt via S Logo
function ReturnToLanding(){
    //Deactivate All Pages
    AllDeactivate();                    //Deactivate active project or CV pages.
    NavbarMenuDeactivate();
    PageDeactivateExceptLanding();

    //Reset Swatch
    element_swatch.style.transform = "rotate(0deg)";
    current_step=0;

    //Swipe to Right
    setTimeout(() => {     
        e_sweeper_wrapper.style.left="calc(100vw + 5vmin)";         //Reset for left sweep animation. (Right Sweep)
        e_sweeper_divider.style.left="calc(100vw + 5vmin)";
    }, 400);

    setTimeout(() => {     
        e_logo_S.id= "logo_S";
    }, 995);

    //Activate Landing
    LandingActivate();
}

//Deactivate All Pages
function PageDeactivateExceptLanding(){
    e_logo_S.style.pointerEvents="none";

    e_p.style.visibility="hidden";
    e_p.style.opacity="0%";
}



//Return Button Color, since it is sticky.
function ReturnButtonColor(color){
    if(e_return_button[active_page_index]){
        e_return_button[active_page_index].style.backgroundColor=color;
    }
}