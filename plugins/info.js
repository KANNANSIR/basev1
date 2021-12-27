let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• KRISHNADAS 
┃
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS
┃• FFmpeg
┃
┃> Thanks To :
┃• Nurutomo
┃• Krishnadas 
┃• 
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Tree:*  [8888888888]
┣➥ *Dana:* [8888888888]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? https://wa.me/919633687665*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*FEBA MWOL*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(button)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
