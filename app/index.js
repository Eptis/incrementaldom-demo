import './styles/application.sass';
import IncrementalDOM from 'incremental-dom';
import Grapnel from 'Grapnel';

var router = new Grapnel();

var eO = IncrementalDOM.elementOpen,
    eC = IncrementalDOM.elementClose,
    eV = IncrementalDOM.elementVoid,
    t  = IncrementalDOM.text,
    p  = IncrementalDOM.patch;


function pEl( text, className = "", event = {type: '', func: undefined} ){
  eO(
      'p', null, null,
      'class', className,
      event.type, event.func
    )
    t(text)
  eC('p')
}

function render(data) {
  eO('div')
    eO('h1')
      t(data.title)
    eC('h1')
    eO('p')
      t(data.introText)
    eC('p')
    if (data.instructions) {
      eO('ul')
        for (let instruction of data.instructions) {
          eO('li')
            eO('h1')
              t(`${instruction.step}: ${instruction.title}`)
            eC('h1')
            pEl(
              instruction.instructions,
              'btn-text',
              { type: 'onclick', func: function() { router.navigate('finished') } }
            )
          eC('li')
        }
      eC('ul')
    }
  eC('div')
}

var page1 = {
  title: "Wakoopa Installation Guide",
  introText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit magnam ab dicta ex veritatis molestiae consectetur saepe corrupti officia rerum fugiat quo non a quas, incidunt recusandae sit totam, aliquid.",
  instructions: [
    {step: 1, title: "setup 3g", instructions: "Vestibulum id ligula porta felis euismod semper."},
    {step: 2, title: "setup Wifi", instructions: "Nulla vitae elit libero, a pharetra augue."},
  ]
}

var page2 = {
  title: "Finished",
  introText: "Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
}

var appContainer = document.createElement("div")
appContainer.id = "app"
document.body.appendChild(appContainer)

var myElement = document.getElementById("app")

function updatePage(data){
  p(myElement, function() {
    render(data);
  });
}

router.get('finished', function(request){
  console.log("req");
  updatePage(page2)
});

router.get('', function(request){
  console.log("req");
  updatePage(page1)
});
