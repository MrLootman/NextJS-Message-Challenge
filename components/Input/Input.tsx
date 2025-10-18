import "./Input.css";

export default function Input() {
  return (
    <>
      <div className="glitch-input-wrapper">
        <div className="input-container">
          <input
            type="text"
            id="holo-input"
            className="holo-input"
            name="answer"
            placeholder=""
          />
          <label
            htmlFor="holo-input"
            className="input-label"
            data-text="LA REPONSE"
          >
            LA REPONSE
          </label>

          <div className="input-border"></div>
          <div className="input-scanline"></div>
          <div className="input-glow"></div>

          <div className="input-data-stream">
            <div
              className="stream-bar"
              style={{ "--i": "0" } as React.CSSProperties}
            ></div>
            <div
              className="stream-bar"
              style={{ "--i": "1" } as React.CSSProperties}
            ></div>
            <div
              className="stream-bar"
              style={{ "--i": "2" } as React.CSSProperties}
            ></div>
            <div
              className="stream-bar"
              style={{ "--i": "3" } as React.CSSProperties}
            ></div>
            <div
              className="stream-bar"
              style={{ "--i": "4" } as React.CSSProperties}
            ></div>
            <div
              className="stream-bar"
              style={{ "--i": "5" } as React.CSSProperties}
            ></div>
            <div
              className="stream-bar"
              style={{ "--i": "6" } as React.CSSProperties}
            ></div>
            <div
              className="stream-bar"
              style={{ "--i": "7" } as React.CSSProperties}
            ></div>
            <div
              className="stream-bar"
              style={{ "--i": "8" } as React.CSSProperties}
            ></div>
            <div
              className="stream-bar"
              style={{ "--i": "9" } as React.CSSProperties}
            ></div>
          </div>

          <div className="input-corners">
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>
          </div>
        </div>
      </div>
    </>
  );
}
