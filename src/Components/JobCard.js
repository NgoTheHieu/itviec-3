import React, { Component,useEffect } from 'react'
import { useHistory,useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/JobCard.css"
import {Col,Row,Badge} from "react-bootstrap"
import moment from "moment"
import Jobs from '../pages/Job';
export default class JobCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            job:this.props.job,
            key:this.props.key
        }
    }
    render() {
        return (<div>
             <div className="job-content">
                  {/* onClick={() => jobSelect()}> */}
      <Row>
        <Col>
          <div className="jobcard-logo">
            <img src={job.img} height="80px" />
          </div>
        </Col>
        <Col xs={8}>
          <div className="jobcard-descriptions">
            <h2 className="jobcard-title">{job.title}</h2>
            <div>$ {job.salary}</div>
            <div>
              <ul className="benefit-list">
                {job.benefits.map(benefit => (
                  <li>{benefit}</li>
                ))}
              </ul>
            </div>
            <div>
              {job.tags.map(tag => (
                <Badge variant="secondary" className="badge-style">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Col>
        <Col>
          <div className="date-location-box">
            {job.isHotjob ? (
              <div className="hotjob-label">Hot Job</div>
            ) : (
              <div></div>
            )}

            <div className="jobcard-location">
              <div>{job.city}</div>
              <div>District {job.district}</div>
            </div>
            <div className="job-time">{moment(job.time).fromNow()}</div>
          </div>
        </Col>
      </Row>
    </div>
        </div>
        )
    }
}
