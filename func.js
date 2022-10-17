function printSomething() {
    let testString = 'Hello World';
    let output = document.getElementById("output");
    output.innerHTML = '<p>' + testString + '</p>';
    console.log(testString);
}