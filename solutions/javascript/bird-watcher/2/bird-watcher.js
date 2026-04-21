// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0;
  for(let contador = 0; contador < birdsPerDay.length; contador++) {
    totalBirds += birdsPerDay[contador];
  }
  return totalBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const weekStart = (week - 1) * 7;
  const weekEnd = weekStart + 7;
  let totalBirdsInWeek = 0;
  for (let contador = weekStart; contador < weekEnd; contador++) {
    totalBirdsInWeek += birdsPerDay[contador];
  }
  return totalBirdsInWeek;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let contador = 0; contador < birdsPerDay.length; contador += 2) {
    birdsPerDay[contador] += 1
  }
  return birdsPerDay;
}
