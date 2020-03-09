import React from 'react';
import {
  StyledButton,
  ButtonWrapper
} from './DropdownMenu.styles';
import { Popover } from '@material-ui/core';

const DropdownMenu = ({
  actionText,
  actionBtnStyles,
  menuDistanceTop,
  borderRadius = 0,
  children,
  btnwhite
}) => {
  const [ anchorEl, setAnchorEl ] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <ButtonWrapper>
        <StyledButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={actionBtnStyles}
          btnwhite={btnwhite ? btnwhite : 'false'}
        >
          {actionText}
        </StyledButton>
      </ButtonWrapper>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: {
            marginTop: menuDistanceTop,
            boxShadow: 'none',
            borderRadius: borderRadius
          }
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        {children}
      </Popover>
    </div>
  );
};

export default DropdownMenu;
