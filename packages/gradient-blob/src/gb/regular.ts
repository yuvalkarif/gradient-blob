import type { GenerateCoordiantesOptions } from '@/types/index.js'
import { createGraph, createPolygon } from '@/utils/generators.js'

export function gb(amountOfCoordiantes: number, options: GenerateCoordiantesOptions) {
  const graph = createGraph(amountOfCoordiantes, options)
  return createPolygon(graph)
}
