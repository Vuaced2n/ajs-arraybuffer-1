import Magician from '../Magician';

test('Magician attack standart', () => {
  const character = new Magician('Harry');
  character.attack = 100;
  expect(character.attack).toBe(100);
});

test('Magician attack distance 3', () => {
  const character = new Magician('Harry');
  character.attack = 100;
  character.distance = 3;
  expect(character.attack).toBe(80);
});

test('Magician attack distance stoned', () => {
  const character = new Magician('Harry');
  character.attack = 100;
  character.distance = 3;
  character.stoned = true;
  expect(character.attack).toBe(72);
});
