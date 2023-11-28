/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  EmailSignupTotalComponent,
  FileInput,
  FlexBox,
  FlexLabel,
  GridBox,
  ImgBox,
  ImgText,
  IsSizeTextLabel,
  Logo,
  NextButton,
  TextInput,
  TextLabel,
} from "./style";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FillButton } from "../../components/Button";
import KakaoMap from "./KakaoMap";
import UserImg from "../../assets/signup/User.png";

const FirstAdditionSignup = () => {
  const navigate = useNavigate();
  const [is, setIs] = useState({
    isName: false,
    isGender: false,
    isBirth: false,
    isNickname: false,
    isIntroduction: false,
    isMarriage: false,
    isChildren: false,
    isJob: false,
    isAddress: false,
  });

  const [mapToggle, setMapToggle] = useState(false);

  const handleMapToggle = () => {
    setMapToggle(!mapToggle);
  };

  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState({
    ...state.userInfo,
    nickname: "",
    memberName: "",
    gender: "",
    job: "",
    introduction: "",
    locationEnabled: false,
    birth: "",
    maritalStatus: "",
    hasChildren: "",
    latitude: "",
    longitude: "",
    address: "",
    imgUrl: UserImg,
  });

  const { memberName, birth, nickname, introduction, job, address } = userInfo;

  const handleChangeName = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    if (value === "") {
      setIs({
        ...is,
        isName: false,
      });
    } else {
      setIs({
        ...is,
        isName: true,
      });
    }
  };
  const handleClickGender = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      gender: value === "남성" ? "MALE" : "FEMALE",
    });
    setIs({
      ...is,
      isGender: true,
    });
  };
  const handleChangeBirth = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    if (value === "") {
      setIs({
        ...is,
        isBirth: false,
      });
    } else {
      setIs({
        ...is,
        isBirth: true,
      });
    }
  };
  const handleChangeNickname = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    if (value === "") {
      setIs({
        ...is,
        isNickname: false,
      });
    } else {
      setIs({
        ...is,
        isNickname: true,
      });
    }
  };
  const handleChangeIntroduction = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    if (value === "") {
      setIs({
        ...is,
        isIntroduction: false,
      });
    } else {
      setIs({
        ...is,
        isIntroduction: true,
      });
    }
  };
  const handleClickMarriage = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      maritalStatus: value === "기혼" ? "MARRIED" : value === "미혼" ? "SINGLE" : "DIVORCED",
    });
    setIs({
      ...is,
      isMarriage: true,
    });
  };
  const handleClickChildren = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      hasChildren: value === "있음" ? "YES" : "NO",
    });
    setIs({
      ...is,
      isChildren: true,
    });
  };
  const handleChangeJob = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    if (value === "") {
      setIs({
        ...is,
        isJob: false,
      });
    } else {
      setIs({
        ...is,
        isJob: true,
      });
    }
  };

  const setPreviewImg = (event) => {
    var reader = new FileReader();
    reader.onload = function (event) {
      setUserInfo({
        ...userInfo,
        imgUrl: event.target.result,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const nextAdditionMove = () => {
    if (!is.isName) {
      alert("이름을 입력해주세요.");
    } else if (!is.isGender) {
      alert("성별을 선택해주세요.");
    } else if (!is.isBirth) {
      alert("생년월일을 적어주세요.");
    } else if (!is.isAddress) {
      alert("거주지를 선택해주세요.");
    } else if (!is.isNickname) {
      alert("활동명을 적어주세요.");
    } else if (!is.isIntroduction) {
      alert("간단한 소개글을 적어주세요.");
    } else if (!is.isMarriage) {
      alert("결혼여부를 선택해주세요.");
    } else if (!is.isChildren) {
      alert("자녀유무를 선택해주세요.");
    } else if (!is.isJob) {
      alert("직장을 적어주세요.");
    } else {
      navigate("/signup/nextAdditionInfo", { state: { userInfo: userInfo } });
    }
  };

  return (
    <EmailSignupTotalComponent>
      {mapToggle ? (
        <KakaoMap
          handleMapToggle={handleMapToggle}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          is={is}
          setIs={setIs}
        />
      ) : (
        <>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>
              <div className="logo">
                <p>오팔</p>
                <p>청춘</p>
              </div>
            </Logo>
          </Link>
          <div>
            <TextLabel margin="32px 0px 0px 0px">반갑습니다!</TextLabel>
            <TextLabel>회원님의 정보를 알려주세요.</TextLabel>
          </div>
          <FlexBox margin="42px 0px 0px 0px" style={{ alignSelf: "flex-start" }}>
            <IsSizeTextLabel fontSize="18px" margin="0px 0px 0px 30px">
              이름
            </IsSizeTextLabel>
            <TextInput
              autoComplete="off"
              fontSize="18px"
              width="178px"
              height="32px"
              placeholder="이름을 입력하세요."
              name="memberName"
              value={memberName}
              onChange={handleChangeName}
            />
          </FlexBox>
          <FlexBox margin="35px 0px 0px 0px" style={{ alignSelf: "flex-start" }}>
            <IsSizeTextLabel fontSize="18px" margin="0px 0px 0px 30px">
              성별
            </IsSizeTextLabel>
            {userInfo.gender === "MALE" ? (
              <FillButton
                color="#fff"
                backgroundColor="#FFA7A7"
                borderRadius="4px"
                width="95px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                onClick={handleClickGender}
                value="남성"
              >
                남성
              </FillButton>
            ) : (
              <FillButton
                color="#1E1E1E"
                backgroundColor="#fff"
                borderRadius="4px"
                width="95px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                onClick={handleClickGender}
                value="남성"
              >
                남성
              </FillButton>
            )}
            {userInfo.gender === "FEMALE" ? (
              <FillButton
                color="#fff"
                backgroundColor="#FFA7A7"
                borderRadius="4px"
                width="95px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                margin="0px 0px 0px 13px"
                onClick={handleClickGender}
                value="여성"
              >
                여성
              </FillButton>
            ) : (
              <FillButton
                color="#1E1E1E"
                backgroundColor="#fff"
                borderRadius="4px"
                width="95px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                margin="0px 0px 0px 13px"
                onClick={handleClickGender}
                value="여성"
              >
                여성
              </FillButton>
            )}
          </FlexBox>
          <FlexBox margin="35px 0px 0px 0px" style={{ alignSelf: "flex-start" }}>
            <IsSizeTextLabel fontSize="18px" margin="0px 0px 0px 30px">
              생년월일
            </IsSizeTextLabel>
            <TextInput
              autoComplete="off"
              fontSize="18px"
              width="178px"
              height="32px"
              placeholder="주민번호 앞자리 입력."
              name="birth"
              value={birth}
              onChange={handleChangeBirth}
            />
          </FlexBox>
          <FlexBox margin="35px 0px 0px 0px" style={{ alignSelf: "flex-start" }}>
            <IsSizeTextLabel fontSize="18px" margin="0px 0px 0px 30px">
              거주지
            </IsSizeTextLabel>

            <TextInput
              autoComplete="off"
              fontSize="18px"
              width="178px"
              height="32px"
              placeholder="거주지 선택 (클릭) "
              name="address"
              value={address}
              onClick={handleMapToggle}
            />
          </FlexBox>
          <FlexBox margin="35px 0px 0px 0px" style={{ alignSelf: "flex-start" }}>
            <IsSizeTextLabel fontSize="18px" margin="0px 0px 0px 30px">
              활동명
            </IsSizeTextLabel>
            <TextInput
              autoComplete="off"
              fontSize="18px"
              width="178px"
              height="32px"
              placeholder="닉네임을 입력하세요."
              name="nickname"
              value={nickname}
              onChange={handleChangeNickname}
            />
          </FlexBox>
          <FlexBox margin="35px 0px 0px 0px" style={{ alignSelf: "flex-start" }}>
            <IsSizeTextLabel fontSize="18px" margin="0px 0px 0px 30px">
              자기소개
            </IsSizeTextLabel>
            <TextInput
              autoComplete="off"
              fontSize="18px"
              width="178px"
              height="32px"
              placeholder="간단한 자기소개"
              name="introduction"
              value={introduction}
              onChange={handleChangeIntroduction}
            />
          </FlexBox>
          <FlexBox margin="35px 0px 0px 0px" style={{ alignSelf: "flex-start" }}>
            <IsSizeTextLabel fontSize="18px" margin="0px 0px 0px 30px">
              결혼여부
            </IsSizeTextLabel>
            {userInfo.maritalStatus === "MARRIED" ? (
              <FillButton
                color="#fff"
                backgroundColor="#FFA7A7"
                borderRadius="4px"
                width="60px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                onClick={handleClickMarriage}
                value="기혼"
              >
                기혼
              </FillButton>
            ) : (
              <FillButton
                color="#1E1E1E"
                backgroundColor="#fff"
                borderRadius="4px"
                width="60px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                onClick={handleClickMarriage}
                value="기혼"
              >
                기혼
              </FillButton>
            )}
            {userInfo.maritalStatus === "SINGLE" ? (
              <FillButton
                color="#fff"
                backgroundColor="#FFA7A7"
                borderRadius="4px"
                width="60px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                margin="0px 0px 0px 10px"
                onClick={handleClickMarriage}
                value="미혼"
              >
                미혼
              </FillButton>
            ) : (
              <FillButton
                color="#1E1E1E"
                backgroundColor="#fff"
                borderRadius="4px"
                width="60px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                margin="0px 0px 0px 10px"
                onClick={handleClickMarriage}
                value="미혼"
              >
                미혼
              </FillButton>
            )}
            {userInfo.maritalStatus === "DIVORCED" ? (
              <FillButton
                color="#fff"
                backgroundColor="#FFA7A7"
                borderRadius="4px"
                width="60px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                margin="0px 0px 0px 10px"
                onClick={handleClickMarriage}
                value="기타"
              >
                기타
              </FillButton>
            ) : (
              <FillButton
                color="#1E1E1E"
                backgroundColor="#fff"
                borderRadius="4px"
                width="60px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                margin="0px 0px 0px 10px"
                onClick={handleClickMarriage}
                value="기타"
              >
                기타
              </FillButton>
            )}
          </FlexBox>
          <FlexBox margin="35px 0px 0px 0px" style={{ alignSelf: "flex-start" }}>
            <IsSizeTextLabel fontSize="18px" margin="0px 0px 0px 30px">
              자녀여부
            </IsSizeTextLabel>
            {userInfo.hasChildren === "YES" ? (
              <FillButton
                color="#fff"
                backgroundColor="#FFA7A7"
                borderRadius="4px"
                width="95px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                onClick={handleClickChildren}
                value="있음"
              >
                있음
              </FillButton>
            ) : (
              <FillButton
                color="#1E1E1E"
                backgroundColor="#fff"
                borderRadius="4px"
                width="95px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                onClick={handleClickChildren}
                value="있음"
              >
                있음
              </FillButton>
            )}
            {userInfo.hasChildren === "NO" ? (
              <FillButton
                color="#fff"
                backgroundColor="#FFA7A7"
                borderRadius="4px"
                width="95px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                margin="0px 0px 0px 13px"
                onClick={handleClickChildren}
                value="없음"
              >
                없음
              </FillButton>
            ) : (
              <FillButton
                color="#1E1E1E"
                backgroundColor="#fff"
                borderRadius="4px"
                width="95px"
                height="32px"
                fontSize="18px"
                boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
                margin="0px 0px 0px 13px"
                onClick={handleClickChildren}
                value="없음"
              >
                없음
              </FillButton>
            )}
          </FlexBox>
          <FlexBox margin="35px 0px 0px 0px" style={{ alignSelf: "flex-start" }}>
            <IsSizeTextLabel fontSize="18px" margin="0px 0px 0px 30px">
              직업
            </IsSizeTextLabel>
            <TextInput
              autoComplete="off"
              fontSize="18px"
              width="178px"
              height="32px"
              placeholder="직업을 입력해주세요."
              name="job"
              value={job}
              onChange={handleChangeJob}
            />
          </FlexBox>
          <FlexBox margin="35px 0px 0px 0px" style={{ alignSelf: "flex-start" }}>
            <IsSizeTextLabel fontSize="18px" margin="0px 0px 0px 30px">
              이미지(선택)
            </IsSizeTextLabel>
            <FlexLabel htmlFor="profileImg">
              <ImgBox alt="사진" src={userInfo.imgUrl} />
              <FileInput type="file" id="profileImg" accept="image/*" onChange={setPreviewImg} />
              <ImgText>프로필 이미지 첨부하기</ImgText>
            </FlexLabel>
          </FlexBox>

          {is.isName &&
          is.isGender &&
          is.isBirth &&
          is.isAddress &&
          is.isNickname &&
          is.isIntroduction &&
          is.isMarriage &&
          is.isChildren &&
          is.isJob ? (
            <NextButton
              backgroundColor="#FFA7A7"
              onClick={nextAdditionMove}
              margin="43px 0px 41px 0px"
            >
              다음
            </NextButton>
          ) : (
            <NextButton
              backgroundColor="#8a8a8a"
              onClick={nextAdditionMove}
              margin="43px 0px 41px 0px"
            >
              다음
            </NextButton>
          )}
        </>
      )}
    </EmailSignupTotalComponent>
  );
};

export default FirstAdditionSignup;
