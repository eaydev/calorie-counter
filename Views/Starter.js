const starter = {
  render(){
    let view =
    `
    <div class="starter-container">
      <h1 class="starter-heading">Welcome to <span class="blue-highlight">'A Calorie-counter'</span> by e.a.</h1>
      <h3 class="starter-subheading">Please enter your <span class="blue-highlight">macronutrient goals</span> below:</h3>

      <div class="starter-calorie-entry">
        <h1 class="starter-calorie-entry-heading">Total Calories:</h1>

        <span class="blue-highlight">
          <h2 id="starter-calorie-entry-total">
              2456
          </h2>
        </span>


        <div id="starter-calorie-entry-form">
            <form id="calorie-entry-form">
              <div class="calorie-value-row">
                <div class="calorie-value-row-input">
                  <input type="text" name="protein">g
                </div>

                <div class="calorie-value-row-label">
                  <label for="protein">Protein</label>
                </div>
              </div>

              <div class="calorie-value-row">
                <div class="calorie-value-row-input">
                  <input type="text" name="carbohydrates">g
                </div>

                <div class="calorie-value-row-label">
                  <label for="protein">Carbohydrates</label>
                </div>
              </div>

              <div class="calorie-value-row">
                <div class="calorie-value-row-input">
                  <input type="text" name="fats">g
                </div>
                <div class="calorie-value-row-label">
                  <label for="fats">Fats</label>
                </div>
              </div>
            </form>
        </div>
      </div>

      <button id="starter-save-button">
        Let's go
      </button>

    </div>
    `;

    return view;
  },
}
