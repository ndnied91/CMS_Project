import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: import.meta.env.VITE_API_SPACE,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);

      console.log(projects);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
