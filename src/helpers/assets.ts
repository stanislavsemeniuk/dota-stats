export const assetsUrl = 'https://cdn.cloudflare.steamstatic.com';

export function createHeroImageLink(name: string) {
  const nameText = extractHeroName(name);
  return `${assetsUrl}//apps/dota2/images/dota_react/heroes/${nameText
    .toLowerCase()
    .replace(/\s+/g, '_')}.png?`;
}

function extractHeroName(fullName: string) {
  const index = fullName.indexOf('npc_dota_hero_');
  if (index !== -1) return fullName.slice(index + 'npc_dota_hero_'.length);
  else return '';
}
