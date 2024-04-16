export const Title = (props: { title: string }) => {
  return (
    <div className="header">
      <div className="container">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};
