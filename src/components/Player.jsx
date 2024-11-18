import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }

    // setIsEditing(!isEditing);// => schedules a state update, but does not immediately update the state
  }

  // input field functionality
  function handleChange(e) {
    e.preventDefault;
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

// The Player component is a functional component that displays a player's name and symbol. The component uses the useState hook to manage the editing state of the player's name. When the "Edit" button is clicked, the handleEditClick function is called, which sets the isEditing state to true, allowing the player's name to be edited.
// export default function Player({ name, symbol }) {

//   const [isEditing, setIsEditing] = useState(false);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };
//   return (
//     <li>
//       <span className="player">
//         {!isEditing && <span className="player-name">{name}</span>}
//         {isEditing && <input type="text" />}

//         <button onClick={handleEdit}>Edit</button>
//         <span className="player-symbol">{symbol}</span>
//       </span>
//     </li>
//   );
// }
