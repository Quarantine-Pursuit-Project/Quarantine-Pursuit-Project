// Config
// Modules
// Components

const NewGame = () => {
  const buttonClick = () => {
    window.location.reload(false);
    console.log("buttonClick");
  };
  return (
    <button onClick={buttonClick}>NEW GAME</button>
  )
};

export default NewGame;
