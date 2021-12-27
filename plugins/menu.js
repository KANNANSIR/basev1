let { performance } = require('perf_hooks')
let util = require('util')
let fetch = require('node-fetch');
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
let fs = require ('fs')
let path = require('path')

let handler  = async (m, { conn, usedPrefix: _p, command }) => {

  let old = performance.now()
  await conn.fakeReply(m.chat, '*[❗] Loading...*', '0@s.whatsapp.net', `*It's best to read the rules bot before using the sheet of rules*`)
    let RendyGans = 'https://i.ibb.co/wpWpVNd/avatar-contact.png'
  let pp = './src/menu.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

  try {
    RendyGans = await conn.getProfilePicture(conn.user.jid)
    pp = await conn.getProfilePicture(m.sender)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let neww = performance.now()
    let res = await fetch('https://api.zeks.xyz/api')
    let json = await res.json()
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let { exp, limit, level, money, role } = global.DATABASE.data.users[m.sender]
    let { min, xp, max, health } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let battery = ['100','99','98','97','96','95','94','93','92','91','90','89','88','87','86','85','84','83','82','81','80','79','78','77','76','75','74','73','72','71','70','69','68','67','66','65','64','63','62','61','60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1'][Math.floor(((d * 1) + gmt) / 8460) % 100]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const jam = moment.tz('Asia/Jakarta').format('HH')

 var ucapanWaktu = 'Selamat Pagi 🌄'



				if (jam >= '03' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi 🌄'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang ☀️'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore 🌅'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam 🌙'

				} else {

				ucapanWaktu = 'Selamat Malam 🌙'

				}
    const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let totalgc = Object.keys(global.DATABASE._data.chats).length
    let totalft = Object.keys(global.DATABASE._data.stats).length
    let totalsend = global.DATABASE.data.stats['menu.js'].total
    let tags = {
      'main': 'New User Starter',
      'daftar': 'Register',
      'abs': 'Menu Attendance', 
      'xp': 'EXP & Limit',
      'rpg': 'Adventure Menu (NEW)', 
      'tutor': 'Tutorial for bot',
      'hadiah': 'Hadiah',
      'dewasa': '18+ Menu',
      'database': 'Database',
      'group': 'Group Menu',
      'anime': 'Anime Menu',
      'panik': 'Prank Menu',
      'cs': 'Custom Sticker',
      'sticker': 'Creator Menu',
      'game': 'Fun Menu',
      'image': 'Image Menu',
      'videomaker': 'Video Menu',
      'anony': 'Anonymous Chat',
      'audio': 'Audio Menu', 
      'sound': 'Sound Menu',
      'quotes': 'Random Menu',
      'primbon': 'Primbon Menu',
      'belajar': 'Education Menu',
      'music': 'Music Menu',
      'simi': 'Simsimi Menu',
      'kerang': 'Kerang Menu',
      'downloader': 'Downloader Menu',
      'news': 'News Menu',
      'spam': 'Spammer Menu',
      'tools': 'Tools Menu',
      'jadibot': 'Jadi BOT Menu',
      'premium': 'Premium & VIP Menu',
      'owner': 'Owner Menu',
      'host': 'Host Menu',
      'info': 'Information',
      'thnks': 'THANKS TO',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `${ucapan()}, ${name}
⏳ 𝕋𝕀𝕄𝔼 : ${time}
💮 𝕎𝔼𝔼𝕂 : ${week}
📆 𝔻𝔸𝕋𝔼: ${date}
☮️ 𝕆𝕎ℕ𝔼ℝ : KRISHNADAS `
 
          .trim(),
           "description": "🅳🅾🅽🆃 🆂🅿🅰🅼",
          "buttonText": "Click  Here",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                 {
                  "title": `📜 All Commands`,
                  "description": "Show all features",
                  "rowId": ".? all"
                }, {
                  "title": "🎮 Game",
                  "description": "Game features",
                  "rowId": ".? game"

                }, {
                  "title": "💸 XP",
                  "description": "Features level & usage limit",
                  "rowId": ".? xp"

                },  {
                  "title": "🎥 Video Maker",
                  "description": "Making Different Types Of Videos",
                  "rowId": ".? .videomaker"

                },{
                  "title": "🖼️ Sticker",
                  "description": "Features for making stickers",
                  "rowId": ".? stiker"
                }, { 
                "title": "💢 Anime",
                "description": "Anime Related Plugin",
                "rowId": ".? anime"
              },  {
                  "title": "✍️ Quotes",
                  "description": "Gives You Random Quotes..",
                  "rowId": ".? quotes"
                }, {
                  "title": "👨🏻‍💻 Admin",
                  "description": "Group Admin Commands",
                  "rowId": ".? admin"
                }, {
                  "title": "🫂 Group",
                  "description": "Group Related Commands",
                  "rowId": ".? grup"
                }, {
                  "title": "✨ Premium",
                  "description": "Premium Users Plugins",
                  "rowId": ".? premium"
                }, {
                  "title": "🌐 Internet",
                  "description": "Commands Related To Internet",
                  "rowId": ".? internet"
                }, {
                  "title": "👤 Anonymous",
                  "description": "To Start Anonymous Chatting",
                  "rowId": ".? anonymous"
                }, {
                  "title": "🔅 Magic Shell",
                  "description": "Random answer feature",
                  "rowId": `.? magicshell`
                }, {
                  "title": "☯️ Nulis & Logo",
                  "description": "Text Maker Coammnds",
                  "rowId": ".? nulis"
                }, {
                  "title": "⏬ Downloader",
                  "description": "Downloading Commnds",
                  "rowId": ".? downloader"
                }, {
                  "title": "⚙️ Tools",
                  "description": "Tool features",
                  "rowId": ".? tools"
                }, {
                  "title": "🗣️ Voice Changer",
                  "description": "To change the voice",
                  "rowId": `.? audio`
                }, {
                  "title": "😜 Fun",
                  "description": "Just for fun",
                  "rowId": ".? fun"
                }, {
                  "title": "📁 Database",
                  "description": "User database",
                  "rowId": ".? database"
                },{
                  "title": "☮️ Owner",
                  "description": "Owner's special features",
                  "rowId": ".? owner"
                }
              ]
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
    }
    // use this if you use business whatsapp
    //   throw `
    // ┌〔 LIST MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Presented by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Ready for *${_p}levelup*` : `${max - exp} More XP for levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/e32f2651bac64b6d62c81.jpg")).buffer(), text.trim(), 'Made With ❤️ by Anirudh', 'Owner Bot', ',owner', 'All Commands', '.? all', m)
  } catch (e) {
    conn.reply(m.chat, 'Sorry, Try Again', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['ks'] 
handler.command = /^(menu)$/i

handler.owner = false
handler.mods = false 
handler.premium = false 
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 20

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
