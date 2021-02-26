const object = {
  techs: ["JavaScript", "React", "Node"],
  getNumber: () => 30,
  // company: {
  //   address: { street: "R. dos Arcos" },
  // },
};

/* BEFORE ES2020 */

// accessing deep properties
// console.log(
//   object.company && object.company.address && object.company.address.street,
// );
// doesn't work
// console.log(object.company.address.street); // cannot read property

// calling a function
// console.log(object.getNumber && typeof object.getNumber === "function" && object.getNumber());
// doesn't work
// console.log(object.getNumber()); // is not a function

// accessing indexes from unknown array
// console.log(object.techs && object.techs[0]);
// doesn't work
// console.log(object.techs[0]); // cannot read property

/* AFTER ES2020 - Optional Chaining */

// accessing deep properties
// console.log(object.company?.address?.street);

// calling a function
// console.log(object.getNumber?.());

// accessing indexes from unknown array
console.log(object.techs?.[1]);
