import "./ListCard.css"

const ListCard = (props) => {
    const { list } = props; // const list = props.list;
  
    return (
      <div className="listCard">
        <h2>ListCard</h2>
        <div className="row justify-content-around">

            {list.map((item) => {
                return(
                    <div className="card " key={item.player.name}>
                        <img src={item.player.photo} alt={item.statistics.games.position}></img>
                        <div className="card-body">
                            <p> {item.statistics.league.name} </p>
                            <p> {item.statistics.team.name} </p>
                        </div>
                    </div>
                );
            })}
        </div>
       </div>
    );
};

export default ListCard