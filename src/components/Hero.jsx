import { useEffect, useState } from "react";

const Hero = () => {
    const [foodImg, setFoodImg] = useState("");
    
    const getSingleRecipe = async () => {

        try{
            const result = await fetch('https://dummyjson.com/recipes/1');
            const jsonResult = await result.json();
            setFoodImg(jsonResult.image);
      }
      catch(error) {
       console.log("error :", error);
      }
    }

    useEffect(() => {
        getSingleRecipe();
    }, []);

    return (
        <section className="hero">
            <div className="hero-text">
                <h3>Enjoy the taste of authentic Italian Margherita Pizza, topped with rich tomato sauce, melted mozzarella</h3>
                <p>cheese, and fresh basil leaves. Baked to golden perfection with a crispy crust and irresistible flavors,</p>
                <small>every slice is a little piece of happiness. Fresh ingredients, simple flavors, and pure deliciousness in every bite!</small>
            </div>
            <img src={foodImg} alt="food image" />
             
        </section>
    )

}
export default Hero;    