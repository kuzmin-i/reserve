import styled from "styled-components";
import {
  Text254,
  Text96,
  Text60,
  Text48,
  Text40,
  Text36,
  Text30,
  Text24,
} from "../common/text";

const Lead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 8.3vw;
`;

const KPI = styled.div`
  display: flex;
  align-items: end;
  color: black;
`;

KPI.Number = styled.div`
  font-weight: 600;
  line-height: 0.8;
  color: black;
`;

KPI.Text = styled.div``;

const LeadAbout = styled.div`
  line-height: 1;
  padding-left: 60px;
  padding-right: 60px;
`;

const ButtonBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
  min-width: 80px;
  cursor: pointer;

  && span {
    border-bottom: 1px solid white;
  }

  &&:hover span {
    border-bottom: 1px solid black;
  }

  &&::after {
    content: "";
    width: 59px;
    height: 21px;
    background: url("/icons/arrowRight.svg");
  }
`;

const LeadWithBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const GeneralLead = () => {
  return (
    <Lead>
      <KPI>
        <KPI.Number>
          <Text254 data-font="ibm">55</Text254>
        </KPI.Number>
        <KPI.Text>
          <Text24 data-font="ibm">
            построенных
            <br />
            объектов
          </Text24>
        </KPI.Text>
      </KPI>
      <LeadWithBtn>
        <LeadAbout>
          <Text96 data-font="ibm">Ведущая проектная организация с&nbsp;1987&nbsp;года</Text96>
        </LeadAbout>
        <ButtonBlock>
          <Text30 data-font="ibm">О&nbsp;нас</Text30>
        </ButtonBlock>
      </LeadWithBtn>
    </Lead>
  );
};

export default GeneralLead;