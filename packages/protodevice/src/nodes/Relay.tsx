import React, {useEffect, useState} from "react";
import { Node, Field, HandleOutput, NodeParams } from 'protoflow';
import { getSubsystem } from "../device/Relay";
// import subsystem from "./utils/subsystem";

const Relay = ({node= {}, nodeData= {}, children}: any) => {

    const nodeParams: Field[] = [
        { label: 'Name', static:true, field: 'param1', type: 'input'},
        { label: 'Restore Mode', static:true, field: 'param2', type: 'select', data:['"ALWAYS_ON"', '"ALWAYS_OFF"'] }
    ] as Field[]
    
    return (
        <Node node={node} isPreview={!node.id} title='GPIO Switch' color="#FFDF82" id={node.id} skipCustom={true} disableInput disableOutput>
            <NodeParams id={node.id} params={nodeParams} />
            {/* <div style={{marginTop: "10px", marginBottom: "10px"}}>
                {subsystem(subsystemData, nodeData, type)}
            </div> */}
        </Node>
    )
}

export default Relay