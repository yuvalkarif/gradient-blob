import type { RandomNumberInRangeOptions } from '../types/index.js'

export function randomNumberInRange(options: RandomNumberInRangeOptions = {}) {
  const { min = 0, max = 100 } = options
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * @param chance Chance to succeed in percentages
 */
export function randomByChance(chance: number) {
  const percentToCache = (chance / 100)
  return Math.random() < percentToCache
}
