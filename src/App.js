// TODO: answer here
import React from "react";
import Card from "./Card";

const App = () => {
  const charList = [
    {
      imageUrl: "https://cdn.myanimelist.net/images/characters/14/370797.jpg",
      name: "Saori Kido",
      occupation: "-",
      cloth: "Athena Kamui",
      constellation: "Reincarnation of Athena",
    },
    {
      imageUrl: "https://cdn.myanimelist.net/images/characters/16/209321.jpg",
      name: "Seiya",
      occupation: "Saint",
      cloth: "Pegasus Cloth",
      constellation: "Pegasus",
    },
    {
      imageUrl: "https://cdn.myanimelist.net/images/characters/6/253759.jpg",
      name: "Ikki",
      occupation: "Saint",
      cloth: "Phoenix God Cloth",
      constellation: "Phoenix",
    },
    {
      imageUrl: "https://cdn.myanimelist.net/images/characters/9/73690.jpg",
      name: "Shiryū",
      occupation: "Saint",
      cloth: "Dragon God Cloth",
      constellation: "Dragon",
    },
    {
      imageUrl: "https://cdn.myanimelist.net/images/characters/3/73686.jpg",
      name: "Hyōga",
      occupation: "Saint",
      cloth: "Cygnus God Cloth",
      constellation: "Cygnus",
    },
    {
      imageUrl: "https://cdn.myanimelist.net/images/characters/11/74120.jpg",
      name: "Shun",
      occupation: "Saint",
      cloth: "Andromeda God Cloth",
      constellation: "Andromeda",
    },
  ];

  return (
    <>
      <div data-testid="app" style={{ maxWidth: "1040px", padding: "0 14px" }}>
        <h2 style={{ color: "#49515b", marginBottom: "0.2em" }}>Saint Seiya</h2>
      </div>
      <div style={{ maxWidth: "1040px", display: "flex" }}>
        <div style={{ padding: "14px" }}>
          <img
            style={{ borderRadius: "4px", width: "100%", height: "18%" }}
            src="https://gamerwk.sgp1.cdn.digitaloceanspaces.com/2022/11/Saint-Seiya-Code.jpg"
            alt="saint-seiya"
          />
        </div>
        <div style={{ padding: "14px" }}>
          <section>
            <h3 style={{ color: "#49515b", marginTop: "0" }}>Synopsis</h3>
            <hr />
            <p style={{ color: "#49515b" }}>
              In ancient times, a group of young men devoted their lives to
              protecting Athena, the Goddess of Wisdom and War. These men were
              capable of fighting without weapons—a swing of their fist alone
              was powerful enough to rip the very sky apart and shatter the
              earth beneath them. These brave heroes became known as Saints, as
              they could summon up the power of the Cosmos from within
              themselves.
              <br />
              <br />
              Now, in present day, a new generation of Saints is about to come
              forth. The young and spirited Seiya is fighting a tough battle for
              the Sacred Armor of Pegasus, and he isn't about to let anyone get
              in the way of him and his prize. Six years of hard work and
              training pay off with his victory and new title as one of Athena's
              Saints.
              <br />
              <br />
              But Seiya's endeavor doesn't end there. In fact, plenty of perils
              and dangerous enemies face him and the rest of the Saints
              throughout the series. What new quests await the heroes of the
              epic Saint Seiya saga?
            </p>
          </section>
          <section>
            <h3 style={{ color: "#49515b", marginTop: "0" }}>Characters</h3>
            <hr />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px 10px",
                justifyItems: "center",
              }}
            >
              {/* PANGGIL COMPONENT CARD KALIAN DISINI! */}
              {/* TODO: answer here */}
              {/* <Card data={charList} /> */}

              {charList.map((character, index) => (
                <Card key={index} data={character} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
