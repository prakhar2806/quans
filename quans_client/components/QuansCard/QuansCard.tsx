import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export default function QuansCard({ data, updateQues }: any) {
  const updateRating = async (val: number) => {
    const newData = {
      ...data,
      author: "prakhar",
      votes: data.votes + val,
    };
    updateQues(newData);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Question :
        </Typography>
        <Typography variant="h5" component="div">
          {data.question}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          By Author: {data.author}
        </Typography>
        <Typography variant="body2">{data.answer}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Rating: {data.votes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Request to update</Button>
        <ThumbUpIcon
          onClick={() => {
            updateRating(1);
          }}
        ></ThumbUpIcon>
        <ThumbDownIcon
          onClick={() => {
            updateRating(-1);
          }}
        ></ThumbDownIcon>
      </CardActions>
    </Card>
  );
}
