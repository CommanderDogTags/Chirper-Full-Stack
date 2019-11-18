import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Compose from './pages/Compose';
import Edit from "./pages/Edit"
import Navbar from './components/Navbar';
import Mentions from './pages/Mentions';
import MentionCard from './components/MentionCard';

const App: React.FC<IAppProps> = props => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/editing/:id" component={Edit} />
				<Route exact path="/compose" component={Compose} />
				<Route exact path="/mentions" component={Mentions} />
				<Route exact path="/mentions/:id" component={MentionCard} />
			</Switch>
		</Router>
	);
}

export interface IAppProps {}

export interface IAppState {}

export default App;