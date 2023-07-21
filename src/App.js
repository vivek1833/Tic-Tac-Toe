import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [btn, setBtn] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: ""
  });
  const [player, setPlayer] = useState(false);
  const [msg, setMsg] = useState("");

  const play = async (e) => {
    const n = e.target.name;
    const v = e.target.value;
    const newBtn = { ...btn };

    if (player && v === "") {
      newBtn[n] = "X";
    } else if (!player && v === "") {
      newBtn[n] = "O";
    }
    setBtn(newBtn);
    setPlayer(!player);
  };

  const reset = async (e) => {
    setBtn({
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      eight: "",
      nine: ""
    });
    setMsg("");
    setPlayer(false);
  };

  useEffect(() => {
    if (
      (btn.one === "X" && btn.two === "X" && btn.three === "X") ||
      (btn.four === "X" && btn.five === "X" && btn.six === "X") ||
      (btn.seven === "X" && btn.eight === "X" && btn.nine === "X") ||
      (btn.one === "X" && btn.four === "X" && btn.seven === "X") ||
      (btn.two === "X" && btn.five === "X" && btn.eight === "X") ||
      (btn.three === "X" && btn.six === "X" && btn.nine === "X") ||
      (btn.one === "X" && btn.five === "X" && btn.nine === "X") ||
      (btn.three === "X" && btn.five === "X" && btn.seven === "X")
    ) {
      setMsg("Player 2 Wins");
    } else if (
      (btn.one === "O" && btn.two === "O" && btn.three === "O") ||
      (btn.four === "O" && btn.five === "O" && btn.six === "O") ||
      (btn.seven === "O" && btn.eight === "O" && btn.nine === "O") ||
      (btn.one === "O" && btn.four === "O" && btn.seven === "O") ||
      (btn.two === "O" && btn.five === "O" && btn.eight === "O") ||
      (btn.three === "O" && btn.six === "O" && btn.nine === "O") ||
      (btn.one === "O" && btn.five === "O" && btn.nine === "O") ||
      (btn.three === "O" && btn.five === "O" && btn.seven === "O")
    ) {
      setMsg("Player 1 wins");
    } else if (
      btn.one !== "" &&
      btn.two !== "" &&
      btn.three !== "" &&
      btn.four !== "" &&
      btn.five !== "" &&
      btn.six !== "" &&
      btn.seven !== "" &&
      btn.eight !== "" &&
      btn.nine !== ""
    ) {
      setMsg("Match Draw");
      setBtn;
    }
  }, [btn]);

  return (
    <div className="container">
      <h1 className="head"> Welcome To Tic Tac Toe Game! </h1>
      <div className="inner-box">
        <button value={btn.one} onClick={play} name="one">
          <p>{btn.one}</p>
        </button>
        <button value={btn.two} onClick={play} name="two">
          <p>{btn.two}</p>
        </button>
        <button value={btn.three} onClick={play} name="three">
          <p>{btn.three}</p>
        </button>
      </div>
      <div className="inner-box">
        <button value={btn.four} onClick={play} name="four">
          <p>{btn.four}</p>
        </button>
        <button value={btn.five} onClick={play} name="five">
          <p>{btn.five}</p>
        </button>
        <button value={btn.six} onClick={play} name="six">
          <p>{btn.six}</p>
        </button>
      </div>
      <div className="inner-box">
        <button value={btn.seven} onClick={play} name="seven">
          <p>{btn.seven}</p>
        </button>
        <button value={btn.eight} onClick={play} name="eight">
          <p>{btn.eight}</p>
        </button>
        <button value={btn.nine} onClick={play} name="nine">
          <p>{btn.nine}</p>
        </button>
      </div>
      {msg.length !== 0 ? (
        <div className="msg">
          <h1>{msg}</h1>
          <button onClick={reset}> RESET </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
