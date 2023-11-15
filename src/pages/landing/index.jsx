import { LandingBox, LandingBoxBottom, LandingComponent } from "./style";
import boxBackgroundImg from "../../assets/landing/boxBackgroundImg.png";
import boxBottomBackgroundImg from "../../assets/landing/boxBottomBackgroundImg.png";

/* eslint-disable react/react-in-jsx-scope */
const Landing = () => {
  return (
    <LandingComponent>
      <LandingBox backgroundImg={boxBackgroundImg} marginTop={"80px"}>
        <div className="firstBoxContent">
          <p>친구를 만들고 싶은데 어디서</p>
          <p>만들어야 할지 모르겠어요</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>다들 어디서 그렇게 만나는지...</p>
        </div>
      </LandingBox>
      <LandingBox backgroundColor="#ffeff5"></LandingBox>
      <LandingBox backgroundColor="#d8f6ff"></LandingBox>
      <LandingBox backgroundColor="fff"></LandingBox>
      <LandingBoxBottom
        gradient="linear-gradient(180deg, #FFF 0%, #B7D1E4 57.81%, #94BAD8 69.31%, #70A0C4 84.85%, #6899C2 92.28%, #5D8DBd 100%)"
        marginTop="16px"
      ></LandingBoxBottom>
      <LandingBoxBottom backgroundImg={boxBottomBackgroundImg} marginTop="-1px"></LandingBoxBottom>
    </LandingComponent>
  );
};

export default Landing;
