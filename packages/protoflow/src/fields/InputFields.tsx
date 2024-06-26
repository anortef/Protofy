import React, { useContext, useState } from 'react';
import useTheme from '../diagram/Theme';
import { FlowStoreContext } from '../store/FlowsStore';
import { CustomField } from '.';
import { Type, Hash, Braces, ToggleLeft, VariableIcon } from 'lucide-react';
import Input from '../diagram/NodeInput'

export const getInputTypes = () => ['input']

export default ({ nodeData = {}, item, node }) => {
    const useFlowsStore = useContext(FlowStoreContext)
    const setNodeData = useFlowsStore(state => state.setNodeData)

    const { field, label, type, fieldType, menuActions } = item

    const fieldKey = field.replace(fieldType + '-', '')
    const data = nodeData[field]
    const value = data?.value

    const [tmpValue, setTmpValue] = useState(value)

    const icons = {
        "StringLiteral": Type,
        "NumericLiteral": Hash,
        "TrueKeyword": ToggleLeft,
        "ObjectLiteralExpression": Braces,
        "FalseKeyword": ToggleLeft,
        "Identifier": VariableIcon
    }
    const iconList = Object.keys(icons).filter(i => i != 'Identifier')

    const defaultKindValue = iconList[0]
    const kindValue = data?.kind ?? defaultKindValue

    const onValueChange = (val) => {
        // current case is fieldType == "prop"
        setNodeData(node.id, { ...nodeData, [field]: { ...data, key: fieldKey, value: val, kind: kindValue } })
    }

    const onToggleType = () => {
        setNodeData(node.id, {
            ...nodeData, [field]: {
                ...data,
                kind: iconList[(iconList.indexOf(kindValue) + 1) % (iconList.length - 1)]
            }
        })
    }



    const getInput = () => {
        switch (type) {
            // cases: boolean, number, string, object
            case 'input':
            default:
                const enabledToggle = iconList.includes(kindValue)
                return <>
                    {icons[kindValue]
                        ? <div
                            style={{ padding: '8px', justifyContent: 'center', position: 'absolute', zIndex: 100, cursor: enabledToggle ? 'pointer' : '' }}
                            onClick={enabledToggle ? onToggleType : null}
                        >
                            {React.createElement(icons[kindValue], { size: 16, color: enabledToggle ? useTheme('interactiveColor') : useTheme('disableTextColor') })}
                        </div>
                        : <></>}
                    <Input
                        onBlur={() => onValueChange(tmpValue)}
                        style={{
                            fontSize: useTheme('nodeFontSize'),
                            fontWeight: 'medium', paddingLeft: '38px'
                        }}
                        options={item.data?.options}
                        value={tmpValue}
                        placeholder="default"
                        onChange={t => setTmpValue(t.target.value)}
                    />
                </>
        }
    }

    return <CustomField label={label} input={getInput()} menuActions={menuActions}/>

}