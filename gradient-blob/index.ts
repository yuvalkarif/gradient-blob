interface RandomNumberInRangeOptions {
  min: number
  max: number
}
interface CoordinateOptions extends RandomNumberInRangeOptions {}

interface GenerateCoordiantesOptions {
  x: CoordinateOptions
  y: CoordinateOptions

}
type Coordiante = [number, number]
type Graph = Coordiante[]

function randomNumberInRange(options: RandomNumberInRangeOptions) {
  return Math.floor(Math.random() * (options.max - options.min + 1) + options.min)
}

/**
 * @param chance Chance to succeed in percentages
 */
function randomByChance(chance: number) {
  const percentToCache = (chance / 100)
  return Math.random() < percentToCache
}

function createCoordiante(options: GenerateCoordiantesOptions): Coordiante {
  const coordianteGenerator = randomNumberInRange
  return [coordianteGenerator(options.x), coordianteGenerator(options.y)]
}

function createGraph(amountOfCoordiantes: number, options: GenerateCoordiantesOptions) {
  return Array.from({ length: amountOfCoordiantes }).map(() => createCoordiante(options))
}
function createPolygon(graph: Graph, { property }: { property?: boolean } = {}) {
  const percentages = graph.reduce((acc, curr) => {
    const prefix = acc ? ',' : '' as const
    return acc += curr.reduce((acc, char) => acc += ` ${char}%`, prefix)
  }, '')
  return property ? createClipPathProperty(percentages) : percentages
}
function createClipPathProperty(percentages: string) {
  return `clip-path: polygon(${percentages})`
}

export function gb(amountOfCoordiantes: number, options: GenerateCoordiantesOptions) {
  const graph = createGraph(amountOfCoordiantes, options)
  return createPolygon(graph)
}

interface GradientBlobCacheOptions extends GraphCacheHandlerOptions {
  cache?: Graph
}

interface GraphCacheHandlerOptions {
  /**
   * Chance in percentages to replace each coordiante
   *
   * @default 0
   */
  cacheChance?: number
}

export function graphCacheHandler(graph: Graph, cache: Graph | undefined, options: GraphCacheHandlerOptions = {}) {
  const { cacheChance = 0 } = options
  if (cacheChance === 0)
    return graph
  const replacedGraph = (graph.map((c, index) => {
    if (!cache?.[index])
      return c

    return randomByChance(cacheChance) ? cache[index] : c
  }))
  return replacedGraph
}

export function gbc(options: GradientBlobCacheOptions = {}) {
  const { cache: cacheInitValue, ..._options } = options
  let cache: Graph | undefined = cacheInitValue
  const gbCache = (amountOfCoordiantes: number, options: GradientBlobCacheOptions & GenerateCoordiantesOptions) => {
    const graph = createGraph(amountOfCoordiantes, options)
    const replacedGraph = graphCacheHandler(graph, cache, { ..._options, ...options })
    cache = replacedGraph
    return createPolygon(replacedGraph)
  }
  return { gb: gbCache }
}
