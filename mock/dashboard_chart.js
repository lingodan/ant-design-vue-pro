function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [20, 40, 19, 20, 190, 30];
      break;
    default:
      console.log("Default Method");
  }
  return res;
}

module.exports = chart;
