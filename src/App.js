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

import { videos } from './videos.json';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: videos,
      filter: {}
    };

    this.applyFilter = this.applyFilter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let favs;
    try {
      favs = JSON.parse(localStorage.getItem('favorites') || '[]');
      this.setState(prevState => ({
        videos: prevState.videos.map(video => {
          video.favorite = !!~favs.indexOf('' + video.id);
          return video;
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
      this.setState(({ filter }) => ({
        filter: {
          [name]: (filter[name] || []).filter(prevVal => prevVal !== val)
        }
      }));
    }
  }

  extractInformation(videos) {
    let tags = {};
    let speaker = {};

    videos.forEach(video => {
      video.tags.forEach(
        tagName => (tags[tagName] = tags[tagName] ? tags[tagName] + 1 : 1)
      );
      video.speaker.forEach(speakerName => (speaker[speakerName] = 0));
    });

    return {
      tags: tags,
      speaker: Object.keys(speaker)
    };
  }

  applyFilter(video) {
    const filter = this.state.filter;
    const filterBy = Object.keys(filter);

    let bool = true;

    filterBy.some(filterName => {
      if (Array.isArray(filter[filterName])) {
        filter[filterName].forEach(filterValue => {
          if (!~video[filterName.replace('[]', '')].indexOf(filterValue)) {
            bool = false;
            return true;
          }
        });
      } else if (
        typeof filter[filterName] === 'boolean' &&
        filter[filterName]
      ) {
        bool = !!video[filterName];
      } else {
        if (filter[filterName]) {
          bool = !!~video[filterName].indexOf(filter[filterName]);
        }
      }

      if (!bool) return true;
      return false;
    });

    return bool;
  }

  render() {
    let videos = this.state.videos;
    let filteredVideos = videos && videos.filter(this.applyFilter);
    let data = videos && this.extractInformation(videos);

    return (
      <React.Fragment>
        <Header>
          <Brand name="Talks and Tutorials" />
        </Header>
        {videos !== null ? (
          <main>
            <Space top bottom left right>
              <Grid columns="300px 1fr" style={{ alignItems: 'self-start' }}>
                {data && (
                  <Section headline="Filter">
                    <Grid columns="1fr">
                      <Select
                        name="speaker"
                        label="Speaker"
                        onChange={this.handleChange}
                        options={data.speaker.map(speakerName => ({
                          value: speakerName,
                          name: speakerName
                        }))}
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
                <Grid columns="repeat(auto-fill, minmax(300px, 1fr))">
                  {filteredVideos.map(({ id, ...rest }) => (
                    <Card
                      key={id}
                      id={id}
                      {...rest}
                      onChange={e => {
                        let id = e.target.value;
                        let checked = e.target.checked;
                        this.setState(
                          prevState => ({
                            videos: prevState.videos.map(video => {
                              if (video.id === +id) {
                                return {
                                  ...video,
                                  favorite: checked
                                };
                              }
                              return video;
                            })
                          }),
                          () => {
                            try {
                              let favs = JSON.parse(
                                localStorage.getItem('favorites') || '[]'
                              );
                              if (checked) {
                                favs.push(id);
                              } else {
                                favs = favs.filter(fav => fav !== id);
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
                </Grid>
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
