import { BrowserRouter } from "react-router-dom";

<BrowserRouter basename="/React_Props">
  <App />
</BrowserRouter>


import { useState } from "react";
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


function ProfileCard(props) {
  const { name, age, bio, image } = props;
  const [liked, setLiked] = useState(false);
  const [hover, setHover] = useState(false);

  const styles = {
    card: {
      position: "relative",
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      padding: "25px",
      textAlign: "center",
      boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      color: "#fff",
      cursor: "pointer", 
      transform: hover ? "scale(1.05)" : "scale(1)", 
      transition: "all 0.3s ease-in-out", 
    },
    image: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "10px",
    },
    name: {
      margin: "10px 0 5px",
      color: "#000",
    },
    text: {
      margin: "4px 0",
      color: "#000",
    },
    bio: {
      fontSize: "14px",
      color: "#000",
    },
    likeButton: {
      position: "absolute",
      bottom: "10px",
      right: "10px",
      fontSize: liked ? "32px" : "24px",
      color: liked ? "red" : "gray",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
    },
  };

  const handleLike = () => {
    setLiked(true);
    alert("Thanks for liking!");
    setTimeout(() => setLiked(false), 500);
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.text}>Age: {age}</p>
      <p style={styles.bio}>{bio}</p>
      <button style={styles.likeButton} onClick={handleLike}>
        ❤️
      </button>
    </div>
  );
}

function App() {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      padding: "30px",
      background: "linear-gradient(135deg, #efefefff, #4ba299ff)",
      minHeight: "100vh",
    },
  };

  return (
    <div style={styles.container}>
      <ProfileCard name="Kapisha" age={25} bio="Backend Developer" image={img1} />
      <ProfileCard name="Ronisha" age={26} bio="Frontend Developer" image={img2} />
      <ProfileCard name="Apisha" age={27} bio="Game Developer" image={img3} />
      <ProfileCard name="Abisha" age={28} bio="Web Developer" image={img4} />
      <ProfileCard name="Sharan" age={29} bio="Developers Advocate" image={img5} />
      <ProfileCard name="Disha" age={24} bio="AI Developer" image={img6} />
      <ProfileCard name="Rashi" age={25} bio="Art Creater" image={img7} />
      <ProfileCard name="Thenu" age={26} bio="Game Designer" image={img8} />
       <ProfileCard name="Apishanth" age={27} bio="Natural Developer" image={img9} />
      <ProfileCard name="Ronishan" age={28} bio="Assisant Developer" image={img10} />
      <ProfileCard name="Thuvaragan" age={29} bio="Art Creater" image={img11} />
      <ProfileCard name="Kapishan" age={28} bio="Head Designer" image={img12} />
    </div>
  );
}

export default App;
