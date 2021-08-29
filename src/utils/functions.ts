export function getLS(key: string) {
  let val = localStorage.getItem(key) || "";
  return ["undefined", "null", "NaN"].indexOf(val) > -1 ? "" : val;
}

export const makeId = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
