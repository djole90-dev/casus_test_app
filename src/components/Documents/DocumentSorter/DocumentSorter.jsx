import React, { Fragment } from 'react';
import DropdownMenu from '../../Common/DropdownMenu/DropdownMenu';
import {
  SortOptContainer,
  DropdownMenuContent,
  Option,
  Label,
  Text,
  ArrowRightIcon
} from './DocumentSorter.styles';

const DocumentSorter = () => {
  return (
    <Fragment>
      <DropdownMenu
        actionText={'Sorting'}
        width={192}
        menuDistanceTop="-1px"
        borderRadius="4px"
        btnwhite="true"
      >
        <DropdownMenuContent>
          <SortOptContainer>
            <Option>
              <Label>Titel:</Label>
            </Option>
            <Text>
              A <ArrowRightIcon /> Z
            </Text>
          </SortOptContainer>
          <SortOptContainer>
            <Option>
              <Label>Titel:</Label>
            </Option>
            <Text>
              Z <ArrowRightIcon /> A
            </Text>
          </SortOptContainer>
        </DropdownMenuContent>
      </DropdownMenu>
    </Fragment>
  );
};

export default DocumentSorter;
