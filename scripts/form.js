// Dynamic Product Data Array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power zones", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate Product Name options dynamically
const selectElement = document.getElementById("product-name");

if (selectElement) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Using array id as value
        option.textContent = product.name; // Using array name as text display
        selectElement.appendChild(option);
    });
}

// Footer details
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;