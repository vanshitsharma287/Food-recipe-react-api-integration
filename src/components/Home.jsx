import Header from "./common/Header";
import Hero from "./Hero";
import RecipesSection from "./RecipesSection";

const Home = () => {
   return (
    <div className="main-container">
       

     <Header active="home" />

     <div className="main-content">
       <Hero/>

       <RecipesSection  />

     </div>
   
   </div>
   )
}
export default Home;