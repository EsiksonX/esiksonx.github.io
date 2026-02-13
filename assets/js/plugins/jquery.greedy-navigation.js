/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children('*.persist.tail');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];
var mobileBreakpoint = 924;

function isMobileNavMode() {
  if (!window.matchMedia) {
    return window.innerWidth <= mobileBreakpoint;
  }

  return (
    window.matchMedia('(max-width: ' + mobileBreakpoint + 'px)').matches ||
    window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
    window.innerWidth <= mobileBreakpoint
  );
}

function updateLayoutOffsets() {
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($('.author__urls-wrapper button').is(':visible')) {
    $('.sidebar').css('padding-top', '');
  } else {
    $('.sidebar').css('padding-top', mastheadHeight + 'px');
  }
}

function moveHiddenToVisible() {
  while ($hlinks.children().length > 0) {
    if ($vlinks_persist_tail.length > 0) {
      $hlinks.children().first().insertBefore($vlinks_persist_tail);
    } else {
      $hlinks.children().first().appendTo($vlinks);
    }
  }
}

function updateNav() {
  var isMobile = isMobileNavMode();

  if (isMobile) {
    while ($vlinks.children('*:not(.persist)').length > 0) {
      $vlinks.children('*:not(.persist)').last().prependTo($hlinks);
    }

    $btn.removeClass('hidden');
    $btn.removeClass('close');
    $hlinks.addClass('hidden');
    $btn.attr('count', $hlinks.children().length);
    updateLayoutOffsets();
    return;
  }

  moveHiddenToVisible();
  breaks = [];

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  if ($vlinks.width() > availableSpace) {
    while ($vlinks.width() > availableSpace && $vlinks.children('*:not(.persist)').length > 0) {
      breaks.push($vlinks.width());
      $vlinks.children('*:not(.persist)').last().prependTo($hlinks);
      availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
      $btn.removeClass('hidden');
    }
  }

  if (breaks.length < 1) {
    $btn.addClass('hidden');
    $btn.removeClass('close');
    $hlinks.addClass('hidden');
  }

  $btn.attr('count', $hlinks.children().length);
  updateLayoutOffsets();
}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
if (screen.orientation && typeof screen.orientation.addEventListener === 'function') {
  screen.orientation.addEventListener('change', function () {
    updateNav();
  });
} else {
  window.addEventListener('orientationchange', function () {
    updateNav();
  });
}

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
