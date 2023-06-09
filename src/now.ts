import dayjs from 'dayjs'
import type { UnixOptions } from './types'

export type NowOptions = UnixOptions

/**
 * get now timestamp
 * @param options now Options
 * @returns timestamp in number
 */
export function now(options: NowOptions = {}) {
  const { isUnix = true } = options
  return isUnix ? dayjs().unix() : dayjs().valueOf()
}
