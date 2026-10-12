
import "./App.css";

export default function BlueberryPage({ onBack }) {
  return (
    <main className="letter-page blueberry-page">
      <button className="letter-back-button" onClick={onBack}>
        ← Back to the Machine
      </button>

      <article className="letter-paper">
        <p
          className="letter-label"
          style={{ margin: "0 0 8px", lineHeight: 1.3 }}
        >
          A LITTLE GIFT FULL OF KISSES
        </p>

        <div
          className="letter-decoration"
          style={{ margin: "0 0 8px", lineHeight: 1 }}
        >

        </div>

        <h1 style={{ margin: "0 0 4px", lineHeight: 1.2 }}>
          Happy Birthday, My Love
        </h1>

        <p
          className="letter-greeting"
          style={{ margin: "0 0 12px", lineHeight: 1.4 }}
        >
          To my bebebebebe,
        </p>

        
<div className="letter-content">
  <p>
    Sometimes I want to tell you how much I love you, and
    then I realize I have absolutely no idea how to put it
    into words without sounding like a complete sap. So
    here's me trying anyway. I love you, bebeee. A lot.
  </p>

  <p>
    I love all the little things about you, even the ones
    you probably don't think twice about. The way you talk,
    the things that make you laugh, your random thoughts,
    and all the silly little brainrots that make you, well,
    you. I love getting to know you, and I hope I get to
    keep doing that for a really, really long time.
  </p>

  <p>
    And hey, you don't have to be perfect around me, okay?
    You can have bad days, be tired, be grumpy, or have no
    idea what you're doing with your life sometimes. You
    don't have to pretend you're fine all the time. please 
    complain about things as much as i do to you. I love
    you as you are, not just when you're happy or when
    everything is going right.
  </p>

  <p>
    I love spending time with you, even when we're not
    doing anything particularly exciting. Just talking,
    laughing at stupid reels, or even just doom scrolling
    while keeping each other company and kisseseses
    Somehow, even the most meh moments feel special
    when they're with you.
  </p>

  <p>
    I want more of that with you. More silly conversations,
    more food to eat, more food to cook :p.
  </p>

  <p>
    Thank you for staying. Thank you for being alive. 
    Youre the one thing that keep me sane, cipi. Words
    cant explain how much i love love you.
  </p>

  <p>
    I love you on your best days, your
    worst days, and all those boring little in-between
    days, too. I'm really happy I get to call you mine,
    and I'm excited for all the things we haven't done
    together yet.
  </p>
</div>

        <p
          className="letter-signoff"
          style={{
            margin: "32px 0 0",
            padding: 0,
            textAlign: "center",
            lineHeight: 1.6,
            color: "#f2d36b",
            fontWeight: 600
          }}
        >
          I love you, mwah mwah mwah.
        </p>

        <div
          className="letter-decoration"
          style={{ margin: "8px 0 0", textAlign: "center", lineHeight: 1 }}
        >
          ♡
        </div>

        <p
          className="letter-footer"
          style={{ margin: "8px 0 0", textAlign: "center", lineHeight: 1.4 }}
        >
          UNCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
        </p>
      </article>
    </main>
  );
}