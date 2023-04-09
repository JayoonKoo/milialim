import styled from "styled-components";
import rem from "../../../lib/Rem";
import Input from "../../atom/Input";
import Section from "../../atom/Section";
import SVGBox from "../../atom/SVGBox";

export const Form = styled.form`
  padding: 0 ${rem(20)};

  ${Section} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: ${rem(20)};
    padding-right: ${rem(20)};

    ${Input} {
      margin-top: ${rem(15)};
      height: ${rem(40)};
    }
  }

  ${Section}:first-child {
    ${SVGBox} {
      width: ${rem(75)};
      height: ${rem(75)};
      svg {
        width: ${rem(50)};
        height: ${rem(50)};
      }
    }
  }

  ${Section} + ${Section} {
    margin-top: ${rem(15)};
  }
`;
