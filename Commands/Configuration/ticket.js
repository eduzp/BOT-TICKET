const Discord = require("discord.js");
const config = require('../../config.json');

module.exports = {
    name: "ticket",
    description: "📱 [Configuração] Utilize para enviar uma embed para abrir um ticket",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) return interaction.reply({
            content: `**❌ | ${interaction.user}, Você precisa da permissão \`ADMNISTRATOR\` para usar este comando!**`,
            ephemeral: true,
        })

        await interaction.channel.send({
            embeds: [
                new Discord.EmbedBuilder()
                    .setColor(config.embeds_color.embed_invisible)
                    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                    .addFields(
                        { name: '🇧🇷 Brasil', value: `> Abra ticket para compras, dúvidas ou suporte` },
                        { name: '🇺🇸 English', value: `> Open ticket for purchases, questions or support` }
                    )
                    .setImage("https://i.postimg.cc/J76tB3x9/standard-2.gif")
                    .setFooter({ text: `©IMPUROS2024` })
            ],
            components: [
                new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('start_ticket')
                            .setLabel('OPEN TICKET')
                            .setEmoji('🎫')
                            .setStyle(2)
                    )
            ]
        });

        interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setColor(config.embeds_color.embed_success)
                    .setDescription(`✅ | Ticket criado com sucesso!`)
            ],
            ephemeral: true
        })
    }
}