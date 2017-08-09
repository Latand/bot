const debug = require('debug')('bananium:only-admin')

module.exports = async ({ message, reply, telegram }, next) => {
  const member = await telegram.getChatMember(message.chat.id).catch(debug)
  if (member && (member.status === 'creator' || member.status === 'administrator')) {
    return next()
  }
  return reply('You shall not pass!')
}
