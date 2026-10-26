import Header from "./common/Header"
import "../css/recipeInfo.css"

const RecipeInfo = (props) => {



    return (
        <div className="main-container">

            <Header />

            <div className="recipe-info">
                <div className="recipe-basic">
                    <div className="recipe-img">
                        <img src="https://cdn.dummyjson.com/recipe-images/1.webp" alt="recipeImg" />
                        <button><i class="fa-regular fa-bookmark"></i> Save</button>
                    </div>

                    <div className="recipe-basic-info">
                        <span id="cuisine-type"><strong>Italian</strong></span>
                        <h1>Classic Margherita Pizza</h1>

                        <div className="rating-review">
                            <span><i class="fa-solid fa-star"></i><strong>4.6</strong></span>
                            <span id="reviews">(98 Reviews)</span>
                        </div>

                        <div className="recipe-meta-info">
                            <div className="recipe-cook-details">
                                <i class="fa-regular fa-clock"></i>
                                <div className="recipe-meta-info-text">
                                    <h5>Prep Time</h5>
                                    <small><strong>20</strong> mins</small>
                                </div>
                            </div>

                            <div className="recipe-cook-details">
                                <i class="fa-solid fa-mortar-pestle"></i>
                                <div className="recipe-meta-info-text">
                                    <h5>Cook Time</h5>
                                    <small><strong>20</strong> mins</small>
                                </div>
                            </div>

                            <div className="recipe-cook-details">
                                <i class="fa-solid fa-utensils"></i>
                                <div className="recipe-meta-info-text">
                                    <h5>Servings</h5>
                                    <small><strong>4</strong></small>
                                </div>
                            </div>

                            <div className="recipe-cook-details" id="calories-info">
                                <i class="fa-solid fa-fire"></i>
                                <div className="recipe-meta-info-text">
                                    <h5>Calories</h5>
                                    <small><strong>3000</strong> per serving</small>
                                </div>
                            </div>

                        </div>

                        <div className="recipe-tags">
                             <strong>Pizza</strong>
                             <strong>Italian</strong>
                             <strong>Dinner</strong>
                        </div>

                    <p>A classic italian pizza with a crispy crust, fresh tomato sauce,
                         and mozzarella cheese and fragnent basil.Simple and delicious!.
                         </p>
                </div>
                </div>



            </div>

            <div className="recipe-making">
                <div className="left-section">
                    <div className="ingridient-heading-section">
                        <div className="ingridient-heading">
                            <i class="fa-brands fa-envira"></i>
                            <span><h2>Ingredients</h2></span>
                        </div>
                        <span>(For 4 servings)</span>
                    </div>
                    
                    <ul className="ingredients-list">
                         <li><i class="fa-regular fa-circle"></i>Pizza dough</li>
                         <li><i class="fa-regular fa-circle"></i>Tomato sauce</li>
                         <li><i class="fa-regular fa-circle"></i>Fresh mozarella cheese</li>
                         <li><i class="fa-regular fa-circle"></i>Fresh basil leaves</li>
                         <li><i class="fa-regular fa-circle"></i>Olive oil</li>
                         <li><i class="fa-regular fa-circle"></i>Salt</li>
                         <li><i class="fa-regular fa-circle"></i>Oregano</li>
                         <li><i class="fa-regular fa-circle"></i>Garlic</li>
                         <li><i class="fa-regular fa-circle"></i>Cherry tomato</li>
                         <li><i class="fa-regular fa-circle"></i>Parmesan cheese</li>
                         <li><i class="fa-regular fa-circle"></i>Red chilli flakes</li>
                    </ul>

                    <div className="instruction-section">
                        <h2><i class="fa-brands fa-readme"></i> Instructions</h2>
                        <ol>
                            <li>Preheat the oven to 475°F (245°C).</li>
                            <li>Roll out the pizza dough and spread tomato sauce evenly</li>
                            <li>Add slices of fresh mozzarella cheese</li>
                            <li>Bake in the preheated oven for 10–12 minutes, until the crust is golden and the cheese is bubbly.</li>
                            <li>Remove from the oven, add fresh basil leaves and a drizzle of olive oil.</li>
                            <li>Season with salt, oregano and chili flakes if desired. Slice and serve hot.</li>
                        </ol>



                    </div>



                </div>

                <div className="right-section">
                    <div className="recipe-details">
                       <h3><i class="fa-solid fa-file-lines"></i> Recipe Details</h3>

                       <div className="recipe-making-info">
                            <div className="item">
                                <span><i class="fa-solid fa-utensils"></i>Cuisine</span>
                                <strong>Italian</strong>
                            </div>

                            <div className="item">
                                <span><i class="fa-solid fa-mortar-pestle"></i>Meal Type</span>
                                <strong>Dinner</strong>
                            </div>

                            <div className="item">
                                <span><i class="fa-regular fa-user"></i>Difficulty</span>
                                <strong>Easy</strong>
                            </div>

                            <div className="item">
                                <span><i class="fa-regular fa-clock"></i>Cook Time</span>
                                <p><strong>15</strong> minute</p>
                            </div>

                            <div className="item">
                                <span><i class="fa-solid fa-stopwatch"></i>Prep Time</span>
                                <p><strong>20</strong> minute</p>
                            </div>

                            <div className="item">
                                <span><i class="fa-solid fa-fire"></i>Calories</span>
                                <p><strong>300</strong> per serving</p>
                            </div>

                            <div className="item">
                                <span><i class="fa-solid fa-utensils"></i>Servings</span>
                                <strong>4</strong>
                            </div>

                            <div className="item">
                                <span><i class="fa-regular fa-star"></i>Rating</span>
                               <p><strong>4.6</strong> (98 reviews)</p>
                            </div>

                       </div>
                       <hr />


                    </div>

                    <div className="tags">
                        <h4 className="tag-heading">Tags</h4>
                        <div className="recipe-tag">
                            <span>Pizza</span>
                            <span>Italian</span>
                        </div>

                    </div>

                    <div className="save-card">
                       <i className="fa-regular fa-heart" />
                       <div class="card-greeting">
                        <h4>Love this recipe?</h4>
                        <p>Save it to your collection and cook it anytime!</p>
                        <button><i class="fa-regular fa-bookmark"></i> Save Recipe</button>
                       </div>
                    </div>



                </div>


                
            </div>

    </div >
    )
}

export default RecipeInfo