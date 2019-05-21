var happyImages = [
    "https://images.lifealth.com/uploads/2018/03/commitments-to-make-if-you-want-to-be-happy.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDpJySewuhBEreoxLDBbVofhSkK94WW6T6vxc_to7Eo2QLoy4",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOCwTKGvzQe8hnMmkVtjUcMZrf1HFhsbAU8DVyG_K4LnKBXQsmw"
];
var sadImages = ["https://66.media.tumblr.com/5182165ec9da43f51772ee30b7c30e6d/tumblr_inline_pc6ho4tHLW1s89tl0_540.gif","https://i.pinimg.com/originals/b2/79/66/b27966140db68d0621628f2309f8a443.gif","https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fi.huffpost.com%2Fgen%2F4082068%2Fimages%2Fn-VIOLENCE-WOMEN-628x314.jpg"];
var tiredImages = ["https://gkng5olag22mpz1r551iq1dd-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/feeling-tired-2560x1280.jpg","https://media3.giphy.com/media/NWg7M1VlT101W/giphy.gif","https://media.self.com/photos/57d88ab246d0cb351c8c4cef/4:3/w_728,c_limit/always-tired-feat.jpeg"];
var hungryImages = ["","https://media.tenor.com/images/f85c932039fc7e45c6c1f946502a5f2b/tenor.gif","https://media.giphy.com/media/xTeV7rzJsedl4Bi9k4/giphy.gif","https://i.ytimg.com/vi/ySNTW8jZT-s/maxresdefault.jpg" ];


$('button').click(function(){
    var mood = $('input').val();
    $(".images").html("");
    if(mood ==="happy"){
    happyMood();
    }
    else if(mood==="sad"){
         sadMood();
    }
    else if(mood==="tired"){
         tiredMood();
    }
    else{
        hungryMood();
        }
   
});


function happyMood(){
  
    $("body").css("background-color","yellow"); 
    $(".images").html("");
    happyImages.forEach(function(happy){
       $(".images").append("<img src=" + happy + ">");   
    
    });
}
function sadMood(){

 $("body").css("background-color","blue"); 
 $(".images").html("");
  sadImages.forEach(function(sad){
 $(".images").append("<img src=" + sad + ">");   
    
    });
    
    
}
function tiredMood(){
 
  $("body").css("background-color","green"); 
  $(".images").html("");
   tiredImages.forEach(function(tired){
 $(".images").append("<img src=" + tired + ">");   
    
    });

 
}
function hungryMood(){
 $("body").css("background-color","red"); 
 $(".images").html("");
  hungryImages.forEach(function(hungry){
 $(".images").append("<img src=" + hungry+ ">");   
    
    });

}

function changeBackgroundColor(color){
}

function changeTextColor(color){
}

function displayImages(images){
  
}


