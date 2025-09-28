///frontend/assets/js/db.js
$(document).ready(function(){
    //console.log(menus);
    RendarMenu();
});

function RendarMenu(){
    $('#topMenu').html('');
    $('#mobileMenu').html('');


    let strmnu=`<ul class="main-menu-list">
                <li class="menu-list-item">
                    <a class="item-link logo-link" href="/index.html">
                        <img src="backend/img/website/EwPgcluT7lnbAGV9Kl2Z.png" height="60" alt="Logo">
                    </a>
                </li>`;
    let mblMeny=``;

    menus.forEach((v,i)=>{
        strmnu+=`<li class="menu-list-item"><a class="item-link" href="${v.url}">${v.name}</a></li>`;   
        mblMeny+=`<li class="list-item"><a class="menu-link" href="${v.url}">${v.name}</a></li>`;     
    });

    strmnu+=`</ul>`;

    $('#topMenu').html(strmnu);
    $('#mobileMenu').html(mblMeny);
    

}