import React, { useState } from "react";
import Api from "./Api";
import styled from "styled-components";

const App = () => {
  const [userVal, setUserVal] = useState("not selected");
  const [posts, setPosts] = useState(null);
  const [two, setTwo] = useState(null);
  const [five, setFive] = useState(null);
  const [all, setAll] = useState(false);
  const [twoData, setTwoData] = useState(false);
  const [fiveData, setFiveData] = useState(false);
  const selectedData = (e) => {
    let val = e.target.value;
    setUserVal(val);
    if (val === "all") {
      setAll(!all);
      setTwoData(false);
      setFiveData(false);
    } else if (val === "two") {
      setTwoData(!twoData);
      setAll(false);
      setFiveData(false);
      setTwo(posts.filter((post) => post.id % 2 === 0));
    } else if (val === "five") {
      setFiveData(!fiveData);
      setAll(false);
      setTwoData(false);
      setFive(posts.filter((post) => post.id % 5 === 0));
    } else {
      setFiveData(false);
      setAll(false);
      setTwoData(false);
    }
  };

  return (
    <Container>
      <Selection onChange={selectedData}>
        <option>select Option</option>
        <option value="all">All </option>
        <option value="two">Two</option>
        <option value="five">Five</option>
      </Selection>
      <UserChoice>The user selected option is : {userVal}</UserChoice>
      <div className="all-id">
        {all && (
          <div>
            <Heading>The data containing no of id's : {posts.length}</Heading>
            {posts.map((pos) => (
              <InnerData>
                <Id>
                  <b> Id </b> : {pos.id}
                </Id>
                <Id>
                  <b>user Id</b> : {pos.userId}{" "}
                </Id>
                <p>
                  <Span>Title : </Span>
                  {pos.title}
                </p>
                <p>
                  <Span>Body : </Span>
                  {pos.body}
                </p>
              </InnerData>
            ))}
          </div>
        )}
      </div>
      <div className="two-id">
        {twoData && (
          <div>
            <Heading>
              This is the list contqaining all id's : {two.length}
            </Heading>
            {two.map((tw) => (
              <InnerData>
                <Id>
                  <b> Id :</b> {tw.id}
                </Id>
                <Id>
                  <b>user Id :</b> {tw.userId}{" "}
                </Id>
                <p>
                  {" "}
                  <Span>Title : </Span>
                  {tw.title}
                </p>
                <p>
                  <Span>Body : </Span>
                  {tw.body}
                </p>
              </InnerData>
            ))}
          </div>
        )}
      </div>
      <div className="five-id">
        {fiveData && (
          <div>
            <Heading>
              This is the list contqaining all id's : {five.length}
            </Heading>
            {five.map((fiv) => (
              <InnerData>
                <Id>
                  <b> Id :</b> {fiv.id}
                </Id>
                <Id>
                  <b>user Id :</b> {fiv.userId}{" "}
                </Id>
                <p>
                  <Span>Title : </Span>
                  {fiv.title}
                </p>
                <p>
                  <Span>Body : </Span>
                  {fiv.body}
                </p>
              </InnerData>
            ))}
          </div>
        )}
      </div>

      <Api posts={posts} setPosts={setPosts} />
    </Container>
  );
};
const Heading = styled.p`
  font-size: 30px;
  text-align: center;
  text-transform: capitalize;
`;
const UserChoice = styled.p`
  font-size: 35px;
  text-transform: capitalize;
  color: crimson;
  font-weight: 600;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 20px;
  padding: 30px 10px;
  border: 1px solid #000;
`;
const Selection = styled.select`
  width: 40%;
  font-size: 20px;
  border: 1px solid #000;
  border-radius: 3px;
  height: 40px;
`;
const InnerData = styled.div`
  border: 1px solid #000;
  margin: 10px 0;
  padding: 20px 35px;
`;
const Id = styled.p`
  font-size: 15px;
  font-weight: 650;
  text-transform: capitalize;
`;
const Span = styled.span`
  color: darkslategrey;
  font-weight: 700;
  font-size: 20px;
`;
export default App;
