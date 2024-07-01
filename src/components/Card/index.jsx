const Card = ({ name, changeNumber, active }) => {
  return (
    <div
      className={`px-6 py-3 rounded-lg font-extrabold text-white ${
        active ? "bg-[#df338b]" : "bg-[#525CEB]"
      }`}
      onClick={changeNumber}
    >
      {name}
    </div>
  );
};

export default Card;
