const productData = [
    { id: "1", name: "DrinkWare Category", price: 0, category: "Category", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80", description: "DrinkWare" },
    { id: "2", name: "CookWare Category", price: 0, category: "Category", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYzm7Iv1k-PxANBqKG-Uce1IRp-0Nuurib8RWPwBjG16I0PD7rxmLW_Dw&s=10", description: "CookWare" },
    { id: "3", name: "TableWare Category", price: 0, category: "Category", image: "https://static.vecteezy.com/system/resources/thumbnails/038/936/847/small/ai-generated-kitchen-utensils-on-wooden-table-over-blue-wall-background-photo.jpg", description: "TableWare" },
    { id: "4", name: "FoodStorage Category", price: 0, category: "Category", image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=700&q=80", description: "FoodStorage" },

    { id: "5", name: "Drinkware Set", price: 43.05, category: "Bestseller", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80", description: "Reusable drinkware for a greener lifestyle" },
    { id: "6", name: "Cookware Set", price: 78, category: "Bestseller", image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=700&q=80", description: "Non-toxic cookware for sustainable cooking" },
    { id: "7", name: "Tableware Set", price: 22, category: "Bestseller", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gnx3ezsTObMrluy-WD8FLzyfTWk9vhXTJ2VOVVBN33xvLyrSMmAN6fY&s=10", description: "Kettle & Toaster eco-friendly set" },
    { id: "8", name: "Food Storage Set", price: 30, category: "Bestseller", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=700&q=80", description: "Bamboo Made Utensil Holder" },

    { id: "9", name: "Serving Bowl", price: 15, category: "Gallery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrKjUfYMr5hih9c8hLL1zluh0oz7SxOiCW3oBa0udUDqCdU8Bj6IbSdk8&s=10", description: "Handmade serving bowl" },
    { id: "10", name: "Prep Set", price: 25, category: "Gallery", image: "https://media.istockphoto.com/id/1459412701/photo/wooden-kitchen-utensils-on-white-background-knolling-concept.jpg?s=612x612&w=0&k=20&c=qrT7DEYeQ91gS_IZoms_oG_wYF5zxdLi3rWM7OAhryM=", description: "Wooden prep set" },
    { id: "11", name: "Storage Jars", price: 18, category: "Gallery", image: "https://img.drz.lazcdn.com/static/bd/p/2f92d8a3d2e89dd6ebedb5d193885cbd.jpg_720x720q80.jpg", description: "Glass storage jars" },
    { id: "12", name: "Kitchen Set", price: 35, category: "Gallery", image: "https://media.istockphoto.com/id/586162072/photo/various-kitchen-utensils.jpg?s=612x612&w=0&k=20&c=auwz9ZHqkG_UlKw5y-8UqvMLznA2PySQ_Jt3ameL1aU=", description: "Everyday kitchen set" }
];

async function loadproducts() {
    renderProducts(productData);
    Search();
}

function renderProducts(data) {
    const categorycontainer = document.getElementById("all-gallery");
    const productcontainer = document.getElementById("products");
    const gallerycontainer = document.getElementById('gallery-products');

    categorycontainer.innerHTML = "";
    productcontainer.innerHTML = "";
    gallerycontainer.innerHTML = "";

    data.forEach(product => {
        const card = document.createElement("article");
        card.classList.add("card");

        if (product.category === "Category") {
            card.innerHTML = `
      <p class="shop-badge">Shop <svg class="icon"><use href="#icon-arrow-right"></use></svg></p>
      <img src="${product.image}" alt="${product.description}">
      <p class="shop-text">Explore <span class="custom-text">${product.description}</span></p>
    `;
            categorycontainer.appendChild(card);
        }
        else if (product.category === "Bestseller") {
            card.innerHTML = `
            <p class="badge">Bestseller</p>
      <img src="${product.image}" alt="${product.description}">
      <h3>${product.description}</h3>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <p class="cost">$${Number(product.price)}</p>
        <a href="#cart" class="cart">+ Cart</a>
      </div>
    `;
            productcontainer.appendChild(card);
        }
        else if (product.category === "Gallery") {
            card.innerHTML = `
      <img src="${product.image}" alt="${product.description}">
      <h3>${product.description}</h3>
    `;
            gallerycontainer.appendChild(card);
        }
    });



}

function Search() {
    const search = document.getElementById("search");

    search.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();

            const filteredData = productData.filter(product =>
      product.description.toLowerCase().includes(query)
    );

        renderProducts(filteredData);
    }
);

}

loadproducts();