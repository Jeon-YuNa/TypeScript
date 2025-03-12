type DetailCenterProps = {
  imgUrl: string;
};
const DetailCenter = ({ imgUrl }: DetailCenterProps) => {
  return (
    <div className="center">
      <h4>차량 정보</h4>
      <img style={{ width: "100%" }} src={imgUrl} alt="" />
    </div>
  );
};

export default DetailCenter;
