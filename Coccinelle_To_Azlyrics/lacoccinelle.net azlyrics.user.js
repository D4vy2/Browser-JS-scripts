// ==UserScript==
// @name         lacoccinelle.net azlyrics
// @namespace    http://www.lacoccinelle.net/
// @include      https://www.lacoccinelle.net/*
// @include      http://www.lacoccinelle.net/*
// @version      0.1
// @description  try to take over the world!
// @author       You
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var logo = document.querySelector('#responsive-logo');
    var img = document.createElement('img');
    img.src = 'http://images.azlyrics.com/az_logo_tr.png';
    if (logo !== null && logo !== undefined) {
        logo.appendChild(img);
        logo.id = "";
    }

    var contener = document.querySelector('#contener');
    if (contener !== null && contener !== undefined && contener !== "") {
        contener.style.backgroundImage = "url()";
        contener.style.backgroundColor = '#8383c1';
    }

    var body = document.querySelector('#body-content');
    if (body !== undefined && body !== null && body !== "") {
        body.style.backgroundColor = '#8383c1';
        body.style.paddingLeft = '';
    }

    var contentSong = document.querySelector('.contentSong');
    if (contentSong !== undefined && contentSong !== null && contentSong !== "") {
        contentSong.style.textAlign = 'center';
        contentSong.style.marginLeft = '';
        contentSong.style.backgroundColor = '#99c';
    }

    var panelRight = document.querySelector('#subzone1');
    if (panelRight !== null && panelRight !== undefined)
        panelRight.style.display = 'none';

    var sharingBtn = document.querySelector('.poSt');
    if (sharingBtn !== null && sharingBtn !== undefined)
        sharingBtn.style.display = 'none';

    var listContainer = document.querySelectorAll('.list');
    if (listContainer !== null && listContainer !== undefined && listContainer.length > 1) {
        listContainer[1].style.backgroundColor = '#99c';
        listContainer[1].querySelector('h4').style.color = 'darkslateblue';
    }

    var commentContainer = document.querySelector('.comments');
    if (commentContainer !== null && commentContainer !== undefined) {
        commentContainer.style.backgroundColor = '#99c';
        commentContainer.querySelector('h3').style.color = 'darkslateblue';
        commentContainer.querySelector('textarea').style.backgroundColor = 'lightGray';
    }

    var menus = document.querySelectorAll('.menu');
    if (menus !== null && menus !== []) {
        for(let i = 0, l = menus.length; i < l; i++){
            if (menus[i] !== null && menus[i] !== undefined && menus[i] !== "")
                menus[i].style.display = 'none';
        }
    }

    var dig = document.querySelector('.digbury');
    if (dig !== null && dig !== undefined)
        dig.style.display = 'none';

    var fav = document.querySelector('.favorite');
    if (fav !== null && fav !== undefined)
        fav.style.display = 'none';

    var album = document.querySelector('.album');
    if (album !== null && album !== undefined)
        album.style.textAlign = 'left';

    var p = document.querySelector('.persons');
    if (p !== null && p !== undefined)
        p.style.textAlign = 'left';

    var sas = document.querySelector('#sas_438');
    if (sas !== null && sas !== undefined)
        sas.style.display = 'none';

    var music = document.querySelector('.musicAffiliates');
    if (music !== null && music !== undefined)
        music.style.display = 'none';

    var vid = document.querySelector('.autovideo');
    if (vid !== undefined && vid !== null)
        vid.style.display = 'none';

    var thx = document.querySelector('.thanks-block');
    if (thx !== null && thx !== undefined)
        thx.style.display = 'none';

    var title = document.querySelector('#responsive-title');
    if (title !== null && title !== undefined)
        title.style.display = 'none';

    var input = document.querySelector('input');
    if (input !== null && input !== undefined)
        input.style.backgroundColor = '#99c';
    var member = document.querySelector('.member');
    if (member !== null && member !== undefined)
        member.style.display = 'none';

    document.querySelector('h3').style.display = 'none';
    document.querySelector('h1').style.marginBottom = '1.5em';
    document.querySelector('h1').style.color = 'darkslateblue';
    
})();
