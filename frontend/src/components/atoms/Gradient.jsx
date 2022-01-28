import styled from "styled-components";
import gradient from "assets/BgGradient.png";

const Gradient = styled.div`
  background-image: url(${gradient});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
`;

export default Gradient;
