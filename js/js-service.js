
var gProjs = [{
    id: "Mine Sweeper",
    name: "Mine Sweeper",
    title: "Mark All Mines!",
    pic:1,
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: `<a href="https://idoelgarisi.github.io/Mine-Sweeper/"> Mine Sweeper</a>`,
    publishedAt:getDateAndTime(1627921474693) ,
},
{
    id: "Touch Nums",
    name: "Touch Nums",
    title: "Follow The Currect Number!",
    pic:2,
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: `<a href="https://idoelgarisi.github.io/Touch-Nums/"> Touch Nums!</a> `,
    publishedAt:getDateAndTime(1627921474693) ,
},
{
    id: "Chess Game",
    name: "Chess Game",
    title: "Chess Players Functions!",
    pic:3,
    desc: "Chess Players Functions",
    url: `<a href="https://idoelgarisi.github.io/Chess/"> Chess!</a> `,
    publishedAt: getDateAndTime(1627921474693),
},
{
    id: "Guess Me",
    name: "Guess Me",
    title: "Play The Game!",
    pic:4,
    desc: "Think Of Charcter(true or not) and see if i can guess it!",
    url: `<a href="https://idoelgarisi.github.io/Guess-Me/"> Guess Me!</a> `,
    publishedAt: getDateAndTime(1627921474693),
},
{
    id: "Book Shop",
    name: "Book Shop",
    title: "Orginaze Your Book Shop",
    pic:5,
    desc: "This is a online Book Shop where you can CRUD books!",
    url: `<a href="https://idoelgarisi.github.io/Book-Shop/"> Book Shop!</a> `,
    publishedAt:getDateAndTime(1627921533650),
}
];
var currProj=null;


function getGProjs(){
    return gProjs
}


function getProjById(id) {
    var proj = gProjs.find(function (proj) {
      return id === proj.id
    })
    return proj
  }
   function getDateAndTime(timeStamp){
    var date = new Date(timeStamp)
    var day = date.getDate() ;
    var month =date.getMonth() ;
    var year = date.getFullYear() ;
    return day + '/'+ month + '/' + year  ;
  
   }