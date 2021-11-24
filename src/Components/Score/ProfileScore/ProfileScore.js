import React from "react";

const ProfileScore = (props) => {
  const singleScore = props.score;
  const { displayName, score} = singleScore;
  return (
        <div className="card w-100 m-1">
          <div className="card-body">
            <div className="d-flex justify-content-around align-items-center">
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

export default ProfileScore;