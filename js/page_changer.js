//Elements for getting onclick interrupt
const e_roboticist=document.getElementById("swatch_roboticist");
const e_botsmith=document.getElementById("swatch_botsmith");
const e_inventor=document.getElementById("swatch_inventor");
const e_writer=document.getElementById("swatch_writer");
const e_traveller=document.getElementById("swatch_traveller");

//Elements to disactivate
const e_landing_header_name=document.getElementById("landing_header_name");
const e_landing_header_surname=document.getElementById("landing_header_surname");
const e_landing_swatch_wrapper=document.getElementById("landing_swatch_wrapper");

//Elements for transition to other pages
const e_sweeper_wrapper=document.getElementById("sweeper_wrapper");
const e_sweeper_divider=document.getElementById("sweeper_divider");
const e_sweeper_neon=document.getElementById("sweeper_neon");
const e_logo_S=document.getElementById("logo_S");

//Elements to activate
const e_navbar_wrapper=document.getElementById("navbar_wrapper");
const e_navbar_menu=document.getElementById("navbar_menu");
const e_navbar_name=document.getElementById("navbar_name");

//Elements to activate and scroll through
const e_n_roboticist=document.getElementById("navbar_menu_roboticist");
const e_n_botsmith=document.getElementById("navbar_menu_botsmith");
const e_n_inventor=document.getElementById("navbar_menu_inventor");
const e_n_writer=document.getElementById("navbar_menu_writer");
const e_n_traveller=document.getElementById("navbar_menu_traveller");

const navmen_count=5;
var navmen_og_index=0;  //Keep in mind the original page condition for navbar menu.
var navmen_index=0;

//Pages to activate
const e_p_roboticist=document.getElementById("page_roboticist");
const e_p_botsmith=document.getElementById("page_botsmith");
const e_p_inventor=document.getElementById("page_inventor");
const e_p_writer=document.getElementById("page_writer");
const e_p_traveller=document.getElementById("page_traveller");

//MAIN
//Onclick interrupts to leave the landing page
e_roboticist.onclick = function() {page_change_roboticist();};
e_botsmith.onclick   = function() {page_change_botsmith()};
e_inventor.onclick   = function() {page_change_inventor()};
e_writer.onclick     = function() {page_change_writer()};
e_traveller.onclick  = function() {page_change_traveller()};

//Hover+Wheel interrupt to use the navbar menu
document.addEventListener('mousemove', e => {
    if ( ((document.elementFromPoint(e.clientX, e.clientY)).id).includes("navbar_menu_") ){ //When on the navbar_menu elements:
        document.addEventListener("wheel", navbar_menu_scroll, true);       //Check for scrolling. (Scroll navbar_menu when scrolling while hovering on it.)
        document.addEventListener("click", navbar_menu_redirect, true);     //If clicked when able to scroll. Then redirect.
    }else{
        document.removeEventListener("wheel", navbar_menu_scroll, true);    //When leaving navbar_menu area, stop listening for events and revert to original condition.
        document.removeEventListener("click", navbar_menu_redirect, true);
        if(navmen_og_index==0){
            navbar_roboticist_order();
        }else if(navmen_og_index==1){
            navbar_botsmith_order();
        }else if(navmen_og_index==2){
            navbar_inventor_order();
        }else if(navmen_og_index==3){
            navbar_writer_order();  
        }else if(navmen_og_index==4){
            navbar_traveller_order();
        }
    }
  }, {passive: true})





//FUNCTIONS
function deactivate_landing(){
    e_landing_header_name.style.display="none";             //Deactivate landing page
    e_landing_header_surname.style.display="none";
    e_landing_swatch_wrapper.style.display="none";
}

function activate_navbar(){ //Spawn in navbar
    setTimeout(() => {  e_navbar_wrapper.style.justifyContent="space-between"; e_navbar_name.style.opacity="100%"; }, 1000);//Spawn via opacity to not mess up the flex display composition
    setTimeout(() => {  e_navbar_menu.style.visibility="visible"; e_navbar_menu.style.opacity="100%"; }, 1750);     //Can't animate in from display none, instead animate in from visibility+opacity
}





