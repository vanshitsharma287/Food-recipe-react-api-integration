import Header from "./components/Header";
import Hero from "./components/Hero";
import RecipesSection from "./components/RecipesSection";


 function App() {


   return ( 
   <div className="main-container">
     <Header />

     <div className="main-content">
       <Hero/>

       <RecipesSection  />

     </div>
   
   </div>
    )
}
export default App;
