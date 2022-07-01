import React from "react";
import Header from "./Header";

import movingWater from "./Images/moving water.gif";

function Home(props) {
  return (
    <div
      style={{ backgroundImage: `url("${movingWater}")` }}
      className="flex flex-col h-screen bg-no-repeat bg-cover "
    >
      <div className="flex flex-col justify-between mt-24">
        <div className="mx-auto text-3xl text-center text-sky-300 w-96">
          "The mind is like water .When it's turbulent, it's diffult to see.When
          it's calm everything becomes clear.' "
        </div>
        <div className="w-1/2 mx-auto mt-24 text-3xl text-center text-sky-500">
          "Control you mind.<div className="text-white">Focus</div>
          <div>
            Take Action "
            <div className="text-5xl text-white">Complete Your Task</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
