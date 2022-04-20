$ (document).ready ( function () {

    var video = document.getElementById ('video');
    var dugme_klikni = document.getElementsByTagName ('button')[0];
    var dugme_zaustavi = document.getElementsByTagName ('button')[1];
    var reklama = document.getElementById ('reklama');


    dugme_klikni.onclick = function () {


        video.play();

        
    if(video.currentTime == 0) {
        video.pause();
       
       $ ('.reklama').show();

 var ukljuci = setTimeout (function () {      
 $('.reklama').prepend ('<div class="zatvori">x</div>') ;

$('.zatvori').on ('click',function () {


    $(this).parent().hide();
    video.play();
    reklama.pause();
    

})


 },10000);



    }

    
    



       
}
       


   

    



    dugme_zaustavi.onclick = function () {


        video.pause();
    

    }


  
    
    
   
    

    


});