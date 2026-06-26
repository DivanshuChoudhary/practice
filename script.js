const search = document.getElementById("search");

const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase();

    cards.forEach((card) => {

        const title = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category = button.dataset.category;

        cards.forEach((card) => {

            if (
                category === "all" ||
                card.classList.contains(category)
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});