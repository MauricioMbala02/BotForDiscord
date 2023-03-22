const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor("Red")
	.setTitle('Regras da Comunidade a se cumprir')
    .setThumbnail('https://cdn.discordapp.com/attachments/1085729757158707342/1086768545096007811/coffee-cup.gif')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: '1ª Regra', value: 'Trate todos com respeito. Nenhum tipo de assédio, caça às bruxas, sexismo, racismo ou discurso de ódio será tolerado.', inline: true },
		{ name: '2ª Regra', value: 'Nada de conteúdo com restrição de idade ou obsceno. Isso inclui texto, imagens, vídeos ou links que contenham nudez, sexo, violência pesada ou conteúdo graficamente perturbador.', inline: true },
		{ name: '3ª Regra', value: 'É proibido fazer spam ou autopromoção (convites de servidor, anúncios, etc) sem permissão de um membro da equipe. Isso inclui mandar MDs para outros membros.', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '4ª Regra', value: 'Se você vir algo que quebre as regras, ou algo que te faça sentir insegurança, avise a equipe. Queremos que este servidor seja um espaço acolhedor!', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName('regras')
        .setDescription("Mostra todas as regras da comunidade"),

    async execute(interaction){
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}

