const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD231", name: "Frontend Development I", credits: 3, completed: false },
  { code: "CSE110", name: "Programming Basics", credits: 2, completed: true }
];

const container = document.getElementById("courses");
const creditsSpan = document.getElementById("credits");

function displayCourses(list) {
  container.innerHTML = "";
  let totalCredits = 0;

  list.forEach(course => {
    const card = document.createElement("div");
    card.textContent = `${course.code} - ${course.name}`;
    card.classList.add("course");

    if (course.completed) {
      card.classList.add("completed");
    }

    container.appendChild(card);
    totalCredits += course.credits;
  });

  creditsSpan.textContent = totalCredits;
}

displayCourses(courses);

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    let filtered = courses;
    if (filter === "wdd") filtered = courses.filter(c => c.code.startsWith("WDD"));
    if (filter === "cse") filtered = courses.filter(c => c.code.startsWith("CSE"));

    displayCourses(filtered);
  });
});
