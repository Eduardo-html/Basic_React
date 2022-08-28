import Images from "./images";
function FirstComponent() {
  const name = "Luiz";
  return (
    <div>
      <h1>Váriavel, JS e Img</h1>
      <p>{3+4}</p>
      <p>Seu nome é: {name}</p>
      <Images/>
    </div>
  );
}
export default FirstComponent;
