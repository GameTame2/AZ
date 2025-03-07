import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Coordinate from "../../../../public/Coordinate";
import "../../../styles/quiz.css";

const Math = () => {
  return (
    <div className="job art">
      <div className="jobmodel">
        <div className="arth1">МАТЕМАТИКА</div>
        <div className="artp">
          <img src="/images/down-arrow.png" alt="down" />
          Имаш невероятен талант за математика! Обичаш да решаваш сложни задачи,
          да търсиш логика и да разкриваш правилата, които управляват числата.
          Твоето аналитично мислене и способност за абстракция те правят
          истински математик, готов да открие нови формули за успех! ➗🔢{" "}
        </div>

        <Canvas>
          <ambientLight />
          <Suspense fallback={null}>
            <Coordinate position={[0, -1, 1]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Math;
