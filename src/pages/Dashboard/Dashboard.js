import PlantCard from "../../components/PlantCard/PlantCard";
import "./Dashboard.css";
import { useCollection } from "../../hooks/useCollection";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function Dashboard() {
  const { documents, error } = useCollection("plants");
  const [urlOfImage, setUrlOfImage] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = (incomingURL) => {
    urlOfImage !== incomingURL
      ? setUrlOfImage(incomingURL)
      : setUrlOfImage(null);
    handleShow();
  };
  return (
    <div>
      {error && <p>{error}</p>}
      {documents &&
        documents
          .sort((a, b) => {
            if (a.moisture > b.moisture) {
              return 1;
            }
            if (a.moisture < b.moisture) {
              return -1;
            }
            return 0;
          })
          .map((doc) => (
            <PlantCard
              key={doc.id}
              name={doc.name}
              species={doc.species}
              imageurl={doc.imageurl}
              slot={doc.slot}
              moisture={doc.moisture}
              sunlight={doc.sunlight}
              waterConsumption={doc.water_consumption}
              zone_color={doc.zone_color}
              onClick={handleClick}
              mapURL={doc.mapURL}
            />
          ))}
      {urlOfImage && (
        <>
          <Modal show={show} size="xl" onHide={handleClose}>
            <Modal.Body>
              <center>
                <img className="mapOfPlant" src={urlOfImage} />
              </center>
            </Modal.Body>
          </Modal>
        </>
      )}
    </div>
  );
}
