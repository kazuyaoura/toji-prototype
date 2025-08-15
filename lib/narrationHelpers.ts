// lib/narrationHelpers.ts
import type { CharacterName } from '@/contexts/CharacterContext';

export function narratorImageFor(character: CharacterName | null) {
  // 序章冒頭は吉左衛門を出す指定があるので固定でもOK
  return '/images/kichizaemon_character.png';
}

export function protagonistLabel(character: CharacterName | null) {
  return character ?? '隆介';
}

export function headCharacterFor(character: CharacterName | null): CharacterName {
  // 設定：主人公が隆介なら頭は鈴／主人公が鈴なら頭は隆介
  return character === '鈴' ? '隆介' : '鈴';
}
