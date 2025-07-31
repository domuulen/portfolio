import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className="hero">
      <div className="hero-content" style={{ gap: "8rem" }}>
        {/* Текст хэсэг */}
        <div className="text-section">
          <p className="welcome-text">Welcome to my Portfolio</p>
          <h1 className="title">
            Hi! I&apos;m <span className="highlight">Coup</span>
          </h1>
          <p className="description">
            This portfolio has been thoughtfully created with the purpose of
            sharing <span className="highlight-line">valuable knowledge</span>{" "}
            and insights with my users. It is designed not only to{" "}
            <span className="highlight-line">teach</span> and{" "}
            <span className="highlight-line">inform</span> but also to inspire a
            journey of{" "}
            <span className="highlight-line">continuous learning</span>. My goal
            is to create a space where both you and I can{" "}
            <span className="highlight-line">grow together</span> by exchanging
            ideas, exploring new concepts, and mastering skills collaboratively.
            I believe that <span className="highlight-line">learning</span> is a
            lifelong adventure, and through this portfolio, I hope to empower
            and enrich everyone who visits here with{" "}
            <span className="highlight-line">useful information</span> and{" "}
            <span className="highlight-line">inspiration</span>.
          </p>

          <button className="connect-button" onClick={handleClick}>
            Let&apos;s Check Words <span className="arrow">→</span>
          </button>
        </div>
        <div className="image-section">
          <div className="image-box">
            <a
              href="https://www.instagram.com/coupsoft/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/coup.png"
                alt="Temuulen Profile"
                width={300} // Зургийн жин
                height={300} // Зургийн өндөр
                style={{ borderRadius: "50%" }}
              />
            </a>
          </div>
        </div>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            {/* ...popup content as before... */}
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
