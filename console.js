// ! console.assert()
// ? writes an error message to the console if the assertion is false. If the assertion is true, nothing happens

for (let number = 0; number < 10; number++) {
  console.log(number);
  console.assert(number % 2 === 0, `the number ${number} is not even`);
}

const myObj = { name: "Marika", lastname: "Fabiani" };
console.assert(5 + 5 == 11, myObj);
console.assert(5 + 5 == 10, "è true");

// ! console.count()
// ? logs the number of times that this particular call to count() has been called

let user = "";

function greet() {
  console.count();
  return `ciao ${user}`;
}

user = "Marika";
greet();
greet();
user = "Alice";
greet();
greet();
greet();
greet();
greet();

// ! console.countReset()
// ? resets counter used with console.count()

let user = "";

function greet() {
  console.count(user);
  return `ciao ${user}`;
}

user = "Marika";
greet();
greet();
greet();

user = "Alice";
greet();
greet();
greet();
console.countReset("Marika");
user = "Marika";
greet();
greet();

// ! console.debug()
// ? The message is only displayed to the user if the console is configured to display debug output (Debug or Verbose)

for (let number = 0; number < 10; number++) {
  console.debug("ciao %s, ho chiamato console %i", "Marika", number);
}

//string substitutions
/* %o or %O
Outputs a JavaScript object. Clicking the object name opens more information about it in the inspector.

%d or %i
Outputs an integer. Number formatting is supported, for example console.log("Foo %.2d", 1.1) will output the number as two significant figures with a leading 0: Foo 01.

%s
Outputs a string.

%f
Outputs a floating-point value. Formatting is supported, for example console.log("Foo %.2f", 1.1) will output the number to 2 decimal places: Foo 1.10. */

// ! console.group() e console.groupEnd()
// ? creates a new inline group in the Web console log, causing any subsequent console messages to be
// ? indented by an additional level, until console.groupEnd() is called.

console.log("Livello esterno");
console.group("Primo gruppo");
console.log("Livello 2");
console.group();
console.log("Livello 3");
console.warn("Altro livello 3");
console.groupEnd();
console.log("Si ritorna al livello 2");
console.groupEnd();
console.log("Si ritorna al livello esterno");

// ! console.groupCollapse()
// ? The user will need to use the disclosure button next to it to expand it, revealing the entries created in the group.

console.log("Livello esterno");
console.group("Primo gruppo");
console.log("Livello 2");
console.group();
console.log("Livello 3");
console.groupCollapsed();
console.warn("Altro livello 3");
console.groupEnd();
console.log("Si ritorna al livello 2");
console.groupEnd();
console.log("Si ritorna al livello esterno");

// ! console.table()
// ? displays tabular data as a table.

const colors = ["black", "rosa", "orange", "red", "blue"];
console.table(colors);

const profile = {
  name: "Marika",
  surname: "Fabiani",
  age: 23,
  address: { via: "via rossi", number: 2 },
  hobbies: ["cooking", "reading", "tv series"],
};
console.table(profile);

// ! console.time(), console.timeLog(), console.timeEnd()
// ? console.time() = starts a timer you can use to track how long an operation takes
// ? console.timeLog() = logs the current value of a timer that was previously started by calling console.time()
// ? console.timeEnd() = stops a timer that was previously started by calling console.time()

console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