function activate_page_roboticist(){
    setTimeout(() => {
    e_p_roboticist.style.visibility="visible";
    e_p_roboticist.style.opacity="100%";
    e_p_botsmith.style.visibility="hidden";
    e_p_botsmith.style.opacity="0%";
    e_p_inventor.style.visibility="hidden";
    e_p_inventor.style.opacity="0%";
    e_p_writer.style.visibility="hidden";
    e_p_writer.style.opacity="0%";
    e_p_traveller.style.visibility="hidden";
    e_p_traveller.style.opacity="0%";
    }, 2500);

}

function activate_page_botsmith(){
    setTimeout(() => {
    e_p_roboticist.style.visibility="hidden";
    e_p_roboticist.style.opacity="0%";
    e_p_botsmith.style.visibility="visible";
    e_p_botsmith.style.opacity="100%";
    e_p_inventor.style.visibility="hidden";
    e_p_inventor.style.opacity="0%";
    e_p_writer.style.visibility="hidden";
    e_p_writer.style.opacity="0%";
    e_p_traveller.style.visibility="hidden";
    e_p_traveller.style.opacity="0%";
    }, 2500);
}

function activate_page_inventor(){
    setTimeout(() => {
    e_p_roboticist.style.visibility="hidden";
    e_p_roboticist.style.opacity="0%";
    e_p_botsmith.style.visibility="hidden";
    e_p_botsmith.style.opacity="0%";
    e_p_inventor.style.visibility="visible";
    e_p_inventor.style.opacity="100%";
    e_p_writer.style.visibility="hidden";
    e_p_writer.style.opacity="0%";
    e_p_traveller.style.visibility="hidden";
    e_p_traveller.style.opacity="0%";
    }, 2500);
}

function activate_page_writer(){
    setTimeout(() => {
    e_p_roboticist.style.visibility="hidden";
    e_p_roboticist.style.opacity="0%";
    e_p_botsmith.style.visibility="hidden";
    e_p_botsmith.style.opacity="0%";
    e_p_inventor.style.visibility="hidden";
    e_p_inventor.style.opacity="0%";
    e_p_writer.style.visibility="visible";
    e_p_writer.style.opacity="100%";
    e_p_traveller.style.visibility="hidden";
    e_p_traveller.style.opacity="0%";
    }, 2500);

}

function activate_page_traveller(){
    setTimeout(() => {
    e_p_roboticist.style.visibility="hidden";
    e_p_roboticist.style.opacity="0%";
    e_p_botsmith.style.visibility="hidden";
    e_p_botsmith.style.opacity="0%";
    e_p_inventor.style.visibility="hidden";
    e_p_inventor.style.opacity="0%";
    e_p_writer.style.visibility="hidden";
    e_p_writer.style.opacity="0%";
    e_p_traveller.style.visibility="visible";
    e_p_traveller.style.opacity="100%";
    }, 2500);

}






function navbar_roboticist_order(){
    e_n_writer.style.transform= "translateY(calc("+ -1.78 +"*var(--navmen_y_step)))";
    e_n_traveller.style.transform= "translateY(calc("+ -0.78 +"*var(--navmen_y_step)))";
    e_n_roboticist.style.transform= "translateY(calc("+ 0 +"*var(--navmen_y_step)))";
    e_n_botsmith.style.transform= "translateY(calc("+ 1 +"*var(--navmen_y_step)))";
    e_n_inventor.style.transform= "translateY(calc("+ 2 +"*var(--navmen_y_step)))";

    e_n_roboticist.style.fontSize="4.5vmin";
    e_n_botsmith.style.fontSize="3vmin";
    e_n_inventor.style.fontSize="3vmin";
    e_n_writer.style.fontSize="3vmin";
    e_n_traveller.style.fontSize="3vmin";

    e_n_roboticist.style.opacity="100%";
    e_n_botsmith.style.opacity="30%";
    e_n_inventor.style.opacity="0%";
    e_n_writer.style.opacity="0%";
    e_n_traveller.style.opacity="30%";

    e_n_roboticist.style.display="inline";
    e_n_botsmith.style.display="inline";
    e_n_inventor.style.display="none";
    e_n_writer.style.display="none";
    e_n_traveller.style.display="inline";

    e_n_roboticist.style.color="var(--swatch_red)";
    e_n_botsmith.style.color="rgb(255,255,255)";
    e_n_inventor.style.color="rgb(255,255,255)";
    e_n_writer.style.color="rgb(255,255,255)";
    e_n_traveller.style.color="rgb(255,255,255)";

    e_n_roboticist.style.textShadow="0 0 50px var(--swatch_red)";
    e_n_botsmith.style.textShadow="none";
    e_n_inventor.style.textShadow="none";
    e_n_writer.style.textShadow="none";
    e_n_traveller.style.textShadow="none";
}

