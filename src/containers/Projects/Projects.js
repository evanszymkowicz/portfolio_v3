import React, { Component } from 'react';
import { A, P, FixedTitle, OrderNumber as _OrderNumber, Blockquote } from 'theme/types';
import { ProjectsContainer, Relative, Container, Flex, Div } from 'theme/grid';
import { Thumbnail, DescriptionContainer, OrderNumber } from './projects.style';
import AsyncImage from 'components/AsyncImage/AsyncImage';

class Projects extends Component {
  render() {
    return (
      <Container>
        <h3>Check out some of my recent work:</h3>
        {items.map(({ url, thumbnail, description, title, index }, i) =>
          <ProjectsContainer key={i}>
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
          </ProjectsContainer>
        )}
      </Container>
    );
  }
}

const items = [
  {
    title: 'Global Carbon Emissions Dashboard',
    url: 'https://github.com/evanszymkowicz/Global-C02-Emissions',
    thumbnail: require('assets/images/leshem.jpg'),
    description: `
      <p>I cover men's and women's professional tennis for the English edition of the Jerusalem Post.</p>
      <p>Where will they send me next?</p>
    `
  },
  {
    title: 'Dev Meetups',
    thumbnail: require('assets/images/sports1.jpg'),
    url: 'https://github.com/evanszymkowicz/developer-meetups',
    description: `
      <p>Using .</p>
    `
  },
  {
    title: 'Case Management System',
    thumbnail: require('assets/images/sports4.jpg'),
    url: 'https://sandbox.dcabortionfund.org/users/sign_in',
    description: `
      <p>Working with a dedicated team of developers building a safe and secure platform for DCAF (DC Abortion Fund) case managers to use when working with patients</p>
    `
  },
];

export default Projects;
