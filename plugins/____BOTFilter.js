let handler = async (m, { conn, usedPrefix }) => {
    //let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let nama = conn.getName(m.sender)
    let ayam = m.sender
    let own = '14132289468@s.whatsapp.net'
  conn.reply(m.chat, `_Hai Kak @${ayam.split("@")[0]}, Ketik *!menu* Untuk Memulai @${own.split("@")[0]}_`, m, { 
      contextInfo: { 
          mentionedJid: [ayam, own] 
      } 
  })
    //let mentionedJid = [m.sender]
}
handler.customPrefix = /^(bot|sgdc-bot|bott)$/i
handler.command = new RegExp

module.exports = handler


//module.exports = handler
