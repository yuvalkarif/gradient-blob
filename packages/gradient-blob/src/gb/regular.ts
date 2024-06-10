import type { GenerateCoordiantesOptions } from '#root/types/index.js'
import { createGraph, createPolygon } from '#root/utils/generators.js'

export function gb(amountOfCoordiantes: number, options: GenerateCoordiantesOptions) {
  const graph = createGraph(amountOfCoordiantes, options)
  return createPolygon(graph)
}
