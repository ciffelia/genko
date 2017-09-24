import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {
  // The text pasted or dropped may contains images or styles, so remove them
  static onContentInserted(e) {
    // Get pasted contents as a plain text
    const plainText = (e.clipboardData || e.nativeEvent.dataTransfer || null).getData('Text');
    
    document.execCommand('insertText', false, plainText);
    
    e.preventDefault();
    e.stopPropagation();
  }
  
  static onChange(e) {
    // Undo when user underlines
    if(e.target.innerHTML !== e.target.innerText) {
      document.execCommand('undo');
    }
  }
  
  render() {
    return (
      <div
        className="Editor"
        contentEditable={true}
        onPaste={Editor.onContentInserted}
        onDrop={Editor.onContentInserted}
        onInput={Editor.onChange}
      />
    );
  }
}

export default Editor;
