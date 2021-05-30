import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
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
        }, 1500)();
    }, [allData]);

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
                <CoinChart/>
            </div>
        </div>
    )
}

export default React.memo(CoinAPI);
