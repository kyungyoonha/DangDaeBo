import styled, { css } from 'styled-components';

const Row = styled.div`
  float: left;
  height: 100%;
  width: ${(props) => props.width};

  ${(props) => {
    switch (props.show) {
      case 'sx':
        return css`
          @media (max-width: 576px) {
            display: none;
          }
        `;

      case 's':
        return css`
          @media (max-width: 768px) {
            display: none;
          }
        `;

      case 'm':
        return css`
          @media (max-width: 992px) {
            display: none;
          }
        `;

      case 'l':
        return css`
          @media (max-width: 1200px) {
            display: none;
          }
        `;

      default:
        return css`
          display: block;
        `;
    }
  }}
`;

export default Row;
