// js/components.js

// Componente de Personagem com imagem
function CharacterCard(props) {
  const { nome, arcana, imageUrl } = props;
  return `
    <div class="character-card">
      <img src="${imageUrl}" alt="${nome}" class="character-image">
      <h3>${nome}</h3>
      <p>Arcana: ${arcana}</p>
    </div>
  `;
}

// Componente de Confidante com imagem
function ConfidantCard(props) {
  const { nome, arcana, imageUrl } = props;
  return `
    <div class="confidant-card">
      <img src="${imageUrl}" alt="${nome}" class="confidant-image">
      <h3>${nome}</h3>
      <p>Arcana: ${arcana}</p>
    </div>
  `;
}

// Torna global
window.CharacterCard = CharacterCard;
window.ConfidantCard = ConfidantCard;