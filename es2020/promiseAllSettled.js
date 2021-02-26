import fetch from "node-fetch";

const promises = [
  fetch("https://google.com"),
  fetch("https://does-not-exist/"),
];

/* BEFORE ES2020 */

// get an error if any promise is rejected
// await Promise.all(promises).then(console.log).catch(console.log);

// mapping results
// const reflect = (promise) =>
//   promise
//     .then((value) => ({ status: "fulfilled", value }))
//     .catch((reason) => ({ status: "rejected", reason }));

// console.log(await Promise.all(promises.map(reflect)));

/* AFTER ES2020 */

console.log(await Promise.allSettled(promises));
