import React from 'react';

import Header from './components/elements/Header';
import Brand from './components/elements/Brand';
import Loading from './components/elements/Loading';
import Footer from './components/elements/Footer/Footer';
import Grid from './components/layout/Grid/Grid';
import Space from './components/utilities/Space/Space';
import Card from './components/elements/Card/Card';
import Select from './components/form/Select/Select';
import Section from './components/layout/Section/Section';
import Toggle from './components/form/Toggle/Toggle';

import { videos } from './sourcesVideos.json';
import { articles } from './sourcesArticles.json';

export default class App extends React.Component {
  constructor() {
    super();

    const sources = [].concat(articles, videos).sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });

    this.state = {
      sources: sources,
      filter: {}
    };

    this.applyFilter = this.applyFilter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let favs;
    try {
      favs = JSON.parse(localStorage.getItem('favorites') || '[]').map(fav =>
        // eslint-disable-next-line
        parseInt(fav)
      );

      this.setState(prevState => ({
        sources: prevState.sources.map(source => {
          source.favorite = !!~favs.indexOf(source.id);
          return source;
        })
      }));
    } catch (error) {
      alert(
        'Whoops! Seems like something went wrong while reading from localStorage.'
      );
    }
  }

  handleChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    if (!~name.indexOf('[]')) {
      this.setState(({ filter }) => ({
        filter: {
          ...filter,
          [name]: val
        }
      }));
    } else if (e.target.checked) {
      this.setState(({ filter }) => ({
        filter: {
          [name]: filter[name] ? [...filter[name], val] : [val]
        }
      }));
    } else {
      if (name === 'url') {
        this.setState(({ filter }) => ({
          filter: {
            [name]: val
          }
        }));
      } else {
        this.setState(({ filter }) => ({
          filter: {
            [name]: (filter[name] || []).filter(prevVal => prevVal !== val)
          }
        }));
      }
    }
  }

  extractInformation(sourceArray) {
    let tags = {};
    let person = {};

    sourceArray.forEach(source => {
      source.tags.forEach(
        tagName => (tags[tagName] = tags[tagName] ? tags[tagName] + 1 : 1)
      );

      source.person.forEach(personName => (person[personName] = 0));
    });

    let orderedTags = {};
    Object.keys(tags)
      .sort()
      .forEach(tag => {
        orderedTags[tag] = tags[tag];
      });

    return {
      tags: orderedTags,
      person: Object.keys(person).sort()
    };
  }

  applyFilter(source) {
    const filter = this.state.filter;
    const filterBy = Object.keys(filter);

    let bool = true;

    filterBy.some(filterName => {
      if (Array.isArray(filter[filterName])) {
        filter[filterName].forEach(filterValue => {
          if (!~source[filterName.replace('[]', '')].indexOf(filterValue)) {
            bool = false;
            return true;
          }
        });
      } else if (
        typeof filter[filterName] === 'boolean' &&
        filter[filterName]
      ) {
        bool = !!source[filterName];
      } else if (filterName === 'url' && filter[filterName]) {
        bool =
          filter[filterName] === '*'
            ? !~source[filterName].indexOf('youtube.com')
            : !!~source[filterName].indexOf('youtube.com');
      } else if (filter[filterName]) {
        bool = !!~source[filterName].indexOf(filter[filterName]);
      }

      if (!bool) return true;
      return false;
    });

    return bool;
  }

  render() {
    const sources = this.state.sources;
    const data = sources && this.extractInformation(sources);
    const filteredSources = sources && sources.filter(this.applyFilter);

    return (
      <React.Fragment>
        <Header>
          <Brand name="Talks and Tutorials" />
        </Header>
        {sources !== null ? (
          <main>
            <Space top bottom left right>
              <Grid columns="300px 1fr" style={{ alignItems: 'self-start' }}>
                {data && (
                  <Section headline="Filter">
                    <Grid columns="1fr">
                      <Select
                        emptyOption="Select a speaker/writer"
                        name="person"
                        label="Person"
                        onChange={this.handleChange}
                        options={data.person.map(personName => ({
                          value: personName,
                          name: personName
                        }))}
                      />
                      <Select
                        emptyOption="Select a type"
                        name="url"
                        label="Type"
                        onChange={this.handleChange}
                        options={[
                          {
                            value: '*',
                            name: 'Article'
                          },
                          {
                            value: 'youtube.com',
                            name: 'Video'
                          }
                        ]}
                      />
                      <Toggle
                        value="1"
                        name="favorite"
                        label="only show favorites"
                        onChange={e => {
                          let checked = e.target.checked;
                          this.setState(prevState => {
                            return {
                              filter: {
                                ...prevState.filter,
                                favorite: checked
                              }
                            };
                          });
                        }}
                      />
                      {Object.keys(data.tags).map(tagName => (
                        <Toggle
                          onChange={this.handleChange}
                          name="tags[]"
                          key={tagName}
                          label={tagName}
                          value={tagName}
                        />
                      ))}
                    </Grid>
                  </Section>
                )}
                <div>
                  {filteredSources.map(({ id, ...rest }) => (
                    <Card
                      key={id}
                      id={id}
                      {...rest}
                      onClick={() => {
                        const isFav = rest.favorite;
                        const cardId = id;
                        this.setState(
                          prevState => ({
                            sources: prevState.sources.map(source => {
                              if (source.id === cardId) {
                                return {
                                  ...source,
                                  favorite: !isFav
                                };
                              }
                              return source;
                            })
                          }),
                          () => {
                            try {
                              let favs = JSON.parse(
                                localStorage.getItem('favorites') || '[]'
                              );
                              if (!isFav) {
                                favs.push(cardId);
                              } else {
                                favs = favs.filter(fav => fav !== cardId);
                              }
                              window.localStorage.setItem(
                                'favorites',
                                JSON.stringify(favs)
                              );
                            } catch (error) {
                              alert(
                                'Whoops! Seems like something went wrong while saving to localStorage.'
                              );
                            }
                          }
                        );
                      }}
                    />
                  ))}
                </div>
              </Grid>
            </Space>
          </main>
        ) : (
          <Loading message="Talks und Tutorials werden geladen." />
        )}
        <Footer />
      </React.Fragment>
    );
  }
}
