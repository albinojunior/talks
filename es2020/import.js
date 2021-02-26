const moduleName = "utils.js";
const welcome = "Bem-vindos a trilha da Liferay, no TDC Recife Online.";

/* BEFORE ES2020 */
// import { print } from "./modules/utils.js";

// print(welcome);

/* AFTER ES2020 */

// inside a synchronous functions
// const func = () => {
//   import(`./modules/${moduleName}`).then(({ print }) => print(welcome));
// };

// func();

/*  inside asynchronous functions or with conditional import */
const asyncFunc = async (showMessage) => {
  if (showMessage) {
    const { print } = await import(`./modules/${moduleName}`);

    print(welcome);
  }
};

asyncFunc(true);
