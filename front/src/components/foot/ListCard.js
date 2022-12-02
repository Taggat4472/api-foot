import "./ListCard.css";

const ListCard = (props) => {
  const { list } = props; // const list = props.list;

  return (
    <div className="listCard">
      <h2>ListCard</h2>
      <div className="row justify-content-around">
        
        {list.map((item) => {
          return (
            <div className="card" key={ item.league.id }>
              <img src={ item.league.logo } alt={ item.title } ></img>
              <div className="card-body">
                <p> { item.country.name } </p>
                <p> { item.league.name } </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListCard;
