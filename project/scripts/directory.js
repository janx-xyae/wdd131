
const spots = [
    {
        name: "The Bookworm's Nook",
        category: "food",
        image: "images/coffe-and-food.jpg",
        description: "A quiet coffee shop hidden behind an old brick alley, filled with floor-to-ceiling bookshelves.",
        address: "404 Library Way, Downtown",
        hours: "Mon-Sat: 7:00 AM - 6:00 PM",
        tip: "Try the lavender latte and grab the velvet armchair in the corner!"
    },
    {
        name: "Whispering Pines Hollow",
        category: "nature",
        image: "images/nature.jpg",
        description: "A secluded nature park featuring small waterfalls and zero highway noise.",
        address: "Mile Marker 12, North Route",
        hours: "Daily: Sunrise - Sunset",
        tip: "The third trail path leads directly to a completely private stone bench."
    },
    {
        name: "St. Jude's Forgotten Crypt",
        category: "history",
        image: "images/history-and-art.jpg",
        description: "An architectural wonder from 1840 tucked away right underneath the old town square.",
        address: "Sublevel 2, Historical Plaza",
        hours: "Thu-Sun: 10:00 AM - 4:00 PM",
        tip: "Ask the volunteer guide at the door about the secret brick markings."
    }
];


document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("location-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");

    
    renderCards(spots, grid);

    
    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            
            filterButtons.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");

            
            const category = e.target.getAttribute("data-filter");
            const filteredSpots = category === "all" ? spots : spots.filter(spot => spot.category === category);
            
            renderCards(filteredSpots, grid);
        });
    });

    // Inyectar fechas del footer de manera dinámica
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
});

function renderCards(data, container) {
    container.innerHTML = ""; 

    if (data.length === 0) {
        container.innerHTML = "<p>No spots found in this category.</p>";
        return;
    }

    data.forEach((spot, index) => {
        const card = document.createElement("article");
        card.className = "card";
        
        card.innerHTML = `
            <img src="${spot.image}" alt="${spot.name}">
            <div class="card-content">
                <span class="card-category">📍 ${spot.category}</span>
                <h3>${spot.name}</h3>
                <p>${spot.description}</p>
                <button class="details-btn" data-index="${index}">Reveal Details</button>
                <div class="card-details hidden" id="details-${index}">
                    <p><strong>Address:</strong> ${spot.address}</p>
                    <p><strong>Hours:</strong> ${spot.hours}</p>
                    <p><strong>Insider Tip:</strong> <em>${spot.tip}</em></p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    const detailButtons = container.querySelectorAll(".details-btn");
    detailButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            const detailsDiv = document.getElementById(`details-${index}`);
            
            if (detailsDiv.classList.contains("hidden")) {
                detailsDiv.classList.remove("hidden");
                e.target.textContent = "Hide Details";
            } else {
                detailsDiv.classList.add("hidden");
                e.target.textContent = "Reveal Details";
            }
        });
    });
}