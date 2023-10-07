import React, { useEffect } from 'react';

import { useFetchProjects } from '../fetchProjects.jsx';

export const Projects = () => {
  const { projects, loading } = useFetchProjects();

  if (loading) {
    return (
      <div className="projects">
        <div className="loading" />;
      </div>
    );
  } else {
    return (
      <section className="projects">
        <div className="title">
          <h2>projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-center">
          {projects.map(({ title, url, id, img }) => {
            return (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="project"
              >
                <img src={img} alt={title} className="img" />
                <h5>{title}</h5>
              </a>
            );
          })}
        </div>
      </section>
    );
  }
};
