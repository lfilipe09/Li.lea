import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../../credentials.json'

const doc = new GoogleSpreadsheet(
  '1dn-7d97-zVk3hv1mz7ntl7A1kGfkR3PXHazHLGU06GI'
)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[1]
    await sheet.loadCells('A2:F2')

    const chapterOneLikes = sheet.getCell(1, 1)
    const chapterTwoLikes = sheet.getCell(1, 3)
    const chapterThreeLikes = sheet.getCell(1, 5)
    req.body = JSON.parse(req.body)

    chapterOneLikes.value = req.body.chapterOneLikes

    chapterTwoLikes.value = req.body.chapterTwoLikes

    chapterThreeLikes.value = req.body.chapterThreeLikes

    await sheet.saveUpdatedCells()
    res.end(
      JSON.stringify({
        chapterOneLikes: chapterOneLikes.value,
        chapterTwoLikes: chapterTwoLikes.value,
        chapterThreeLikes: chapterThreeLikes.value
      })
    )
  } catch (err) {
    res.end(
      JSON.stringify({
        chapterOneLikes: null,
        chapterTwoLikes: null,
        chapterThreeLikes: null
      })
    )
  }
}
