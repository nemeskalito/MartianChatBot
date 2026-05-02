const CHAT_ID = -1003466478781;

const rulesLink = `<a href="https://t.me/c/3466478781/519">Здесь</a>`;
const banker = `<a href="https://t.me/komikscom">Здесь</a>`;
const salesBot = `<a href="https://t.me/+cZmAlq2oiPcwZWUy">Здесь</a>`;
const boutique = `<a href="https://t.me/+98EaK9U5Vu9lMjEy">Здесь</a>`;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function notification(bot) {
  console.log("🔍 Notification запущен. CHAT_ID:", CHAT_ID);

  try {
    await bot.sendMessage(CHAT_ID, "✅ Уведомления бота активированы!");
    console.log("✅ Тестовое сообщение отправлено");
  } catch (err) {
    console.error("❌ Ошибка при отправке теста:", err.message);
  }

  while (true) {
    try {
      await bot.sendMessage(
        CHAT_ID,
        `
• Правила группы|чата - ${rulesLink}
• Собрать расу Martian - ${banker}
• Мониторинг предложений - ${salesBot}
• UFO помощь - ${boutique}
        `,
        { parse_mode: "HTML" }
      );
      console.log("✅ Уведомление отправлено");
    } catch (err) {
      console.error("❌ Ошибка при отправке:", err.message);
    }

    await delay(24 * 60 * 60 * 1000); // 24 часа
  }
}

module.exports = { notification };