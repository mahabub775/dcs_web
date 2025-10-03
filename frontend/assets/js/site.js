///frontend/assets/js/db.js
$(document).ready(function(){
    //console.log(menus);
    $('#bdOffice').prop('checked',false);
    $('#conOffice1').prop('checked',false);
    $('#conOffice2').prop('checked',false);
    $('#bdMap').hide();
    $('#HongKongMap').hide();
    $('#TurkeyMap').hide();

    RendarMenu();
     client();
    var path = window.location.pathname;
    console.log(path);
    if(path.length<=1 || path.toLowerCase().indexOf('/index.html') > -1){
        index();        
    }
    else if(path.toLowerCase().indexOf('/home.html') > -1){
        home();        
    }
    else if(path.toLowerCase().indexOf('/aboutus.html') > -1){
        aboutus();        
    }
    else if(path.toLowerCase().indexOf('/product.html') > -1){
        Product();        
    }
    else if(path.toLowerCase().indexOf('/project.html') > -1){
        Project();        
    }
    else if(path.toLowerCase().indexOf('/certificate.html') > -1){
        Certificate();        
    }
    else if(path.toLowerCase().indexOf('/contact.html') > -1){
        $('#bdOffice').prop('checked',true); 
        $('#bdMap').show();
    }
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
        if (v.isActive) {
            strmnu+=`<li class="menu-list-item"><a class="item-link" href="${v.url}">${v.name}</a></li>`;   
            mblMeny+=`<li class="list-item"><a class="menu-link" href="${v.url}">${v.name}</a></li>`;     
        }
    });

    strmnu+=`</ul>`;

    $('#topMenu').html(strmnu);
    $('#mobileMenu').html(mblMeny);
    

}

