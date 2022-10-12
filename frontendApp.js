var getButton = document.getElementById("getButton")
var flexboxContainer = document.getElementById("flexContainer")
var addFoodButton = document.getElementById("addFoodButton")
var specificfoodFI = document.getElementById("specificfoodFI")
var foodgenreFI = document.getElementById("foodgenreFI")
var calorievalueFI = document.getElementById("calorievalueFI")
  
function pullinfo () {
 fetch('http://localhost:3150/api/food')
.then (data => data.json())
.then (data => {
    //centralDiv.textContent = `Food:${data[0].specificfood}   Calories:${data[0].calorievalue} Genre/Reigon:${data[0].foodgenre} `
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


        fetch('http://localhost:3150/api/food', options)
        .then(() => {
            flexboxContainer.innerHTML = ""
            pullinfo()
        })
   })


    // getButton.addEventListener('click', () => {
    //     console.log(" yonk ")
    // })
