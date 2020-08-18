import React from "react";
import { isMobile } from 'react-device-detect'
// import icon from "./icons8-filter-mod.png";
import icon from "./images/slider.png";
import "./Filter.css";
import {
  OverlayTrigger,
  Popover,
  Form,
  Button,
  Row,
  Col
} from "react-bootstrap";
import { connect } from "react-redux";
import { setToggleState, setFilteredTapTypes, resetFilterFunction } from "../actions";
import phlaskFilterIcon from './icons/PhlaskFilterIcon'

export class Filter extends React.Component {

  handleChange(event) {
    if (event.target.id === "filtered") {
      this.props.setToggleState("filtered", !this.props.filtered);
    } else if (event.target.id === "ada") {
      this.props.setToggleState("handicap", !this.props.handicap);
    } else if (event.target.id === "sparkling") {
      this.props.setToggleState("sparkling", !this.props.sparkling)
    } else if (event.target.id === "openNow") {
      this.props.setToggleState("openNow", !this.props.openNow)
    }
    else console.log("error with toggle");
  }

  render() {
    return (
      <div>
        <OverlayTrigger
          trigger="click"
          key="top"
          placement="top"
          overlay={
            <Popover id="popover-basic">
              <Popover.Content>
                {/* // Legend button filters for tap type */}
                <Row className="buttonRow">
                  <Col>
                    <Row className="legendRow">
                      <p className="tapName">PUBLIC</p>
                      <div>
                        <img
													className="tapIcon"
													src={phlaskFilterIcon((this.props.accessTypesHidden.includes("Public") ? "disabled" : "Public"), 35, 35)}
                          alt="Public"
                          onClick={() => this.props.setFilteredTapTypes("Public")}
                        ></img>
                      </div>
                    </Row>
                    <Row className="legendRow">
                      <p className="tapName">SHARED</p>
                      <div>
                        <img
                          className="tapIcon"
													src={phlaskFilterIcon((this.props.accessTypesHidden.includes("Private-Shared") ? "disabled" : "Private-Shared"), 35, 35)}
                          alt="Private-Shared"
                          onClick={() => this.props.setFilteredTapTypes("Private-Shared")}
                        ></img>
                      </div>
                    </Row>
                    <Row className="legendRow">
                      <p className="tapName">PRIVATE</p>
                      <div>
                        <img
                          className="tapIcon"
													src={phlaskFilterIcon((this.props.accessTypesHidden.includes("Private") ? "disabled" : "Private"), 35, 35)}
                          alt="Private"
                          onClick={() => this.props.setFilteredTapTypes("Private")}
                        ></img>
                      </div>
                    </Row>
                    <Row className="legendRow">
                      <p className="tapName">RESTRICTED</p>
                      <div>
                        <img
                          className="tapIcon"
													src={phlaskFilterIcon((this.props.accessTypesHidden.includes("Restricted") ? "disabled" : "Restricted"), 35, 35)}
                          alt="Restricted"
                          onClick={() => this.props.setFilteredTapTypes("Restricted")}
                        ></img>
                      </div>
                    </Row>
                  </Col>
                  <Col xs={1}>
                    <div className="filterDivider"></div>
                  </Col>

                  {/* Toggle Switches */}
                  <Col>
                    <Row className="legendRow filterRow">
                      <Form.Check.Label>Open Now</Form.Check.Label>
                      <Form.Check
                        type="switch"
                        id="openNow"
                        label=""
                        checked={this.props.openNow}
                        onClick={e => this.handleChange(e)}
                        readOnly
                      />
                    </Row>

                    <Row className="legendRow filterRow">
                      <Form.Check.Label>ADA Accessible</Form.Check.Label>
                      <Form.Check
                        type="switch"
                        id="ada"
                        label=""
                        checked={this.props.handicap}
                        onClick={e => this.handleChange(e)}
                        readOnly
                      />
                    </Row>

                    <Row className="legendRow filterRow">
                      <Form.Check.Label>Filtered Water</Form.Check.Label>
                      <Form.Check
                        type="switch"
                        id="filtered"
                        label=""
                        checked={this.props.filtered}
                        onClick={e => this.handleChange(e)}
                        readOnly
                      />
                    </Row>

                    <Row className="legendRow filterRow">
                      <Form.Check.Label>Sparkling Water</Form.Check.Label>
                      <Form.Check
                        type="switch"
                        id="sparkling"
                        label=""
                        checked={this.props.sparkling}
                        onClick={e => this.handleChange(e)}
                        readOnly
                      />
                    </Row>
                  </Col>
                </Row>

                <Row className="resetButtonRow">
                  <div className="resetButton" onClick={() => this.props.resetFilterFunction()}>RESET</div>
                </Row>
              </Popover.Content>
            </Popover>
          }
        >

        <img
          src={icon}
          alt="filterImg"
          className="filterIcon"
          //   onClick={this.display}
          style={isMobile
            ? {top: '35%'}
            : this.props.showingInfoWindow
              ?{top: '75%', left: '30%'}
              :{top: '75%'}
          }
        />
        </OverlayTrigger>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filtered: state.tapFilters.filtered,
  handicap: state.tapFilters.handicap,
  sparkling: state.tapFilters.sparkling,
  openNow: state.tapFilters.openNow,
  accessTypesHidden: state.tapFilters.accessTypesHidden,
  showingInfoWindow: state.showingInfoWindow
});

const mapDispatchToProps = {
  setFilteredTapTypes,
  setToggleState,
  resetFilterFunction
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);