import { randomNumberInRange } from './random.js'
import type { Coordiante, GenerateCoordiantesOptions, Graph } from '@/types/index.js'

function createCoordiante(options: GenerateCoordiantesOptions): Coordiante {
  const coordianteGenerator = randomNumberInRange
  return [coordianteGenerator(options.x), coordianteGenerator(options.y)]
}

function createClipPathProperty(percentages: string) {
  return `clip-path: polygon(${percentages})`
}
export function createGraph(amountOfCoordiantes: number, options: GenerateCoordiantesOptions) {
  return Array.from({ length: amountOfCoordiantes }).map(() => createCoordiante(options))
}
export function createPolygon(graph: Graph, { property }: { property?: boolean } = {}) {
  const percentages = graph.reduce((acc, curr) => {
    const prefix = acc ? ',' : '' as const
    return acc += curr.reduce((acc, char) => acc += ` ${char}%`, prefix)
  }, '')
  return property ? createClipPathProperty(percentages) : percentages
}
