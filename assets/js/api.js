let ingredients = [];
let nutriscore_moy = 0;
let nbNutriscores = 0;

async function loadDataAndFetch() {
    try {
        const responseData = await fetch("assets/js/ingredients.json");
        const DATA_JSON = await responseData.json();

        await fetch_open_food_facts(DATA_JSON);

        updateHtml();
        updateProducts();
        updateNutriscoreMoy();
        updateHeroImage();
    } catch (error) {
        console.error("Erreur lors de l'initialisation :", error);
    }
}

async function fetch_open_food_facts(DATA_JSON) {
    for (const product of DATA_JSON) {
        const code = product.barcode;

        try {
            const url =
                "https://world.openfoodfacts.net/api/v2/product/" +
                code +
                "?fields=product_name,nutriscore_grade,nutriscore_score,image_front_small_url,image_front_url";

            const response = await fetch(url, { mode: "cors" });

            if (!response.ok) {
                throw new Error("Erreur HTTP " + response.status);
            }

            const data = await response.json();

            let product_name = "";
            let image_front_small_url = "";
            let image_front_url = "";
            let nutriscore_grade = "Inconnu";

            if (data.status === 1) {
                const productData = data.product;

                product_name = productData.product_name || "Nom inconnu";
                image_front_small_url =
                    productData.image_front_small_url ||
                    productData.image_front_url ||
                    "";
                image_front_url = productData.image_front_url || "";

                nutriscore_grade = productData.nutriscore_grade
                    ? productData.nutriscore_grade.toUpperCase()
                    : "Inconnu";

                console.log(
                    "Produit : " + product_name +
                    " | Code-barres : " + code +
                    " | Nutri-score : " + nutriscore_grade
                );

                if (!["A", "B", "C", "D", "E"].includes(nutriscore_grade)) {
                    nutriscore_grade = "Inconnu";
                }

                switch (nutriscore_grade) {
                    case "A":
                        nutriscore_moy += 5;
                        nbNutriscores++;
                        break;
                    case "B":
                        nutriscore_moy += 4;
                        nbNutriscores++;
                        break;
                    case "C":
                        nutriscore_moy += 3;
                        nbNutriscores++;
                        break;
                    case "D":
                        nutriscore_moy += 2;
                        nbNutriscores++;
                        break;
                    case "E":
                        nutriscore_moy += 1;
                        nbNutriscores++;
                        break;
                }
            }

            ingredients.push({
                product_name,
                image_front_small_url,
                image_front_url,
                nutriscore_grade,
            });

        } catch (error) {
            console.error("Erreur pour " + code, error);

            ingredients.push({
                product_name: product.product_name,
                image_front_small_url: "",
                image_front_url: "",
                nutriscore_grade: "Inconnu",
            });
        }
    }
}

function updateHtml() {
    const ingredientsList = document.getElementById("ingredients-list");

    ingredientsList.innerHTML = "";

    ingredients.forEach((ingredient) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            ${ingredient.product_name}
            <strong>(${ingredient.nutriscore_grade})</strong>
        `;

        ingredientsList.appendChild(li);
    });
}

function updateProducts() {
    const container = document.getElementById("ingredients-container");

    container.innerHTML = "";

    ingredients.forEach((ingredient) => {
        const card = document.createElement("div");
        card.className = "col";

        const nutriClass = {
            A: "bg-success",
            B: "bg-primary",
            C: "bg-warning text-dark",
            D: "bg-danger",
            E: "bg-dark",
        }[ingredient.nutriscore_grade] || "bg-secondary";

        const imageHtml = ingredient.image_front_small_url
            ? `<img
                    src="${ingredient.image_front_small_url}"
                    class="card-img-top img-fluid object-fit-contain"
                    style="height: 160px;"
                    alt="${ingredient.product_name}"
                    loading="lazy"
                >`
            : "";

        card.innerHTML = `
            <div class="card h-100 shadow-sm">
                ${imageHtml}
                <div class="card-body">
                    <h5 class="card-title mb-2">${ingredient.product_name}</h5>
                    <span class="badge ${nutriClass}">Nutri-score ${ingredient.nutriscore_grade}</span>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

function updateNutriscoreMoy() {
    const nutrimoyenElement = document.getElementById("nutriscore-global");

    let nutriMoyenText = "Inconnu";

    if (nbNutriscores > 0) {
        const moy = Math.round(nutriscore_moy / nbNutriscores);

        switch (moy) {
            case 5: nutriMoyenText = "A"; break;
            case 4: nutriMoyenText = "B"; break;
            case 3: nutriMoyenText = "C"; break;
            case 2: nutriMoyenText = "D"; break;
            case 1: nutriMoyenText = "E"; break;
        }
    }

    nutrimoyenElement.innerHTML = `
        <div class="d-inline-flex align-items-center gap-3 px-4 py-3 rounded-4 bg-success text-white shadow-sm">
            <div class="fs-5">Nutri-score global</div>
            <div class="fs-3 fw-bold">${nutriMoyenText}</div>
        </div>
    `;
}

function updateHeroImage() {
    const hero = document.getElementById("recipe-hero");
    if (!hero) {
        return;
    }

    if (hero.dataset.heroFixed === "true") {
        return;
    }

    const withImage = ingredients.find((item) => item.image_front_url || item.image_front_small_url);
    if (withImage) {
        const heroImage = withImage.image_front_url || withImage.image_front_small_url;
        hero.style.backgroundImage = `linear-gradient(120deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.6)), url('${heroImage}')`;
    }
}

loadDataAndFetch();
