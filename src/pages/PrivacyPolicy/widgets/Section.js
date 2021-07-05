function Section(params) {
  return (
    <div className="privacy-policy-section">
      <h2>
        {params.number}. {params.title}
      </h2>
      <pre>{params.text}</pre>
      <br />
    </div>
  );
}

export default Section;