//#region Slider
function index(){
    let slider='';
    $('#sliderCarousel').html('');
     sliders.forEach((v,i)=>{
        slider+=`<div class="single-slide">
                    <img class="lazyload" data-src="${v.url}" height="220"
                        alt="Slide Image">
                    <div class="slider-overlay"></div>
                    <div class="slider-overlay-text">${v.name}</div>
                </div>`;   
    });
     $('#sliderCarousel').html(slider);
     if ($('#sliderCarousel').hasClass('slick-initialized')) {
      $('#sliderCarousel').slick('unslick');
    }
     carousel();
}
function carousel() {
        $(".carousel").not(".slick-initialized").each(function () {
            var $this = $(this);

            var slidesPerViewXs = $this.data("xs-items");
            var slidesPerViewSm = $this.data("sm-items");
            var slidesPerViewMd = $this.data("md-items");
            var slidesPerViewLg = $this.data("lg-items");
            var slidesPerViewXl = $this.data("xl-items");
            var slidesPerView = $this.data("items");

            var slidesCenterMode = $this.data("center");
            var slidesArrows = $this.data("arrows");
            var slidesDots = $this.data("dots");
            var slidesRows = $this.data("rows");
            var slidesAutoplay = $this.data("autoplay");
            var slidesFade = $this.data("fade");
            var asNavFor = $this.data("nav-for");
            var infinite = $this.data("infinite");
            var focusOnSelect = $this.data("focus-select");
            var adaptiveHeight = $this.data("auto-height");
            var centerPadding = $this.data("center-padding");


            var vertical = $this.data("vertical");
            var verticalXs = $this.data("vertical-xs");
            var verticalSm = $this.data("vertical-sm");
            var verticalMd = $this.data("vertical-md");
            var verticalLg = $this.data("vertical-lg");
            var verticalXl = $this.data("vertical-xl");

            var timeout = $this.data("timeout");
            timeout = !timeout ? 3000 : timeout;

            slidesPerView = !slidesPerView ? 1 : slidesPerView;
            slidesPerViewXl = !slidesPerViewXl ? slidesPerView : slidesPerViewXl;
            slidesPerViewLg = !slidesPerViewLg ? slidesPerViewXl : slidesPerViewLg;
            slidesPerViewMd = !slidesPerViewMd ? slidesPerViewLg : slidesPerViewMd;
            slidesPerViewSm = !slidesPerViewSm ? slidesPerViewMd : slidesPerViewSm;
            slidesPerViewXs = !slidesPerViewXs ? slidesPerViewSm : slidesPerViewXs;


            vertical = !vertical ? false : vertical;
            verticalXl = (typeof verticalXl == 'undefined') ? vertical : verticalXl;
            verticalLg = (typeof verticalLg == 'undefined') ? verticalXl : verticalLg;
            verticalMd = (typeof verticalMd == 'undefined') ? verticalLg : verticalMd;
            verticalSm = (typeof verticalSm == 'undefined') ? verticalMd : verticalSm;
            verticalXs = (typeof verticalXs == 'undefined') ? verticalSm : verticalXs;


            slidesCenterMode = !slidesCenterMode ? false : slidesCenterMode;
            slidesArrows = !slidesArrows ? false : slidesArrows;
            slidesDots = !slidesDots ? false : slidesDots;
            slidesRows = !slidesRows ? 1 : slidesRows;
            slidesAutoplay = !slidesAutoplay ? false : slidesAutoplay;
            slidesFade = !slidesFade ? false : slidesFade;
            asNavFor = !asNavFor ? null : asNavFor;
            infinite = !infinite ? false : infinite;
            focusOnSelect = !focusOnSelect ? false : focusOnSelect;
            adaptiveHeight = !adaptiveHeight ? false : adaptiveHeight;


            var slidesRtl = ($("html").attr("dir") === "rtl" && !vertical) ? true : false;
            var slidesRtlXL = ($("html").attr("dir") === "rtl" && !verticalXl) ? true : false;
            var slidesRtlLg = ($("html").attr("dir") === "rtl" && !verticalLg) ? true : false;
            var slidesRtlMd = ($("html").attr("dir") === "rtl" && !verticalMd) ? true : false;
            var slidesRtlSm = ($("html").attr("dir") === "rtl" && !verticalSm) ? true : false;
            var slidesRtlXs = ($("html").attr("dir") === "rtl" && !verticalXs) ? true : false;

            $this.slick({
                slidesToShow: slidesPerView,
                autoplay: slidesAutoplay,
                dots: slidesDots,
                arrows: slidesArrows,
                infinite: infinite,
                vertical: vertical,
                rtl: slidesRtl,
                rows: slidesRows,
                centerPadding: centerPadding,
                centerMode: slidesCenterMode,
                fade: slidesFade,
                asNavFor: asNavFor,
                focusOnSelect: focusOnSelect,
                adaptiveHeight: adaptiveHeight,
                slidesToScroll: 1,
                autoplaySpeed: timeout,
                prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
                responsive: [{
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: slidesPerViewXl,
                            vertical: verticalXl,
                            rtl: slidesRtlXL,
                        },
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: slidesPerViewLg,
                            vertical: verticalLg,
                            rtl: slidesRtlLg,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: slidesPerViewMd,
                            vertical: verticalMd,
                            rtl: slidesRtlMd,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: slidesPerViewSm,
                            vertical: verticalSm,
                            rtl: slidesRtlSm,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: slidesPerViewXs,
                            vertical: verticalXs,
                            rtl: slidesRtlXs,
                        },
                    },
                ],
            });
        });

 }
 //#endregion carousel

 //#region Slider
function client(){
    let slider='';
    $('#partnerItem').html('');
     Clients.forEach((v,i)=>{
        if(v.isActive){
        slider+=`<div class="single-item p-sm-2 p-1">
                    <div class="team-wrap">
                        <div class="image-wrap">
                            <img src="${v.imgLink}" height="250px" alt="Team">
                        </div>                        
                    </div>
                </div>`;  
        } 
    });
     $('#partnerItem').html(slider);
     if ($('#partnerItem').hasClass('slick-initialized')) {
      $('#partnerItem').slick('unslick');
    }
    carousel();

}

 //#endregion carousel

 //#region Home
 function home(){
    
     Home.forEach((v,i)=>{
       $('#title').html(v.title);
       $('#smsbody').html(v.body);
    });
    
}
 //#endregion Home

//#region Aboutus
 function aboutus(){
    
     Aboutus.forEach((v,i)=>{
       $('#title').html(v.title);
       $('#smsbody').html(v.body);
    });
    
}
 //#endregion Aboutus
