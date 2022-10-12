var getButton = document.getElementById("getButton")
var flexboxContainer = document.getElementById("flexContainer")
var addFoodButton = document.getElementById("addFoodButton")
var specificfoodFI = document.getElementById("specificfoodFI")
var foodgenreFI = document.getElementById("foodgenreFI")
var calorievalueFI = document.getElementById("calorievalueFI")
  
function pullinfo () {
 fetch('https://food-front-api.onrender.com/api/food') 
.then (data => data.json())
.then (data => {
    for(let i = 0;i < data.length;i++){
        const curr = data[i]
        let foodCard = document.createElement('div')
        foodCard.className = 'flexbox-item' 
        foodCard.innerHTML = `<br> Food: ${curr.specificfood}`
        foodCard.innerHTML += `<br> Food Genre: ${curr.foodgenre} `
        foodCard.innerHTML +=  `<br> Calories: ${curr.calorievalue}`
        flexboxContainer.append(foodCard)   
        }

   })
}
pullinfo()
   addFoodButton.addEventListener('click', () => {
        var newFood = {
            specificfood: `${specificfoodFI.value}`,
            foodgenre:    `${foodgenreFI.value}`,
            calorievalue: `${calorievalueFI.value}`
            }
           
        let options = {
            method:'POST',
            headers:
             {
            'Content-Type': 'application/json'
             },
            body: JSON.stringify(newFood)
            }


        fetch('https://food-front-api.onrender.com/api/food', options)
        .then(() => {
            flexboxContainer.innerHTML = ""
            pullinfo()
        })
   })

