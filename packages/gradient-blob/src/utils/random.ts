import type { RandomNumberInRangeOptions } from '../types/index.js'

export function randomNumberInRange(options: RandomNumberInRangeOptions) {
  return Math.floor(Math.random() * (options.max - options.min + 1) + options.min)
}

/**
 * @param chance Chance to succeed in percentages
 */
export function randomByChance(chance: number) {
  const percentToCache = (chance / 100)
  return Math.random() < percentToCache
}
