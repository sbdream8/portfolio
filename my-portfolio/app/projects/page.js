// app/projects/page.js
import Projects from '../components/Projects'; // Adjusted to use correct path

export default function ProjectsPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Projects</h1>
      <Projects />
    </div>
  );
}
