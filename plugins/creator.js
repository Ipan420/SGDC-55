let handler = function (m) {
  this.sendContact(m.chat, '6282286818715', ' IPAN-BOT || @Ipan4200', m)
m.reply('wa.me/6282286818715')
}

handler.command = /^(owner|creator)$/i

handler.fail = null

module.exports = handler
