function navigationButton(){
    $('#nav-button').click(function(){
        $("#nav-items-wrapper-small").slideToggle(400);
    });
}

function styling(){

    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let section = document.getElementsByClassName("hero-section-wrapper");
        let mask = document.getElementsByClassName("hero-section-mask");
        for(let counter=0;counter<mask.length;counter++){
            mask[counter].style.height = "100vh";
            section[counter].style.height ="100vh";
        }
        //welcome_caption[0].style.fontSize = "14pt";
    }
   
}
navigationButton();
styling();
