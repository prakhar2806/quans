// use client

import React, { useContext, useEffect, useState } from "react";
import QuansCard from "../QuansCard/QuansCard";
import EmptyQuanscard from "../EmptyQuanscard/EmptyQuanscard";
import { quesContext } from "../quesContext";

const List = () => {
  const [quesList, setQuesList] = useState([]);
  const [updateList, setUpdateList] = useState(false);
  const { searchStr } = useContext(quesContext);

  const fetchQuestions = async () => {
    let result = [];
    try {
      await fetch("http://localhost:3030/ques", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: searchStr }),
      })
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          result = [...res.data];
        });

      return result;
    } catch (err) {
      console.log("err", err);
    }
  };

  const updateQuestion = async (obj) => {
    try {
      fetch("http://localhost:3030/ques/updateQues", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }).then((data) => {
        console.log(data.json());
        setUpdateList(true);
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    try {
      (async () => {
        const data = await fetchQuestions();
        console.log("data", data);
        setQuesList(data);
      })();
    } catch (err) {
      console.log("err", err);
    }
  }, [updateList, searchStr]);

  return (
    <>
      {quesList?.length > 0 &&
        quesList.map((x) =>
          x.answer ? (
            <QuansCard data={x} updateQues={(obj) => updateQuestion(obj)} />
          ) : (
            <EmptyQuanscard
              data={x}
              updateQues={(obj) => updateQuestion(obj)}
            />
          )
        )}
    </>
  );
};

export default List;
