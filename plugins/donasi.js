let handler = async m => m.reply(`

┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/919633687665*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
