

window.onload = function(){
    let headerFix = document.getElementById('shopify-section-header');
    let ht = headerFix.clientHeight;
    
    window.addEventListener('scroll', function(){
        if(ht<window.scrollY){
            headerFix.classList.add("headrFixed");
        }else{
            headerFix.classList.remove("headrFixed");
        }
    });
}



