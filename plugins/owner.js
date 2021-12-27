function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '919633687665', 'Krishnadas', m)
let stc = conn.sendContact(m.chat, '919633687665', 'Krishnadas', m)
  conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*FEBA-MWOL-BOT*', 'status@broadcast')
}
handler.customPrefix = ['Developer *krishnadas & pranav*']
handler.command = new RegExp

module.exports = handler
