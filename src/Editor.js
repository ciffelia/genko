import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
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
  
  componentDidMount() {
    console.log(this.input.getBoundingClientRect().height / this.props.height);
    this.setState({
      fontSize: this.input.getBoundingClientRect().height / this.props.height
    });
    
    this.input.focus();
  }
  
  render() {
    return (
      <div
        className="Editor"
        contentEditable
        ref={input => { this.input = input; }}
        style={{fontSize: this.state.fontSize}}
        onPaste={Editor.onPaste}
        onDrop={Editor.onDrop}
      />
    );
  }
}

export default Editor;
