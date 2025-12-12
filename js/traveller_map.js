//DTC and Map Element
e_dtc=document.getElementById("desktop_traveller_container");
e_dtc.addEventListener("wheel", MapZoom, true);
e_dtc.addEventListener("mousedown", MapMouseDown, true);
e_dtc.addEventListener("mousemove", MapMouseMove, true);
e_dtc.addEventListener("mouseup", MapMouseUp, true);

e_map=document.getElementById("world_map");

//Parameters
const zoom_speed=0.3125;
min_zoom=1;
const max_zoom=60;
const map_width=1009.6727;
const map_height=665.96301;

const dtc_size = e_dtc.getBoundingClientRect();
panning_allowed = false;
panned=false;

//Map Set Up
function MapSetUp(){
    ratio_width  = dtc_size.width/map_width;
    ratio_height = dtc_size.height/map_height;

    if(ratio_width < ratio_height){                 //Smaller ratio governs.
        zoom=ratio_width;                           //Zoom in such that the width of the map matches the window.
        min_zoom=zoom;
        initial_translate_x=0;                      //Since there is still a height difference, translate just the half of the height difference to center.
        initial_translate_y= (dtc_size.height-map_height*zoom)/2;
    }else{
        zoom=ratio_height;                          //Vice versa.
        min_zoom=zoom;
        initial_translate_x= (dtc_size.width-map_width*zoom)/2;
        initial_translate_y=0;
    }

}
MapSetUp();

//Variables
translate = { scale: zoom, translateX: initial_translate_x, translateY: initial_translate_y };
initialContentsPos = { x:0, y:0 };
initialZoomPos = { x:0, y:0 };
pinnedMousePosition = { x:0, y:0 };
mousePosition = { x:0, y:0 };

MapUpdate();

//Mouseup before onclick
function CountryActivate(country_id){
    if(panned==false){
        ProjectActivate(country_id);
    }else{
        panned=false;
    }

}

function MapMouseDown(event){
    initialContentsPos.x = translate.translateX;
	initialContentsPos.y = translate.translateY;
	pinnedMousePosition.x = event.clientX;
	pinnedMousePosition.y = event.clientY;
	panning_allowed = true;
}



function MapMouseMove(event){
    mousePosition.x = event.clientX;
	mousePosition.y = event.clientY;
	if (panning_allowed) {
        const diffX = (mousePosition.x - pinnedMousePosition.x);
        const diffY = (mousePosition.y - pinnedMousePosition.y);
        translate.translateX = initialContentsPos.x + diffX;
        translate.translateY = initialContentsPos.y + diffY;

        if(diffX!=0 || diffY!=0){
            panned=true;
        }
        
	}
	MapUpdate();
}



function MapMouseUp(event){
    panning_allowed = false;
    setTimeout(() => panned=false);   //Allows for panned=false to be execute after onclick event. (Resets panned for next loop without interfering ith the current one)
}



function MapZoom(event){
    // Ignore horizontal scroll (side scroll wheel)
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        return; 
    }
    prev_zoom=zoom;
    if(event.deltaY>0 && (zoom-prev_zoom*zoom_speed<min_zoom)){         //Don't try to zoom out if we are maxed zoomed out.
        zoom=min_zoom;                                                  //In this case just go to the initial zoom & centered scale.
        translate.translateX = initial_translate_x;
        translate.translateY = initial_translate_y;
    }else{
        if(event.deltaY<0 && (zoom+prev_zoom*zoom_speed>max_zoom)){   //Limit max zoom in and no shift etc. necessary since zoom doesn't change.
            zoom=max_zoom;
        }else{
            if(event.deltaY<0){
                zoom+=prev_zoom*zoom_speed;                                 //Must zoom exponentially more to feel linear.
            }else{
                zoom-=prev_zoom*zoom_speed;
            }
        }

        //Compansate for the zoom shift & also zoom on where the cursor is
        mousePosition.x = event.clientX;
        mousePosition.y = event.clientY;

        mousePosition.x = event.clientX - dtc_size.x;
        mousePosition.y = event.clientY - dtc_size.y;

        const contentMousePosX = (mousePosition.x - translate.translateX);
        const contentMousePosY = (mousePosition.y - translate.translateY);  
        const x = mousePosition.x - (contentMousePosX * (zoom / prev_zoom));
        const y = mousePosition.y - (contentMousePosY * (zoom / prev_zoom));
    
        translate.translateX = x;
        translate.translateY = y;
    } 
    
    translate.scale = zoom;
    MapUpdate();    
}



function MapUpdate(){
    const matrix = `matrix(${translate.scale},0,0,${translate.scale},${translate.translateX},${translate.translateY})`;
    e_map.style.transform = matrix;


  };

