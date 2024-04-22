/*
export const name = "Suze";
export const phone = "21132132231";
*/

/*
const name = "Sadeed";
const phone = "4546546444";

export { name, phone };
*/

//Default Export

const message = () => {
  const name = "Sadeed";
  const phone = "4546546444";
  return "My name is " + name + " and my Phone no is " + phone;
};

export default message;
