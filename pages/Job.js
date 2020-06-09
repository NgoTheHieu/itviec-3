import React, {useEffect,useState} from "react";
import {Container} from "react-bootstrap"
import { useHistory, useLocation } from "react-router-dom";
import JobCard from "./JobCard.js"
import {Col,Row,Badge,Nav,NavDropdown,Navbar} from "react-bootstrap"
import moment from "moment"
export default function Jobs() {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
        }
    let query = useQuery();
    let history = useHistory();
    const QUERYSTR_PREFIX = "q";
    let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));
    let [jobs,setJobs] = useState([])
    const handleSearch = (e) => {
        let filteredJobs;

        if (e) {
          e.preventDefault();
          history.push(`/jobs/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
        }
        if (keyword) {
            filteredJobs = jobs.filter(job =>
            job.title.toLowerCase().includes(keyword.toLowerCase())
            );
          }
          setJobs(filteredJobs);
      };
    
    const getData = async () => {
        let url =`https://my-json-server.typicode.com/NgoTheHieu/itviec/db`;
        let data = await fetch(url);
        let result = await data.json();
        setJobs(result.jobs);
        console.log(result);
      };
    
     useEffect(() => {
        getData();
        handleSearch();
      }, []);
    
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">
      <img src="    images/image-logo.png"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      <Container>
       {jobs && jobs.map(item => <JobCard job={item} key={item.id} />)}
    </Container>
    </div>
  );
}