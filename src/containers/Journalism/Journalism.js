import React, { Component } from 'react';
import { Container, Relative } from 'theme/grid';
import { JournalismContainer, Thumbnail, DescriptionContainer, OrderNumber } from './journalism.style';
import { A } from 'theme/types';
import AsyncImage from 'components/AsyncImage/AsyncImage';

class Journalism extends Component {
  render() {
    return (
      <Container>
        <h3>I have a degree in journalism from Ohio State </h3>
        <p>I covered The Buckyes and the Big Ten conference While a student there & after returning home</p>
        <p>Sports:</p>
        <ol>
          <li>Major college football</li>
          <li>Big Ten basketball</li>
          <li>Professional tennis & golf</li>
        </ol>
        {places.map(({ url, thumbnail, description, title, index }, i) =>
          <JournalismContainer key={i}>
            <Thumbnail target="_blank" href={url}>
              <Relative>
                <AsyncImage className="thumbnail" src={thumbnail} alt="thumbnail"/>
              </Relative>
            </Thumbnail>
            <Relative>
              <DescriptionContainer>
                <OrderNumber>
                  <h1>{ index }</h1>
                </OrderNumber>
                <h4>{title}</h4>
                <div className="description" dangerouslySetInnerHTML={{ __html: description }}/>
              </DescriptionContainer>
            </Relative>
          </JournalismContainer>
        )}
        <p>Are you interested in learning more about me or having me write for you? <A target="_blank" href="https://www.linkedin.com/in/evanszymkowicz/">Let's connect!</A>.</p>
      </Container>
    );
  }
}

const places = [
  {
    index: 'JP',
    title: 'The Jerusalem Post',
    url: 'https://www.jpost.com/Israel-News/Sports/Rain-disrupts-Edan-Leshems-first-ATP-Tour-match-501389',
    thumbnail: require('assets/images/leshem.jpg'),
    description: `
      <p>I cover men's and women's professional tennis for the English edition of the Jerusalem Post.</p>
      <p>Where will they send me next?</p>
    `
  },
  {
    index: 'Rivals',
    url: 'https://ohiostate.rivals.com/news/offense-comes-up-empty-as-ohio-state-eliminated-from-playoff',
    title: 'www.rivals.com',
    thumbnail: require('assets/images/sports1.jpg'),
    description: `
      <p>Writing about the Ohio State Buckeyes and the rest of the Big Ten conference for the Rivals.com network of coverage.</p>
    `
  },
  {
    index: 'Yahoo',
    title: 'Yahoo! Sports',
    url: 'https://sports.yahoo.com/look-back-thad-matta-apos-223819573.html',
    thumbnail: require('assets/images/sports4.jpg'),
    description: `
      <p>Sometimes Yahoo sends me to cover college football and basketball for the Rivals network. I've been to the Cactus Bowl and basketball tournaments, and everything inbetween.</p>
    `
  },
];


export default Journalism;
