const items = [
    {
      name: "apple",
      category: "fruit"
    },
    {
      name: "Cucumber",
      category: "vegetable"
    },
    {
      name: "Banana",
      category: "fruit"
    },
    {
      name: "Celery",
      category: "vegetable"
    },
    {
      name: "orange",
      category: "fruit"
    },
    {
      name: "sausage",
      category: "meat"
    },
    {
      name: "bacon",
      category: "meat"
    }
  ];

// select the first dropdown menu
const categories = document.getElementById(".select-categories");
// get unique category names
const unique_categories = [...new Set(items.map(item => item.category))]
// create a new option in the dropdown for every category
for (let i=0; i<unique_categories.length; i++){
    let option = document.createElement("option");
    option.setAttribute('value', unique_categories[i])

    let optionText = document.createTextNode(unique_categories[i]);
    option.appendChild(optionText);
    categories.appendChild(option);
};

// select second dropdown menu
var foodName = document.getElementById(".select-items");

// default options for second dropdown
var foodNames = (items.filter(item => item.category === categories.value).map(item=>item.name));
for (let i=0; i<foodNames.length; i++){
    let option = document.createElement("option");
    option.setAttribute('value', foodNames[i]);
    let optionText = document.createTextNode(foodNames[i]);
    option.appendChild(optionText);
    foodName.appendChild(option);
};


// handles changes to the first dropdown
var changeHandler = document.getElementById(".select-categories").addEventListener("change", () => {
    while (foodName.options.length > 0){
        foodName.remove(0)
    };

    var foodNames = (items.filter(item => item.category === categories.value).map(item=>item.name))
    for (let i=0; i<foodNames.length; i++){
        let option = document.createElement("option");
        option.setAttribute('value', foodNames[i]);
        let optionText = document.createTextNode(foodNames[i]);
        option.appendChild(optionText);
        foodName.appendChild(option);
    } ; 
});

var mainDiv = document.getElementById("main")
var title = document.createElement("h1");
var titleText = document.createTextNode(foodName.value);
title.appendChild(titleText)
mainDiv.prepend(title)

var titleGenerator = foodName.addEventListener("change", () => { 
    let newTitle = document.createElement("h1")
    let titleText = document.createTextNode(foodName.value)
    newTitle.appendChild(titleText)
    mainDiv.replaceChild(newTitle, mainDiv.firstChild);
})

var titleGenerator2 = categories.addEventListener("change", () => {
    let newTitle = document.createElement("h1")
    let titleText = document.createTextNode(foodName.value)
    newTitle.appendChild(titleText)
    mainDiv.replaceChild(newTitle, mainDiv.firstChild);
})
