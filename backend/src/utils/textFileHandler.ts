import { readFileSync } from 'fs'
import { IOntInfo } from 'interfaces/AppInterface'

export default function huaweiTextFileHandler(): IOntInfo[] {
  const huaweiOntInfo = readFileSync('src/inputs/OntInfo - Huawei.txt', 'utf8')

  const lines = huaweiOntInfo.split('\n')
  const filteredLines = lines.filter(
    (_line, index) => index >= 8 && index <= 116,
  )

  const filteredLineInfo = filteredLines.map((line) => {
    const lineRawInfo = line.split(' ')
    const filteredLine = lineRawInfo.filter(function (e) {
      return e.replace(/(\r\n|\n|\r)/gm, '')
    })
    return filteredLine
  })

  const formattedObjectArr = filteredLineInfo.map((ont) => {
    const slotAndPort = ont[1].split('/')
    const obj = {
      manufacturer: 'Huawei',
      slot: slotAndPort[0],
      port: slotAndPort[1],
      ontId: ont[2],
      sn: ont[3],
      state: ont[5],
    }

    return obj
  })
  return formattedObjectArr
}
