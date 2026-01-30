const params = new URLSearchParams(window.location.search);
const results = document.getElementById("results");

const fields = [
  ["First Name", "fname"],
  ["Last Name", "lname"],
  ["Email", "email"],
  ["Mobile Phone", "phone"],
  ["Business Name", "business"],
  ["Submitted On", "timestamp"]
];

fields.forEach(([label, key]) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${label}:</strong> ${params.get(key) || ""}`;
  results.appendChild(li);
});
