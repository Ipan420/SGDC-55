let handler = async (m, { conn, text }) => {
    //let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let own = '6282286818715@s.whatsapp.net'
  conn.reply(m.chat, `_Ngapain Manggil Owner @${own.split("@")[0]}?_`, m, { 
      contextInfo: { 
          mentionedJid: [own] 
      } 
  })
    //let mentionedJid = [m.sender]
}
handler.customPrefix = /^(@IPAN GANS:V|IPAN|@6282286818715)/i
handler.command = new RegExp

module.exports = handler				     
