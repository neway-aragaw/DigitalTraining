import './About.css'; // Ensure this path is correct

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        The Prospect Training Website is designed to streamline the onboarding process for new employees. It supports in-person training by providing essential resources and tools to facilitate effective learning.
      </p>
      <h2>Key Features:</h2>
      <ul>
        <li><strong>Structured Training:</strong> Content is organized by job areas to assist with specific training needs.</li>
        <li><strong>Flexible Learning:</strong> Trainees can access and review materials at their own pace, accommodating various schedules.</li>
        <li><strong>Assessments:</strong> Includes assessments to evaluate and ensure trainee understanding of key concepts.</li>
        <li><strong>User-Friendly Design:</strong> An intuitive interface that enhances the learning experience and simplifies navigation.</li>
        <li><strong>Quick Directory:</strong> Provides a directory to quickly locate important places, such as shuttles and other key locations.</li>
      </ul>
      <p>
        Developed by <a href="https://portfolio-react-git-main-newayaragaws-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Neway Aragaw</a> (web developer), a PSA (Prospect employee) at Prospect BWI, this project was created for free. It aims to enhance training efficiency and provide a valuable tool for Prospect.
      </p>
    </div>
  );
};

export default About;
