App.View = {
  toggleFolder: function(object,event) {
    filtered = object.replace(/\//g, "\\+")
    $('#' + filtered).toggle()
    if (event != undefined) {
      $(event.target).toggleClass('closed')
    }
  },
  initializeFolderLayout: function() {
    setTimeout(function() {
     $('li').first().click()
    }, 2)
  }
}