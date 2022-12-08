import styled from 'styled-components';

export const Friends = styled.ul`

  margin: 0 auto 50px;
  width: fit-content;
  overflow: hidden;
  padding: 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px; 
   background-color: #ffffff;
`;

export const FriendItem = styled.li`
  
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0px 2px 2px hsla(0, 0%, 0%, 0.1);
  padding: 20px;
  font-size: 24px;
  color: #191970;
  font-weight: 700;

  :hover,
  :focus {
    cursor: pointer;
    background-color: #ededed;
  }


 list-style: none;




`;

export const Status = styled.span`
   display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${({ isOnline }) => {
    return isOnline ? "green" : "red";
  }};
  border-radius: 50%;
  margin-right: 20px; 
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border: 1px solid pink;
  border-radius: 50%;
  margin-right: 40px;
`;

export const FriendName = styled.p`
  text-align: center;
  font-weight: bold;
`;
