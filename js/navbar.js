// js/navbar.js
const Navbar = () => `
  <nav class="p4g-navbar">
    <div class="logo">P4G.Midnight-Channel</div>
    <ul class="nav-links">
      <li><a href="#" data-route="home">Home</a></li>
      <li><a href="#" data-route="personagens">Personagens</a></li>
      <li><a href="#" data-route="confidantes">Confidantes</a></li>
      <li><a href="#" data-route="galeria">Galeria</a></li>
    </ul>
  </nav>
`;

// Renderiza o Navbar
document.getElementById('navbar-header').innerHTML = Navbar();

// Adiciona eventos de clique
document.querySelectorAll('[data-route]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const route = e.target.dataset.route;
    window.router.navigate(route);
  });
});