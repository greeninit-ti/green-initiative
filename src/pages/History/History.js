import { useCollection } from "../../hooks/useCollection";
import "./History.css";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][date.getMonth()];

  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return day + " " + month + " " + year + " " + hour + ":" + minutes;
};

export default function History() {
  const { documents, error } = useCollection("history");

  return (
    <div className="container-h">
      <ul className="responsive-table-h">
        <li className="table-header">
          <div className="col col-1">User</div>
          <div className="col col-2">Plant name</div>
          <div className="col col-3">Date</div>
          <div className="col col-4">Slot</div>
        </li>
        {error && <p>{error}</p>}
        {documents &&
          documents
            .sort((a, b) => {
              if (a.date > b.date) {
                return -1;
              }
              if (a.date < b.date) {
                return 1;
              }
              return 0;
            })
            .map((doc) => (
              <li className="table-row">
                <div className="col col-1" data-label="User">
                  {doc.displayName}
                </div>
                <div className="col col-2" data-label="Plant">
                  {doc.name}
                </div>
                <div className="col col-3" data-label="Date">
                  {formatDate(doc.date)}
                </div>
                <div className="col col-4" data-label="Slot">
                  {doc.slot}
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
}
