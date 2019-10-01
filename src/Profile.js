import React, { Component } from 'react';
import { Col } from 'reactstrap';

export default class Profile extends Component {
    render(){
        const age = calcAge();
        return(
            <Col>
                <h1>Profile</h1>
                <div className="textarea">
                    <p>名前 : 恩田　祥太朗</p>
                    <p>{"Age : "+age}</p>
                    <p>職務経歴 : 2015年に大学卒業後、大手化学メーカーの工場に作業員として約3年勤務
                       その後退職し、土木関係の企業に1年間、総務部の事務員として働き退職。現在求職中。</p>
                    <p>勉強中・勉強した : Javascript React.js Redux Next.js</p>
                </div>
            </Col>
        );
    }
}

function calcAge() {
    const myBirthday = {
        year: 1991,
        month: 10,
        date: 3
    };

    // 誕生日と今日の日付を引き算して算出
    const birthDate = new Date(myBirthday.year, myBirthday.month - 1, myBirthday.date);
    const today = new Date();
    const day1 = today.getFullYear().toString().padStart(4, '0') + (today.getMonth() + 1).toString().padStart(2, '0') + today.getDate().toString().padStart(2, '0');
    const day2 = birthDate.getFullYear().toString().padStart(4, '0') + (birthDate.getMonth() + 1).toString().padStart(2, '0') + birthDate.getDate().toString().padStart(2, '0');
    const age = Math.floor((Number(day1) - Number(day2)) / 10000);

    return age;
}