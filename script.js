var imageArr = ["pig/pig.png", "social/social.png", "candy/candy.png", "dating/dating.png", "equifax/equifax.png", "sleep/sleep.png"]; 


function changePicture() {
    for(var i=0; i < imageArr.length; i++) {
            var next = i+1; 
            var currentImage = document.querySelectorAll(".imageSwitch").src; 
            if(currentImage != imageArr[6]) {
                currentImage =  imageArr[next]; 
            } else {
                currentImage = imageArr[0]; 
            }
    }
}; 
changePicture(); 
    
    
