import "./Profile.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import { projectStorage } from "../../firebase/config";

const Profile = () => {
  const { user } = useAuthContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  return <ReactFirebaseFileUpload />;
};

const ReactFirebaseFileUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      console.log("We are at handleChange");
      console.log(e.target.files[0].name);
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    console.log("aspodkapsodk " + image);
    const uploadPath = "profileImage/" + image.name;
    const uploadTask = projectStorage.ref().child(uploadPath).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        projectStorage
          .ref("profileImage")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  console.log("image: ", image);

  return (
    <div>
      <form>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input name="buton" type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        <br />
        {url}
        <br />
        <img
          src={url || "http://via.placeholder.com/300"}
          alt="firebase-image"
        />
      </form>
    </div>
  );
};

export default Profile;
