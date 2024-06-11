import type { GradientBlobOptions } from '#@/types/index.js'
import { createGraph, createPolygon } from '#@/utils/generators.js'

export function gb(amountOfCoordiantes: number, options: GradientBlobOptions = {}) {
  const graph = createGraph(amountOfCoordiantes, options)
  return createPolygon(graph, options)
}
