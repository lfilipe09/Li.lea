import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    })
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[1]
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
