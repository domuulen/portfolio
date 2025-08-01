import Image from "next/image";

export default function About() {
  return (
    <div className="section about-section">
      <div className="about-content">
        {/* Image Section */}
        <div className="about-image">
          <Image
            src="/assets/coupmain.jpeg"
            alt="Temuulen Undrakh - Frontend Developer"
            className="profile-image"
            width={300}
            height={300}
            style={{ borderRadius: "50%" }}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I&apos;m{" "}
            <span className="highlight-text">Coup Software</span>, and my goal
            is to learn and grow together with you. I aim to share useful,
            user-focused information through my own research and insights. This
            will include topics such as{" "}
            <span className="highlight-text">artificial intelligence</span>,{" "}
            <span className="highlight-text">web applications</span>, and
            lesser-known <span className="highlight-text">tech hacks</span>.
          </p>
          <p>
            My current approach involves combining{" "}
            <span className="highlight-text">clean</span> and{" "}
            <span className="highlight-text">clear coding practices</span> with
            innovative design principles to build high-performance applications.
          </p>
          <p>
            I&apos;m committed to{" "}
            <span className="highlight-text">continuous learning</span> and
            staying updated with the latest trends in web technologies. Through
            this portfolio, I strive to share valuable knowledge, present my
            projects, and connect with developers and collaborators in the tech
            industry.
          </p>
          <p>
            When I&apos;m not coding, I enjoy exploring new technologies,
            contributing to{" "}
            <span className="highlight-text">open-source projects</span>, or
            sharing what I&apos;ve learned with the developer community.
            Let&apos;s build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
}
