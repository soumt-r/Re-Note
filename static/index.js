console.log('srtc-ui.js v5')



$tab_button_home = $('#tab-button-home')
$tab_home = $('#tab-home')
$tab_button_settings = $('#tab-button-settings')
$tab_settings = $('#tab-settings')
$tab_button_about = $('#tab-button-about')
$tab_about = $('#tab-about')

window.onload = function () {
  
  $tab_button_home.click(function () {
    console.log('home')
    $tab_home.addClass('active')
    $tab_settings.removeClass('active')
    $tab_about.removeClass('active')

    $tab_button_home.addClass('active')
    $tab_button_settings.removeClass('active')
    $tab_button_about.removeClass('active')
  })

  $tab_button_settings.click(function () {
    console.log('settings')
    
    $tab_home.removeClass('active')
    $tab_settings.addClass('active')
    $tab_about.removeClass('active')

    $tab_button_home.removeClass('active')
    $tab_button_settings.addClass('active')
    $tab_button_about.removeClass('active')
  })

  $tab_button_about.click(function () {
    console.log('about')
    
    $tab_home.removeClass('active')
    $tab_settings.removeClass('active')
    $tab_about.addClass('active')

    $tab_button_home.removeClass('active')
    $tab_button_settings.removeClass('active')
    $tab_button_about.addClass('active')
  })
}


// if size is less then 605 x 500, then cancel resize
window.onresize = function () {
  if (window.innerWidth < 555) {
    window.resizeTo(605, window.innerHeight)
  }
  if (window.innerHeight < 500) {
    window.resizeTo(window.innerWidth, 550)
  }
}