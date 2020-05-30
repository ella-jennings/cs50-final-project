import {CalculateScore} from '../helpers/calculator.ts';

test('CalculateScore is 0 by default', () => {
  let score = CalculateScore([]);
  expect(score).toBe(0);
});

test('CalculateScore adds values with no deal cards', () => {
  const scores = [[2, -18], [3, -17], [4, -16], [5, -15], [6, -14], [7, -13], [8, -12], [9, -11], [10, -10]]
  scores.forEach(element => {
    let score = CalculateScore([element[0]]);
    expect(score).toBe(element[1]);
  });
});

test('CalculateScore adds multiple values with no deal cards', () => {
    const scores = [4, 5, 6, 7, 8, 9, 10]
    let score = CalculateScore(scores);
    expect(score).toBe(29);
});

test('CalculateScore multiplies total score by two with a deal card', () => {
  const scores = ['Deal1', 2, 9, 10]
  scores.forEach(element => {
    let score = CalculateScore(scores);
    expect(score).toBe(2);
  });
});

test('CalculateScore multiplies total score by three with two deal cards', () => {
  const scores = ['Deal1', 'Deal2', 2, 9, 10]
  scores.forEach(element => {
    let score = CalculateScore(scores);
    expect(score).toBe(3);
  });
});

test('CalculateScore multiplies total score by four with three deal cards', () => {
    const scores = ['Deal1', 'Deal2', 'Deal3', 2, 9, 10]
    let score = CalculateScore(scores);
    expect(score).toBe(4);
});

test('CalculateScore multiplies negative values if any elements exist', () => {
    let score = CalculateScore(['Deal1']);
    expect(score).toBe(-40);
});

test('CalculateScore adds 20 if > 8 cards', () => {
    const scores = ['Deal1', 'Deal2', 'Deal3', 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let score = CalculateScore(scores);
    expect(score).toBe(156);
});
