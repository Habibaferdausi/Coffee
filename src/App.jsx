import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./assets/Components/CoffeeCard/CoffeeCard";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1 className="text-6xl text-center my-20 text-purple-600">
        Hot Hot Cold Coffee: {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
