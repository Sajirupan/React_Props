import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";
import img3 from "./images/image3.jpg";
import img4 from "./images/image4.jpg";
import img5 from "./images/image5.jpg";
import img6 from "./images/image6.jpg";
import img7 from "./images/image7.jpg";
import img8 from "./images/image8.jpg";
import img9 from "./images/image9.jpg";
import img10 from "./images/image10.jpg";
import img11 from "./images/image11.jpg";
import img12 from "./images/image12.jpg";

function ProfileCard({ name, age, bio, image }) {
  const [liked, setLiked] = useState(false);
  const [hover, setHover] = useState(false);

  const styles = {
    card: {
      position: "relative",
      background: "rgba(10, 83, 83, 0.15)",
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      padding: "25px",
      textAlign: "center",
      boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      cursor: "pointer",
      transform: hover ? "scale(1.05)" : "scale(1)",
      transition: "0.3s",
    },
    image: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    likeButton: {
      position: "absolute",
      bottom: "10px",
      right: "10px",
      fontSize: liked ? "32px" : "24px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
      <button style={styles.likeButton} onClick={() => setLiked(!liked)}>
        ❤️
      </button>
    </div>
  );
}

function ProfilePage() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "30px",
      }}
    >
      <ProfileCard name="Kapisha" age={25} bio="Backend Developer" image={img1} />
      <ProfileCard name="Ronisha" age={26} bio="Frontend Developer" image={img2} />
      <ProfileCard name="Apisha" age={27} bio="Game Developer" image={img3} />
      <ProfileCard name="Abisha" age={28} bio="Web Developer" image={img4} />
      <ProfileCard name="Sharan" age={29} bio="Dev Advocate" image={img5} />
      <ProfileCard name="Disha" age={24} bio="AI Developer" image={img6} />
      <ProfileCard name="Rashi" age={25} bio="Art Creator" image={img7} />
      <ProfileCard name="Thenu" age={26} bio="Game Designer" image={img8} />
      <ProfileCard name="Apishanth" age={27} bio="Nature Developer" image={img9} />
      <ProfileCard name="Ronishan" age={28} bio="Assistant Dev" image={img10} />
      <ProfileCard name="Thuvaragan" age={29} bio="Art Creator" image={img11} />
      <ProfileCard name="Kapishan" age={28} bio="Head Designer" image={img12} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
