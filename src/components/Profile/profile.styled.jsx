import styled from "@emotion/styled";


export const ProfileWrap = styled.div`

margin: auto;
padding-bottom: 15px;

`;

export const ProfileName = styled.div`

display: flex;
flex-direction: column;
gap:10px;
justify-content: center;
align-items: center;

padding: 10px;

`;

export const Image = styled.img`

width: 150px;
border-radius: 50%;
box-shadow: rgba(0,0,0,0.8) 0 0 10px;

`;

export const Name = styled.p`

font-size: 20px;
font-weight: 700;
color: ${props => props.theme.colors.primary};

`;

export const Tag = styled.p`

display: flex;
align-items: center;
gap:2px;

font-size: 16px;

color: ${props => props.theme.colors.secondary};



`;

export const Location = styled.p`

display: flex;
gap:2px;
align-items: center;
  
font-size: 16px;

color: ${props => props.theme.colors.secondary};

`;

export const List = styled.ul`

padding: 10px;

display: flex;
flex-wrap: nowrap;

`;

export const Item = styled.li`

flex-basis: calc((100%) / 2);

`;

export const StatsTitle = styled.span`

  display:flex;
  justify-content:center;
  align-items:center;
  gap:3px;
     
  margin-bottom:4px;

    font-weight: 700;
    font-size: 12px;
    color: ${props => props.theme.colors.primary};

`;

export const StatsText = styled.span`

display: block;
text-align: center;
font-size: 12px;
color: var(--primary-color);

`;



