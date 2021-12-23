const LittleSquare = (child) => {
  return (
    <a href={child.link} className="border-custom">
      <h3 className="post-owner text-2xl font-bold">{child.title}</h3>
      <p className="post-text">
        {child.content}
      </p>
    </a>
  );
};

export default LittleSquare;