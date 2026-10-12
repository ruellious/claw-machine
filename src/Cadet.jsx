
import "./App.css";

export default function HellDivaPage({ onBack }) {
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
            Happy birthday, my lovely honey pretty beautiful gorgeous love.
          </p>

          <p>
            Today is all about you, and I hope you allow yourself
            to be celebrated as much as you deserve. I hope this
            new chapter of your life brings you happiness in places
            you least expect, opportunities that bring you closer
            to your dreams, and little moments that remind you how
            beautiful life can be.
          </p>

          <p>
            I wish I could put into words just how happy I am that
            you exist. Out of all the people in this world, somehow,
            our paths crossed, and I got the chance to know you,
            to hear your thoughts, to laugh with you, and to love
            you. I will always be grateful that I get to be a part
            of your life.
          </p>

          <p>
            I hope you know how proud I am of you. Not just for
            the things you accomplish, but for the person you are.
            For every little step you take, every difficult day
            you get through, and every time you keep trying even
            when things aren't easy. You don't have to achieve
            something extraordinary every day to be worth
            celebrating. Simply being you is already enough.
          </p>

          <p>
            I hope this year is kinder to you. I hope you find
            more reasons to smile, experience things that make
            you genuinely happy, and get closer to everything
            you've been hoping for. I hope you learn to be gentle
            with yourself, too, because you deserve the same
            patience and understanding you give to the people
            you care about (me :p).
          </p>

          <p>
            If I could give you anything for your birthday, it
            would be the ability to see yourself through my eyes.
            Maybe then you'd understand all the little things
            about you that make me smile, all the reasons I
            admire you, and all the ways you've made my life
            better just by being in it.
          </p>

          <p>
            But since I can't exactly wrap that up in a box,
            I'll have to settle for telling you instead.
          </p>

          <p>
            Happy birthday, bebe. Thank you for being here,
            for being yourself, and for giving me the privilege
            of loving you. I hope that when you look back on
            this year, you'll find so many things worth
            remembering and so many reasons to be proud
            of the person you've become.
          </p>

          <p>
            Here's to another year of you, and hopefully,
            another year of us.
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
          Cie sudah legal jadi alcoholic
        </p>
      </article>
    </main>
  );
}