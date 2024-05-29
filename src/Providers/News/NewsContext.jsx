import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const initialState = {
    allNews: [
      {
        source: {
          id: null,
          name: "Statetimes.in",
        },
        author: "statetimes_editor",
        title:
          "Phase-four: Voting today for 96 Lok Sabha seats in 10 states/UT; 175 assembly seats in AP",
        description:
          "STATE TIMES NEWS Amravati/Lucknow: The electoral fate of several prominent candidates like Samajwadi Party chief Akhilesh Yadav, Union minister Giriraj Singh, TMC’s firebrand leader Mohua Moitra and AIMIM’s Asaduddin Owaisi will be decided on Monday when poll…",
        url: "https://statetimes.in/phase-four-voting-today-for-96-lok-sabha-seats-in-10-states-ut-175-assembly-seats-in-ap/",
        urlToImage:
          "https://statetimes.in/wp-content/uploads/2022/09/POLLS-VOTE.jpg",
        publishedAt: "2024-05-13T02:31:10Z",
        content:
          "STATE TIMES NEWS\r\nAmravati/Lucknow: The electoral fate of several prominent candidates like Samajwadi Party chief Akhilesh Yadav, Union minister Giriraj Singh, TMC’s firebrand leader Mohua Moitra and… [+6836 chars]",
      },
    ],
  };

  const [statte, dispatch] = useReducer(NewsReducer, initialState);

  return (
    <NewsContext.Provider value={{ ...statte, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
