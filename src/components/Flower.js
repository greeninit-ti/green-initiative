import CrossfadeImage from "react-crossfade-image";

const images = [
  require("C:\\Users\\yai\\react-projects\\plant-app\\plant-app\\src\\assets\\smiley-flower-transparent.png"),
  require("C:\\Users\\yai\\react-projects\\plant-app\\plant-app\\src\\assets\\sad-flower-transparent.png"),
];

function Flower(props) {
  // const [imageIndex, setImageIndex] = useState(0);

  // const changeImage = () => {
  //     if (imageIndex === images.length - 1) {
  //         setImageIndex(0);
  //     } else {
  //         setImageIndex(imageIndex + 1);
  //     }
  // }
  return (
    <div>
      <div>
        <CrossfadeImage
          src={images[props.imageIdx]}
          duration={1000}
          timingFunction={"ease-out"}
          style={{ maxWidth: "500px", maxHeight: "500px" }}
        />
      </div>
      <div>
        Plant {props.imageIdx === 0 ? " is feeling happy" : " needs watering"}
      </div>
      <button
        type="button"
        style={{
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
          backgroundColor: "#008CBA",
          display: props.imageIdx === 0 ? "none" : "block",
        }}
      >
        Water plant
      </button>
    </div>
  );
}

export default Flower;
