import About from "./components/About";
import { Route, Routes } from "react-router";
import SavedRecipes from "./components/SavedRecipes";
import RecipeInfo from "./components/RecipeInfo";
import Home from "./components/Home";


 function App() {


   return ( 
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<SavedRecipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe/:id" element={<RecipeInfo />} />
        </Routes>
    )
}
export default App;
