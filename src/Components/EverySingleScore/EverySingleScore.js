import React from "react";

const EverySingleScore = (props) => {
  const perScore = props.perScore;
  const { displayName, score, photoURL } = perScore;
  return (
        <div className="card w-100 m-1">
          <div className="card-body">
            <div className="d-flex justify-content-around align-items-center">
                <div>
                    <img src={photoURL} alt={displayName} className="border border-danger rounded-circle"/>
                </div>
                <div>
                  <h6>{displayName}</h6>
                </div>
                <div>
                    {score}
                </div>
            </div>
          </div>
        </div>
  );
};

export default EverySingleScore;
