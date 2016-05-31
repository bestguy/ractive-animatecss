import Ractive from 'ractive';
import 'animate.css';

let ANIMATION_END_EVENT = () => {
  let ANIMATION_END_EVENT_NAMES = {
    'animation': 'animationend',
    '-o-animation': 'oAnimationEnd',
    '-moz-animation': 'animationend',
    '-webkit-animation': 'webkitAnimationEnd',
    '-ms-animation': 'animationend'
  }
  let fakeEl = document.createElement('fakeelement');

  for (var eventName in ANIMATION_END_EVENT_NAMES) {
    if (typeof (fakeEl.style[eventName]) !== 'undefined') {
      return ANIMATION_END_EVENT_NAMES[eventName];
    }
  }
  return null;
};

function animateCSS(t, transition) {
  // Process parameters. No error checking for non-existing transitions(!!)
  transition = transition || (t.isIntro ? Ractive.transitions.animate.defaultIntro : Ractive.transitions.animate.defaultOutro);

  // add 'animated' class if not present
  if (!t.node.classList.contains('animated')) t.node.classList.add('animated');

  // add the transition class, the transitions starts immediately
  t.node.classList.add(transition);

  // After the animation has ended, call `t.complete()` to signal that we've finished
  t.node.addEventListener(ANIMATION_END_EVENT, () => {
    t.node.classList.remove(transition);
    t.complete();
    // TODO remove event listener?
  });
};

Ractive.transitions.animate = animateCSS;
Ractive.transitions.animate.defaultIntro = 'slideInDown';
Ractive.transitions.animate.defaultOutro = 'slideOutUp';
