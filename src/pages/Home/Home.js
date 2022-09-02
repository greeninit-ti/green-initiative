import PlantCard from "../../components/PlantCard/PlantCard";
import "./Home.css";
import { useCollection } from "../../hooks/useCollection";

export default function Home() {
  const { documents, error } = useCollection("plants");
  return (
    <div>
      {error && <p>{error}</p>}
      {documents &&
        documents.map((doc) => (
          <PlantCard
            name={doc.name}
            species={doc.species}
            imageurl={doc.imageurl}
            slot={doc.slot}
            moisture={doc.moisture}
          />
        ))}
    </div>
  );
}
