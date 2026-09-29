// modules/greeting.js
function initGreeting(bot) {
  bot.on('new_chat_members', async (msg) => {
    const chatId = msg.chat.id;

    for (const user of msg.new_chat_members) {
      const name = user.first_name || 'новичок';

      try {
        await bot.sendMessage(
          chatId,
          `Приветствуем, ${name}!\nДобро пожаловать в клан Martian!`
        );
      } catch (err) {
        console.log('Ошибка отправки приветствия:', err.description || err.message);
      }
    }
  });
}

module.exports = { initGreeting };