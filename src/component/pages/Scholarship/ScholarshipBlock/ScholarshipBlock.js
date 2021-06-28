import study from '../images/study.jpg'
import '../../Scholarship/Scholarship.css'

export const ScholarshipBlock = () => {
  return (
    <section className="scholarship-block schpg-container">
      <div className="block grid grid-cols-2">
        <div className="scholarship__body">
          <div>
            <h2 className="scholarship__heading">
              Get that scholarship at<br></br>
              <em className="scholarship__emphasis">ONE SHOT!</em>
            </h2>
            <p className="scholarship__title">
              Proven tips to help you get that scholarship at your first trial
            </p>
          </div>
          <ul className="nav-links scholarship-nav">
            {/* <li> */}
              <a href="./">Research</a>
            {/* </li>
            <li> */}
              <a href="./">Great essay</a>
            {/* </li>
            <li> */}
              <a href="./">Apply early</a>
            {/* </li> */}
          </ul>
          <a className="btn btn-primary btn-xlarge" href="./">
            Get tip
          </a>
        </div>
        <div>
            <img
              className="study"
              src={ study }
              alt="a lady studying"
            ></img>
        </div>
      </div> 
    </section>
  );
};

export default ScholarshipBlock;
