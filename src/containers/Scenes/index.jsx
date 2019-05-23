import React from "react";
import useFetchScenes from "hooks/useFetchScenes";
import Container from "components/common/Container";
import Card from "components/common/Card";
import { Wrapper, Flex, CardScene } from "./styles";

export default () => {
  const [loading, scenes, errors] = useFetchScenes();

  if (errors) {
    console.log(errors);
    return <p>Something went wrong</p>;
  }

  return (
    <Wrapper as={Container}>
      <h2>Scenes</h2>
      {loading ? (
        <span>Fetching scenes....</span>
      ) : (
        <Flex>
          {scenes.map(({ fields: { Name, Location, Attachments } }, i) => (
            <CardScene key={i}>
              <Card
                title={Name}
                description={Location}
                image={Attachments[0].thumbnails.large.url}
              />
            </CardScene>
          ))}
        </Flex>
      )}
    </Wrapper>
  );
};
