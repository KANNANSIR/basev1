let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*SC Ini Menggunakan Termux*
*nanti*
_Karrna banyak yg nyolong_
_lain kali sc nya_
_wa.me/62895378264836_
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🔥 *FREE SC* 🔥', 'status@broadcast')
}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 20

module.exports = handler
 
