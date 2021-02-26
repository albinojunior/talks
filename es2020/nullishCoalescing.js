const values = {
  emptyText: "",
  falseValue: false,
  nullValue: null,
  zeroValue: 0,
};

/* BEFORE ES2020 - Or operator || */

// const newValues = {
//   emptyText: values.emptyText || "Hello World", // 'Hello World'
//   falseValue: values.falseValue || true, // true
//   nullValue: values.nullValue || "some other default", // 'some other default'
//   undefinedValue: values.undefinedValue || "some other default", // 'some other default'
//   zeroValue: values.zeroValue || 300, // 300
// };

/* AFTER ES2020 - Nullish coalescing operator ?? */

const newValues = {
  emptyText: values.emptyText ?? "Hello World", // ''
  falseValue: values.falseValue ?? true, // false
  nullValue: values.nullValue ?? "some other default", // 'some other default'
  undefinedValue: values.undefinedValue ?? "some other default", // 'some other default'
  zeroValue: values.zeroValue ?? 300, // 0
};

console.log(newValues);
