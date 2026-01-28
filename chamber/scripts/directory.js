const url = 'data/members.json';
const display = document.querySelector("#members-container");

// Fetch members from JSON
async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members, "grid"); // initial view = grid
}

// Function to display members
const displayMembers = (members, view) => {
    display.innerHTML = ""; // clear previous content
    display.classList.remove("grid", "list");
    display.classList.add(view);

    members.forEach((member) => {
        const card = document.createElement("section");
        card.classList.add("member");

        let imgHTML = '';
        if(view === "grid") {
            imgHTML = `<img src="${member.image}" alt="${member.name}" loading="lazy">`;
        }

        card.innerHTML = `
            ${imgHTML}
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Website</a>
        `;
        display.appendChild(card);
    });
};

// Toggle buttons
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", async () => {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members, "grid");
});

listbutton.addEventListener("click", async () => {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members, "list");
});

// Load members initially
getMembers();
