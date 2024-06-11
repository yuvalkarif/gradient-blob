import { expect, test } from 'vitest'
import { expectNumberEndingWithPercent, extractNumber, walkNumbers } from './fixtures'
import { gb } from '#@/index.js'

test('numbers to end with percent', () => {
  const gradientBlob = gb(10)
  walkNumbers(gradientBlob, (value) => {
    expectNumberEndingWithPercent(value)
  })
})

test('length to match', () => {
  const length = 99
  const gradientBlob = gb(length)
  const values = gradientBlob.split(', ')
  expect(values).toHaveLength(length)
})

test('numbers to be in range default 0-100', () => {
  const range = { min: 50, max: 60 }
  const gradientBlob = gb(99, { x: range, y: range })
  walkNumbers(gradientBlob, (percentage) => {
    const number = Number(extractNumber(percentage))
    expect(number).toBeGreaterThanOrEqual(range.min)
    expect(number).not.toBeGreaterThan(range.max)
    expect(number).toBeLessThanOrEqual(range.max)
    expect(number).not.toBeLessThan(range.min)
  })
})

test('struct is valid with css prop', () => {
  const gradientBlob = gb(50, { clipPathProperty: true })
  const validClipPathRegexExp = /^clip-path: polygon\((\s*\d+(\.\d+)?%\s+\d+(\.\d+)?%\s*,)*( \s*\d+(\.\d+)?%\s+\d+(\.\d+)?%\s*)\)$/
  expect(gradientBlob).match(new RegExp(validClipPathRegexExp))
})

test('struct is valid without css prop', () => {
  const gradientBlob = gb(50)
  const regex = /(\s*\d+(\.\d+)?%\s+\d+(\.\d+)?%\s*,)*( \s*\d+(\.\d+)?%\s+\d+(\.\d+)?%\s*)/
  expect(gradientBlob).match(regex)
})
