import React from 'react';
import styled from 'styled-components';
import Navbar from '../../navbar';
import Link from '../../_styledComponent/Link';
// import Sidebar from '../../sidebar';
import {connect} from 'react-redux';

import {getStory, getStoryTracker} from '../../../actions/story';
import {getOption, setOptions} from '../../../actions/option';

const Body = styled.div`
  height: 100vh;
  max-height: 100%;
  min-width: 100vw;
  position: relative;
`;

const Container = styled.div`
  width: 100vw;
  margin: auto;
  min-height: 100vh;
  box-sizing: border-box;
  padding-left: 0px;
  // padding-right: 250px;
  position: absolute;
  left: 0; top: 0;
  z-index: 1;
`;

// const Title = styled.h1`
//   font-size: 1.5rem;
//   color: #232323;
//   font-weight: 500;
//   width: 100%;
//   letter-spacing: 2px;
//   margin-top: 20px;
// `;

const Content = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 25px;
  margin-top: 50px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`;

// const Avatar = styled.img`
//   width: 100px;
//   height: 100px;
//   margin: auto;
//   border-radius: 50%;
//   text-align: center;
// `;

// const StoryStart = styled.div`
//   width: 800px;
//   height: 450px;
//   // background: #fff;
//   margin: auto;
//   text-align: center;
//   margin-top: 50px;
//   // box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
// `;

// const StoryImage = styled.img`
//   width: 100%;
//   height: 400px;
// `;

const Story = styled.div`

`;

const Description = styled.p``;

const Title = styled.h1``;

const Status = styled.p``;

// const StoryLink = styled(Link)`
//   font-size: 2em;
//   line-height: 50px;
//   margin: auto;
//   &:hover {
//     text-decoration: none;
//     color: black;
//   }
// `;

const EditStoryMapForm = styled.form`
`;

class Play extends React.Component {
  componentDidMount() {
    this.props.getStory(this.props.match.params.id);
  }

  UNSAFE_componentWillUpdate(nextProps) {
    if (nextProps.user && nextProps.story && !nextProps.storyTracker) {
      this.props.getStoryTracker({user: nextProps.user._id, story: nextProps.story._id})
    }

    // if (nextProps.match.params.oId !== 0 && !nextProps.options) {
    if (!nextProps.options && nextProps.story) {
      if (nextProps.match.params.oId != 0) {
        this.props.getOption(nextProps.match.params.oId);
      } else {
        this.props.setOptions(nextProps.story.optionList)
      }
    } else if (nextProps.options && nextProps.match.params.id !== this.props.match.params.id) {
      console.log('clicked new option')
    }
  }

  render() {
    const {story, storyTracker, option, options} = this.props;
    return (
      <Body>
        {/* <Sidebar /> */}
        <Container>
          <Navbar history={this.props.history} name={''} />
          {story && (
          <Content>
            <Story>
              <Title>{story.name}</Title>
              <Description>{story.description ? story.description : 'Description Not Available'}</Description>
              <Status>Status: {story.status}</Status>
              {options && (
                options.map(op => <Link to={`/s/${story._id}/o/${op._id}`} key={op._id}>{op.name}</Link>)
              )}
            </Story>
            <EditStoryMapForm></EditStoryMapForm>
          </Content>
          )}
        </Container>
      </Body>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    story: state.story.story,
    storyTracker: state.story.storyTracker,
    option: state.option.option,
    options: state.option.options,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getStory: storyId => dispatch(getStory(storyId)),
    getStoryTracker: data => dispatch(getStoryTracker(data)),
    setOptions: story => dispatch(setOptions(story)),
    getOption: optionId => dispatch(getOption(optionId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play)
