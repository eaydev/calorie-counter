const starterPage =

`<div class="start">
  <h1>Welcome to Calorie Counter</h1>
  <h3>Please enter your macronutrients below</h3>

  <div class="calorie-entry-initial">
    <h2>Total Calories:<br>2456</h2>
  </div>
</div>`;

const calorieEntryForm =

`<div id="calorie-value-entry">
  <form>
    <div class="calorie-value-row">
      <input type="text" name="protein">g
      <label for="protein">Protein</label>
    </div>

    <div class="calorie-value-row">
      <input type="text" name="carbohydrates">g
      <label for="protein">Carbohydrates</label>
    </div>

    <div class="calorie-value-row">
      <input type="text" name="fats">g
      <label for="fats">Fats</label>
    </div>

    <button>Submit</button>
  </form>
</div>`;

const calorieDashboard = 
`<div class="macroChart-container">
  <canvas id="macroChart">
  </canvas>
</div>
<div>
  <h2>Food Diary</h2>

  <div class="food-entry">
    <div class="food-entry-information">
      <h3>Food name</h3>
      <p>Protein: 20g</p>
      <p>Carbohydrates: 60g</p>
      <p>Fat: 40g</p>
    </div>
    <div class="food-entry-controls">
      <button>Edit</button>
      <button>Delete</button>
    </div>

  </div>

</div>`;
