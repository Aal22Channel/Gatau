const chalk = require("chalk")
const fs = require("fs")


//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//batas
global.APIKeys = {
    'https://api.shinoa.xyz/docs': '451C1A14'
}

//owmner v card
global.owner = ['6285788840231'] //ur owner number
global.ownernomer = "6285788840231" //ur owner number2
global.ownername = "Always ZhartxOfc🥶" //ur owner name
global.namaku = "KyooBot™"
global.ytname = "alzharnya" //ur yt chanel name
global.socialm = "@alzharyokiyaci" //ur github or insta name
global.location = "Jawa Barat Kota Bekasi, Indonesia " //ur location

//new
global.botname = "KyooBot™"
global.ownernumber = '6285788840231'
global.ownername = 'Always ZhartxOfc🥶'
global.ownerNumber = ["6285788840231@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@alzharnya"
global.websitex = "https://www.tiktok.com/@alzharnya?_t=8htXaLGLz7Z&_r=1"
global.wagc = "https://chat.whatsapp.com/Htt8moVgWyuL3IlCdlTCnO"
global.themeemoji = '🚩'
global.wm = "Created By Always ZhartxOfc"
global.wmbot = "KYOO - BY ZHARTX - 7.0.1"
global.botscript = 'kamu nanyeak escehnya?' //script link
global.packname = "Kyoo Bot - 7.0.1"
global.author = "ZhartxOfc"
global.creator = "6285788840231@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0
global.running = "Panel Pterodactyl"
global.domain = 'https://valzofc.jaspanelku.xyz' // Isi Domain Lu
global.apikeyy = 'ptla_oF4jX3tw6wl9cEHTrfj9ibZBJdUAJlXij2VtrgfoJBn' // Isi Apikeyy Plta Lu
global.capikeyy = 'ptlc_bVIdrKAqfitenuMWV4Qb44DyqUPXWqi33kcEMnx3I3J' // Isi Apikeyy Pltc Lu

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='


global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//messages
global.mess = {
    success: 'Nih',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'proses...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})