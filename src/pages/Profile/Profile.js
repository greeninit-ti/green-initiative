import "./Profile.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import { useState } from "react";
import { projectStorage, database } from "../../firebase/config";
import NestedProfileData from "./NestedProfileData";

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);

  return <ReactFirebaseFileUpload />;
};

const ReactFirebaseFileUpload = () => {
  const { user } = useAuthContext();
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      console.log("We are at handleChange");
      console.log(e.target.files[0].name);
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    console.log("aspodkapsodk " + image);
    const uploadPath = "profileImage/" + user.uid + "/" + image.name;
    const uploadTask = projectStorage.ref().child(uploadPath).put(image);
    await uploadTask.on(
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
          .ref("profileImage/" + user.uid)
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url + " new url");
            var updates = {};
            updates["users/" + user.uid + "/profileImage"] = url;
            database.ref().update(updates);
          });
      }
    );
    // console.log(url + " CUSTOM LOG ADDED");
  };

  // console.log("image: ", image);
  // console.log("URL => " + urlOf);

  return (
    <div>
      <form>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input name="buton" type="file" onChange={(e) => handleChange(e)} />
        <button onClick={handleUpload}>Upload</button>
        {/* <br />
        {user.profileImage}
        <br /> */}
        <NestedProfileData userId={user.uid} />
      </form>
    </div>
  );
};

export default Profile;
