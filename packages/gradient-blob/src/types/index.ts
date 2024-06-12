export type Coordiante = [number, number]
export type Graph = Coordiante[]
export interface RandomNumberInRangeOptions {
  /**
   * minimum position in percentages
   * @default 0
   */
  min?: number
  /**
   * maximum position in percentages
   * @default 100
   */
  max?: number
}
interface CoordinateOptions extends RandomNumberInRangeOptions {}
export interface GenerateCoordiantesOptions {
  x?: CoordinateOptions
  y?: CoordinateOptions
}

export interface GradientBlobOptions extends PolygonOptions, GenerateCoordiantesOptions {

}

export interface PolygonOptions {
  /**
   * Whether to wrap the value with `clip-path: polygon(${percentages})`
   * @default false
   */
  clipPathProperty?: boolean
}

export interface GradientBlobCacheOptions extends GraphCacheHandlerOptions {
  /**
   * Previous Blob Graph value to generate the new one from
   */
  cache?: Graph
}

export interface GraphCacheHandlerOptions {
  /**
   * Chance in percentages to replace each coordiante
   *
   * @default 0
   */
  cacheChance?: number
}
