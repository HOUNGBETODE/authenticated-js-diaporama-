let numeroImage = 1, imgPath = "photos/", allImg, ref, extension;
const name = prompt("Veuillez saisir votre nom : ", ""), response = treatName(name);

function treatName(name) {
    switch(name){
        case "gAAAAABmQeNyA-HF-l6W2MXKMT8-79yD-fJ-yopBmoe-Ny06nk2nI9h52Zh1Lg1ZrncQVV46EveeJHhzalueh-vpoiZrkad5GA==" :
            imgPath += "gAAAAABmQePqSzsJbC5veTDRS5oE8s8Wd1lCI2Tb2FjYNZe4bZve2WHV3DIXbegO3VesFNe3f_P5GvJJxgBN5GeaDzuxTw1zcw==";
            allImg = 8;
            break;
        case "gAAAAABmQeQLptPNt1onteb8BiVco-WY9hwCpCndpLhuSp1zLoIgbhe7AOLq4rvnULF16-mJeEKDeh4uhdqmUu2Y8NIqXF4TjQ==" :
            imgPath += "gAAAAABmQeQLptPNt1onteb8BiVco-WY9hwCpCndpLhuSp1zLoIgbhe7AOLq4rvnULF16-mJeEKDeh4uhdqmUu2Y8NIqXF4TjQ==";
            allImg = 66;
            break;
        case "gAAAAABmQeQqPg3W4lJ7EcCCqKluxxtHv6GMuYtaZLE_7nnRJgd5mRywQrbI4L7s_ZcwLYpP6zw8eGkNlzbHJ_GilkL7ermY5g==" :
            imgPath += "gAAAAABmQeRCiZzabGSwJ4diddn3LRCqAZVBG5MK0g_lvXhuaqXPbDPSInGbhDWQG8rk945lEr4AT_PtAYC2gaBM5u81X9-iLg==";
            allImg = 3;
            break;
        case "gAAAAABmQeRnTrPE0-XMK20a1c-BNMHBQL5d1J-kpGyhPt1I-r8LVAa3lqJJHwiWO76tgr5jHY8AgKAaSLOtB63TihH4FPca5Q==" :
            imgPath += "gAAAAABmQeRnTrPE0-XMK20a1c-BNMHBQL5d1J-kpGyhPt1I-r8LVAa3lqJJHwiWO76tgr5jHY8AgKAaSLOtB63TihH4FPca5Q==";
            allImg = 7;
            break;
        case "gAAAAABmQeSMTSBQOuPGDaf11n6WffgTlGnwCmvantW00VPZ9zkQyCQq-L7Op9dJMcvuviDJl2OCp8o4TQpytuz1of-yB8kkSg==" :
            imgPath += "gAAAAABmQeSdDzUHJz8bz1T9QYF8aJGWCBwU29jp7flgogdfhVy-UV1ecrkPPjyhNKbmCXhwwx_J8J-rwtfVoUt5Z_iMXz2CNQ==";
            allImg = 5;
            break;
        default :
            extension = "svg";
            imgPath += "gAAAAABmQeUStahpf7ej1-A_S4cDCcuVRmU9r1rR59bn16qtt7QVShLnCpn_7BqeZD8LM2lkjyCt5K-ISctX8Uc1thJ0N5A-Yw==";
            allImg = 1;
            return false;
    }  
    extension = "jpg";
    return true;
}

function previewImg() {
    document.images['img_field'].src = `${imgPath}/${numeroImage}.${extension}`;
    numeroImage++;
    if(numeroImage>allImg)
    {
        numeroImage = 1;
    }
}

function start() {
    ref = setInterval("previewImg()", 3000);
}

function stop() {
    clearInterval(ref);
}
