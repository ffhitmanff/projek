let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [TIDAK ADA]
│ • Telkomsel: [0821-5548-3269]
│ • Smartfren: [TIDAK ADA]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6282156986313
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
