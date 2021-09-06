import React from 'react';
import "./index.css"
import manifest from '../../manifest';


const IconBox = (args: any) => {
    console.log(args.currentic)
    return (
        <div className="iconBoxOuter">
            <div className="iconBox" {...args}>
                <IconViewBox />
                <IconViewBoxRs />
            </div>
        </div>
    )
}

const IconViewBox = (args: any) => {
    return (
        <div className="iconViewBox">
            <IconViewBoxLs />
        </div>
    )
}


const IconViewBoxLs = (args: any) => {
    return (
        <div>
                <div className="iconViewBoxView">
                    {/* <Mail fill="white"/> */}
                </div>
        </div>
    )
}

const IconViewBoxRs = (args: any) => {
    return (
        <div className="iconViewBoxRs">
            {manifest.map((X: any) => ( <X className="icon" style={{stroke: "white"}} fill="white"/> ))}
        </div>
    )
}
export default IconBox;