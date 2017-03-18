import React from 'react';
import { Grid } from 'semantic-ui-react';
const { Row, Column } = Grid;
import Loader from '../hoc/Loader';
import CharacterList from './CharacterListContainer';

const Root = () => {
  return (
    <Grid>
      <Row>
        <Column width={16}>
          <CharacterList />
        </Column>
      </Row>
    </Grid>
  );
};

export default Loader(Root);
