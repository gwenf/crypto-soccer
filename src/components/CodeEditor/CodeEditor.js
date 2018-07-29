import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';
import { SOLIDITY_FORMAT, SOLIDITY_THEME } from './solidity';
import { LessonTextRenderer } from "../LessonTextRenderer/LessonTextRenderer";

class CodeEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '' +
            '// type your code...\n' +
            'pragma solidity ^0.4.24;\n' +
            '\n' +
            'import \'./SoccerCoin.sol\';\n' +
            '\n' +
            'contract Player is SoccerCoin {\n' +
            '\n' +
            '  modifier requireLevel(_level, _requiredLevel) {\n' +
            '    require(_level >= _requiredLevel);\n' +
            '    _;\n' +
            '  }\n' +
            '\n' +
            '  function levelUp(uint _playerId) public {\n' +
            '    // when should they level up?\n' +
            '  }\n' +
            '\n' +
            '  function increaseStats(uint _playerId, uint _offense, uint _defense, uint _speed) public {\n' +
            '    // when/how should we increase stats?\n' +
            '  }\n' +
            '\n' +
            '}\n' +
            '\n',
        }
    }
    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
        editor.focus();
    }
    editorWillMount(monaco) {
        monaco.languages.register({ id: "sol" });
        monaco.languages.setMonarchTokensProvider("sol", SOLIDITY_FORMAT);
        monaco.editor.defineTheme("draco-light", SOLIDITY_THEME);
    }
    onChange(newValue, e) {
        console.log('onChange', newValue, e);
    }
    render() {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: 'line',
            automaticLayout: false
        };
        return (
                <div>
                    <LessonTextRenderer
                        lessonName={"HelloWorld"}
                    />
                    <MonacoEditor
                        width="800"
                        height="600"
                        language="sol"
                        theme="vs-dark"
                        value={code}
                        options={options}
                        onChange={this.onChange}
                        editorDidMount={this.editorDidMount}
                        editorWillMount={this.editorWillMount}
                    />
                </div>
            );
    }
}

export default CodeEditor;