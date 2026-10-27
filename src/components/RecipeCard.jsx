import { useNavigate } from "react-router";

const RecipeCard = (props) => {
  const {info} = props;  
  const navigate = useNavigate();

  return (
     <div onClick= {() => navigate(`/recipe/${info.id}`)} className="card">
        <img src={info.image} alt="recipe img" />
        <div className="card-content">
            <h3>{info.name}</h3>
            <div className="rating-review">
                <p><i class="fa-solid fa-star"></i>{info.rating}</p>
                <p>({info.reviewCount} reviews)</p>
            </div>
        </div>  
    </div>
  )
}
export default RecipeCard;