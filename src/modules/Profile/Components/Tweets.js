import React from "react";
import { Card, Icon, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Tweets = () => {
  const data = [
    {
      username: "@WanderlustTravels",
      display_name: "Wanderlust Travels",
      tweet:
        "Escape the ordinary & explore the extraordinary! 🌴✨ Book your dream vacation today! #TravelMore #Wanderlust",
      likes: 1200,
      retweets: 450,
      timestamp: "2025-03-04T10:30:00Z",
    },
    {
      username: "@TechGuru",
      display_name: "Tech Guru",
      tweet:
        "Restarting your router is the IT version of ‘Have you tried turning it off and on again?’ #TechLife",
      likes: 2300,
      retweets: 760,
      timestamp: "2025-03-04T12:00:00Z",
    },
    {
      username: "@InspoDaily",
      display_name: "Inspo Daily",
      tweet:
        "Success is not final, failure is not fatal—it’s the courage to continue that counts. Keep going! 🚀 #MondayMotivation",
      likes: 3400,
      retweets: 980,
      timestamp: "2025-03-04T14:15:00Z",
    },
    {
      username: "@ElonMusk",
      display_name: "Elon Musk",
      tweet: "Just bought Mars. Waiting for WiFi installation. #SpaceX",
      likes: 89000,
      retweets: 32000,
      timestamp: "2025-03-04T16:45:00Z",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "90%",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Grid columns={2} stackable>
        {data.map((tweet, index) => (
          <Grid.Column key={index}>
            <Card fluid style={{ minHeight: "160px" }}>
              <Card.Content>
                <Card.Header>{tweet.display_name}</Card.Header>
                <Card.Meta>{tweet.username}</Card.Meta>
                <Card.Description>{tweet.tweet}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="heart" color="red" /> {tweet.likes} Likes
                <Icon name="retweet" style={{ marginLeft: "10px" }} />{" "}
                {tweet.retweets} Retweets
                <Icon
                  name="clock outline"
                  style={{ marginLeft: "10px" }}
                />{" "}
                {new Date(tweet.timestamp).toLocaleString()}
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};

export default Tweets;
