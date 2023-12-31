import { styled } from 'styled-components';

const Label = styled('label')`
    text-align: center;
    text-decoration: underline;
    text-shadow: 5px 5px 5px;
    background-color: rgba(0,0,0,0.5);
    border-radius: 15px;
    border-color: #5f5f5f;
    border-bottom-color: #555555;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-style: dotted;
    box-shadow: 5px 5px 5px #555555;
    color: #555555;
    cursor: move;
    font-size: 15px;
    font-weight: bold;
    font-style: italic;
    line-height: 15px;
    margin: 5px;
    max-height: 50px;
    min-width: 50px;
    opacity: 0.5;
    padding: 5px;
`;

export default Label;