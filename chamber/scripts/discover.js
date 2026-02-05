const discoverGrid = document.querySelector(".discover-grid");
const dataUrl = "data/places.json"; // update if your file name differs

async function getDiscoverData() {
    try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        displayDiscoverCards(data.places);
    } catch (error) {
        console.error(error);
    }
}

function displayDiscoverCards(places) {
    places.forEach(place => {
        const card = document.createElement("section");
        card.classList.add("discover-card");

        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = place.image;
        img.alt = place.name;
        img.loading = "lazy";
        img.width = 300;
        img.height = 200;

        figure.appendChild(img);

        const content = document.createElement("div");
        content.classList.add("discover-card-content");

        const name = document.createElement("h2");
        name.textContent = place.name;

        const address = document.createElement("address");
        address.textContent = place.address;

        const description = document.createElement("p");
        description.textContent = place.description;

        const button = document.createElement("button");
        button.textContent = "Learn More";

        content.append(name, address, description, button);
        card.append(figure, content);
        discoverGrid.appendChild(card);
    });
}

getDiscoverData();
