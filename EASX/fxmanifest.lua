fx_version 'cerulean'
game 'gta5'

description 'Standalone Emergency Alert System (EAS) with GUI and Config'

client_script 'client.lua'
server_script 'server.lua'
shared_script 'config.lua'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/script.js',
    'html/style.css',
    'html/sounds/*.ogg'
}
