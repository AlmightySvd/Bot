function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *Sxrgio*
▢ Instagram :
  • http://Instagram.com/not.sxrgio
▢ WhatsApp :
  • (wa.me/51977802958) 
▢ GitHub :
  • 
▢ Telegram : 
  • https://www.facebook.com/SvdRuthless/ (FG) 
  • https://www.facebook.com/SvdRuthless/ (canal)
  • https://www.facebook.com/SvdRuthless/ (grupo)
▢ Facebook : 
  • https://www.facebook.com/SvdRuthless/
  • https://www.facebook.com/SvdRuthless/
▢ YouTube : 
  • https://www.facebook.com/SvdRuthless/
  
 *≡ HELPERS*
  *Sxrgio*
▢ Instagram : https://www.instagram.com/not.sxrgio
▢ WhatsApp : wa.me/
  *SOPORTE*
▢ Instagram : https://
▢ WhatsApp : wa.me/51977802958
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
