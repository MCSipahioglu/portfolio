const e_blanket=[
    document.getElementById("project_page_roboticist_blanket"),
    document.getElementById("project_page_botsmith_blanket"),
    document.getElementById("project_page_designer_blanket"),
    document.getElementById("project_page_strategist_blanket"),
    document.getElementById("project_page_traveller_blanket")];      //Append when new page.

const e_return_button=[
    document.getElementById("project_page_return_button_roboticist"),
    document.getElementById("project_page_return_button_botsmith"),
    document.getElementById("project_page_return_button_designer"),
    document.getElementById("project_page_return_button_strategist"),
    document.getElementById("project_page_return_button_traveller")];

    
let e_pp;


function ProjectActivate(project_id){

    //Code to get blanket to spawn in on the "top" of the page wrt. overflowed scrolled position.
    e_p.style.overflowY="hidden";        //Lock the page at current scroll
    if(e_blanket[active_page_index]){
        e_blanket[active_page_index].style.transform="translateY("+ e_p.scrollTop +"px)";  //Make the blanket spawn in from the "top" of the scrolled position.
    }

    BlanketActivate();                    //Spawn in the blanket.

    //Activate Page[page_index][project_id]
    e_pp=document.getElementById(project_id);
    e_pp.style.height="calc(100%)";/* Must size %100 rather than 100vh to fix android cutoff issue*/
    e_pp.style.opacity="100%";
    e_pp.style.visibility="visible";

}

function BlanketActivate(){
    if(e_blanket[active_page_index]){
        e_blanket[active_page_index].style.height="calc(100%)";/* Must size %100 rather than 100vh to fix android cutoff issue*/
        e_blanket[active_page_index].style.opacity="100%";
        e_return_button[active_page_index].style.display="flex";
    }

    MobileSidebarColor(colors[active_page_index]);
}



function ProjectDeactivate(){
    BlanketDeactivate();
    setTimeout(() => {                                   //Give time to blanket to despawn via animation.
        if(e_blanket[active_page_index]){
            e_blanket[active_page_index].style.transform="translateY(0px)";  //Reset blanket position to absolute top of the page.
        }

        e_p.style.overflowY="scroll";        //Unlock the page at current scroll
     }, 400);



    //Deactivate Page[project_id]
    e_pp.style.height="0vmin";
    e_pp.style.opacity="0%";
    e_pp.style.visibility="hidden";

}

function BlanketDeactivate(){
    if(e_blanket[active_page_index]){
        e_blanket[active_page_index].style.height="0%";
        e_blanket[active_page_index].style.opacity="0%";
        e_return_button[active_page_index].style.display="none";
    }
    MobileSidebarColor("var(--bg_black)");

}




