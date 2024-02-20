
const Hello = ({ greeting }) => {
  return (
    <div>
        <h1 className="tc">Hello there User!</h1>
        <p>Welcome to mobile app dev!</p>
        <p>{greeting}</p>
    </div>
  );
}

export default Hello;
