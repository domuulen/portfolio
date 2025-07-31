import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is a description of project one.',
    url: 'https://github.com/domuulen/project-one',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is a description of project two.',
    url: 'https://github.com/domuulen/project-two',
  },
];

export default function Projects() {
  return (
    <div className="container"> {/* globals.css дахь container класс */}
      <h1>My Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
