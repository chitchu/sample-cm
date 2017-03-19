import React from 'react';
import { Button, Card, Label, Icon, Grid } from 'semantic-ui-react';
const { Group } = Card;
const { Row, Column } = Grid;
import { Link } from 'react-router-dom';

import PhotoLoader from '../hoc/PhotoLoader';
import InlineLoader from '../hoc/InlineLoader';

import CharacterSearch from './CharacterSearchContainer';
import CharacterSort from './CharacterSortContainer';
import CharacterProperty from './CharacterProperty';
import CharacterPhoto from './CharacterPhoto';

const CharacterPhotoWithLoader = PhotoLoader(CharacterPhoto);
const CharacterPropertyWithLoader = InlineLoader(CharacterProperty);

import './CharacterList.css';

// TODO: reduce redraw
const CharacterList = (
  { characters, hasNext, onPopulatePerson, onLoadMore, loadPhoto }
) => (
  <div className="character-list">
    <Grid>
      <Row>
        <Column>
          <CharacterSearch />
          <CharacterSort />
        </Column>
      </Row>
      <Row>
        <Column>
          <Group itemsPerRow={4}>
            {characters.map((character, key) => {
              return (
                <Card
                  key={key}
                  image={
                    (
                      <Link to={character.id}>
                        <CharacterPhotoWithLoader
                          photo={character.photo}
                          onLoadPhoto={() =>
                            loadPhoto(character.id, character.name)}
                        />
                      </Link>
                    )
                  }
                  header={
                    <Link to={character.id}><h1>{character.name}</h1></Link>
                  }
                  meta={
                    (
                      <Label>
                        <Icon name="like" /> {character.score}
                      </Label>
                    )
                  }
                  description={
                    (
                      <div className="description">
                        Homeworld: <CharacterPropertyWithLoader
                          onPopulatePerson={() => {
                            onPopulatePerson(
                              character.id,
                              'homeworldResolved',
                              character.homeworld
                            );
                          }}
                          characterId={character.id}
                          prop={character.homeworld}
                          resolved={character.homeworldResolved}
                        />
                      </div>
                    )
                  }
                />
              );
            })}
          </Group>
        </Column>
      </Row>
      <Row>
        <Column>
          {hasNext ? <Button onClick={onLoadMore}>Load more</Button> : ''}
        </Column>
      </Row>
    </Grid>
  </div>
);

export default CharacterList;
