const meal_container = document.getElementById("meal");
const meal_button = document.getElementById("get-meal");

meal_button.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((response) => {
      createMealHtml(response.meals[0]);
    });
});

const createMealHtml = (meal) => {
  const ingList = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingList.push(
        `${meal[`strIngredient${i}`]} -    ${meal[`strMeasure${i}`]} `
      );
    } else {
      break;
    }
  }

  const myMeal = `<div class="row">
          <div class="columns five">
            <img
              src="${meal.strMealThumb}"
              alt="Meal Image"
            />
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p><strong>Area:</strong> ${meal.strArea}</p>
            <p><strong>Tags:</strong> ${meal.strTags}</p>
            <h5>Ingredients:</h5>
            <ul>
             ${ingList.map((ingList) => `<li>${ingList}</li>`).join("")}
            </ul>
          </div>
          <div class="columns seven">
            <h4>${meal.strMeal}</h4>
            <p>
             ${meal.strInstructions}
            </p>
          </div>
        </div>

        <div class="row">
          <h5>Video Recipe</h5>
          <div class="videoWrapper">
            <iframe
              width="420"
              height="315"
              src="http://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"
            >
            </iframe>
          </div>
        </div>`;

  meal_container.innerHTML = myMeal;
};
