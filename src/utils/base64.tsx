export const fromBase64 = (value: string) => {
  const buff = Buffer.from(value, 'base64')
  return buff.toString('ascii')
}
