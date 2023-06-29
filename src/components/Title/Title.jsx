import CardItem from "../Item/Item";

const Title = ({ title }) => {
  return (
    <div className="title-container">
      <div className="pt-20 md:flex justify-center title-subcontainer text-center">
        <h1 className="mb-40 title-h1">{title}</h1>
      </div>
    </div>
  );
};

export default Title;
