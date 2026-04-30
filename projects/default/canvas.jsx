function TemplateStart({ id }) {
  return (
    <main className="dc-screen" data-agent-id={`${id}.screen`}>
      <section className="dc-screen-body" data-agent-id={`${id}.body`}>
        <span className="screen-kicker" data-agent-id={`${id}.kicker`}>Template</span>
        <h1 className="screen-heading" data-agent-id={`${id}.headline`}>Start here</h1>
        <p className="screen-copy" data-agent-id={`${id}.copy`}>
          Replace this single artboard with the screens, variants, or flow for the project.
        </p>
      </section>
    </main>
  );
}

window.DesignProject = {
  title: "Clean Template",
  subtitle: "One empty starter artboard. Add only what the project needs.",
  file: "canvas.jsx",
  render({ DCSection, DCArtboard }) {
    return (
      <DCSection id="start" title="Start" note="Clean project template" x={120} y={110}>
        <DCArtboard id="template-start" label="Starter" note="Replace me" x={0} y={0} width={390} height={520} tone={184}>
          <TemplateStart id="template-start" />
        </DCArtboard>
      </DCSection>
    );
  }
};
