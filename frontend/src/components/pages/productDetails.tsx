import { useParams } from "react-router-dom";
import products from "../../data/productsData";
import { findProduct } from "../../utils/functions";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  const product = id ? findProduct({ arr: products, id: Number(id) }) : null;

  const whatsappNumber = "095150610"; // reemplazá por tu número
  const whatsappMessage = product
    ? `Hola, quiero consultar sobre el producto: ${product.title}`
    : "";

  return (
    <div className="productDetails">
      {product ? (
        <>
          <h1 className="title">{product.title}</h1>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
          <img
            src={
              product.image
                ? `https://drive.google.com/thumbnail?id=${product.image}&sz=w1000`
                : "/src/assets/images/planImage.png"
            }
            alt={product.title}
            loading="lazy"
            className="productImage"
          />
          {product.details && 
          <ul>
            {product.details.map((detail, index) => (
              <li key={index}>{detail}</li>
          ))}
          </ul>
          }
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="consultButton"
          >
            Consultar
          </a>
        </>
      ) : (
        <p className="notFound">Producto no encontrado</p>
      )}
    </div>
  );
}
