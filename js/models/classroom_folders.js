App.ClassroomFolders = Ember.Object.extend({
  fileCount: 0,
  previousFileCount: 0,
  checkForFileAdditionsOrRemovals: function(folder) { // name changes.. refresh folders button?
    this.set('fileCount', 0)
    this.checkFiles(folder)
    // extract lines 8 - 12
    if (this.fileCount != this.previousFileCount) {
      this.set('previousFileCount', this.fileCount)
      App.Classroom.set('folders', folder)
      App.View.initializeFolderLayout()
    }
  },
  checkFiles: function(parentFolder) {
    if (parentFolder.files !== undefined) {
      for (var i = 0; i < parentFolder.files.length; i++) {
        this.fileCount += 1
      }
    }
    this.cycleFolders(parentFolder.folders)
  },
  cycleFolders: function(folder) {
    if (folder !== undefined) {
      for (var i = 0; i < folder.length; i ++) {
        this.checkFiles(folder[i])
      }
    }
  }
}).create()