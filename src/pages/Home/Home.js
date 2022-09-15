import PlantCard from "../../components/PlantCard/PlantCard";
import "./Home.css";
import { useCollection } from "../../hooks/useCollection";
import logo from "../../assets/green-initiative-logo.png";
import { useState } from "react";

export default function Home() {
  const { documents, error } = useCollection("plants");
  const [urlOfImage, setUrlOfImage] = useState(null);

  const handleClick = (incomingURL) => {       
    urlOfImage !== incomingURL ? setUrlOfImage(incomingURL) : setUrlOfImage(null);
 }
  return (
    <div>
      {error && <p>{error}</p>}
      {documents &&
        documents.map((doc) => (
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
        {urlOfImage && <img className="mapOfPlant" src={urlOfImage}/>}
    </div>
  );
}
