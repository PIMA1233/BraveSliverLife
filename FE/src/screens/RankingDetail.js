import React, { useEffect, useState } from "react";
import "./RankingDetail.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ChartClosureRates from "../components/ChartClosureRates.js";
import ChartFranchiseeCount from "../components/ChartFranchiseeCount";
import ChartCount from "../components/ChartCount";
import NotFound from "./NotFound.js";
import logo from "../assets/images/mainlogo.svg";
import dummy from "../assets/images/dummy-img.png";

function RankingDetail() {
  const [info, setInfo] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  // const getBrandDetail = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://k7c208.p.ssafy.io/api/v1/franchise/franchise-detail",
  //       { params: { id: id } }
  //     );
  //     setInfo(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    // getBrandDetail();
    axios({
      url: "https://k7c208.p.ssafy.io/api/v1/franchise/franchise-detail",
      method: "get",
      params: { id: id }
    })
      .then(res => {
        setInfo(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div id="rankingdetail">
      {!info?.name ? (
        <NotFound />
      ) : (
        <div className="rankingdetail-container">
          <div className="ranking-header">
            <div className="header__circle-in" onClick={goHome}>
              <img src={logo} alt="logo" className="circle-logo" />
            </div>
            <div className="img-wrapper">
              {!info?.logoUrl ? (
                <img src={dummy} alt="dummylogo" />
              ) : (
                <img src={info?.logoUrl} alt="logo" />
              )}
            </div>
            <div className="info-menu">
              <div className="title">λΈλλλͺ : {info?.name}</div>
              <div className="monthly-sale">
                νκ·  μ΄ λ§€μΆμ‘ : {info?.monthlySales.toString().substr(0, 4)}
                λ§μ
              </div>
              <div className="total-cost">
                νκ·  μ°½μ μ΄ λΉμ© :
                {info?.initialCost.total.toString().substr(0, 4)}
                λ§μ
              </div>
            </div>
          </div>
          <hr />
          <div className="rankingdetail-body">
            <div className="chartclosurerates">
              <p>λΈλλμ νμ λ₯  μ΅κ·Ό 5κ°λ μΆμ΄</p>
              {<ChartClosureRates info={info} />}
            </div>
            <div className="chartfranchiseecount">
              <p>λΈλλμ μ ν¬ μ λ³ν</p>
              {<ChartFranchiseeCount info={info} />}
            </div>
            <div className="chartcount">
              <p>λΈλλμ κ°μ  μ λ° νμ  μ μΆμ΄</p>
              {<ChartCount info={info} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RankingDetail;
