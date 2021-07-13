import "../../Scholarship/Scholarship.css";
import { ScholarshipCardList } from "../../Scholarship/Card/Card";
import save from '../../Scholarship/images/save.svg'

export const ScholarshipListCard = () => {
  return ScholarshipCardList.map((item) => {
    return (
      <div className="schlcd-container">
        <div className="schlcd-img-container">
          <img className="schlcd-img" src={item.img} alt="" />
        </div>
        <div>
          <h2 className="schlcd-heading">{item.header}</h2>
          <p  className="schlcd-body">{item.text}...<a className="schlshp-lst-card-lnk" href="./">Read more</a></p>
          <div className="schlcd-bookmark">
            <img src={ save } alt="bookmark icon" />
          </div>
        </div>
      </div>
    );
  });
};
