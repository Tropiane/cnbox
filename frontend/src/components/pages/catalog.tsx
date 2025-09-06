import Target from "../targets/target";
import products from "../../data/productsData";

function Catalog() {
  return (
    <div className="catalogContainer" id="catalog">
      <div className="catalogTitle">
        <h3 className="thirdTitleFont">Catalogo</h3>
        <p className="textFont">
          Seleccioná el producto que querés y presioná <span className="spanFont">consultar</span>
        </p>
      </div>
      <div className="catalog">
        {products.map((product) => (
          <Target
            key={product.id}
            targetClass="targetInCatalog"
            isProduct={true}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
