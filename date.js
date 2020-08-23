exports.getDate = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long"
});
