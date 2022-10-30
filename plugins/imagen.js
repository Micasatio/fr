let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let handler  = async (m, { conn, args, text }) => {
if (!text) return m.reply('*[❗] Entrez le texte que vous souhaitez rechercher*')
let results = await gis(text) || []
let { url, width, height } = pickRandom(results) || {}
if (!url) return m.reply('*[❗] Serveur tombé, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴*')
conn.sendFile(m.chat, url, 'gimage', `
🔎 *Résultat de :* ${text}
🌎 *Chercheur:* Google
`.trim(), m)}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['general']
handler.command = /^(gimage|image|Photo|imagen)$/i
module.exports = handler
function pickRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)]}
