let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
CHANNEL LINK PINNE THARA MWONU*${usedPrefix}menu*
`.trim(), m)

}
handler.help = ['channel']
handler.tags = ['info']
handler.command = /^(channel)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
