import { version } from './package.json'

export const TOKEN = 'LEO'
export const IS_HIVE = true
export const APP_DOMAIN = 'https://www.leofinance.io'
export const APP_TITLE = 'Leofinance'
export const APP = `leofinance/${version}`
export const IMAGES_CDN = 'https://images.hive.blog/'
export const IMAGE_UPLOAD_SERVER = 'https://images.hive.blog'
export const NODES = ['https://api.hive.blog', 'https://api.deathwing.me', 'https://rpc.ausbit.dev', 'https://api.ha.deathwing.me']
export const COMMUNITY_CATEGORY = 'hive-167922'
export const AUTO_ADD_COMMUNITY = true
export const SCOT_TAG = 'leofinance'
export const SCOT_TAG_FIRST = true
export const MAX_TAG = 10
export const SCOT_API = 'https://scot-api.hive-engine.com'
export const SCOT_QUERY_LIMIT = 10
export const CURATED_FEED = false
export const CURATED_FEED_ACCOUNT = 'r-cine'
export const SIDECHAIN_ID = 'ssc-mainnet-hive'
export const SIDECHAIN_RPC = 'https://ha.herpc.dtools.dev'
export const SIDECHAIN_EXPLORER = 'https://he.dtools.dev'
export const SIDECHAIN_HISTORY_API = 'https://accounts.hive-engine.com'
export const NUMBER_OF_UNSTAKE_TRX = 4
export const MAX_UPLOAD_SIZE = 8
export const AXIOS_CACHE_CONFIG = {
  maxAge: 0 * 60 * 1000, // 0 minutes
  exclude: { query: false }
}
export const NFT_ENABLED = false
export const NFT_SYMBOL = 'CINENFT'
export const NFT_MARKETPLACE = 'cinetv'
export const NFT_MARKETPLACE_API = 'https://api.marketplace.tribaldex.com'
export const DTF_ENABLED = false
export const DTF_ID = 'CINE:CINE'
export const POOL_ENABLED = false
