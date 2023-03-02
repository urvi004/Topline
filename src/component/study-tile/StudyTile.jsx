import {React}  from "react";
import { Data } from "../../data";
// const imagePerRow = 4;

const StudyTile = ({next, handleMoreImage}) => {

  // const [next, setNext] = useState(imagePerRow);
  // const handleMoreImage = () => {
  //     setNext(next + imagePerRow);
  //   }; 
  return (
    <>
      <div className="study-tile">
        <h1>Learn about some of our research opportunities</h1>

        <div className="study-tile__main-cards">
          {Data?.studyTiles.slice(0, next)?.map((op, index) => {
            return (
              <div className="study-tile__main-cards__cards">
                <img src={op.img_url} alt="hi"></img>
                <h3>{op.content_h3}</h3>
                <p>{op.content_description}</p>
                <div className="btn"><button>Learn more</button></div>
                <p className="status">Enrolling Now!</p>
              </div>
            );
          })}
        </div>

        {next < Data?.studyTiles?.length && (
          <div className="load">
          <button
            onClick={handleMoreImage}
            
          >
            Load more
          </button>
          </div>
        )}

       
      </div>
    </>
  );
};

export default StudyTile;

 // <button onClick={handleMoreImage}>Load more</button>
