import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import Select from 'react-select'; 

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const PaymentButton = styled(Button)`
    && {
        width: 50%;
        margin-bottom: 2em !important;
        position: inherit !important;
    }
    &&:hover {
        color: 	#4183c4;
    }
    @media only screen and (max-width: 480px) {
        && {
            background-color: #070600;
        }
        &&:hover {
            background-color: #070600;
            color: 	#4183c4;
        }
    }
`;

export const ChartPeriodSelect = styled(Select)`
    width: 10em;
    margin-left: 1em;
    justify-content: center;
`;

export const ChartSelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.2em;
    margin-left: 1em;
    margin-top: 1em;
`;

export const ChartTitle = styled.div`
    text-align: center;
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 1em;
`;