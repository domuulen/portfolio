import Image from "next/image";

export default function About() {
  return (
    <div className="section about-section">
      <div className="about-content">
        {/* Image Section */}
        <div className="about-image">
          <Image
            src="/assets/pro.jpeg"
            alt="Temuulen Undrakh - Frontend Developer"
            className="profile-image"
            width={300} // Зургийн өргөн (зөвшөөрөгдсөн хэмжээг тохируулаарай)
            height={300} // Зургийн өндөр
            style={{ borderRadius: "50%" }}
            priority // Хангалттай хурдан ачаалуулахад нэмэлт проп
          />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I&apos;m{" "}
            <span className="highlight-text">Temuulen Undrakh</span>, a
            passionate{" "}
            <span className="highlight-text">Frontend Developer</span>
            based in <span className="highlight-text">Dublin, Ireland</span>. I
            specialize in creating modern, responsive, and user-friendly web
            applications that provide exceptional digital experiences.
          </p>
          <p>
            With expertise in <span className="highlight-text">React</span>,{" "}
            <span className="highlight-text">Next.js</span>,{" "}
            <span className="highlight-text">TypeScript</span>, and{" "}
            <span className="highlight-text">Tailwind CSS</span>, I transform
            creative ideas into interactive digital solutions. My approach
            combines clean code practices with innovative design principles to
            deliver high-performance applications.
          </p>
          <p>
            I&apos;m dedicated to{" "}
            <span className="highlight-text">continuous learning</span>
            and staying updated with the latest web technologies. Through this
            portfolio, I aim to share valuable insights, showcase my projects,
            and connect with fellow developers and potential collaborators in
            the tech community.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open-source projects, or sharing
            knowledge with the developer community. Let&apos;s build something
            amazing together!
          </p>
        </div>
      </div>
    </div>
  );
}
