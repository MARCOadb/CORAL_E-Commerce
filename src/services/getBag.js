export const getBag = (user) => {
  let bag;
  user?.bag ? (bag = user?.bag) : (bag = []);
  return bag;
};
