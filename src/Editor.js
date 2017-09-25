import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {
  // The text pasted or dropped may contains images or styles, so remove them
  static onPaste(e) {
    // Get pasted contents as a plain text
    const plainText = e.clipboardData.getData('Text');
  
    document.execCommand('insertText', false, plainText);
    
    e.preventDefault();
    e.stopPropagation();
  }

  static onDrop(e) {
    // Get dropped contents as a plain text
    const plainText = e.nativeEvent.dataTransfer.getData('Text');
    
    // Move caret to dropped position
    const selection = window.getSelection();
    const range = document.caretRangeFromPoint(e.clientX, e.clientY);
    selection.removeAllRanges();
    selection.addRange(range);
    
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
        onPaste={Editor.onPaste}
        onDrop={Editor.onDrop}
        onInput={Editor.onChange}
      />
    );
  }
}

export default Editor;
