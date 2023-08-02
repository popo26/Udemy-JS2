import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {
  //Step 3: Write your code here to make this behave like the solution website.
  const JSobject = JSON.parse(recipeJSON);
  let choice = req.body.choice;
  let protein = "";
  let preparation = "";
  let salsaName = "";
  let ingredients = [];
  let quantity = []; 

  if (choice === "chicken"){
      let chickenChoice = JSobject[0]["ingredients"];
      protein = chickenChoice["protein"]["name"];
      preparation = chickenChoice["protein"]["name"];
      salsaName = chickenChoice["salsa"]["name"];
      const i = Object.values(chickenChoice["toppings"]);

    for (let i=0;i<chickenChoice["toppings"].length; i++){
      ingredients.push(chickenChoice["toppings"][i].name);
      quantity.push(chickenChoice["toppings"][i].quantity);
    }

  res.render("index.ejs", {protein:protein, preparation:preparation, salsaName:salsaName, ingredients:ingredients, quantity:quantity});
     
  }else if (choice === "beef"){
    let beefChoice = JSobject[1]["ingredients"];
    protein = beefChoice["protein"]["name"];
    preparation = beefChoice["protein"]["name"];
    salsaName = beefChoice["salsa"]["name"];
    const i = Object.values(beefChoice["toppings"]);


    for (let i=0;i<beefChoice["toppings"].length; i++){
      ingredients.push(beefChoice["toppings"][i].name);
      quantity.push(beefChoice["toppings"][i].quantity);
    }
    res.render("index.ejs", {protein:protein, preparation:preparation, salsaName:salsaName, ingredients:ingredients, quantity:quantity});
  }else{
    let fishChoice = JSobject[2]["ingredients"];
    protein = fishChoice["protein"]["name"];
    preparation = fishChoice["protein"]["name"];
    salsaName = fishChoice["salsa"]["name"];
    const i = Object.values(fishChoice["toppings"]);

    for (let i=0;i<fishChoice["toppings"].length; i++){
      ingredients.push(fishChoice["toppings"][i].name);
      quantity.push(fishChoice["toppings"][i].quantity);
    }
    res.render("index.ejs", {protein:protein, preparation:preparation, salsaName:salsaName, ingredients:ingredients, quantity:quantity});
  }
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
