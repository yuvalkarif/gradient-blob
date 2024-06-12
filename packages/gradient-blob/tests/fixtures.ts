import { expect } from 'vitest'
import type { gb } from '#@/index.js'

export function expectNumberEndingWithPercent(input: string) {
  expect(input.endsWith('%')).toBeTruthy()
  const numberPart = extractNumber(input)
  const numberValue = Number(numberPart)
  expect(!Number.isNaN(numberValue)).toBeTruthy()
}
export function expectNumberInRange(input: string) {
  expect(input.endsWith('%')).toBeTruthy()
  const numberPart = extractNumber(input)
  const numberValue = Number(numberPart)
  expect(!Number.isNaN(numberValue)).toBeTruthy()
}

export function extractNumber(input: string) {
  const numberPart = input.slice(0, -1)
  return numberPart
}

export function walkNumbers(gradientBlob: ReturnType<typeof gb>, callback: (value: string) => any, callbackPair?: (value: string) => any) {
  const values = gradientBlob.split(', ')
  values.forEach((valuePair) => {
    callbackPair?.(valuePair)
    valuePair.trim().split(' ').forEach(callback)
  })
}
