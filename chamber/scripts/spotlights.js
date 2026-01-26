const spotlightContainer = document.querySelector("#spotlight-container");
const dataURL = "data/members.json";

async function loadSpotlights() {
    const response = await fetch(dataURL);
    const data = await response.json();

    const qualified = data.members.filter(
        member => member.level === 2 || member.level === 3
    );

    const shuffled = qualified.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {
        const card = document.createElement("section");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${member.level === 3 ? "Gold" : "Silver"}</p>
        `;

        spotlightContainer.appendChild(card);
    });
}

loadSpotlights();
