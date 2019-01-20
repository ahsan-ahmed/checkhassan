console.log("hello");

function getUser(id, callback) {
  var user = { a: "ahsan" };
  setTimeout(() => callback(user), 3000);
  console.log("nexline after setTimeOut");
}

getUser(1, val => {
  console.log(val);
});