function navbar_botsmith_order(){
    e_n_traveller.style.transform= "translateY(calc("+ -1.78 +"*var(--navmen_y_step)))";
    e_n_roboticist.style.transform= "translateY(calc("+ -0.78 +"*var(--navmen_y_step)))";
    e_n_botsmith.style.transform= "translateY(calc("+ 0 +"*var(--navmen_y_step)))";
    e_n_inventor.style.transform= "translateY(calc("+ 1 +"*var(--navmen_y_step)))";
    e_n_writer.style.transform= "translateY(calc("+ 2 +"*var(--navmen_y_step)))";

    e_n_roboticist.style.fontSize="3vmin";
    e_n_botsmith.style.fontSize="4.5vmin";
    e_n_inventor.style.fontSize="3vmin";
    e_n_writer.style.fontSize="3vmin";
    e_n_traveller.style.fontSize="3vmin";

    e_n_roboticist.style.opacity="30%";
    e_n_botsmith.style.opacity="100%";
    e_n_inventor.style.opacity="30%";
    e_n_writer.style.opacity="0%";
    e_n_traveller.style.opacity="0%";

    e_n_roboticist.style.display="inline";
    e_n_botsmith.style.display="inline";
    e_n_inventor.style.display="inline";
    e_n_writer.style.display="none";
    e_n_traveller.style.display="none";

    e_n_roboticist.style.color="rgb(255,255,255)";
    e_n_botsmith.style.color="var(--swatch_purple)";
    e_n_inventor.style.color="rgb(255,255,255)";
    e_n_writer.style.color="rgb(255,255,255)";
    e_n_traveller.style.color="rgb(255,255,255)";


    e_n_roboticist.style.textShadow="none";
    e_n_botsmith.style.textShadow="0 0 50px var(--swatch_purple)";
    e_n_inventor.style.textShadow="none";
    e_n_writer.style.textShadow="none";
    e_n_traveller.style.textShadow="none";
}

function navbar_inventor_order(){
    e_n_roboticist.style.transform= "translateY(calc("+ -1.78 +"*var(--navmen_y_step)))";
    e_n_botsmith.style.transform= "translateY(calc("+ -0.78 +"*var(--navmen_y_step)))";
    e_n_inventor.style.transform= "translateY(calc("+ 0 +"*var(--navmen_y_step)))";
    e_n_writer.style.transform= "translateY(calc("+ 1 +"*var(--navmen_y_step)))";
    e_n_traveller.style.transform= "translateY(calc("+ 2 +"*var(--navmen_y_step)))";

    e_n_roboticist.style.fontSize="3vmin";
    e_n_botsmith.style.fontSize="3vmin";
    e_n_inventor.style.fontSize="4.5vmin";
    e_n_writer.style.fontSize="3vmin";
    e_n_traveller.style.fontSize="3vmin";

    e_n_roboticist.style.opacity="0%";
    e_n_botsmith.style.opacity="30%";
    e_n_inventor.style.opacity="100%";
    e_n_writer.style.opacity="30%";
    e_n_traveller.style.opacity="0%";

    e_n_roboticist.style.display="none";
    e_n_botsmith.style.display="inline";
    e_n_inventor.style.display="inline";
    e_n_writer.style.display="inline";
    e_n_traveller.style.display="none";

    e_n_roboticist.style.color="rgb(255,255,255)";
    e_n_botsmith.style.color="rgb(255,255,255)";
    e_n_inventor.style.color="var(--swatch_orange)"; 
    e_n_writer.style.color="rgb(255,255,255)";
    e_n_traveller.style.color="rgb(255,255,255)";

    e_n_roboticist.style.textShadow="none";
    e_n_botsmith.style.textShadow="none";
    e_n_inventor.style.textShadow="0 0 50px var(--swatch_orange)";
    e_n_writer.style.textShadow="none";
    e_n_traveller.style.textShadow="none";
}

