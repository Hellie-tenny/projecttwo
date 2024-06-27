import React, {useState} from "react";
import axios from "axios";
import "../style.css";

const Admin = () => {

    const [file, setFile] = useState(null);

    const uploadFile = (e) => {
         setFile(e.target.files[0]);
         console.log('File has been selected', file)
    }

    const handleUpload =  async() => {
       
        const fd = new FormData();
        fd.append('file', file);
        

        try{
            const res = await axios.post('http://localhost:5000/uploads', fd, {
                headers: {
                    'Content-Type' : 'multipart/form-data',
                },
            });
            console.log('File uploaded successifully!');
        } catch (error) {
            console.error('Error uploading file', error)
        }
    }

    return(
        <div className="admin">
            <header>
                Rocket Gallery | Admin
            </header>
            <div className="admin-container">
                <input  type="file" onChange={uploadFile} />
                <input type="text" placeholder="Caption"  />
                <button onClick={handleUpload}>UPLOAD</button>
            </div>
            <footer>Rocket Web &copy; 2024</footer>
        </div>
    );
}

export default Admin;