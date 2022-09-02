import "./PlantCard.css";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function PlantCard(props) {
  return (
    <div
      class="a-box"
      onClick={() => {
        alert("Clicked on a card");
      }}
    >
      <div class="img-container">
        <div class="img-inner">
          <div class="inner-skew">
            <img src={props.imageurl} />
          </div>
        </div>
      </div>
      <div class="text-container">
        <h3>{props.name}</h3>
        {/* <div>{props.species}</div> */}
        <h4>{props.slot}</h4>
        <ProgressBar
          variant={
            props.moisture <= 33
              ? "danger"
              : props.moisture <= 66
              ? "warning"
              : "success"
          }
          now={props.moisture}
          label={`${props.moisture}%`}
        />
      </div>
    </div>
  );
}
