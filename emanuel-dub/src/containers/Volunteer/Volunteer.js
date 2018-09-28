import React, { Component } from 'react';

import Aux from '../../hoc/Auxx/Auxx';
import TextBlock from '../../components/Text/TextBlock';
import Image from '../../components/ImageArea/Image';
import Video from '../../components/VideoArea/Video';

import dub from '../../assets/images/dub.jpg';
import classes from './Volunteer.css';
import Form from '../Form/Form';

class Volunteer extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  render() {
    return (
      <Aux>
        <TextBlock bold>WELLCOME TO MANUEL DUB FESTIVAL VOLUNTEERS</TextBlock>
        <TextBlock>
          Manuel Dub is strictly non-profit event dedicated to the memory of
          Manuel. On the one hand, this has enabled us to hust some of dub
          music's finest artists who after feeling moved by the energy ,
          dedication and love that goes into the event agree to perform for a
          reduced fee or even free of charge. On the other hand it means that we
          are in constant need of voluneers to make it happen and keep it going
        </TextBlock>
        <Image
          source={dub}
          line1={'FILL UP THE APPLICATION FORM'}
          line2={'AND'}
          line3={'JOIN OUR FAMILY'}
        />
        <TextBlock>
          You simply just have to choose the shift you want in our system. You
          are going to provide us with few personal details as well as
          professional background and skills, but don't worry, we only want to
          know how we can use your awesome skills to arrange the best edition of
          MD festival event.
        </TextBlock>

        <Form />
        <TextBlock>
          Check the video below to get an impression of Manuel Dub vibe, and how
          much voluneers mean for us.
        </TextBlock>
        <Video source={'https://www.youtube.com/watch?v=6E7Ot-s9y7o'} />
        <footer className={classes.Footer}>
          <TextBlock>
            Alajdin Rustemi - +45 52 61 66 52-{' '}
            <a href="mailto:alajdin.rustemi@gmail.com">
              alajdin.rustemi@gmail.com
            </a>
          </TextBlock>
        </footer>
      </Aux>
    );
  }
}

export default Volunteer;
