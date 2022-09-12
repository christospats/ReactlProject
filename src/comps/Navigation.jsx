import React from 'react';
import { FlexboxGrid } from 'rsuite';
import { Button, ButtonToolbar, ButtonGroup, IconButton } from 'rsuite';
import StarIcon from '@rsuite/icons/legacy/Star';

function Navigation() {

  return (
    <div className="show-grid">
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={6}>
          <IconButton  icon={<StarIcon />} circle size="lg" href="/"/>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6}>
          <Button href="/">Βιογραφικά</Button>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6}>
          <Button href="/">Ασκήσεις</Button>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6}>
          <Button href="/">Επικοινωνία</Button>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export default Navigation;
