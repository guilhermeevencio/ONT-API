import { readFileSync } from 'fs'
import { IOntInfo } from 'interfaces/AppInterface'

export function huaweiTextFileHandler(): IOntInfo[] {
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

export function zteTextFileHandler(): IOntInfo[] {
  const zteOntInfo = readFileSync('src/inputs/OntInfo - ZTE - SNs.txt', 'utf8')
  const ontLines = zteOntInfo.split('\n')
  const ontFilteredLines = ontLines.filter(
    (_line, index) => index >= 2 && index <= 107,
  )
  const ontFilteredLineInfo = ontFilteredLines.map((line) => {
    const lineRawInfo = line.split(' ')
    const filteredLine = lineRawInfo.filter(function (e) {
      return e.replace(/(\r\n|\n|\r)/gm, '')
    })
    return filteredLine
  })

  // Funções para fomartar o status - ZTE

  const zteStateOntInfo = readFileSync(
    'src/inputs/OntInfo - ZTE - SNs - State.txt',
    'utf8',
  )
  const ontStateLines = zteStateOntInfo.split('\n')
  const ontStateFilteredLines = ontStateLines.filter(
    (_line, index) => index >= 3 && index <= 108,
  )
  const ontStateFilteredLineInfo = ontStateFilteredLines.map((line) => {
    const lineRawInfo = line.split(' ')
    const filteredLine = lineRawInfo.filter(function (e) {
      return e.replace(/(\r\n|\n|\r)/gm, '')
    })
    return filteredLine
  })

  const formattedObjArr = ontFilteredLineInfo.map((ont, index) => {
    const slotAndPort = ont[0].split('/')
    const portAndOntId = slotAndPort[2].split(':')
    const sn = ont[3].split(':')[1]
    return {
      slot: slotAndPort[1],
      port: portAndOntId[0],
      sn,
      ontId: portAndOntId[1],
      state: ontStateFilteredLineInfo[index][3],
      manufacturer: 'ZTE',
    }
  })

  return formattedObjArr
}
