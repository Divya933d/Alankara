const products = {
    "Modern Living Room": [
        {
            Image: "assets/preview-one.jpg",
            Description: "A contemporary open-plan living space featuring clean lines, neutral tones, and natural materials.",
            Features: ["Modern", "Minimalist", "Open Plan"]
        },
        {
            Image: "gallery/LR01.jpg",
            Description: "A cozy reading nook with a comfortable armchair and a small bookshelf.",
            Features: ["Cozy", "Reading Nook", "Small Space"]
        },
        {
            Image: "gallery/LR02.jpg",
            Description: "A bright and airy living room with large windows and a comfortable sofa.",
            Features: ["Bright", "Airy", "Comfortable"]
        },
        {
            Image: "gallery/LR03.jpg",
            Description: "A stylish living room with a mix of modern and vintage furniture.",
            Features: ["Stylish", "Modern", "Vintage"]
        }
    ]
    ,
    "Luxury Master Bedroom": [
        {
            Image: "assets/Lotus Design.jpg",
            Description: "An elegant bedroom suite designed for comfort and relaxation with premium materials and finishes.",
            Features: ["Luxury", "Elegant", "Comfort"]
        }
    ],
    "Contemporary Kitchen": [
        {
            mage: "assets/Kitchen.jpg",
            Description: "A functional and stylish kitchen with state-of-the-art appliances and smart storage solutions.",
            Features: ["Contemporary", "Functional", "Smart Storage"]
        }
    ],
    "Minimalist Design Studio": [
        {
            Image: "assets/preview-four.jpg",
            Description: "A clean, organized workspace that promotes creativity and focus with natural lighting.",
            Features: ["Minimalist", "Workspace", "Natural Light"]
        }
    ],
    "Elegant Dining Room": [
        {
            Image: "assets/dining.jpg",
            Description: "A sophisticated dining space perfect for entertaining with warm lighting and rich textures.",
            Features: ["Elegant", "Entertaining", "Warm Lighting"]
        }
    ],
    "Creative Office Space": [
        {
            Image: "assets/preview-six.jpg",
            Description: "An inspiring office environment designed to boost productivity and employee well-being.",
            Features: ["Creative", "Productive", "Wellness"]
        }
    ]
}

const Cards = document.querySelectorAll('.preview-cards');
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalFeatures = document.getElementById('modalFeatures');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentProductList = [];
let currentIndex = 0;

function showProduct(index, name) {
  const product = currentProductList[index];
  if (!product) return;

  modalTitle.textContent = name;
  modalImage.src = product.Image || "";
  modalDesc.textContent = product.Description;

  modalFeatures.innerHTML = "";
  product.Features.forEach(f => {
    const tag = document.createElement("span");
    tag.textContent = f;
    tag.style.border = "1px solid #ccc";
    tag.style.padding = "0.2em 0.5em";
    tag.style.margin = "0.2em";
    tag.style.borderRadius = "0.5em";
    tag.style.display = "inline-block";
    modalFeatures.appendChild(tag);
  });
}

Cards.forEach((card) => {
  card.addEventListener('click', () => {
    const name = card.querySelector('h3').innerText.trim();
    currentProductList = products[name];
    currentIndex = 0;

    if (currentProductList && currentProductList.length > 0) {
      showProduct(currentIndex, name);
      modal.style.display = "flex";
    }
  });
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentProductList.length) % currentProductList.length;
  showProduct(currentIndex, modalTitle.textContent);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentProductList.length;
  showProduct(currentIndex, modalTitle.textContent);
});

closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = "none";
});
