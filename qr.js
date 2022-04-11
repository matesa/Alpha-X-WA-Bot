const chalk = require('chalk');
const {WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const Axios = require('axios')

const msgs = '*🚀 MatesaWhatsapp , Hesabınıza giriş yapmaz 🔎 WhatsApp Web API üzerinde yazılmıştır. 🔏* \n\n Daha fazla ayrıntı aşağıda 👇'
const msg1 = '```MatesaWhatsapp - MatesaWhatsapp geliştirmeye Açık Kaynak kodlu bir yazılımdır. \nYanlış veya yanlış kullanımdan doğabilecek tüm sonuçlardan kullanıcı sorumludur. \nAçık kaynaklı bir proje olduğu için, herkes yazılımı kopyalayabilir, ekleyebilir ve kaldırabilir,\nve onu kişiselleştirdiği şekilde kullanabilir. Ek olarak, eklenti desteği, kullanıcıların \norijinal yazılıma kendi eklentilerini yüklemelerini ve bunları diledikleri gibi kullanmalarını sağlar.\nBot'u amaç dışı kullanmak sizi açıkça yasaklar.\nKullanım tamamen kullanıcının sorumluluğundadır\'s responsibility altyapıdır Nasıl ki işletim sistemi \nsonradan yüklenen programlarla yapılan işten sorumlu değilse, MatesaBot\kullanıcıların kullanım amacı ve yönteminden \nsorumlu değildir \nMatesaWhatsapp para karşılığı pazarlamak, bulundurulması veya herhangi bir maddi değeri bulunan.\nherhangi bir şeyle birlikte satışa sunulması kesinlikle yasaktır\nDoğabilecek tüm hukuki soruşturmalardan\nKullanıcı sorumludur.```'
const warn = '```Userbot nedeniyle; WhatsApp hesabınız yasaklanmış olabilir. \nBu bir açık kaynak projesidir, yaptığınız her şeyden siz sorumlusunuz. \nMatesaWhatsapp yöneticileri kesinlikle sorumluluk kabul etmezler.\nMatesaWhatsapp kurarak bu sorumlulukları kabul etmiş olursunuz.```'
const msg2 = '```Bu proje açık kaynak olduğundan tüm kodlar açıktır. Ne az ne fazla; istediğine bakabilirsin Hesaplarınıza kesinlikle erişimimiz yok.```'
const msg3 = '```Güvenlik konusunda endişeleriniz varsa, kendi bilgisayarınıza yükleyebilirsiniz. Başka birinin verilerinizi ele geçirdiğini düşünüyorsanız, Whatsapp> Üç Nokta> Whatsapp Web> Tüm oturumlardan çıkış düğmesine tıklamanız yeterlidir.```'
const msg4 = '```Elbette hayır. Asla olmayacak. Ama bize bağışta bulunabilirsiniz. Bana Telegram'dan ulaşabilirsiniz .```'

async function AlphaX () {
    const conn = new WAConnection();
    conn.version = [2, 2206, 5]
    conn.logger.level = 'warn'; 
    
    conn.on('connecting', async () => {
        console.log(`${chalk.blueBright.bold('<>======== ❇ MatesaWhatsapp ❇  ')}${chalk.red.bold('BOT QR CODE ========<>')}
${chalk.white.bold('[[ MatesaWhatsapp QR Kodunun yeni ve hızlı versiyonu ]]')}

${chalk.green.bold('⚙ Whatsapp'a bağlanılıyor Lütfen bekleyin...💹')}`);
    });
    
// 'AlphaX;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')

    conn.on('open', async () => {
        
        console.log(chalk.blueBright.bold("Oturumunuzu oluşturuluyor..."))

        const rows = [
         {title: '🔎 ʏᴏᴜʀ ǫʀ sᴇssɪᴏɴ', description: '\n\nMATESA;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64') + '\n\n*⚠ Lütfen Bu Kodu Kimseyle Paylaşmayın!* ' + conn.user.name , rowId:"rowid1"},
         {title: '📚 ᴀʙᴏᴜᴛ ᴀʟᴘʜᴀ-x', description: `\n\n${msg1}`, rowId:"rowid2"},
         {title: '❌ ᴡᴀʀɴɪɴɢs ', description: `\n\n${warn}`, rowId:"rowid3"},
         {title: '🤔 ᴄᴀɴ ʏᴏᴜ ʀᴇᴀᴅ ᴍʏ ᴍᴇssᴀɢᴇs ?', description: `Sık sorulan birkaç soruyu yanıtlayın\n\n${msg2}`, rowId:"rowid4"},
         {title: '😐 ᴡʜᴀᴛ ᴀʙᴏᴜᴛ ᴏᴜʀ sᴇᴄᴜʀɪᴛʏ ?', description: `Sık sorulan birkaç soruyu yanıtlayın\n\n${msg3}`, rowId:"rowid5"},
         {title: '🤕 ɪs ᴛʜɪs ᴘᴀɪᴅ ?', description: `Sık sorulan birkaç soruyu yanıtlayın\n\n${msg4}`, rowId:"rowid6"}
         ]

        const sections = [{title: "⚔️ MatesaWhatsapp QR v.2 🌏", rows: rows}]

       const button = {
        buttonText: 'ᴄʟɪᴄᴋ ʜᴇʀᴇ 💝',
        description: msgs ,
        sections: sections,
        listType: 1
        }
        
        await conn.sendMessage(conn.user.jid ,button, MessageType.listMessage)
        
        var alpha = await Axios.get(`https://i.hizliresim.com/2ajrlek.png`, { responseType: 'arraybuffer' })
        
          await conn.sendMessage(conn.user.jid,Buffer.from(alpha.data), MessageType.image , {mimetype: Mimetype.png, caption: '*💹 MatesaWhatsapp kullandığınız için teşekkürler *' , thumbnail: Buffer.from(alpha.data)})

        console.log(
            chalk.red('__________________________ BU KODU KOPYALAYIN _________________________ \n'), 
            chalk.greenBright.bold('MATESA;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64'))
        );

        console.log(
            chalk.whiteBright.bold('\n⚠ Lütfen Bu Kodu Kimseyle Paylaşmayın '),
            chalk.red( conn.user.name ),
            chalk.blueBright.bold('\n\nkodu kopyalayamıyorsanız whatsapp numaranızı kontrol edin, kendi numaranıza gönderilmiştir >>')
        );
       process.exit(0);
    });

    await conn.connect();
}

MatesaWhatsapp ()
