const regex = /(?<day>[0-9]{2})\/(?<month>[0-9]{2})\/(?<year>[0-9]{4})/;
const globalRegex = new RegExp(regex, "g");
const string = "TDC Recife Online | 28/10/2020 à 30/10/2020";

let match;
let matches = [];

/* BEFORE ES2020 */

// calling with a global regex
// matches = string.match(globalRegex);

// calling with a non global regex
// matches = string.match(regex);

// executing match individually
// while ((match = globalRegex.exec(string))) {
//   matches.push(match);
// }

/* AFTER ES2020 */
// console.log(string.matchAll(globalRegex)); // Object RegExp Iterator

// converting to array
// matches = [...string.matchAll(globalRegex)]; // Regex Iterator

// or iterating the result
// for (const match of string.matchAll(globalRegex)) {
//   matches.push(match);
// }

// EXCEPTION: calling the matchAll with a non global regex
// matches = string.matchAll(regex); // throw an exception

console.log(matches);
