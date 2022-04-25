import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../../credentials.json'

const doc = new GoogleSpreadsheet(
  '1dn-7d97-zVk3hv1mz7ntl7A1kGfkR3PXHazHLGU06GI'
)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = doc.sheetsById[0]
    await sheet.loadCells('A2:F2')

    const chapterOneLikes = sheet.getCell(1, 1)
    const chapterTwoLikes = sheet.getCell(1, 3)
    const chapterThreeLikes = sheet.getCell(1, 5)

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
