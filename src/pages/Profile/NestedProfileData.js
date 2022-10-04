import { useDocument } from "../../hooks/useDocument";
import { database } from "../../firebase/config";

export default function NestedProfileData({ userId }) {
  const { document } = useDocument("users", userId);

  return <div>{document && <img src={document.profileImage} />}</div>;
}
