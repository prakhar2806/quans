import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

export default function EmptyQuanscard({ data, updateQues }: any) {
  const [editing, setEditing] = useState(false);
  const answerRef = useRef(null);

  const submitAnswer = async () => {
    const answer = answerRef?.current?.value;

    const newData = {
      ...data,
      author: "prakhar",
      answer: answer,
    };
    updateQues(newData);
  };

  return (
    <Card>
      <CardContent style={{ backgroundColor: "lightgrey" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Question :
        </Typography>
        <Typography variant="h5" component="div">
          {data.question}
        </Typography>
        {editing && (
          <TextareaAutosize ref={answerRef} className="txtArea" minRows={3} />
        )}
      </CardContent>
      <CardActions>
        {editing ? (
          <Button onClick={() => submitAnswer()}> Submit Answer</Button>
        ) : (
          <Button
            size="small"
            onClick={() => {
              setEditing(true);
            }}
          >
            Answer this{" "}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
