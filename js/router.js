// js/router.js

const pages = {
home: () => `
  <div class="p4g-home">
    <h1 style="color: #f1c40f; text-align: center;">Bem-vindo a Midnight Channel</h1>
    <p style="text-align: center; margin: 1.5rem auto; max-width: 650px; color: #ccc; line-height: 1.6;">
     A Midnight Channel é uma lenda urbana em Persona 4 Golden que diz que, em noites chuvosas, se você ligar a TV exatamente à meia-noite, verá sua “alma gêmea”.
Na verdade, a imagem distorcida que aparece mostra pessoas que estão em perigo, pois elas podem ser jogadas para dentro do Mundo da TV.
A Midnight Channel também reflete temas de identidade, percepção pública e sombras internas, servindo como motor para o mistério e para o progresso da história.
    </p>
    <img 
      src="assets/images/home-bg.jpg" 
      alt="Persona 4 Golden - Inaba"
      style="width: 100%; max-width: 600px; border-radius: 10px; margin: 1.5rem auto; display: block; border: 2px solid #34495e; box-shadow: 0 4px 16px rgba(0,0,0,0.4);"
    />
  </div>
`,

  personagens: () => {
    const characters = [
      { nome: "Yu Narukami", arcana: "Tolo", imageUrl: "assets/images/yu.jpg" },
      { nome: "Yosuke Hanamura", arcana: "Mago", imageUrl: "assets/images/yosuke.jpg" },
      { nome: "Chie Satonaka", arcana: "Papa", imageUrl: "assets/images/chie.jpg" },
      { nome: "Yukiko Amagi", arcana: "Sacerdotisa", imageUrl: "assets/images/yukiko.jpg" },
      { nome: "Kanji Tatsumi", arcana: "Imperador", imageUrl: "assets/images/kanji.jpg" },
      { nome: "Rise Kujikawa", arcana: "Enamorados", imageUrl: "assets/images/rise.jpg" },
      { nome: "Naoto Shirogane", arcana: "Fortuna", imageUrl: "assets/images/naoto.jpg" },
      { nome: "Teddie", arcana: "Estrela", imageUrl: "assets/images/teddie.jpg" },
      { nome: "Labrys(faz parte da Shadow Operatives)", arcana: "Fortuna", imageUrl: "assets/images/labrys.jpg" }
    ];
    
    const cards = characters.map(char => 
      window.CharacterCard(char)
    ).join('');
    
    return `
      <div class="p4g-personagens">
        <h1 style="color: #f1c40f; text-align: center;">Personagens de Persona 4</h1>
        <p style="text-align: center; margin: 1rem auto; max-width: 650px; color: #ccc; line-height: 1.5;">
          Os membros do Grupo de Investigação de Inaba e aliados contra o Mundo da TV.
        </p>
        <div class="characters-grid">
          ${cards}
        </div>
      </div>
    `;
  },

  confidantes: () => {
    const confidants = [
      { nome: "Kou & Daisuke", arcana: "Força", imageUrl: "assets/images/kou-daisuke.jpg" },
      { nome: "Nanako Dojima", arcana: "Justiça", imageUrl: "assets/images/nanako.jpg" },
      { nome: "Ryotaro Dojima", arcana: "Hierofante", imageUrl: "assets/images/dojima.jpg" },
      { nome: "Marie", arcana: "Aeron", imageUrl: "assets/images/marie.jpg" },
      { nome: "Margaret", arcana: "Imperatriz", imageUrl: "assets/images/margaret.jpg" },
      { nome: "Tohru Adachi", arcana: "Bobo da Corte(Jaster)", imageUrl: "assets/images/adachi.jpg" },
      { nome: "Naoki", arcana: "Enforcado", imageUrl: "assets/images/naoki.jpg" },
      { nome: "Hisano", arcana: "Morte", imageUrl: "assets/images/hisano.jpg" }
    ];
    
    const cards = confidants.map(c => 
      window.ConfidantCard(c)
    ).join('');
    
    return `
      <div class="p4g-confidantes">
        <h1 style="color: #f1c40f; text-align: center;">Confidantes de Inaba</h1>
        <p style="text-align: center; margin: 1rem auto; max-width: 650px; color: #ccc; line-height: 1.5;">
          “Social Links / Confidants” são termos usados principalmente na série Persona (da Atlus) para representar relacionamentos sociais que o protagonista desenvolve com outros personagens. Esses vínculos são fundamentais tanto para a narrativa quanto para a progressão mecânica do jogo.
        <break></break>       
        São sistemas de relacionamento que permitem ao jogador fortalecer laços com personagens, cada um associado a um Arcano do Tarot (como Enamorados, Louco, morte, etc.).
        À medida que você passa tempo com esses personagens e escolhe boas respostas, o vínculo evolui para Rank 1 → 10.
        História e desenvolvimento emocional
        </p>
        <div class="confidants-grid">
          ${cards}
        </div>
      </div>
    `;
  },

  galeria: () => `
    <div class="p4g-galeria">
      <h1 style="color: #f1c40f; text-align: center;">Galeria de Inaba</h1>
      <p style="text-align: center; margin: 1rem auto; max-width: 600px; color: #ccc; line-height: 1.5;">
        Momentos inesquecíveis do Grupo de Investigação no Mundo da TV e na vida cotidiana.
      </p>
      
      <div class="galeria-grid">
        <div class="galeria-item">
          <img src="assets/images/galeria1.jpg" alt="Investigadores" class="galeria-img">
          <p class="galeria-caption">Arte oficial de Persona 4 Golden</p>
        </div>
        <div class="galeria-item">
          <img src="assets/images/galeria2.jpg" alt="Festival" class="galeria-img">
          <p class="galeria-caption">Esboços do protagonista</p>
        </div>
        <div class="galeria-item">
          <img src="assets/images/galeria3.jpg" alt="Névoa" class="galeria-img">
          <p class="galeria-caption">Combate do jogo</p>
        </div>
       <div class="galeria-item">
        <a href="https://open.spotify.com/album/78LGjDUuu5dQZRfbrFQ2Ys?si=4Bi9LO-nSSm58DKIzw51lA" target="_blank" rel="noopener noreferrer" class="galeria-link">
          <img src="assets/images/galeria4.jpg" alt="Link Especial" class="galeria-img">
          <p class="galeria-caption">Soundtrack Ofical de Persona 4</p>
        </a>
        <p class="galeria-caption">Assista ao gameplay oficial</p>
      </div>
    </div>
  </div>
  `
};

// Sistema de roteamento SPA
const router = {
  current: 'home',
  
  navigate(route) {
    if (pages[route]) {
      document.getElementById('page-content').innerHTML = pages[route]();
      this.current = route;
      document.title = `P4G - ${route.charAt(0).toUpperCase() + route.slice(1)}`;
    }
  },
  
  init() {
    this.navigate('home');
  }
};

// Torna global
window.router = router;

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  router.init();
});