fetch("https://www.themealdb.com/api/json/v1/1/random.php") //// Replace with your actual JSON file or API endpoint URL
  .then((response) => response.json())
  .then((data) => {
    data.meals[0];
    //console.log(data.meals); //testing to see if the data is pickedup from json file or not
  })
  .catch((error) =>
    console.error("Error fetching json data, please check your url", error)
  );

let myMealData = data.meals[0];

console.log(myMealData);

let myMeal = `       <div class="row">
          <div class="columns five">
            <img
              src=${data.meals[0].strMealThumb}
              alt="Meal Image"
            />
            <p><strong>Category:</strong> Miscellaneous</p>
            <p><strong>Area:</strong> Canadian</p>
            <p><strong>Tags:</strong> UnHealthy, Speciality, HangoverFood</p>
            <h5>Ingredients:</h5>
            <ul>
              <li>Vegetable Oil - Dash</li>
              <li>Beef Gravy - 1 Can</li>
              <li>Potatoes - 5 thin cut</li>
              <li>Cheese Curds - 2 cups</li>
            </ul>
          </div>
          <div class="columns seven">
            <h4>Poutine</h4>
            <p>
              Heat oil in a deep fryer or deep heavy skillet to 365°F (185°C).
              Warm gravy in saucepan or microwave. Place the fries into the hot
              oil, and cook until light brown, about 5 minutes. Remove to a
              paper towel lined plate to drain. Place the fries on a serving
              platter, and sprinkle the cheese over them. Ladle gravy over the
              fries and cheese, and serve immediately.
            </p>
          </div>
        </div>

        <div class="row">
          <h5>Video Recipe</h5>
          <div class="videoWrapper">
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/UVAMAoA2_WU"
            >
            </iframe>
          </div>
        </div>`;

document.getElementById("meal").innerHTML = myMeal;
