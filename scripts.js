// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const brandForm = document.getElementById('brandForm');
    const brandList = document.getElementById('brandList');

    brandForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(brandForm);
        const name = formData.get('name');
        const image = formData.get('image');
        const link = formData.get('link');

        const response = await fetch('/brands', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, image, link })
        });

        if (response.ok) {
            alert('Brand added successfully');
            fetchBrands();
        } else {
            alert('Failed to add brand');
        }
    });

    async function fetchBrands() {
        const response = await fetch('/brands');
        const data = await response.json();

        brandList.innerHTML = '';

        data.forEach(brand => {
            const brandItem = document.createElement('div');
            brandItem.classList.add('brand');

            const image = document.createElement('img');
            image.src = brand.image;
            image.alt = brand.name;

            const nameLink = document.createElement('a');
            nameLink.href = brand.link;
            nameLink.textContent = brand.name;

            brandItem.appendChild(image);
            brandItem.appendChild(nameLink);

            brandList.appendChild(brandItem);
        });
    }

    fetchBrands();
});