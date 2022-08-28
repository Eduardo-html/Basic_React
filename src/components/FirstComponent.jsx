import Images from "./images";

function FirstComponent() {
  const name = "Luiz";
  return (
    <div>
      <h1>GitHub - BasicReact </h1>
      <h2>Váriavel, JS e Img </h2>
      <p>{3 + 4}</p>
      <p>Meu nome é: {name}</p>
      <Images />
    </div>
  );
}
export default FirstComponent;
