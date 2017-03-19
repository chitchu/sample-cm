import React from 'react';
import {
  Button,
  Breadcrumb,
  Form,
  Grid,
  Icon,
  Image,
  Label,
  List
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const { Item, Header, Content } = List;
const { Row, Column } = Grid;
const { TextArea } = Form;
const { Section, Divider } = Breadcrumb;

import CharacterProperty from './CharacterProperty';
import CharacterPhoto from './CharacterPhoto';

import Exist from '../hoc/Exist';

import './CharacterDetails.css';

import defaultPhoto from '../images/default.jpg';

const CharacterDetails = (
  {
    name,
    gender,
    skin_color,
    birth_year,
    hair_color,
    eye_color,
    height,
    mass,
    note,
    characterId,
    photo,
    score,
    species,
    speciesResolved,
    starships,
    starshipsResolved,
    homeworldResolved,
    films,
    filmsResolved,
    onChange,
    onPopulatePerson
  }
) =>
  {
    return (
      <div className="character-details">
        <Grid>
          <Row>
            <Column width={3}>
              <div className="photo-container">
                <CharacterPhoto photo={photo} />
              </div>
            </Column>
            <Column width={13}>
              <Grid>
                <Row>
                  <Column>
                    <Breadcrumb>
                      <Section><Link to="/">Home</Link></Section>
                      <Divider icon="right angle" />
                      <Section active>{name}</Section>
                    </Breadcrumb>
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <h1>{name}</h1>
                    <Label horizontal>
                      <Icon name="like" /> {score}
                    </Label>
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <Button
                      icon
                      onClick={evt => onChange((++score), characterId, 'score')}
                    >
                      <Icon name="thumbs outline up" />
                    </Button>
                    <Button
                      icon
                      onClick={evt => onChange((--score), characterId, 'score')}
                    >
                      <Icon name="thumbs outline down" />
                    </Button>
                    <hr />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <Grid>
                      <Row>
                        <Column width={4}>
                          <List>
                            <Item>
                              <Header>Height</Header>
                              <Content>{height}</Content>
                            </Item>
                            <Item>
                              <Header>Mass</Header>
                              <Content>{mass}</Content>
                            </Item>
                            <Item>
                              <Header>Hair colour</Header>
                              <Content>{hair_color}</Content>
                            </Item>
                            <Item>
                              <Header>Skin colour</Header>
                              <Content>{skin_color}</Content>
                            </Item>
                            <Item>
                              <Header>Gender</Header>
                              <Content>{gender}</Content>
                            </Item>
                            <Item>
                              <Header>Eye colour</Header>
                              <Content>{eye_color}</Content>
                            </Item>
                          </List>
                        </Column>
                        <Column width={8}>
                          <List>
                            <Item>
                              <Header>Hair colour</Header>
                              <Content>{hair_color}</Content>
                            </Item>
                            <Item>
                              <Header>Birth year</Header>
                              <Content>{birth_year}</Content>
                            </Item>
                            <Item>
                              <Header>Homeworld</Header>
                              <Content>{homeworldResolved}</Content>
                            </Item>
                            <Item>
                              <Header>Films</Header>
                              <Content>
                                <CharacterProperty
                                  onPopulatePerson={() => {
                                    onPopulatePerson(
                                      characterId,
                                      'filmsResolved',
                                      films
                                    );
                                  }}
                                  characterId={characterId}
                                  prop={films}
                                  resolved={filmsResolved}
                                />
                              </Content>
                            </Item>
                            <Item>
                              <Header>Species</Header>
                              <Content>
                                <CharacterProperty
                                  onPopulatePerson={() => {
                                    onPopulatePerson(
                                      characterId,
                                      'speciesResolved',
                                      species
                                    );
                                  }}
                                  characterId={characterId}
                                  prop={species}
                                  resolved={speciesResolved}
                                />
                              </Content>
                            </Item>
                            <Item>
                              <Header>Starships</Header>
                              <Content>
                                <CharacterProperty
                                  onPopulatePerson={() => {
                                    onPopulatePerson(
                                      characterId,
                                      'starshipsResolved',
                                      starships
                                    );
                                  }}
                                  characterId={characterId}
                                  prop={starships}
                                  resolved={starshipsResolved}
                                />
                              </Content>
                            </Item>
                          </List>
                        </Column>
                      </Row>
                    </Grid>
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <label htmlFor="notes">Notes</label>
                    <Form>
                      <TextArea
                        id="notes"
                        value={note}
                        onChange={evt =>
                          onChange(evt.target.value, characterId, 'note')}
                      />
                    </Form>
                  </Column>
                </Row>
              </Grid>
            </Column>
          </Row>
        </Grid>
      </div>
    );
  };

export default Exist(CharacterDetails);
