import Target from "./target";

import { config } from "../../config";
import TargetCarousel from "../targets/targetCarousel";

const TargetContainer = () => {
  return (
    <section className="targetContainer">
      <div className="targetList">
        <TargetCarousel>
        {config.planData.map((plan, index) => (
          <div
            key={plan.id}
            className={`targetItem ${index % 2 === 0 ? "targetUp" : "targetDown"}`}
          >
            <Target targetClass="targetInCarousel" isPlan={true} {...plan} />
          </div>
        ))}
        </TargetCarousel>
      </div>
    </section>
  );
};

export default TargetContainer;
