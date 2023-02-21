import styled from 'styled-components';

export const ContactSectionSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  .address-block {
    margin-bottom: 20px;
  }

  .address-block,
  .phone-block {
    p {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.text.tertiary};

      padding-bottom: 10px;
    }

    h3 {
      line-height: 1;

      font-size: 30px;
    }

    a {
      transition: all 0.2s linear;
    }
    a:hover {
      color: ${({ theme }) => theme.colors.text.tertiary};
    }
  }

  iframe {
    margin-bottom: 40px;
  }

  .copyright {
    margin-top: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.lg}px) {
    .address-block {
      h3 {
        line-height: 1.2;
      }
    }
  }
`;
