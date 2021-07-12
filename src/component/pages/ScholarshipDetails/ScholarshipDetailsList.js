import SocialMediaWidget from "./SocialMediaWidget/SocialMediaWidget";
// import { ScholarshipDetailsData } from "./ScholarshipDetailsData";

const ScholarshipDetailsList = (props) => {
  const schData = props.schDetMain;
  console.log(props, schData);

  return (
    <div className="ScholarshipDetails">
      {schData.map((item) => (
        <div className="sch-details" key={item.id}>
          <div className="sch-det-purp-head"></div>
          <div className="sch-det-padding sch-det-container">
            <div className="max-width">
                <h1 className="sch-det-heading">{item.heading}</h1>
                <div>
                  <img className="sch-det-img-main" src={item.image} alt="" />
                </div>
                <div className="sch-det-body">
                  <div className="sch-det-body-text">
                    {item.p1} <br /> <br /> {item.l1} <br /> <br /> {item.p2}
                  </div>
                  <div>
                    <img src={item.imageSide} alt="" />
                  </div>
                </div>
                <SocialMediaWidget />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScholarshipDetailsList;
