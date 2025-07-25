import { Node, Field, FlowPort, NodeParams, FallbackPort, Button, getFieldValue } from 'protoflow';
import { API } from 'protobase'
import { Plug } from '@tamagui/lucide-icons';
import { filterCallback, restoreCallback } from 'protoflow';
import { SiteConfig} from '@my/config/dist/AppConfig'

const ApiMask = (node: any = {}, nodeData = {}) => {
  const nodeParams: Field[] = [{ label: 'Type', field: 'to', type: 'select', data: ['app.get', 'app.post'], static: true }]
  return (
    <Node icon={Plug} node={node} isPreview={!node?.id} title='Api Endpoint' id={node.id} color="#A5D6A7" skipCustom={true}>
      <NodeParams id={node.id} params={nodeParams} />
      <NodeParams id={node.id} params={[{ label: 'Path', field: 'param-1', type: 'input' }]} />
      <div style={{ paddingBottom: "30px" }}>
        <FlowPort id={node.id} type='input' label='On Request (req, res)' style={{ top: '100px' }} handleId={'request'} />
        <FallbackPort node={node} port={"param-2"} type={"target"} fallbackPort={'request'} portType={"_"} preText="async (req, res) => " postText="" />
      </div>

      {nodeData && nodeData['to'] == 'app.get' && <Button label="Make request" onPress={() => {
        API.get(nodeData['param-1']?.value)
      }} />}
    </Node>
  )
}

export default {
  id: 'CloudApi',
  type: 'CallExpression',
  category: "api",
  keywords: ["api", "rest", "http", "trigger", "automation"],
  check: (node, nodeData) => {
    var param2Val = getFieldValue('param-2', nodeData)
    return (
      node.type == "CallExpression"
      && nodeData["param-2"] && param2Val?.startsWith
      && (param2Val?.startsWith('async (req,res) =>') || param2Val?.startsWith('(req,res) =>'))
      && (nodeData.to == 'app.get' || nodeData.to == 'app.post')
    )
  },
  getComponent: ApiMask,
  filterChildren: filterCallback('2'),
  restoreChildren: restoreCallback('2'),
  getInitialData: () => { return { to: 'app.get', "param-1": { value: "/api/v1/", kind: "StringLiteral" }, "param-2": { value: 'async (req,res) =>', kind: "Identifier" } } }
}