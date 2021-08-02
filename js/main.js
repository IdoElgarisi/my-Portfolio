window.onload = initPage
var gCurrProj ;
function initPage() {
  generatePortfolio()
}

function generatePortfolio() {
  var projs = getGProjs();
  var strHtml = projs.map(function (proj) {
    return `
       <div class="col-md-4 col-sm-6 portfolio-item">
       <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
         <div class="portfolio-hover" onclick="onOpenModal('${proj.id}')">
           <div class="portfolio-hover-content" >
             <i class="fa fa-plus fa-3x" onclick="onOpenModal('${proj.id}')"></i>
           </div>
         </div>
         <img class="img-fluid" src="img/portfolio/0${proj.pic}-full.jpg" alt="">
       </a>
       <div class="portfolio-caption">
         <h4>${proj.name}</h4>
         <p class="text-muted">${proj.title}</p>
       </div>
     </div>
       `
  })

  $('.portfolio-container').html(strHtml.join(''))
}

function onOpenModal(id) {
  var proj = getProjById(id);
  $('.modal-body h2').text(`${proj.name}`)
  $('.modal-body .item-intro').text(`${proj.title}`)
  $('.modal-body .list-inline .date span').text(proj.publishedAt)
  $('.modal-body .link span').html(`${proj.url}`)
  $('.modal-body .describe').text(`${proj.desc}`)
  $('.bg-img').attr("src" ,`img/portfolio/0${proj.pic}-thumbnail.jpg`)

}


function onOpenMailTab() {
  var elAddres = $('[name= "email-addres"]').val()
  var elSubject = $('[name="subject"]').val()
  var elMsgBody = $('[name="message-body"]').val()
  var url = `https://mail.google.com/mail/u/0/?fs=1&to=${elAddres}&su=${elSubject}&body=${elMsgBody}&bcc=someone.else@example.com&tf=cm`
  window.open(url, '_blank').focus()
}