function navbar_writer_order(){
    e_n_botsmith.style.transform= "translateY(calc("+ -1.78 +"*var(--navmen_y_step)))";
    e_n_inventor.style.transform= "translateY(calc("+ -0.78 +"*var(--navmen_y_step)))";
    e_n_writer.style.transform= "translateY(calc("+ 0 +"*var(--navmen_y_step)))";
    e_n_traveller.style.transform= "translateY(calc("+ 1 +"*var(--navmen_y_step)))";
    e_n_roboticist.style.transform= "translateY(calc("+ 2 +"*var(--navmen_y_step)))";

    e_n_roboticist.style.fontSize="3vmin";
    e_n_botsmith.style.fontSize="3vmin";
    e_n_inventor.style.fontSize="3vmin";
    e_n_writer.style.fontSize="4.5vmin";
    e_n_traveller.style.fontSize="3vmin";

    e_n_roboticist.style.opacity="0%";
    e_n_botsmith.style.opacity="0%";
    e_n_inventor.style.opacity="30%";
    e_n_writer.style.opacity="100%";
    e_n_traveller.style.opacity="30%";

    e_n_roboticist.style.display="none";
    e_n_botsmith.style.display="none";
    e_n_inventor.style.display="inline";
    e_n_writer.style.display="inline";
    e_n_traveller.style.display="inline";

    e_n_roboticist.style.color="rgb(255,255,255)";
    e_n_botsmith.style.color="rgb(255,255,255)";
    e_n_inventor.style.color="rgb(255,255,255)";
    e_n_writer.style.color="var(--swatch_turqoise)";
    e_n_traveller.style.color="rgb(255,255,255)";

    e_n_roboticist.style.textShadow="none";
    e_n_botsmith.style.textShadow="none";
    e_n_inventor.style.textShadow="none";
    e_n_writer.style.textShadow="0 0 50px var(--swatch_turqoise)";
    e_n_traveller.style.textShadow="none";  
}

function navbar_traveller_order(){
    e_n_inventor.style.transform= "translateY(calc("+ -1.78 +"*var(--navmen_y_step)))";
    e_n_writer.style.transform= "translateY(calc("+ -0.78 +"*var(--navmen_y_step)))";
    e_n_traveller.style.transform= "translateY(calc("+ 0 +"*var(--navmen_y_step)))";
    e_n_roboticist.style.transform= "translateY(calc("+ 1 +"*var(--navmen_y_step)))";
    e_n_botsmith.style.transform= "translateY(calc("+ 2 +"*var(--navmen_y_step)))";

    e_n_roboticist.style.fontSize="3vmin";
    e_n_botsmith.style.fontSize="3vmin";
    e_n_inventor.style.fontSize="3vmin";
    e_n_writer.style.fontSize="3vmin";
    e_n_traveller.style.fontSize="4.5vmin";

    e_n_roboticist.style.opacity="30%";
    e_n_botsmith.style.opacity="0%";
    e_n_inventor.style.opacity="0%";
    e_n_writer.style.opacity="30%";
    e_n_traveller.style.opacity="100%";

    e_n_roboticist.style.display="inline";
    e_n_botsmith.style.display="none";
    e_n_inventor.style.display="none";
    e_n_writer.style.display="inline";
    e_n_traveller.style.display="inline";

    e_n_roboticist.style.color="rgb(255,255,255)";
    e_n_botsmith.style.color="rgb(255,255,255)";
    e_n_inventor.style.color="rgb(255,255,255)";
    e_n_writer.style.color="rgb(255,255,255)";
    e_n_traveller.style.color="var(--swatch_green)"; 

    e_n_roboticist.style.textShadow="none";
    e_n_botsmith.style.textShadow="none";
    e_n_inventor.style.textShadow="none";
    e_n_writer.style.textShadow="none";
    e_n_traveller.style.textShadow="0 0 50px var(--swatch_green)";
}





function page_change_roboticist(event){
    deactivate_landing();

    e_sweeper_neon.style.backgroundColor="var(--swatch_red)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_red)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_divider.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_red";

    //Order the navbar menu items.
    navbar_roboticist_order();
    activate_navbar();
    navmen_og_index=0;
    navmen_index=0;
    activate_page_roboticist();
          
}

