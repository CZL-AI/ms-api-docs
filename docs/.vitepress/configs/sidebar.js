import getV1Sidebar from './v1-sidebar'
import getV2Sidebar from './v2-sidebar'

export default {
  '/v1': getV1Sidebar(),
  '/v2/': getV2Sidebar()
}
