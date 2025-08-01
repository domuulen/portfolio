// components/Hero.jsx
"use client";
import { useState } from "react";
import Image from "next/image"; // Next.js-ийн Image компонентыг импорт хийсэн

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
      <div className="hero-content">
        {/* Текст хэсэг */}
        <div className="text-section">
          <p className="welcome-text">Welcome to my Portfolio</p>
          <h1 className="main-title">
            Hi! I&apos;m <span className="highlight">Temuulen</span>
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
            Let’s Check Words <span className="arrow">→</span>
          </button>
        </div>
        <div className="image-section">
          <div className="image-box">
            <a
              href="https://www.instagram.com/coupsoft/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Image компонентоор орлуулсан */}
              <Image
                src="/assets/coup.png"
                alt="Temuulen Profile"
                width={300}
                height={300}
              />
            </a>
          </div>
        </div>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Key Words &amp; Their Meanings</h2>
            <ul className="keywords-list">
              <li>
                <strong>
                  <span className="highlight-word">Valuable Knowledge</span>
                </strong>
                <p>
                  Sharing meaningful and important knowledge is the core goal of
                  this portfolio.
                  <br />
                  <span className="translation-text">
                    *Энэхүү портфолиог бүтээх гол зорилго нь үнэтэй, чухал
                    мэдлэгийг хуваалцах явдал тул энэ үг хамгийн чухал.*
                  </span>
                </p>
              </li>
              <li>
                <strong>
                  <span className="highlight-word">Teach</span>
                </strong>
                <p>
                  Represents the activity of teaching and educating users.
                  <br />
                  <span className="translation-text">
                    *Хэрэглэгчдэд заах, сургалт өгөх үйл ажиллагааг тодорхойлж
                    байгаа учраас онцлох хэрэгтэй.*
                  </span>
                </p>
              </li>
              <li>
                <strong>
                  <span className="highlight-word">Inform</span>
                </strong>
                <p>
                  Highlights the act of giving information and building
                  understanding.
                  <br />
                  <span className="translation-text">
                    *Мэдээлэл өгөх, хэрэглэгчдэд ойлголт өгдөг гэдгийг онцолж
                    байна.*
                  </span>
                </p>
              </li>
              <li>
                <strong>
                  <span className="highlight-word">Continuous Learning</span>
                </strong>
                <p>
                  Emphasizes that learning is an ongoing, never-ending process.
                  <br />
                  <span className="translation-text">
                    *Суралцах явц тасралтгүй, хэзээ ч дуусахгүй гэдгийг
                    илэрхийлдэг чухал санаа.*
                  </span>
                </p>
              </li>
              <li>
                <strong>
                  <span className="highlight-word">Grow Together</span>
                </strong>
                <p>
                  Reflects the value of mutual learning and development.
                  <br />
                  <span className="translation-text">
                    *Харилцан суралцах, хамтдаа хөгжих гэсэн хамтын ажиллагааны
                    үнэт зүйл тул ялгаж үзсэн.*
                  </span>
                </p>
              </li>
              <li>
                <strong>
                  <span className="highlight-word">Learning</span>
                </strong>
                <p>
                  The fundamental concept behind this portfolio is the process
                  of learning.
                  <br />
                  <span className="translation-text">
                    *Суралцах үйл явц, портфолиогийн суурь ойлголт.*
                  </span>
                </p>
              </li>
              <li>
                <strong>
                  <span className="highlight-word">Useful Information</span>
                </strong>
                <p>
                  Clearly states the aim of providing helpful and valuable
                  content.
                  <br />
                  <span className="translation-text">
                    *Хэрэгтэй, үнэ цэнэтэй мэдээллийг өгөх зорилго гэдгийг
                    тодорхой харуулж байна.*
                  </span>
                </p>
              </li>
              <li>
                <strong>
                  <span className="highlight-word">Inspiration</span>
                </strong>
                <p>
                  Implies the intention to motivate and spark new ideas.
                  <br />
                  <span className="translation-text">
                    *Урам зориг өгөх, сэдэл төрүүлэх гэсэн зорилго шингэсэн тул
                    онцолсон.*
                  </span>
                </p>
              </li>
            </ul>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
