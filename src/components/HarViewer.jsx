require('fixed-data-table/dist/fixed-data-table.css')

import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import {Grid, Row, Col, PageHeader, Button, ButtonGroup, Input} from 'react-bootstrap'
import FixedDataTable from 'fixed-data-table'

const Table = FixedDataTable.Table
const Column = FixedDataTable.Column

export default class HarViewer extends React.Component {
  constructor() {
    super()
    this.state = {
      columnWidths: {
        url: 500,
        size: 100,
        time: 200
      },
      tableWidth: 1000,
      tableHeight: 500
    }
  }

  render() {
    return(
        <Grid>
          <Row>
            <Col sm={12}>
              <PageHeader>Har Viewer</PageHeader>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Table
                rowsCount={this.props.entries.length}
                width={this.state.tableWidth}
                headerHeight={30}
                height={this.state.tableHeight}
                rowHeight={30}
              >
                <Column
                  cell="url"
                  width={this.state.columnWidths.url}
                  isResizeble={true}
                  header="Url"
                  flexGrow={null}
                />
                <Column
                  cell="size"
                  width={this.state.columnWidths.size}
                  isResizeble={true}
                  header="Size"
                />
                <Column
                  cell="time"
                  width={this.state.columnWidths.time}
                  minWidth={200}
                  isResizeble={true}
                  header="Timeline"
                />
              </Table>
            </Col>
          </Row>
        </Grid>
      )
  }

  _getEntry(index) {
    return this.props.entries[index]
  }
}

HarViewer.defaultProps = {
  entries: []
}