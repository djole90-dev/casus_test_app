import React from 'react';
import { connect } from 'react-redux';
import { mainPageLoadStart } from '../../redux/actions/app-actions';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from './Main.styles';
import DashboardPage from './DashboardPage/DashboardPage';
import DocumentsPage from './DocumentsPage/DocumentsPage';
import TemplatesPage from './TemplatesPage/TemplatesPage';
import ConstultingPage from './ConsultingPage/ConsultingPage';

class Main extends React.Component {
  componentDidMount() {
    this.props.mainPageLoadStart();
  }

  render() {
    const { isLoading } = this.props;
    let content;
    if (isLoading) {
      content = <p>Loading</p>;
    } else {
      content = (
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/dokumente" component={DocumentsPage} />
          <Route exact path="/vorlagen" component={TemplatesPage} />
          <Route exact path="/rechtsberatung" component={ConstultingPage} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return <Container>{content}</Container>;
  }
}

const mapStateToProps = ({ ui }) => ({ isLoading: ui.isLoading });

export default connect(mapStateToProps, { mainPageLoadStart })(Main);
