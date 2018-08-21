import * as SRD from 'storm-react-diagrams'
import { DiamonNodeWidget } from './DiamondNodeWidget'
import { DiamondNodeModel } from './DiamondNodeModel'
import * as React from 'react'

export class DiamondNodeFactory extends SRD.AbstractNodeFactory {
  constructor(props) {
    super('diamond')
  }

  generateReactWidget(diagramEngine, node) {
    return <DiamonNodeWidget node={node} />
  }

  getNewInstance() {
    return new DiamondNodeModel()
  }
}
