DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS foodTable CASCADE;

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    userName varchar(15)
);

CREATE TABLE IF NOT EXISTS foodTable (
    food_id SERIAL PRIMARY KEY,
    specificFood varchar(25) NOT NULL,
    calorieValue INT NOT NULL,
    foodGenre varchar(25) NOT NULL,
    user_id INT,
    CONSTRAINT food_user_id 
        FOREIGN KEY (user_id) 
            REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);