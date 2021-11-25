import React from "react";

function SingleJob({
  compTitle,
  compName,
  compLocation,
  salary,
  jobDate,
  compVisit,
  compDescription,
}) {
  return (
    <div>
      <h1>{compTitle}</h1>
      <h1>{compVisit}</h1>
      <h1>{jobDate}</h1>
      <h1>{compName}</h1>
      <h1>{compLocation}</h1>
      <h1>{salary}</h1>
      <h1>{compDescription}</h1>
    </div>
  );
}

export default SingleJob;
