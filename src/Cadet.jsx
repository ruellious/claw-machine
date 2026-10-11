
import "./App.css";

export default function HellDivaPage({ onBack }) {
  return (
    <main className="letter-page helldiva-page">
      <button className="letter-back-button" onClick={onBack}>
        ← Back to the claw machine
      </button>

      <article className="letter-paper">

        <div
          className="letter-decoration"
          style={{ margin: "0 0 8px", lineHeight: 1 }}
        >
          ♡
        </div>

        <h1 style={{ margin: "0 0 4px", lineHeight: 1.2 }}>
        hi hi hi hi
        </h1>

        <p
          className="letter-greeting"
          style={{ margin: "0 0 12px", lineHeight: 1.4 }}
        >
          hi baby hi Happy birthday!
        </p>

        <div className="letter-content">
          <p>
            There are so many things I want to tell you, and
            somehow, words never feel like enough. Still, I hope
            this little letter can remind you of just how much
            you mean to me.
          </p>

          <p>
            You don't have to be perfect for me. You can have
            bad days, feel unsure of yourself, or not always
            know what to say. You're just as deserving of love
            on your hardest days as you are on your happiest.
            You're enough, you're more than enough and always
            will be. I hope I can always remind you of that.
          </p>

          <p>
            I want more ordinary moments with you. More food,
            more masak masak and definitely more and more moments
            we spend together :3
          </p>

          <p>
            I can't promise that everything will always be
            perfect, but I want to keep learning, growing,
            understanding you, and choosing to put effort into
            what we share. I'm excited for all the memories
            we haven't made yet.
          </p>

          <p>
            Most of all, I hope you know that you matter to me
            because of who you are, not because of what you do
            for me or what you can offer. There's a whole person
            behind the title of my boyfriend, and I feel lucky
            that I get to know him.
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
          I love you, my cipi cipi. Always yours and Kapan Ayce? ♡
        </p>

        <div
          className="letter-decoration"
          style={{
            margin: "8px 0 0",
            textAlign: "center",
            lineHeight: 1
          }}
        >
          ♡
        </div>

        <p
          className="letter-footer"
          style={{
            margin: "8px 0 0",
            textAlign: "center",
            lineHeight: 1.4
          }}
        >
          mwahs
        </p>
      </article>
    </main>
  );
}