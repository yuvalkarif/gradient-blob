import type { GradientBlobCacheOptions, GradientBlobOptions, Graph, GraphCacheHandlerOptions } from '#@/types/index.js'
import { createGraph, createPolygon } from '#@/utils/generators.js'
import { randomByChance } from '#@/utils/random.js'

export function graphCacheHandler(graph: Graph, cache: Graph | undefined, options: GraphCacheHandlerOptions = {}) {
  const { cacheChance = 0 } = options
  if (cacheChance === 0)
    return graph
  const replacedGraph = (graph.map((c, index) => {
    if (!cache?.[index])
      return c
    const ret = randomByChance(cacheChance) ? cache[index]! : c
    return ret
  }))
  return replacedGraph
}

export function gbc(options: GradientBlobCacheOptions = {}) {
  const { cache: cacheInitValue, ..._options } = options
  let cache: Graph | undefined = cacheInitValue
  const gbCache = (amountOfCoordiantes: number, options: GradientBlobCacheOptions & GradientBlobOptions) => {
    const graph = createGraph(amountOfCoordiantes, options)
    const replacedGraph = graphCacheHandler(graph, cache, { ..._options, ...options })
    cache = replacedGraph
    return createPolygon(replacedGraph, options)
  }
  return { gb: gbCache }
}
