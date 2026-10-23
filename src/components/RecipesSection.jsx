import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import Pagination from "./common/Pagination";
const PAGE_LIMIT = 8;

const RecipesSection = () => {
    const [recipes, setRecipes] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const getAllRecipes = async () => {
        try{
            const result = await fetch(`https://dummyjson.com/recipes?limit=${PAGE_LIMIT}`);
            const jsonResult =  await result.json();
            setTotalItems(jsonResult.total);
            setRecipes(jsonResult.recipes);
        }
        catch(error){
            console.log("error occured");
        }

    }

    useEffect(() => {
        getAllRecipes();
    }, []);


    return (
           <section className="recipe-section">
                <h2>Recipes</h2>
                <div className="recipe-cards">
                    {recipes.map(rec => (
                        <RecipeCard info={rec} />
                    ))}
                </div>

                <Pagination limit={PAGE_LIMIT} total={totalItems} currentPage={currentPage} />
             </section>
        
    )
}
export default RecipesSection;






