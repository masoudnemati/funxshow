import React from "react";

const Stream = () => {
  return (
    <>
      <section>
        <h2>Watch My Stream</h2>

        <div className="streams">
          <a
            href="https://www.aparat.com/funxshow/live"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="aparat">
              <img
                width="175"
                src="/images/logo--color-white--without_text.svg"
                alt="aparat"
              />
            </div>
          </a>
          <a
            href="https://www.twitch.tv/funxshow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="twitch">
              <img width="200" src="/images/twitch_PNG31.png" alt="twitch" />
            </div>
          </a>
        </div>
      </section>

      <style jsx>{`
        section {
          text-align: center;
          padding: 0 5vw 100px 5vw;
          margin: 0;
        }

        h2 {
          color: #00c6b6;
          font-style: normal;
          font-size: 3rem;
          background-image: url("/images/streams-bg.svg");
          background-repeat: no-repeat;
          background-size: 300px;
          background-position: center bottom;

          text-shadow: 2px 2px 4px #000000;
        }

        .streams {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          /* background-image: url("/images/streams-bg.svg");
          background-position: center;
          background-size: 800px;
          background-repeat: no-repeat; */
          margin: 0;
        }

        .aparat,
        .twitch {
          margin: 20px;
          background-color: #292929;
        }

        .aparat {
          padding: 10px;
          border: 1px solid #ed145b;
          border-radius: 5px;
        }

        .aparat:hover,
        .twitch:hover {
          background-color: black;
        }

        .twitch {
          padding: 10px;
          padding-top: 20px;
          border: 1px solid #71299f;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
};

export default Stream;
