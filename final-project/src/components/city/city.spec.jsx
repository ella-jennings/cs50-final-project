import React from 'react';
import { render } from '@testing-library/react';
import City, {CalculateScore} from './city';

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
  const scores = [2, 3, 4, 5, 6, 7, 8, 9, 10]
  scores.forEach(element => {
    let score = CalculateScore(scores);
    expect(score).toBe(34);
  });
});

test('CalculateScore multiplies total score by two with a deal card', () => {
  const scores = ['Deal', 2, 3, 4, 5, 6, 7, 8, 9, 10]
  scores.forEach(element => {
    let score = CalculateScore(scores);
    expect(score).toBe(68);
  });
});

test('CalculateScore multiplies total score by three with two deal cards', () => {
  const scores = ['Deal', 'Deal', 2, 3, 4, 5, 6, 7, 8, 9, 10]
  scores.forEach(element => {
    let score = CalculateScore(scores);
    expect(score).toBe(102);
  });
});

test('CalculateScore multiplies total score by four with three deal cards', () => {
  const scores = ['Deal', 'Deal', 'Deal', 2, 3, 4, 5, 6, 7, 8, 9, 10]
  scores.forEach(element => {
    let score = CalculateScore(scores);
    expect(score).toBe(136);
  });
});

test('CalculateScore multiplies negative values if any elements exist', () => {
    let score = CalculateScore(['Deal']);
    expect(score).toBe(-40);
});
