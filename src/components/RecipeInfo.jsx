import Header from "./common/Header"
import "../css/recipeInfo.css"
import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { getLocalStorage, setlocalStorage } from "../utils/localStorage";

const RecipeInfo = () => {
    const { id } = useParams();
    const [recipeData, setRecipeData] = useState({});
    const [isSaved, setIsSaved] = useState(false);

    const getRecipeData = async () => {
        try {
            const result = await fetch(`https://dummyjson.com/recipes/${id}`);
            const jsonResult = await result.json();
            setRecipeData(jsonResult);
            checkIsSaved(jsonResult.id);
        } 

        catch (error) {
            console.log("error occured");
        }

    }

    useEffect(() => {
        getRecipeData();
    }, []);

    const checkIsSaved = (id) => {
        const savedRecipes = getLocalStorage("savedRecipes");
        if(savedRecipes?.length) {
          savedRecipes.includes(id) ? setIsSaved(true):setIsSaved(false);
        }
    }

    const handleSaveRecipe = () => {
        const savedRecipes = getLocalStorage("savedRecipes");
        if(savedRecipes?.length) {
            if(savedRecipes.includes(recipeData.id)) {
              const updated = savedRecipes.filter(recId => recId != recipeData.id);
              setlocalStorage("savedRecipes", updated);
            } else {
                savedRecipes.push(recipeData.id);
                setlocalStorage("savedRecipes", savedRecipes);
            }
        } else {
            setlocalStorage("savedRecipes", [recipeData.id]);
        }
        checkIsSaved(recipeData.id);
    }


    return (
        <div className="main-container">

            <Header />

            <div className="recipe-info">
                <div className="recipe-basic">
                    <div className="recipe-img">
                        <img src={recipeData.image} alt="recipeImg" />
                        <button onClick={handleSaveRecipe} className={isSaved ? "active":""} ><i class="fa-regular fa-bookmark"></i> Save</button>
                    </div>

                    <div className="recipe-basic-info">
                        <span id="cuisine-type"><strong>{recipeData.cuisine}</strong></span>
                        <h1>{recipeData.name}</h1>

                        <div className="rating-review">
                            <span><i class="fa-solid fa-star"></i><strong>{recipeData.rating}</strong></span>
                            <span id="reviews">({recipeData.reviewCount} Reviews)</span>
                        </div>

                        <div className="recipe-meta-info">
                            <div className="recipe-cook-details">
                                <i class="fa-regular fa-clock"></i>
                                <div className="recipe-meta-info-text">
                                    <h5>Prep Time</h5>
                                    <small><strong>{recipeData.prepTimeMinutes}</strong> mins</small>
                                </div>
                            </div>

                            <div className="recipe-cook-details">
                                <i class="fa-solid fa-mortar-pestle"></i>
                                <div className="recipe-meta-info-text">
                                    <h5>Cook Time</h5>
                                    <small><strong>{recipeData.cookTimeMinutes}</strong> mins</small>
                                </div>
                            </div>

                            <div className="recipe-cook-details">
                                <i class="fa-solid fa-utensils"></i>
                                <div className="recipe-meta-info-text">
                                    <h5>Servings</h5>
                                    <small><strong>{recipeData.servings}</strong></small>
                                </div>
                            </div>

                            <div className="recipe-cook-details" id="calories-info">
                                <i class="fa-solid fa-fire"></i>
                                <div className="recipe-meta-info-text">
                                    <h5>Calories</h5>
                                    <small><strong>{recipeData.caloriesPerServing}</strong> per serving</small>
                                </div>
                            </div>

                        </div>

                        <div className="recipe-tags">
                            {recipeData?.tags?.map(tag => (
                                <strong>{tag}</strong>
                            ))}
                        </div>

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
                        <span>(For {recipeData.servings} servings)</span>
                    </div>

                    <ul className="ingredients-list">
                         {recipeData?.ingredients?.map(ingredients =>
                        <li><i class="fa-regular fa-circle"></i>{ingredients}</li>
                         )}
                    </ul>

                    <div className="instruction-section">
                        <h2><i class="fa-brands fa-readme"></i> Instructions</h2>
                        <ol>
                            {recipeData?.instructions?.map(instructions =>

                            <li>{instructions}</li>
                            )}
                            
                        </ol>



                    </div>



                </div>

                <div className="right-section">
                    <div className="recipe-details">
                        <h3><i class="fa-solid fa-file-lines"></i> Recipe Details</h3>

                        <div className="recipe-making-info">
                            <div className="item">
                                <span><i class="fa-solid fa-utensils"></i>Cuisine</span>
                                <strong>{recipeData.cuisine}</strong>
                            </div>

                            <div className="item">
                                <span><i class="fa-solid fa-mortar-pestle"></i>Meal Type</span>
                                <strong>{recipeData.mealType}</strong>
                            </div>

                            <div className="item">
                                <span><i class="fa-regular fa-user"></i>Difficulty</span>
                                <strong>{recipeData.difficulty}</strong>
                            </div>

                            <div className="item">
                                <span><i class="fa-regular fa-clock"></i>Cook Time</span>
                                <p><strong>{recipeData.cookTimeMinutes}</strong> minute</p>
                            </div>

                            <div className="item">
                                <span><i class="fa-solid fa-stopwatch"></i>Prep Time</span>
                                <p><strong>{recipeData.prepTimeMinutes}</strong> minute</p>
                            </div>

                            <div className="item">
                                <span><i class="fa-solid fa-fire"></i>Calories</span>
                                <p><strong>{recipeData.caloriesPerServing}</strong> per serving</p>
                            </div>

                            <div className="item">
                                <span><i class="fa-solid fa-utensils"></i>Servings</span>
                                <strong>{recipeData.servings}</strong>
                            </div>

                            <div className="item">
                                <span><i class="fa-regular fa-star"></i>Rating</span>
                                <p><strong>{recipeData.rating}</strong> ({recipeData.reviewCount})</p>
                            </div>

                        </div>
                        <hr />


                    </div>

                    <div className="tags">
                        <h4 className="tag-heading">Tags</h4>
                        <div className="recipe-tag">
                            {recipeData?.tags?.map(tag =>
                            <span>{tag}</span>
                            )}
                           
                        </div>

                    </div>

                    <div className="save-card">
                        <i className="fa-regular fa-heart" />
                        <div class="card-greeting">
                            <h4>Love this recipe?</h4>
                            <p>Save it to your collection and cook it anytime!</p>
                            <button onClick={handleSaveRecipe} className={isSaved ? "active":""}><i class="fa-regular fa-bookmark" ></i> Save Recipe</button>
                        </div>
                    </div>



                </div>



            </div>

        </div >
    )
}

export default RecipeInfo