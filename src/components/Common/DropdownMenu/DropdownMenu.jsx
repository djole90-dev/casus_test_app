import React from 'react';
import {
  ButtonWrapper
} from './DropdownMenu.styles';
import { Popover } from '@material-ui/core';
import CustomButton from '../CustomButton/CustomButton'

const DropdownMenu = ({
  actionText,
  actionBtnStyles,
  menuDistanceTop,
  borderRadius = 0,
  children,
  btntype,
  btnwidth
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
        <CustomButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={actionBtnStyles}
          title={actionText}
          btntype={btntype}
          width={btnwidth}
        />
        
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
