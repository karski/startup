const truncate = (str, words = 5, ellipsis = true) => {
  let arr = str.split(" ");
  arr = arr.slice(0, words);
  let newStr = `${arr.join(" ")}${ellipsis ? "..." : ""}`;
  return newStr;
};

export default truncate;
