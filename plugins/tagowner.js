let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*Ngapain Manggil ꧁࿇ IPAN ࿇꧂?*
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /^(@꧁࿇ IPAN ࿇꧂|@꧁࿇ IPAN ࿇꧂Pan)$/i
handler.command = new RegExp

module.exports = handler
