export const Block = (props: { title: string }) => {
  return (
    <div className="container">
      <h2 className="gradient">{props.title}</h2>
    </div>
  );
};
