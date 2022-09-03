import { useDocument } from "../../hooks/useDocument";

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

export default function Navbar(props) {
  const { document } = useDocument("users", props.userId);

  return <div>{document && <p>{points(document.points)}</p>}</div>;
}
