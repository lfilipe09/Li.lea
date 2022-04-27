import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)
export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()
    res.end(console.log('Olha o req.body', req.body))

    const sheet = doc.sheetsByIndex[1]

    await sheet.addRow(JSON.stringify(req.body))

    res.end(console.log('deu bom!'))
  } catch (err) {
    console.log('deu erro ', err)
    res.end(
      JSON.stringify({
        chapterOneLikes: null,
        chapterTwoLikes: null,
        chapterThreeLikes: null,
        err: err
      })
    )
  }
}
