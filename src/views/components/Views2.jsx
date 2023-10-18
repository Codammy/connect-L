export function History() {
    const values = Array(10).fill("id");
    return (
      <div className="people">
        {values.map((val, i) => {
          return <section key={val + i++} className="history"></section>;
        })}
      </div>
    );
  }