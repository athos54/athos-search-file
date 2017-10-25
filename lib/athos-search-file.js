'use babel';

import AthosSearchFileView from './athos-search-file-view';
import { CompositeDisposable } from 'atom';

export default {

  athosSearchFileView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.athosSearchFileView = new AthosSearchFileView(state.athosSearchFileViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.athosSearchFileView.getElement(),
      visible: true
    });
    console.log(window)

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'athos-search-file:toggle': () => this.buscar()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.athosSearchFileView.destroy();
  },

  serialize() {
    return {
      athosSearchFileViewState: this.athosSearchFileView.serialize()
    };
  },

  buscar() {
    console.log('AthosSearchFile was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
