function olivre(livre) {
    switch(livre) 
    {
        case 'Python_pour_les_Nuls':
            window.open('https://www.decitre.fr/livres/python-pour-les-nuls-9782412088838.html','_blank');
            break;
        
        case 'Apprendre_à_programmer_en_C_pour_les_nuls': 
            window.open('https://www.decitre.fr/ebooks/apprendre-a-programmer-en-c-pour-les-nuls-9782412024140_9782412024140_3.html','_blank');
            break;
        
        case 'Manuel_du_hacker':
            window.open('https://www.amazon.fr/dp/B08JDXBLSZ?ref=ppx_yo2ov_dt_b_fed_asin_title','_blank');
            break;
    }
}

function ocontact(contact){
    switch (contact) 
    {
        case 'github':
            window.open('https://github.com/BINDAT','_blank');
            break;
        
        case 'linkedin':
            window.open('https://www.linkedin.com/in/maxime-rigaud-604235291/','_blank');
            break;
        
        case 'mail':
            location.href = 'mailto:infs693@proton.me';
            break;

        case 'cv':
            window.open('CV.pdf'); 
            break;
        
        case 'duolingo':
            window.open('https://www.duolingo.com/profile/Infs693','_blank');
            break;

        case 'wildlearner':
            window.open('https://wildlearner.com/profile/maxime-rigaud3790231/','_blank');
            break;
        
        case 'openclassroom':
            window.open('https://openclassrooms.com/fr/','_blank');
            break;
        
        case 'mimo':
            window.open('https://mimo.org/web/login?redirectUrl=https%3A%2F%2Fmimo.org%2Fweb%2F219%2Fsection%2F13','_blank');
            break;
    
        case 'mega.nz':
            window.open('https://mega.nz/folder/ZbZ3UCgA#Ig1z6tdvtZsUZgHSZa0DPg','_blank');
            window.open('https://mega.nz/folder/4agEHBQT#Vn0tWydwDc-rrd1xgcwB9w','_blank')
            break;
    }
}

function oparrainage(parrainage) {
    switch (parrainage) {
        case 'Bitcoin_mining':
            window.open('https://play.google.com/store/apps/details?id=bitcoin.minning.com','_blank')
            window.open('https://apps.apple.com/us/app/bitcoin-mining-cloud-mining/id6503180820','_blank')
            break;
    }
}