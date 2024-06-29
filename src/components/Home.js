import { useState } from "react";

export const groops = [
  {
    id: 1,
    emoji: "🎂",
    name: "Birthday Dinner",
    date: "03.04.2024",
    time: "7.30pm",
    location: "Goldene Krone",
  },
  {
    id: 2,
    emoji: "🎳",
    name: "Bowling",
    date: "20.06.2024",
    time: "6pm",
    location: "Starlight Bowling",
  },
  {
    id: 3,
    emoji: "🦢",
    name: "Picknick at the lake",
    date: "16.07.2024",
    time: "11am",
    location: "Markkleeberger See",
  },
];

function Home() {
  const [activities, setActivities] = useState([groops]);

  return (
    <div className="home">
      <h2 className="home__heading">Your next Groop Events:</h2>
      <ul>
        {groops.map((groop) => (
          <li className="activity-card" key={groop.id}>
            <h3 className="activity-card__title">{groop.name}</h3>
            <span className="emoji">{groop.emoji}</span>
            <p>Date: {groop.date}</p>
            <p>Time: {groop.time}</p>
            <p>Location: {groop.location} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
