import { styled, Typography } from '@mui/material';

export const Footer = () => (
    <FooterWrapper>
      <FooterText variant="caption" >
        {new Date().getFullYear()} Made by Coy Kwan
      </FooterText>
    </FooterWrapper>
  );
  
  const FooterWrapper = styled('div')(
    ({ theme }) => `
      flex: 1;
      display: flex;
      justify-content: center;
  `
  );
  
  const FooterText = styled(Typography)`
    text-transform: uppercase;
  `;