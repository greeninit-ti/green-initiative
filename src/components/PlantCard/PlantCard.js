import "./PlantCard.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useRef, useState } from "react";

export default function PlantCard(props) {
  const [placement, setPlacement] = useState("");

  const ref = useRef(null);

  return (
    <div className="c-box" onClick={() => props.onClick(props.mapURL)}>

    <OverlayTrigger
      trigger={["hover", "focus"]}
      placement={placement}
      overlay={
        <Popover id="popover-basic">
          <Popover.Header as="h3">{props.name} Information</Popover.Header>
          <Popover.Body>
            <div>
              <strong>Species:</strong> {props.species}
            </div>
            <div>
              <strong>Water consumption:</strong> {props.waterConsumption}
            </div>
            <div>
              <strong>Sunlight preference:</strong> {props.sunlight}
            </div>
          </Popover.Body>
        </Popover>
      }
      onToggle={() => {
        const { right } = ref.current.getBoundingClientRect();
        if (right + 300 > window.innerWidth) {
          setPlacement("left");
        } else {
          setPlacement("right");
        }
      }}
    >
      <div className="a-box" ref={ref}>
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src={props.imageurl} />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>{props.name}</h3>
          <h4 style={{color:props.zone_color}}>{props.slot}</h4>
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
            animated
          />
        </div>
      </div>
    </OverlayTrigger>
    </div>
  );
}
