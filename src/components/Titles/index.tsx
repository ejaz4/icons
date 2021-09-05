import React from 'react';
import "./index.css"
import Copy from '../../icons/Copy';
import * as clipboard from 'clipboard-polyfill';

const TitleBox = (args: any) => {
    return (
        <div className="title-box" {...args}>
            <div className="title-box-version">
                version 1.0.0
            </div>
            <h1>dot icons.</h1>
            <p>open-source free-to-use vector icons for use in your project.</p>
            <MonoScriptBox />
        </div>
    )
}

const MonoScriptBox = (args: any) => {
    const [command, setCommand] = React.useState('yarn add @dot-ui/icons')

    const onCopyButtonClip = () => {
      clipboard.writeText("yarn add @dot-ui/icons").then(
        () => { 
            setCommand('echo Copied!');
            setTimeout(() => setCommand('yarn add @dot-ui/icons'), 2000);
        },
        () => { console.log("error!"); }
      );
    }

    return (
        <div className="title-mono-box">
            <code><span style={{ opacity: '0.5', userSelect: 'none', marginInlineEnd: '10px' }}>$</span>{command}</code>
            <Copy data-tooltip="Copied!" onClick={() => onCopyButtonClip()} className="copy-button" />
        </div>
    )
}


export default TitleBox;