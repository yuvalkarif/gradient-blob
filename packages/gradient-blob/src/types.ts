export type Coordiante = [number, number]
export type Graph = Coordiante[]
export interface RandomNumberInRangeOptions {
  min: number
  max: number
}
interface CoordinateOptions extends RandomNumberInRangeOptions {}
export interface GenerateCoordiantesOptions {
  x: CoordinateOptions
  y: CoordinateOptions
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
