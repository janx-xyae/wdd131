const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "https://churchofjesuschrist.org"
  }
];

document.addEventListener("DOMContentLoaded", () => {
    
    const container = document.getElementById("temple-cards");
    const galleryTitle = document.getElementById("gallery-title");
    
    
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    
    function displayTemples(filteredTemples) {
        container.innerHTML = "";
        filteredTemples.forEach(temple => {
            const card = document.createElement("figure");
            card.classList.add("temple-card");
            
            card.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
            `;
            container.appendChild(card);
        });
    }

    
    displayTemples(temples);


    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            navLinks.forEach(l => l.classList.remove("active"));
            e.currentTarget.classList.add("active");
        });
    });

    
    document.getElementById("nav-home").addEventListener("click", (e) => {
        e.preventDefault();
        galleryTitle.textContent = "Home";
        displayTemples(temples);
    });

    document.getElementById("nav-old").addEventListener("click", (e) => {
        e.preventDefault();
        galleryTitle.textContent = "Old Temples (Built before 1900)";
        const oldTemples = temples.filter(t => {
            const year = parseInt(t.dedicated.split(",")[0]);
            return year < 1900;
        });
        displayTemples(oldTemples);
    });

    document.getElementById("nav-new").addEventListener("click", (e) => {
        e.preventDefault();
        galleryTitle.textContent = "New Temples (Built after 2000)";
        const newTemples = temples.filter(t => {
            const year = parseInt(t.dedicated.split(",")[0]);
            return year > 2000;
        });
        displayTemples(newTemples);
    });

    document.getElementById("nav-large").addEventListener("click", (e) => {
        e.preventDefault();
        galleryTitle.textContent = "Large Temples (Over 90,000 sq ft)";
        const largeTemples = temples.filter(t => t.area > 90000);
        displayTemples(largeTemples);
    });

    document.getElementById("nav-small").addEventListener("click", (e) => {
        e.preventDefault();
        galleryTitle.textContent = "Small Temples (Under 10,000 sq ft)";
        const smallTemples = temples.filter(t => t.area < 10000);
        displayTemples(smallTemples);
    });
});