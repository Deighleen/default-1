import React from "react";
import { PageTemplate } from "../../templates/index-page.js";


const PagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  

  if (data) {
    console.log(data);
    return <PageTemplate data={data} />;
  } else {
    console.log("CHECK");
    return <div>Loading...</div>;
  }
};

export default PagePreview;