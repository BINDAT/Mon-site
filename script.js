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
            window.open('https://cb.run/AW8A','_blank');
            break;
        
        case 'linkedin':
            window.open('https://cb.run/MMZT','_blank');
            break;
        
        case 'mail':
            location.href = 'mailto:maxim.rigaud@gmail.com';
            break;

        case 'cv':
            window.open('CV.pdf'); 
            break;
        
        case 'duolingo':
            window.open('https://cb.run/xHZz','_blank');
            break;

        case 'wildlearner':
            window.open('https://cb.run/l8w5','_blank');
            break;
        
        case 'openclassroom':
            window.open('https://openclassrooms.com/fr/','_blank');
            break;
        
        case 'mimo':
            window.open('https://mimo.org/web/login?redirectUrl=https%3A%2F%2Fmimo.org%2Fweb%2F219%2Fsection%2F13','_blank');
            break;
    
        case 'mega.nz':
            window.open('https://cb.run/8mH6','_blank');
            window.open('https://cb.run/Ng79','_blank');
            break;
        
        case 'sololearn':
            window.open('https://cb.run/YgRs');
            break;
        
        case 'telephone':
            window.alert("06.59.06.10.59");
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

function olangue(langue) {
    switch (langue) {
        case 'français':
            document.getElementById("langue_titre_bloc_intro").innerHTML = "Rigaud Maxime <br> Apprentis Codeur";
            document.getElementById("paragraphe_intro").innerHTML = "Apprentis dans le monde de la programmation informatique <br> je serait ravi de mettre à disposition mon savoir."
            document.getElementById("sous_titre_activités").innerHTML = "Mes lectures & occupations :";
            document.getElementById("activité_langue").innerHTML = "Apprentissage de plusieurs langues sur Duolingo";
            document.getElementById("activité_informatique").innerHTML = "Apprentissage de langage de programmation avec anciennement Mimo, WildLearner et OpenClassRoom";
            document.getElementById("livres").innerHTML = "Mes lectures :";
            document.getElementById("parrainage1").innerHTML = "Lien de parrainage :";
            document.getElementById("parrainage").innerHTML = "0ntfA <br> code d'invitation de l'application <br> Gomining";
            document.getElementById("tradcontact").innerHTML = "Mes contacts :"
            document.getElementById("tradsources").innerHTML = "Mes sources :"
            document.getElementById("tradcode").innerHTML = "Pour les curieux"
            break;
        
        case 'english':
            document.getElementById("langue_titre_bloc_intro").innerHTML = "Rigaud Maxime <br> Apprendice coder";
            document.getElementById("paragraphe_intro").innerHTML = "Apprentices in the world of computer programming <br> I would be delighted to make my knowledge available."
            document.getElementById("sous_titre_activités").innerHTML = "My readings and occupations :";
            document.getElementById("activité_langue").innerHTML = "Learning several languages on Duolingo";
            document.getElementById("activité_informatique").innerHTML = "Learning programming language with previously Mimo, WildLearner and OpenClassRoom";
            document.getElementById("livres").innerHTML = "My readings :";
            document.getElementById("parrainage1").innerHTML = "Sponsorship link :";
            document.getElementById("parrainage").innerHTML = "0ntfA <br> Invitation code for the application <br> Gomining";
            document.getElementById("tradcontact").innerHTML = "My contacts :"
            document.getElementById("tradsources").innerHTML = "My sources :"
            document.getElementById("tradcode").innerHTML = "For curious"
            break;
    }
}