import axios from "axios";
import React, { useState } from "react";
import Breadcrum from "../components/Breadcrum";
import Table from "../components/DataTable";

function Properties() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);

    console.log(file);
    console.log(fileName);
  };
  return (
    <>
      <Breadcrum title="PROPERTY"></Breadcrum>

      <div className="App">
        <input type="file" onChange={(e) => saveFile(e)} />
        <button onClick={uploadFile}>Upload</button>
      </div>
    </>
  );
}

export default Properties;
