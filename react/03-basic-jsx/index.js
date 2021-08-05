// ====================
// Example 1
// ====================
const team = "pudo";
ReactDOM.render(
    <h1>Hello {team}</h1>,
    document.getElementById("example-1")
)
// ====================
// Example 2
// ====================
const someStyle = {color: "red"};
const someId = "id1000";
const content = (
    <div style={someStyle} id={someId}>
        <h2>Colorful hello {team}</h2>
    </div>
);
ReactDOM.render(
    content,
    document.getElementById("example-2")
)