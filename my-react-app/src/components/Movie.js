import PropTypes from "prop-types"
import {Link} from "react-router-dom";
function Movie({id, medium_cover_image,title,summary,genres}) {
  return (
        <div>
          <img src={medium_cover_image} alt="medium_cover_image"/>
          <h3><Link to={`/movie/${id}`}>{title}</Link></h3>
          <p>{summary}</p>
          <ul>{genres.map((g)=>
            <li key={g}>{g}</li>)}
          </ul>
        </div>
  );
}
Movie.propType = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary:  PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;
