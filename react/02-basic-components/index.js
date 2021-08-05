const meals = [
    "Mantı",
    "Karpuz Peynir",
    "Tost",
    "Salata"
]

function MealList() {
    return React.createElement(
        "ul",
        {className: "meal"},
        // Show console warning for missing key prop
        //meals.map(value => React.createElement("li", null, value))
        meals.map((value, i) => React.createElement("li", {key: i}, value))
    )
}

ReactDOM.render(
    React.createElement(MealList, null, null),
    document.getElementById("example")
);