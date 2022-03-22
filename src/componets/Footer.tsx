import { styled, Typography } from '@mui/material';

import { FOOTER_TEXT } from '../constants';

export const Footer = () => (
    <FooterWrapper>
      <FooterText variant="caption" >
        {FOOTER_TEXT}
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