function page_change_botsmith(event){
    deactivate_landing();

    e_sweeper_neon.style.backgroundColor="var(--swatch_purple)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_purple)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_divider.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_purple";

    //Order the navbar menu items.
    navbar_botsmith_order();
    activate_navbar();
    navmen_og_index=1;
    navmen_index=1;
    activate_page_botsmith();
    
}

function page_change_inventor(event){
    deactivate_landing();

    e_sweeper_neon.style.backgroundColor="var(--swatch_orange)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_orange)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_divider.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_orange";

    //Order the navbar menu items.
    navbar_inventor_order();
    activate_navbar();
    navmen_og_index=2;
    navmen_index=2;
    activate_page_inventor();
}

function page_change_writer(event){
    deactivate_landing();

    e_sweeper_neon.style.backgroundColor="var(--swatch_turqoise)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_turqoise)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_divider.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_turqoise";

    //Order the navbar menu items.
    navbar_writer_order();
    activate_navbar();
    navmen_og_index=3;
    navmen_index=3;
    activate_page_writer();
}

function page_change_traveller(event){
    deactivate_landing();

    e_sweeper_neon.style.backgroundColor="var(--swatch_green)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_green)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_divider.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_green";

    //Order the navbar menu items.
    navbar_traveller_order();
    activate_navbar();
    navmen_og_index=4;
    navmen_index=4;
    activate_page_traveller();      
}





function navbar_menu_scroll(event){
    var delta = Math.sign(event.deltaY);     //Normalize Scroll's deltaY (+-120 for Chrome into -+1)

    if (delta==1){         //Scroll Down
        navmen_index=((navmen_index+1)%navmen_count+navmen_count)%navmen_count;     //Weird modulo so that negative numbers become positive as well.
    }
    else if (delta==-1){   //Scroll Up
        navmen_index=((navmen_index-1)%navmen_count+navmen_count)%navmen_count;     //Weird modulo so that negative numbers become positive as well.
    }



    if(navmen_index==0){
        navbar_roboticist_order();
    }else if(navmen_index==1){
        navbar_botsmith_order();
    }else if(navmen_index==2){
        navbar_inventor_order();
    }else if(navmen_index==3){
        navbar_writer_order();  
    }else if(navmen_index==4){
        navbar_traveller_order();
    }
}





function page_redirect_roboticist(event){
    e_sweeper_neon.style.backgroundColor="var(--swatch_red)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_red)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_red";

    //Order the navbar menu items.
    navbar_roboticist_order();
    navmen_og_index=0;
    navmen_index=0;
    activate_page_roboticist();       
}

function page_redirect_botsmith(event){
    e_sweeper_neon.style.backgroundColor="var(--swatch_purple)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_purple)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_purple";

    //Order the navbar menu items.
    navbar_botsmith_order();
    navmen_og_index=1;
    navmen_index=1;
    activate_page_botsmith();
}

function page_redirect_inventor(event){
    e_sweeper_neon.style.backgroundColor="var(--swatch_orange)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_orange)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_orange";

    //Order the navbar menu items.
    navbar_inventor_order();
    navmen_og_index=2;
    navmen_index=2;
    activate_page_inventor();        
}

function page_redirect_writer(event){
    e_sweeper_neon.style.backgroundColor="var(--swatch_turqoise)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_turqoise)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_turqoise";

    //Order the navbar menu items.
    navbar_writer_order();
    navmen_og_index=3;
    navmen_index=3;
    activate_page_writer();
}

function page_redirect_traveller(event){
    e_sweeper_neon.style.backgroundColor="var(--swatch_green)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_green)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_green";

    //Order the navbar menu items.
    navbar_traveller_order();
    navmen_og_index=4;
    navmen_index=4;
    activate_page_traveller();  
}




function navbar_menu_redirect(event){
    e_sweeper_wrapper.style.left="calc(100vw + 5vmin)";         //Reset for left sweep animation

    if(navmen_index==0){
        setTimeout(() => {  page_redirect_roboticist(); }, 1000);
    }else if(navmen_index==1){
        setTimeout(() => {  page_redirect_botsmith(); }, 1000);
    }else if(navmen_index==2){
        setTimeout(() => {  page_redirect_inventor(); }, 1000);
    }else if(navmen_index==3){
        setTimeout(() => {  page_redirect_writer(); }, 1000); 
    }else if(navmen_index==4){
        setTimeout(() => {  page_redirect_traveller(); }, 1000);
    }
}










