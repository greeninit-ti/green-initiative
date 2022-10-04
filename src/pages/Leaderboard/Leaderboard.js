import { useCollection } from "../../hooks/useCollection";
import "./Leaderboard.css";

export default function Leaderboard() {
  const { documents, error } = useCollection("users");

  return (
    <div className="container-l">
      <h2>Leaderboard</h2>
      <ul className="responsive-table-l">
        <li className="table-header-l">
          <div className="col col-1">User</div>
          <div className="col col-2">Points</div>
        </li>
        {error && <p>{error}</p>}
        {documents &&
          documents
            .sort((a, b) => {
              if (a.points <= b.points) {
                return 1;
              }
              if (a.points > b.points) {
                return -1;
              }
              return 0;
            })
            .map((doc) => (
              <li className="table-row">
                <div className="col col-1" data-label="User">
                  {doc.displayName}
                </div>
                <div className="col col-2" data-label="Points">
                  {doc.points}
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
}
