import styled from '@emotion/styled';

export const Statistic = styled.section`

margin-bottom: 10px;
}

`;

export const Title = styled.h2`

text-align: center;
font-size: 16px;
color: ${props => props.theme.colors.primary};
text-transform: uppercase;

margin-bottom: 5px;

`;

export const List = styled.ul`

display: flex;
flex-wrap: nowrap;
width: 100%;

`;

export const Item = styled.li`

flex: 1;
padding: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: ${props => caclulateWidthItem(props.item.length)};
background-color: ${props => colorPaletteStat(props.index)};

`;

export const Label = styled.span `

font-size: 14px;
font-weight: 700;
color: ${props => props.theme.colors.primary};

`;

export const Percentage = styled.span`

font-size: 12px;
font-weight: 500;
color: ${props => props.theme.colors.primary};

`
function caclulateWidthItem (length) {

    return `calc(100% / ${length})`;
}


function colorPaletteStat (index) {

    const palette = ["#DEFCF9","#CADEFC","#C3BEF0","#CCA8E9"];

    return palette[index%4];
 }

   