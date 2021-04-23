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




    
    