import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="image-container">
      <img
        src="/images/not-found.svg"
        alt="Error 404: Página no encontrada (diseño de una pokeball en el número 0)"
        className="not-found"
        width={450}
        height={250}
      />
    </div>
  );
};

export default NotFoundPage;
