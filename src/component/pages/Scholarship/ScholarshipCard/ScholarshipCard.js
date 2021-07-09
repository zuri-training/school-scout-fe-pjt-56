import '../../Scholarship/Scholarship.css';
import { Card } from '../Card/Card';

export const ScholarshipCard = () => {

  return (
    Card.map(item => {
      return (
        <figure className="safety-figure">
        <figcaption className="safety-caption">
        <img className="safety-image" src={item.img} alt=""></img>
          <a href="./">{ item.text }</a>
        </figcaption>
      </figure>
      )
    })
  )
}

export default ScholarshipCard
