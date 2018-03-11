import path from 'path'
import yamlConfig from 'node-yaml-config'

const config = yamlConfig.load(path.join(__dirname, '../', '/config.yml'))

export default config
