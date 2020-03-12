import React, { Fragment, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DocumentActions } from '../../../redux/actions';
import DropdownMenu from '../../Common/DropdownMenu/DropdownMenu';
import {
  SortOptContainer,
  DropdownMenuContent,
  Option,
  Label,
  Text,
  ArrowRightIcon
} from './DocumentSorter.styles';

const SortOption = ({ children, ...otherProps }) => (
  <SortOptContainer {...otherProps}>
    <Option>
      <Label>Titel:</Label>
    </Option>
    <Text>
      {children}
    </Text>
  </SortOptContainer>
);

const DocumentSorter = () => {
  const dispatch = useDispatch();

  const [ actionText, setActionText ] = useState('Sorting')

  const handleAZClick = useCallback(
    () => {
      dispatch(DocumentActions.sortDocuments('A_Z'));
      setActionText( <Fragment> A <ArrowRightIcon /> Z </Fragment>)
    },
    [ dispatch ]
  );

  const handleZAClick = useCallback(
    () => {
      dispatch(DocumentActions.sortDocuments('Z_A'));
      setActionText( <Fragment> Z <ArrowRightIcon /> A </Fragment>)
    },
    [ dispatch ]
  );

  return (
    <Fragment>
      <DropdownMenu
        actionText={actionText}
        width={192}
        menuDistanceTop="-1px"
        borderRadius="4px"
        btnwhite="true"
        btntype="btn-white"
        btnwidth="92px"
      >
        <DropdownMenuContent>
          <SortOption onClick={handleAZClick}>
            A <ArrowRightIcon /> Z
          </SortOption>
          <SortOption onClick={handleZAClick}>
            Z <ArrowRightIcon /> A
          </SortOption>
        </DropdownMenuContent>
      </DropdownMenu>
    </Fragment>
  );
};

export default DocumentSorter;
