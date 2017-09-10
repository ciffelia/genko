import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {
  render() {
    return (
      <div className="Editor" contentEditable={true} />
    );
  }
}

export default Editor;