//#region Product
 function Product(){
    
     product.forEach((v,i)=>{
       $('#productList').append(`<li class="list-group-item">${v.groupName} : ${v.productName}</li>`);
    });
    
}
 //#endregion Product
 //#region Project
 function Project(){
    $('#accordionproject').html('');
    let projectItem=``;
     projects.forEach((project,i)=>{
        let projectDescription=``;
        let projectSubDescription=``;
        if(project.description.length>0){
            projectDescription+=` <div class="row">`;
            projectSubDescription+=`<div class="accordion" id="accordionsubproject">`;
             project.description.forEach((des,j)=>{
                if(des.subDescription.length<=0){
                    projectSubDescription=``;
                    projectDescription+=`
                            <div class="col-md-6 col-sm-6 col-lg-6 mb-2">
                                <div class="card">
                                    <img src="${des.img}" class="card-img-top" alt="${des.title}" style="height: 20rem;">
                                    <div class="card-body">
                                        ${des.url==''?`<h5 class="card-title">${des.title}</h5>`:`<a href='${des.url}' target="_blank" class="card-link"><h5 class="card-title">${des.title}</h5></a>`}
                                    </div>                                    
                                </div>
                            </div>
                       `;
                }
                else{
                   
                    
                    projectSubDescription+=`
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${des.id}${j}" aria-expanded="true" aria-controls="collapseOne">
                                ${des.title}
                            </button>
                            </h2>
                            <div id="collapse${des.id}${j}" class="accordion-collapse collapse show" data-bs-parent="#accordionsubproject">
                            <div class="accordion-body"> <div class="row">`;

                    des.subDescription.forEach((subdes,k)=>{
                        projectSubDescription+=`<div class="col-md-6 col-sm-6 col-lg-6 mb-2">
                                                                <div class="card">
                                                                    <img src="${subdes.img}" class="card-img-top" alt="${subdes.title}" style="height: 20rem;">
                                                                    <div class="card-body">
                                                                        ${subdes.url==''?`<h5 class="card-title">${subdes.title}</h5>`:`<a href='${subdes.url}' target="_blank" class="card-link"><h5 class="card-title">${subdes.title}</h5></a>`}
                                                                    </div>                                    
                                                                </div>
                                                            </div>`;
                    });
                    projectSubDescription+=`</div> </div>
                            </div>
                        </div>`;
                    
                }
                
             });
            
             if(projectSubDescription.length>0){
                projectSubDescription+=`</div>`;
                projectDescription=projectSubDescription;
             }else{
                projectDescription+=`</div>`;
             }
             
        }
        projectItem=`<div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseproject${i}" aria-expanded="false" aria-controls="collapse${i}">
                        ${project.Title}
                    </button>
                    </h2>
                    <div id="collapseproject${i}" class="accordion-collapse collapse show" data-bs-parent="#accordionproject">
                    <div class="accordion-body">
                        ${projectDescription}
                    </div>
                    </div>
                </div>
        `;
        $('#accordionproject').append(projectItem);
    });
    
}
 //#endregion Product

 //#region Certificate
 function Certificate(){
    
     Certificates.forEach((v,i)=>{
       $('#certificate').append(`
        <div class="col-lg-6 col-sm-6 col-md-6 mb-2">
                    <div class="card">
                        <img class="card-img-top" src="${v.imgLink}" alt="Card image cap">
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item font-weight-bold"><strong>${v.Title}</strong></li>
                                <li class="list-group-item font-weight-bold"><strong>Year: ${v.year}</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
        `);
    });
    
}
 //#endregion Certificate

//#region Contact
 function HideMap(type){
    //alert(type);
    $('#bdOffice').prop('checked',false);
    $('#conOffice1').prop('checked',false);
    $('#conOffice2').prop('checked',false);
    $('#bdMap').hide();
    $('#HongKongMap').hide();
    $('#TurkeyMap').hide();
    if(type=='BD'){
        $('#bdOffice').prop('checked',true);
        $('#bdMap').show();
    }
    if(type=='HK'){
        $('#conOffice1').prop('checked',true);
        $('#HongKongMap').show();
    }
    if(type=='TK'){
        $('#conOffice2').prop('checked',true);
        $('#TurkeyMap').show();
    }
 }
//#endregion Contact