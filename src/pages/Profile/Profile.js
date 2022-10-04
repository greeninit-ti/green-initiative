import "./Profile.css";
import { useAuthContext } from "../../hooks/useAuthContext";

import NestedProfileData from "./NestedProfileData";

export default function Profile() {
  const { user } = useAuthContext();

  return (
    <NestedProfileData
      username={user.displayName}
      email={user.email}
      userId={user.uid}
    />
  );
}
