// var imageArr = ["pig/pig.png", "social/social.png", "candy/candy.png", "dating/dating.png", "equifax/equifax.png", "sleep/sleep.png"]; 
// var currentImage = document.querySelector(".imageSwitch"); 
// var currentPosition = 0; 


// function changePicture() {
    //     var filler = "file:///C:/Users/Simone/OneDrive/Documents/WebDev/GitHub/simonemayers.github.io/"; 
//     for(var i=0; i < imageArr.length + 1; i++) {
    
    //         if(i>=6) {
        //             i=0; 
        //             currentImage.style.display = "block";
//             currentPosition = i; 
//             currentImage.src = filler + imageArr[i]; 
//             // i+=1;
//             console.log("restart"); 
//         } else {
    //             currentImage.style.display = "block";
    //             currentPosition = i; 
    //             currentImage.src = filler + imageArr[i]; 
    //             // i+=1;
    //             console.log(i); 
    //         }
    //         return currentImage; 
//     }
//     console.log(currentImage); 
// }; 
// changePicture(); 
// document.querySelector("#left-button").textContent = "Previous"
// document.querySelector("#right-button").textContent = "Next"

document.querySelector(".text").style.display = "none"
const cards = Array.from(document.querySelectorAll(".content .card"))
currentIndex = 0
function displayCard(){
    document.querySelector(".text").style.display = "none"
    return document.querySelector(".content .card").style.display = "flex"
}
document.querySelector("#wheel div").appendChild(cards[currentIndex])
displayCard()



function nextCards(){
    document.querySelector("#wheel div .card").remove()
    // document.querySelector(".text").style.display = "none"
    if(currentIndex < cards.length -1){
        document.querySelector("#wheel div").appendChild(cards[currentIndex += 1])
        return displayCard()
    } else {
        currentIndex = 0
        document.querySelector("#wheel div").appendChild(cards[currentIndex])
        return displayCard()
    }
}
function previousCards(){
    document.querySelector("#wheel div .card").remove()
    if(currentIndex !== 0){
        document.querySelector("#wheel div").appendChild(cards[currentIndex -= 1])
        return displayCard()
    } else {
        currentIndex = cards.length -1
        document.querySelector("#wheel div").appendChild(cards[currentIndex])
        return displayCard()
    }
}
document.querySelector("#left-button").addEventListener("click", previousCards)
document.querySelector("#right-button").addEventListener("click", nextCards)



// var nextButton = document.querySelectorAll(".button")
// nextButton.addEventListener("click", changePicture); 

    
    