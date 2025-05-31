
<script>
  const projects = [
    {
      title: 'My Portfolio',
      description: `
        This is a personal portfolio website built using SvelteKit. 
        It showcases my skills, experience, and projects. 
        The site is fully responsive, fast, and designed to provide a clean, modern look for presenting my work.
      `,
      tech: 'SvelteKit, TailwindCSS',
      demo: '#',
      github: '#'
    }
  ];

  const skills = [
    'JavaScript', 'SvelteKit', 'HTML', 'CSS', 'java'
  ];
</script>

<main class="p-6 max-w-3xl mx-auto space-y-12 font-sans">
  <!-- About Me -->
  <section>
    <h1 class="zoom-in">Kollipara Hari Chandana👋</h1>
    <p class="text-lg text-gray-700">
      I'm a web developer passionate about building clean, responsive web applications using SvelteKit. 
      I enjoy creating user-friendly interfaces and meaningful digital experiences.this is my first time experience with the svelte kit.
    </p>
  </section>

  <!-- Projects -->




  <section>
    <h2 class="zoom-in">Projects</h2>
    {#each projects as project}
      <div class="mb-6 p-4 rounded-xl border shadow-sm bg-white">
        <h3 class="text-2xl font-bold">{project.title}</h3>
        <p class="text-gray-600 mt-2">{project.description}</p>
        <p class="text-sm text-gray-500 mt-1">Tech Stack: {project.tech}</p>
        <div class="mt-2 space-x-4">
         
        </div>
      </div>
    {/each}
  </section>

  <!-- Skills -->
  <section>
    <h2 class="zoom-in">Skills</h2>
    <ul class="flex flex-wrap gap-2">
      {#each skills as skill}
        <li class="bg-gray-200 px-3 py-1 rounded-full text-sm">{skill}</li>
      {/each}
    </ul>
  </section>

  <!-- Soft Skills -->
<section>
  <h2 class="zoom-in">Soft Skills</h2>
  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li>Problem-solving and analytical thinking</li>
    <li>Effective communication and teamwork</li>
    <li>Time management and adaptability</li>
    <li>Creativity and attention to detail</li>
  </ul>
</section>



<!-- Extracurricular Activities -->
<section>
  <h2 class="zoom-in">Extracurricular Activities</h2>
  <ul class="list-disc list-inside text-gray-700 space-y-1">
    <li>Vice-president for ECHO organisation</li>
    <li>SPL for English communication</li>
    <li>Secured first position in Chess competition among all co-branches as part of a sports event</li>
    <li>Secured first position in Elocution competition out of 50+ participants from the institute</li>
    <li>Member of University Coding Club</li>
    <li>Hackathon participant – MAKE SKILLED HACKATHON</li>
  </ul>
</section>



  <!-- Contact -->
  <section>
    <h2 class="zoom-in">Contact</h2>
    <p>You can reach me at: <strong>+91 9177957545</strong></p>
    <p>Or email me at: <a href="mailto:harichandana030181@gmail.com" class="text-blue-600 hover:underline">harichandana030181@gmail.com</a></p>
  </section>
</main>
