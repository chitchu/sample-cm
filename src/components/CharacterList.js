import React from 'react';
import { Button, Card, Label, Icon, Image, Grid } from 'semantic-ui-react';
const { Group } = Card;
const { Row, Column } = Grid;
import { Link } from 'react-router-dom';
import CharacterSearch from './CharacterSearchContainer';
import CharacterSort from './CharacterSortContainer';
import CharacterProperty from './CharacterProperty';
import './CharacterList.css';
import defaultPhoto from '../images/default.jpg';

// TODO: reduce redraw
const CharacterList = (
  { characters, hasNext, onPopulatePerson, onLoadMore }
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
                        <Image centered src={defaultPhoto} alt="Default" />
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
                        Homeworld: <CharacterProperty
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
