<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Javier Morales - Software Engineering Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
 <nav>
      <h1>Javier Morales</h1>
      <ul class="navigation">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
      <button class="burger-menu" id="burger-menu">
        <ion-icon class="bars" name="menu-outline"></ion-icon>
      </button>
</nav>
  </header>

  <section id="about">
    <h1>About Me</h1>
    <img src="profile_picture.jpg" alt="Javier Morales">
    <p>
      Welcome to my softfware engineering portfolio website. I am Javier Morales, a passionate software engineer with expertise in web development and application design. I love to solve complex problems and build innovative solutions.
    </p>
    <p>
      I have a strong foundation in languages such as HTML, CSS, JavaScript, and Python. Additionally, I have experience with frameworks like React and Django. I constantly strive to expand my skill set and stay updated with the latest technologies in the industry.
    </p>
  </section>

  <section id="projects">
    <h1>Projects</h1>
    <div class="project">
      <h2>Project 1</h2>
      <img src="project1_screenshot.jpg" alt="Project 1">
      <p>Description of project 1.</p>
    </div>
    <div class="project">
      <h2>Project 2</h2>
      <img src="project2_screenshot.jpg" alt="Project 2">
      <p>Description of project 2.</p>
    </div>
    <!-- Add more project divs as needed -->
  </section>

  <section id="contact">
    <h1>Contact Me</h1>
    <form action="submit_form.php" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      
      <button type="submit">Send Message</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2023 Javier Morales. All rights reserved.</p>
  </footer>
</body>
</html>
