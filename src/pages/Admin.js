// imports
import React, { useState } from "react";
import photos from "../photos.json";
import axios from "axios";
import "../style.css";

// the main Admin function
const Admin = () => {
  // states and variables
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [newPhoto, setNewPhoto] = useState(null);

  // setting file variable on select
  const uploadFile = async (e) => {
    await setFile(e.target.files[0]);
    console.log("File has been selected!", file);
  };

  // uploading the selected file
  const handleUpload = async () => {
    const fd = new FormData();
    fd.append("file", file);

    // file uploading action
    try {
      const res = await axios.post("http://localhost:5000/uploads", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("File uploaded successifully!");
    } catch (error) {
      console.error("Error uploading file", error);
    }

    // updating the json database
    setNewPhoto({
      id: 1,
      file: file.name,
      caption: caption,
    });

    if (photos.push(newPhoto)) {
      console.log("New object added successifully");
    } else {
      console.log("Error adding new file");
    }
  };

  console.log(photos);

  const downloadJson = (photos) => {
    const dataStr = JSON.stringify(photos, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="admin">
      <header>Rocket Gallery | Admin</header>
      <div className="admin-container">
        <input type="file" onChange={uploadFile} />
        <input
          type="text"
          onChange={(e) => {
            setCaption(e.target.value);
          }}
          placeholder="Caption"
        />
        <button onClick={handleUpload}>UPLOAD</button>
        <button
          onClick={() => {
            downloadJson(photos);
          }}
        >
          DOWNLOAD JSON
        </button>
      </div>
      <footer>Rocket Web &copy; 2024</footer>
    </div>
  );
};

export default Admin;
