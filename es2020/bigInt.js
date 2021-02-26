const maxInteger = Number.MAX_SAFE_INTEGER; //2ˆ53

/* BEFORE ES2020 */
// console.log(maxInteger + 4);

/* AFTER ES2020 - BigInt */

console.log(BigInt(maxInteger) + 3n);
