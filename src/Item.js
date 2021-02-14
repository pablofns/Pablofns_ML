import './App.css';


function Item(item){
    console.log(item);
    let datos = item.item;
    return (
<div className="card">
  <div className="row g-0">
    <div className="col-md-3 item-list-img">
      <img src={datos.picture} alt="Imagen" className="picture-list"/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title">{datos.price['currency']}${datos.price['price']}</h5>
        <p className="card-text">{datos.title}</p>
      
      </div>
    </div>
    <div className="col-md-2 ubicacion">{datos.state_name}</div>
  </div>
</div>

    );
}
export default Item;