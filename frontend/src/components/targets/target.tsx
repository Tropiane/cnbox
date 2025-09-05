import Button from "../main/button";
import TargetDetails from "../targets/targetDetails";

export type TargetProps = {
  title: string;
  description: string;
  id: number;
  targetClass?: string;
  price?: number;
  isPlan?: boolean;
  isProduct?: boolean;
  image?: string;
};

function Target({
  title,
  description,
  id,
  targetClass,
  price,
  isPlan,
  isProduct,
  image,
}: TargetProps) {
  if (isPlan) {
    return (
      <div className={`${targetClass}`} id={`plan-target-${id}`}>
        <img
          src={
            image
              ? `https://drive.google.com/thumbnail?id=${image}&sz=w1000`
              : "/src/assets/images/planImage.png"
          }
          alt={title}
          loading="lazy"
        />
        <h3 className="thirdTitleFont">{title}</h3>
        <p className="textFont">{description}</p>
        <TargetDetails />
      </div>
    );
  } else if (isProduct) {
    return (
      <div className={`${targetClass}`} id={`product-target-${id}`}>
        <img
          src={
            image
              ? `https://drive.google.com/thumbnail?id=${image}&sz=w1000`
              : "/src/assets/images/planImage.png"
          }
          alt={title}
          loading="lazy"
        />
        <h3 className="thirdTitleFont">{title}</h3>
        <p className="textFont">{description}</p>
        <p>
          Precio: <span>${price}</span>
        </p>
        <Button text="Ver más" link={`/catalogo/${id}`} className="button buttonFont" />

      </div>
    );
  } else {
    return (
      <div className={`${targetClass}`} id={`target-${id}`}>
        <img src="/src/assets/images/planImage.png" alt={title} loading="lazy" />
        <h3 className="thirdTitleFont">{title}</h3>
        <p className="textFont">{description}</p>
        <TargetDetails />
      </div>
    );
  }
}

export default Target;
