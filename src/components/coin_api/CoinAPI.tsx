import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
//import { Bar } from 'react-chartjs-2';
import CoinChart from './chart/CoinChart';

const bitsum_url = "https://api.bithumb.com/public/ticker/{order_currency}_{payment_currency}";
let reqURL_krw : string = bitsum_url;
reqURL_krw = reqURL_krw.replace("{order_currency}", "all");
reqURL_krw = reqURL_krw.replace("{payment_currency}", "KRW");

function CoinAPI() {
    const [allData, setAllData] = useState({
        acc_trade_value: "",
        acc_trade_value_24H: "",
        closing_price: "",
        fluctate_24H: "",
        fluctate_rate_24H: "",
        max_price: "",
        min_price: "",
        opening_price: "",
        prev_closing_price: "",
        units_traded: "",
        units_traded_24H: ""
    });

    useEffect(() => {
        debounce(async () => {
            const response = await axios.get(reqURL_krw)
                .then(response => response.data.data.BTC)
                .catch(err => err);
            setAllData({
                acc_trade_value: response["acc_trade_value"],
                acc_trade_value_24H: response["acc_trade_value_24H"],
                closing_price: response["closing_price"],
                fluctate_24H: response["fluctate_24H"],
                fluctate_rate_24H: response["fluctate_rate_24H"],
                max_price: response["max_price"],
                min_price: response["min_price"],
                opening_price: response["opening_price"],
                prev_closing_price: response["prev_closing_price"],
                units_traded: response["units_traded"],
                units_traded_24H: response["units_traded_24H"]
            });
        }, 10000)();
    }, [allData]);

    // const label = ['시가', '종가', '변동가(24H)', '변동률(24H)', '최고가', '최저가'];
    // const data = {
    //     labels: label,
    //     datasets: [
    //       {
    //         label: 'BTC',
    //         backgroundColor: 'rgba(255,99,132,0.2)',
    //         borderColor: 'rgba(255,99,132,1)',
    //         borderWidth: 1,
    //         hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    //         hoverBorderColor: 'rgba(255,99,132,1)',
    //         data: [
    //                 allData.opening_price, 
    //                 allData.closing_price, 
    //                 allData.fluctate_24H,
    //                 allData.fluctate_rate_24H, 
    //                 allData.max_price, 
    //                 allData.min_price
    //             ]
    //       }
    //     ]
    // };

    return (
        <div>
            비트코인
            <br/>거래금액: {allData.acc_trade_value},
            <br/>최근 24시간 거래금액: {allData.acc_trade_value_24H},
            <br/>시가(00시 기준): {allData.opening_price},
            <br/>종가(00시 기준) : {allData.closing_price},
            <br/>최근 24시간 변동가: {allData.fluctate_24H},
            <br/>최근 24시간 변동률: {allData.fluctate_rate_24H},
            <br/>최고가(00시 기준): {allData.max_price},
            <br/>최소가(00시 기준): {allData.min_price},
            <br/>전일종가: {allData.prev_closing_price},
            <br/>거래량: {allData.units_traded},
            <br/>최근24시간 거래량: {allData.units_traded_24H}
            <br/><a href="/"><button>뒤로 가기</button></a>
            <br/><a href="coin_history"><button>history</button></a>
            <br/>
            <br/>
            <br/>
            <div>
                {/* type :  'line' | 'bar' | 'horizontalBar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter' */}
                {/* <Bar
                    type='bar'
                    data={data}
                    width={100}
                    height={500}
                    options={{
                        maintainAspectRatio: false,
                        Plugin:{
                            legend: { 
                                position: 'top'
                            },
                            title : {
                                display : true,
                                text : "test"
                            }
                        }
                    }}
                /> */}
                <CoinChart/>
            </div>
        </div>
    )
}

export default React.memo(CoinAPI);
