document.getElementsByTagName("h1")[0].style.fontSize = "2.5vw";

var programas = [
    {
        nome: "Java",
        tipo: "VM",
        link: 'https://sdlc-esd.oracle.com/ESD6/JSCDL/jdk/8u261-b12/a4634525489241b9a9e1aa73',
        img: 'https://logospng.org/download/java/logo-java-512.png'
    },
    {
        nome: "WinRAR",
        tipo: "compactador",
        link: 'https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-591.exe',
        img: 'https://vignette.wikia.nocookie.net/logopedia/images/4/4f/WinRAR_Logo_2018.png/revision/latest/scale-to-width-down/340?cb=20180730011613'
    },
    {
        nome: "Discord",
        tipo: "comunicacao",
        link: 'https://discord.com/api/download?platform=win',
        img: 'https://vignette.wikia.nocookie.net/sanicman/images/c/ca/Concours-discord-cartes-voeux-fortnite-france-6.png/revision/latest?cb=20191015023221'
    },
    {
        nome: "Team Speak",
        tipo: "comunicacao",
        link: 'https://files.teamspeak-services.com/releases/client/3.5.3/TeamSpeak3-Client-win64-',
        img: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/TeamSpeak_logo_renovado.png'
    },
    {
        nome: "Chrome",
        tipo: "browser",
        link: 'https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7BC4EA0B07-BDA8-3620-1C90-55AAA94B1781%7D%26lang%3Dpt-BR%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe',
        img: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Chrome__logo.max-500x500.png" width="80px'
    },
    {
        nome: "Firefox",
        tipo: "browser",
        link: 'https://cdn.stubdownloader.services.mozilla.com/builds/firefox-stub/pt-BR/win/588ade979da61b4b581eb28672616b5489096dedcdafd3442f26d271b06904ec',
        img: 'https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo-lg-high-res.fbc7ffbb50fd.png" width="80px"'
    },
    {
        nome: "qBittorrent",
        tipo: "browser",
        link: 'https://ufpr.dl.sourceforge.net/project/qbittorrent/qbittorrent-win32/qbittorrent-4.2.5/qbittorrent_4.2.5_x64_setup.exe',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/New_qBittorrent_Logo.svg/1200px-New_qBittorrent_Logo.svg.png" width="80px"'
    },
]

function alfabetica( a, b ) {
    if ( a.nome < b.nome ){
      return -1;
    }
    if ( a.nome > b.nome ){
      return 1;
    }
    return 0;
 }
 function alfabeticai( a, b ) {
    if ( a.nome < b.nome ){
      return 1;
    }
    if ( a.nome > b.nome ){
      return -1;
    }
    return 0;
 }

function inserirProgramas(){
    programas.sort(alfabetica)
    programas.forEach((p)=>{
        var botao = "<button onclick=\"window.location.href='"+p.link+"';\">"
        botao += "<img src=\""+p.img+"\" width=\"80px\">"
        botao +=  p.nome+"</button>"
        var elemento = document.getElementById('lista-programas');
        elemento.innerHTML = elemento.innerHTML+botao
    })
}

inserirProgramas()