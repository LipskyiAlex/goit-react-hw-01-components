import styled from '@emotion/styled';



export const List = styled.ul`

margin-bottom: 10px;

`;


export const Item = styled.li`

    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 10px;

`;

export const Name = styled.p`

text-align: center;

font-size: 18px;
font-weight: 600;
color: ${props => props.theme.colors.primary};

`;

export const Status = styled.span`

    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;

   background-color: ${setStatusColor};

`;

export const Image = styled.img`
  
 width:48px;

`

function setStatusColor(props) {

    switch(props.status) {

        case true:

        return props => props.theme.colors.online;

        case false:

        return props => props.theme.colors.offline;

        default:

        return '#fff';
    }
}




