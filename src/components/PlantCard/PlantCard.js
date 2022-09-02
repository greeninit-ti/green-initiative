import "./PlantCard.css";

export default function PlantCard() {
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
            <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
          </div>
        </div>
      </div>
      <div class="text-container">
        <h3>A blue bird</h3>
        <div>
          This a demo experiment to skew image container. It looks good.
        </div>
      </div>
    </div>
  );
}
