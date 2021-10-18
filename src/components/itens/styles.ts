import styled from "styled-components";

export const SelectorDiv = styled.label`
position: relative;
width: 30%;
height: 150px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-top: 1%;
margin-left: 37%;
border: solid 0.5x;
border-color: #A9ABAE;
box-shadow: 2.5px 5px 2.5px 2.5px #A9ABAE;
background: #F7E9FF;
margin-block-end: 1%;
.Name {
  position: absolute;
  max-width: 100%;
  color: #811AC0;
  margin-top: 2%;
  font-size: 25px;
}
.Email {
  position: absolute;
  max-width: 100%;
  color: #A078B9;
  align-self: center;
  margin-top: 10%;
}

.Type {
  position: absolute;
  max-width: 100%;
  color: #A078B9;
  align-self: center;
  margin-top: 15%;
}
.Adress {
  position: absolute;
  max-width: 100%;
  color: #A078B9;
  align-self: center;
  margin-top: 25%;
}
`