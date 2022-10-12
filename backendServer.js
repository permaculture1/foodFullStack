const express = require('express');
const cors = require('cors')
const {Client} = require('pg');
const PORT = 3150;
const connectionString = 'postgresql://postgres:docker@localhost:5432/fooddb';
const client = new Client ({
    connectionString:connectionString,
});
const app = express()
app.use(express.json())
client.connect()
app.use(cors())

let corsOptions = {
    config:'/solofullstack/index.html'
}

app.route('/api/food')
.get((req,res) => {
    client.query('SELECT * FROM foodTable')
    .then(result => {
        res.status(200).send(result.rows)
    })
})

.post((req,res) => {
    let {specificfood, calorievalue, foodgenre, user_id} = req.body 
    console.log(req.body)
     client.query('INSERT INTO foodtable (specificfood, calorievalue, foodgenre, user_id) VALUES ($1,$2,$3,$4)',[specificfood,calorievalue,foodgenre,user_id],
     (error,results) => {
        if(error) {
            console.log(error)
        }
        console.log(specificfood, calorievalue, foodgenre, user_id)
        res.status(201).send(req.body)
     })
    })

app.route("/api/food/:id")
.get((req,res) => {
    let id = req.params.id
    client.query(`SELECT * FROM foodtable WHERE food_id=${id}`)
    .then(result => {
        res.status(200).send(result.rows)
    })
})

.delete((req,res) => {
let id = req.params.id
client.query(`DELETE FROM foodtable WHERE food_id=${id}`)
.then( () => {
    res.status(202).send(`Deleted food item with id of ${id}`)
 })
})

.patch((req, res) => {
    let id = req.params.id;    
    let {specificFood, calorieValue, foodGenre, user_id} = req.body
    if(specificFood) {
        client.query(`UPDATE foodtable SET specificFood = $1 WHERE user_id = $2`,[specificFood,id]) 
    }
    if(calorieValue) {
        client.query(`UPDATE foodtable SET calorieValue = $1 WHERE user_id = $2`,[calorieValue,id])
    }
    if(foodGenre) {
        client.query(`UPDATE foodtable SET foodGenre = $1 WHERE user_id = $2`,[foodGenre,id])
    }
    if(user_id){
        client.query(`UPDATE foodtable SET user_id = $1 WHERE user_id = $2`,[user_id,user_id])
    }
 
    res.status(201).send(`food with ${id} updated`)
   
})


app.listen(PORT,() => {
    console.log("listening on port,", PORT)
})

