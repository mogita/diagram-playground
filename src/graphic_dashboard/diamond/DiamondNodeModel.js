import { NodeModel } from 'storm-react-diagrams'
import { DiamondPortModel } from './DiamondPortModel'

export class DiamondNodeModel extends NodeModel {
  constructor(
    name = 'defaultDiamond',
    width = 256,
    height = 162,
    text = 'Placeholder',
  ) {
    super('diamond')
    this.addPort(new DiamondPortModel('top'))
    this.addPort(new DiamondPortModel('left'))
    this.addPort(new DiamondPortModel('bottom'))
    this.addPort(new DiamondPortModel('right'))
    this.name = name
    this.width = width
    this.height = height
    this.text = text
  }
}
