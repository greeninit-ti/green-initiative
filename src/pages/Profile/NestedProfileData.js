import "./Profile.css";
import { useDocument } from "../../hooks/useDocument";
import { projectStorage, database } from "../../firebase/config";
import { useState } from "react";

const points = (n) => {
  if (typeof n === "undefined") {
    n = 0;
  }
  if (n == 1) {
    return n + " point";
  } else {
    return n + " points";
  }
};

export default function NestedProfileData({ email, username, userId }) {
  const { document } = useDocument("users", userId);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      handleUpload(e.target.files[0]);
    }
  };

  const handleUpload = async (image) => {
    console.log("aspodkapsodk " + image);
    const uploadPath = "profileImage/" + userId + "/" + image.name;
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
          .ref("profileImage/" + userId)
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url + " new url");
            let updates = {};
            updates["users/" + userId + "/profileImage"] = url;
            database.ref().update(updates);
          });
      }
    );
  };

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12 ">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-15">
                      <img
                        src={
                          document
                            ? document.profileImage
                            : "https://img.icons8.com/bubbles/100/000000/user.png"
                        }
                        className="img-radius"
                        alt="User-Profile-Image"
                      />
                    </div>
                    <div className="image-upload">
                      <label for="file-input">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                          cursor="pointer"
                          className="m-b-20"
                        >
                          <path d="M6.3 19.5q-.75 0-1.275-.525Q4.5 18.45 4.5 17.7V15H6v2.7q0 .1.1.2t.2.1h11.4q.1 0 .2-.1t.1-.2V15h1.5v2.7q0 .75-.525 1.275-.525.525-1.275.525Zm4.95-3.875v-8.4l-2.475 2.45L7.725 8.6 12 4.325 16.275 8.6l-1.05 1.075-2.475-2.45v8.4Z" />
                        </svg>
                      </label>
                      <input
                        id="file-input"
                        type="file"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <h6 className="f-w-600">{username}</h6>
                    <p>{document ? points(document.points) : ""}</p>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">{email}</h6>
                      </div>
                      {/* <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Username</p>
                        <h6 className="text-muted f-w-400">{username}</h6>
                      </div> */}
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      Plant Watering
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Recent</p>
                        <h6 className="text-muted f-w-400">Cactus</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Most Watered</p>
                        <h6 className="text-muted f-w-400">Cactus</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
