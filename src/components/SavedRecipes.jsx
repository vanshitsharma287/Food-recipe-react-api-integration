import { useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";
import Header from "./common/Header";
import RecipeCard from "./RecipeCard";

const SavedRecipes = () => {
  const [recipesData, setRecipesData] = useState([]);

  const getRecipesData = async () => {
    try {
      const savedRecipes = getLocalStorage("savedRecipes");
      if(savedRecipes?.length) {
        const recipesPromise = savedRecipes.map(recId => fetch(`https://dummyjson.com/recipes/${recId}`));
        const recipeResponse = await Promise.all(recipesPromise);
        
        const promiseResponse = recipeResponse.map(rec => rec.json());
        const jsonResponse = await Promise.all(promiseResponse);
        setRecipesData(jsonResponse);
      }
    }

    catch (error) {
      console.log("error occured");
    }

  }

  useEffect(() => {
    getRecipesData();
  }, []);

  return (
    <div className="main-container">


      <Header active="saved" />

      <div className="main-content">

        <div className="recipe-cards">
         {recipesData.map(rec => (
           <RecipeCard info={rec} /> 
          ))}

        </div>


      </div>

    </div>
  )
}
export default SavedRecipes;