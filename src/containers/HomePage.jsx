import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import ArticleCard from '../components/ArticleCard';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '40px 0 40px 0'
  },
  card: {
    margin: '0 0 20px 0'
  }
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.container }>
        <ArticleCard
          className={ classes.card }
          title="The World Needs to Quit Coal. Why Is It So Hard?"
          date="Nov. 24, 2018"
          image="https://static01.nyt.com/images/2018/11/25/climate/25CLI-COAL1/00CLI-COAL1-superJumbo.jpg?quality=90&auto=webp"
          preview="Coal, the fuel that powered the industrial age, has led the planet to the brink of catastrophic climate change."
          logo="http://www.eatdimestore.com/wp-content/uploads/2017/05/new-york-times-logo.jpg"
        ></ArticleCard>
        <ArticleCard
          className={ classes.card }
          title="The World Needs to Quit Coal. Why Is It So Hard?"
          date="Nov. 24, 2018"
          image="https://static01.nyt.com/images/2018/11/25/climate/25CLI-COAL1/00CLI-COAL1-superJumbo.jpg?quality=90&auto=webp"
          preview="Coal, the fuel that powered the industrial age, has led the planet to the brink of catastrophic climate change."
          logo="http://www.eatdimestore.com/wp-content/uploads/2017/05/new-york-times-logo.jpg"
        ></ArticleCard>
        <ArticleCard
          className={ classes.card }
          title="The World Needs to Quit Coal. Why Is It So Hard?"
          date="Nov. 24, 2018"
          image="https://static01.nyt.com/images/2018/11/25/climate/25CLI-COAL1/00CLI-COAL1-superJumbo.jpg?quality=90&auto=webp"
          preview="Coal, the fuel that powered the industrial age, has led the planet to the brink of catastrophic climate change."
          logo="http://www.eatdimestore.com/wp-content/uploads/2017/05/new-york-times-logo.jpg"
        ></ArticleCard>
        <ArticleCard
          className={ classes.card }
          title="The World Needs to Quit Coal. Why Is It So Hard?"
          date="Nov. 24, 2018"
          image="https://static01.nyt.com/images/2018/11/25/climate/25CLI-COAL1/00CLI-COAL1-superJumbo.jpg?quality=90&auto=webp"
          preview="Coal, the fuel that powered the industrial age, has led the planet to the brink of catastrophic climate change."
          logo="http://www.eatdimestore.com/wp-content/uploads/2017/05/new-york-times-logo.jpg"
        ></ArticleCard>
        <ArticleCard
          className={ classes.card }
          title="The World Needs to Quit Coal. Why Is It So Hard?"
          date="Nov. 24, 2018"
          image="https://static01.nyt.com/images/2018/11/25/climate/25CLI-COAL1/00CLI-COAL1-superJumbo.jpg?quality=90&auto=webp"
          preview="Coal, the fuel that powered the industrial age, has led the planet to the brink of catastrophic climate change."
          logo="http://www.eatdimestore.com/wp-content/uploads/2017/05/new-york-times-logo.jpg"
        ></ArticleCard>
        <ArticleCard
          className={ classes.card }
          title="The World Needs to Quit Coal. Why Is It So Hard?"
          date="Nov. 24, 2018"
          image="https://static01.nyt.com/images/2018/11/25/climate/25CLI-COAL1/00CLI-COAL1-superJumbo.jpg?quality=90&auto=webp"
          preview="Coal, the fuel that powered the industrial age, has led the planet to the brink of catastrophic climate change."
          logo="http://www.eatdimestore.com/wp-content/uploads/2017/05/new-york-times-logo.jpg"
        ></ArticleCard>
        <ArticleCard
          className={ classes.card }
          title="The World Needs to Quit Coal. Why Is It So Hard?"
          date="Nov. 24, 2018"
          image="https://static01.nyt.com/images/2018/11/25/climate/25CLI-COAL1/00CLI-COAL1-superJumbo.jpg?quality=90&auto=webp"
          preview="Coal, the fuel that powered the industrial age, has led the planet to the brink of catastrophic climate change."
          logo="http://www.eatdimestore.com/wp-content/uploads/2017/05/new-york-times-logo.jpg"
        ></ArticleCard>
        <ArticleCard
          className={ classes.card }
          title="The World Needs to Quit Coal. Why Is It So Hard?"
          date="Nov. 24, 2018"
          image="https://static01.nyt.com/images/2018/11/25/climate/25CLI-COAL1/00CLI-COAL1-superJumbo.jpg?quality=90&auto=webp"
          preview="Coal, the fuel that powered the industrial age, has led the planet to the brink of catastrophic climate change."
          logo="http://www.eatdimestore.com/wp-content/uploads/2017/05/new-york-times-logo.jpg"
        ></ArticleCard>
        <ArticleCard
          className={ classes.card }
          title="The World Needs to Quit Coal. Why Is It So Hard?"
          date="Nov. 24, 2018"
          image="https://static01.nyt.com/images/2018/11/25/climate/25CLI-COAL1/00CLI-COAL1-superJumbo.jpg?quality=90&auto=webp"
          preview="Coal, the fuel that powered the industrial age, has led the planet to the brink of catastrophic climate change."
          logo="http://www.eatdimestore.com/wp-content/uploads/2017/05/new-york-times-logo.jpg"
        ></ArticleCard>
        <ArticleCard
          className={ classes.card }
          title="The World Needs to Quit Coal. Why Is It So Hard?"
          date="Nov. 24, 2018"
          image="https://static01.nyt.com/images/2018/11/25/climate/25CLI-COAL1/00CLI-COAL1-superJumbo.jpg?quality=90&auto=webp"
          preview="Coal, the fuel that powered the industrial age, has led the planet to the brink of catastrophic climate change."
          logo="http://www.eatdimestore.com/wp-content/uploads/2017/05/new-york-times-logo.jpg"
        ></ArticleCard>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
