import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './project-item';

class ProjectsList extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired
  }

  render() {
    const {projects} = this.props;

    return (
      <div className="container-wrap">
        <section id="projects-sec" className="container">
          <header className="sec-header">
            <h1><a href="portfolio.html">Latest Projects...</a></h1>
          </header>
          <div className="sec-body">
            <ul className="home-project-list list-unstyled list-inline row thumbnails-hfixed transit-all">
              {projects.map(p => (<ProjectItem key={p.id} project={p}/>))}
            </ul>
          </div>
          <footer className="sec-footer">
            <a href="portfolio.html">More Projects</a>
          </footer>
        </section>
      </div>
    )
  };
}

export default ProjectsList;
