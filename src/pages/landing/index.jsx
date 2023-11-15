import { FlexBox, LandingBox, LandingBoxBottom, LandingComponent } from "./style";
import boxBackgroundImg from "../../assets/landing/boxBackgroundImg.png";
import boxBottomBackgroundImg from "../../assets/landing/boxBottomBackgroundImg.png";
import phoneImg1 from "../../assets/landing/phoneImg1.png";
import phoneImg2 from "../../assets/landing/phoneImg2.png";
import phoneImg3 from "../../assets/landing/phoneImg3.png";
import { FillButton } from "../../components/button";
import { Link } from "react-router-dom";

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
      <LandingBox backgroundColor="#ffeff5">
        <div className="commonBoxContent">
          <img src={phoneImg1} alt="phoneIng1" />
          <div className="textBox">
            <p>매일 생기는</p>
            <p>오늘의 대화친구</p>
            <p>오늘의 인연</p>
          </div>
        </div>
      </LandingBox>
      <LandingBox backgroundColor="#d8f6ff">
        <div className="commonBoxContent">
          <div className="textBox" style={{ textAlign: "left" }}>
            <p>다양한 친구들과</p>
            <p>대화해보세요</p>
            <p>1:1 대화방</p>
          </div>
          <img src={phoneImg2} alt="phoneIng2" />
        </div>
      </LandingBox>
      <LandingBox backgroundColor="fff">
        <div className="commonBoxContent">
          <img src={phoneImg3} alt="phoneIng3" />

          <div className="textBox">
            <p>다양한 친구를</p>
            <p>매일 소개해줘요</p>
            <p>오늘의 친구</p>
          </div>
        </div>
      </LandingBox>
      <LandingBoxBottom
        gradient="linear-gradient(180deg, #FFF 0%, #B7D1E4 57.81%, #94BAD8 69.31%, #70A0C4 84.85%, #6899C2 92.28%, #5D8DBd 100%)"
        marginTop="16px"
      >
        <div className="footerContent">
          <div className="logo">
            <p>오팔</p>
            <p>청춘</p>
          </div>
          <div className="text">
            <p>오팔청춘에서</p>
            <p>울타리가 될 친구들을</p>
            <p>찾아드릴게요</p>
          </div>
        </div>
      </LandingBoxBottom>
      <LandingBoxBottom backgroundImg={boxBottomBackgroundImg} marginTop="-1px">
        <FlexBox style={{ alignItems: "flex-end", height: "100%" }}>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <FillButton
              backgroundColor="rgba(255, 167, 167, 0.93)"
              style={{ marginBottom: "35px" }}
            >
              오팔청춘 시작하기
            </FillButton>
          </Link>
        </FlexBox>
      </LandingBoxBottom>
    </LandingComponent>
  );
};

export default Landing;
